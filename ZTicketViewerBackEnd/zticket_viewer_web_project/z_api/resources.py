"""
PLEASE NOTE:
There are a number of classes below that have only class methods at the moment. This is because the coding challenge
requires only to retrieve data from the api and not do any complex updating/creating operations. The design of the
classes below allow us to easily support more complicated operations in the future which would inevitably utilise
instance methods.
"""

from .request_manager import ZCoreRequestManager


def get_related_resources(resource_map, resource_data, main_resource_name):
    """
    Zendesk data can return sideloaded resources in the form of arrays next to the actual requested resource. For
    instance, requesting a list of tickets (in an array) can also include the related users in another separate array.
    As such, the requested resource will have keys that have id values mapping to objects in the sideloaded data arrays.
    We must lookup these ids in the sideloaded resource arrays to get the relevant sideloaded object. This function aims
    to retrieve these sideloaded data and then use this data to create their associated objects with defined classes
    in z_api package.

    Eg. Requesting tickets with related users sideloaded.
    {
        "tickets": [
            {
                "id": 1,
                "type": null,
                "created_at: "...",
                ...
                ...
                "requester_id": 20 <-- this is an id that maps to a sideloaded object in the users array.
            },
            ...
            ...
        ],
        "users": [
            {
                "id": 11,
                "name": "John Smith",
                ...
                ...
            },
            {
                "id": 20,
                "name": "Dan Jones",
                ...
                ...
            }
        ]
    }

    :return: array of sideloaded objects (the type of each element depends on the resource_map).
    :param resource_map: a list of tuples in the form of (key, sideloaded_array_name, z_api.ResourceClass). The key
    refers to the key in the requested resource that has a value mapping to a sideloaded object. sideloaded_array_name
    tells where to locate the key's sideloaded object. z_api.ResourceClass specifies which class should be used to
    create an object out of the sideloaded data.
    :param resource_data: received Zendesk's api data.
    :param main_resource_name: specifies which resource in the given resource_data is not sideloaded and was requested.
    """

    side_loaded_objs = [None for i in range(len(resource_map))]
    for i in range(len(resource_map)):
        id = resource_data.get(main_resource_name).get(resource_map[i][0], None)

        side_resources = resource_data.get(resource_map[i][1], [])

        for resource in side_resources:
            if id and resource.get("id", None) == id:
                if resource_map[i][2]:
                    # Create the object using the class specified and side loaded data.
                    side_loaded_objs[i] = resource_map[i][2].deserialize_api_data(resource)
                else:
                    side_loaded_objs[i] = resource
                break
    return side_loaded_objs


class ZResource:
    """
    Represents a common resource defined by Zendesk. This class is responsible for serializing itself and
    deserializing data from the Zendesk api into itself. Each Zendesk resource should be a subclass of this
    class.

    To see all resources: https://developer.zendesk.com/rest_api/docs/core/introduction
    """

    def serialize(self):
        """
        Takes all the instance attributes of this object and puts them into a dictionary.
        The method will go through nested levels (eg. serialize attributes that have objects defined by another ZResource class)
        to ensure the dictionary can be converted into a JSON string.
        :return: dict (JSON format),
        """

        data = {}
        for key, value in self.__dict__.items():
            if isinstance(value, ZResource):
                value = value.serialize()
            elif isinstance(value, list):
                value = [obj.serialize() for obj in value]
            data[key] = value
        return data

    @classmethod
    def deserialize_api_data(cls, resource_data):
        NotImplementedError("Class {cls_name} doesn't implement deserialize_api_data()".format(cls_name=cls.__name__))


class ZTicket(ZResource):
    """
    Responsible for managing the ticket resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/tickets

    Essentially, the class should implement all actions possible on the Ticket resource
    by constructing the relevant urls and processing the response from these urls.

    For this project, the "List Tickets" (https://developer.zendesk.com/rest_api/docs/core/tickets#list-tickets)
    and "Show Ticket" (https://developer.zendesk.com/rest_api/docs/core/tickets#show-ticket) actions have been supported.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def show_ticket(cls, id=None):
        """
        This will show the details of a Zendesk ticket (eg. subject, description, requestor etc.) and instantiate
        an object of this class with the given ticket data.
        :return: ZTicket object
        :param id: ticket id
        """

        request_mgr = ZCoreRequestManager()

        api_url = "tickets/{id}.json".format(id=id)
        query_params = {
            "include": "users"
        }

        response = request_mgr.get(api_url=api_url, query_params=query_params)

        # Create the ticket object populating with the given json data.
        return ZTicket.deserialize_api_data(response)

    @classmethod
    def list_tickets(cls, page_num=1):
        """
        This will bulk list all the tickets and their relevant details found in the Zendesk servers.
        :return: list of ZTicket objects and total records found in Zendesk servers.
        :param page_num: the page of tickets needed to be returned.
        """

        request_mgr = ZCoreRequestManager()

        api_url = "tickets.json"
        query_params = {
            "include": "users",
            "per_page": 25,
            "page": page_num,
            "sort_by": "created_at",
            "sort_order": "desc"
        }

        response = request_mgr.get(api_url=api_url, query_params=query_params)

        tickets = []

        # Create list of ZTicket objects.
        tickets_data = response.pop("tickets", [])
        for single_ticket_data in tickets_data:
            response["ticket"] = single_ticket_data
            tickets.append(ZTicket.deserialize_api_data(response))

        return tickets, response.get("count", 0)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        """
        This will create a ZTicket object out of the given resource data from Zendesk servers.
        This method also accepts sideloaded data inside the resource data and will create their ZResource
        objects if necessary.
        :return: ZTicket object
        :param resource_data: dict (must start as { "ticket": {...ticket object...}, ... }
        """

        resource_map = [
            ("requester_id", "users", ZUser),
            ("submitter_id", "users", ZUser),
            ("assignee_id", "users", ZUser),
        ]

        side_loaded_objs = get_related_resources(resource_map, resource_data, "ticket")

        ticket_data = {
            "id": resource_data.get("ticket").get("id", None),
            "channel": resource_data.get("ticket").get("via").get("channel", None),
            "created_at": resource_data.get("ticket").get("created_at", None),
            "type": resource_data.get("ticket").get("type", None),
            "subject": resource_data.get("ticket").get("raw_subject", None),
            "description": resource_data.get("ticket").get("description", None),
            "priority": resource_data.get("ticket").get("priority", None),
            "status": resource_data.get("ticket").get("status", None),
            "requester": side_loaded_objs[0],
            "submitter": side_loaded_objs[1],
            "assignee": side_loaded_objs[2],
        }

        return ZTicket(**ticket_data)


class ZComment(ZResource):
    """
    Responsible for managing the comment resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/ticket_comments

    Essentially, the class should implement all actions possible on the Comments resource
    by constructing the relevant urls and processing the response from these urls.

    For this project, the "List Comments" (https://developer.zendesk.com/rest_api/docs/core/ticket_comments#list-comments)
    action is supported.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def list_comments(cls, ticket_id=None, page_num=1):
        """
        This will bulk list all the ticket comments (conversation) for a given ticket.
        :return: list of ZComment objects and total records found in Zendesk servers.
        :param ticket_id: the ticket that will be used to get the associated comments.
        :param page_num: the page of comments needed to be returned.
        """

        request_mgr = ZCoreRequestManager()

        api_url = "tickets/{id}/comments.json".format(id=ticket_id)
        query_params = {
            "include": "users",
            "per_page": 5,
            "page": page_num,
            "sort_by": "created_at",
            "sort_order": "desc"
        }

        response = request_mgr.get(api_url=api_url, query_params=query_params)

        comments = []

        # Create list of ZComment objects.
        comments_data = response.pop("comments", [])
        for single_comment_data in comments_data:
            response["comment"] = single_comment_data
            comments.append(ZComment.deserialize_api_data(response))

        return comments, response.get("count", 0)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        """
        This will create a ZComment object out of the given resource data from Zendesk servers.
        This method also accepts sideloaded data inside the resource data and will create their ZResource
        objects if necessary.
        :return: ZComment object
        :param resource_data: dict (must start as { "comment": {...ticket object...}, ... }
        """

        resource_map = [
            ("author_id", "users", ZUser),
        ]
        side_loaded_objs = get_related_resources(resource_map, resource_data, "comment")

        attachments = []
        for attachment_data in resource_data.get("comment").get("attachments", []):
            attachments.append(ZAttachment.deserialize_api_data(attachment_data))

        comment_data = {
            "id": resource_data.get("comment").get("id", None),
            "type": resource_data.get("comment").get("type", None),
            "author": side_loaded_objs[0],
            "body": resource_data.get("comment").get("plain_body", None),
            "attachments": attachments,
            "channel": resource_data.get("comment").get("via").get("channel", None),
            "created_at": resource_data.get("comment").get("created_at", None),
        }

        return ZComment(**comment_data)


class ZUser(ZResource):
    """
    Responsible for managing the user resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/users

    Essentially, the class should implement all actions possible on the Users resource
    by constructing the relevant urls and processing the response from these urls.

    For this project, no particular actions were supported as this class was used only for sideloaded
    data.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        """
        This will create a ZUser object out of the given resource data from Zendesk servers.
        :return: ZUser object
        :param resource_data: dict
        """

        user_data = {
            "id": resource_data.get("id", None),
            "name": resource_data.get("name", None),
            "email": resource_data.get("email", None),
            "created_at": resource_data.get("created_at", None),
            "phone": resource_data.get("phone", None),
            "shared_phone_number": resource_data.get("shared_phone_number", None),
            "role": resource_data.get("role", None),
        }

        if resource_data.get("photo", None):
            user_data["photo"] = resource_data.get("photo").get("content_url", None)
        else:
            user_data["photo"] = None

        return ZUser(**user_data)


class ZAttachment(ZResource):
    """
    Responsible for managing the attachment resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/attachments

    Essentially, the class should implement all actions possible on the Attachments resource
    by constructing the relevant urls and processing the response from these urls.

    For this project, no particular actions were supported as this class was used only for sideloaded
    data.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        """
        This will create a ZAttachment object out of the given resource data from Zendesk servers.
        :return: ZAttachment object
        :param resource_data: dict
        """

        attachment_data = {
            "id": resource_data.get("id", None),
            "content_url": resource_data.get("content_url", None),
            "content_type": resource_data.get("content_type", None)
        }
        return ZAttachment(**attachment_data)
