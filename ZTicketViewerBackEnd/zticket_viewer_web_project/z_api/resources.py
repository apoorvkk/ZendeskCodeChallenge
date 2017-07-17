from urllib import parse
from .request_manager import ZCoreRequestManager

"""
PLEASE NOTE:
There are a number of classes below that have only class methods at the moment. This is because the coding challenge 
requires only to retrieve data from the api and not do any complex updating/creating operations. The design of the
classes below allow us to easily support more complicated operations in the future which would inevitably utilise 
instance methods.
"""

def get_related_resources(resource_map, resource_data, main_resource_name):
    # Add assertions.
    side_loaded_objs = [None for i in range(len(resource_map))]
    for i in range(len(resource_map)):
        id = resource_data.get(main_resource_name).get(resource_map[i][0], None)

        side_resources = resource_data.get(resource_map[i][1], [])

        for resource in side_resources:
            if id and resource.get("id", None) == id:
                if resource_map[i][2]:
                    side_loaded_objs[i] = resource_map[i][2].deserialize_api_data(resource)
                else:
                    side_loaded_objs[i] = resource
                break
    return side_loaded_objs


class ZResource:

    def serialize(self):
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

    @classmethod
    def _get_paginated_page_nums(cls, resource_data):
        ####### make assertion about needing next_page and prev_page keys.
        page_nums = [None, None]
        page_keys = ["next_page", "previous_page"]

        for i, key in enumerate(page_keys):
            url = resource_data.get(page_keys[i])
            ####### exception handling for url parsing needed.
            split = parse.urlsplit(url)
            query_params = dict(parse.parse_qsl(split.query))
            page_nums[i] = query_params.get('page', None)

        return page_nums[0], page_nums[1]


class ZTicket(ZResource):
    """
    #################
    Responsible for managing the ticket resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/tickets

    Essentially, the class should implement all actions possible on the Ticket resource
    by constructing the relevant urls and making the relevant http method requests needed.

    For this project, the "List Tickets" (https://developer.zendesk.com/rest_api/docs/core/tickets#list-tickets)
    and "Show Ticket" (https://developer.zendesk.com/rest_api/docs/core/tickets#show-ticket) actions have been supported.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def get_ticket(cls, id=None):
        """
        ###############
        This will show the details of a Zendesk ticket (eg. subject, description, requestor etc.).
        :return: dict
        :param id: ticket id
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        request_mgr = ZCoreRequestManager()

        api_url = "tickets/{id}.json".format(id=id)
        query_params = {
            "include": "users,groups"
        }

        response = request_mgr.get_json_data(api_url=api_url, query_params=query_params)

        # Create the ticket object populating with the given json data.
        return ZTicket.deserialize_api_data(response)


    @classmethod
    def list_tickets(cls, page_num=1):
        """
        ###############
        This will bulk list all the tickets and their relevant details in the Zendesk API.
        :return: dict
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
        """

        request_mgr = ZCoreRequestManager()

        api_url = "tickets.json"
        query_params = {
            "include": "users,groups",
            "per_page": 25,
            "page": page_num,
            "sort_by": "created_at",
            "sort_order": "desc"
        }

        response = request_mgr.get_json_data(api_url=api_url, query_params=query_params)

        tickets = []

        tickets_data = response.pop("tickets", [])
        for single_ticket_data in tickets_data:
            response["ticket"] = single_ticket_data
            tickets.append(ZTicket.deserialize_api_data(response))
        next_page, previous_page = ZTicket._get_paginated_page_nums(response)
        return tickets, next_page, previous_page, response.get("count", 0)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        resource_map = [
            ("requester_id", "users", ZUser),
            ("submitter_id", "users", ZUser),
            ("assignee_id", "users", ZUser),
            ("group_id", "groups", None)
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
            "group": side_loaded_objs[3]
        }

        return ZTicket(**ticket_data)




class ZComment(ZResource):
    """
    ##########
    Responsible for managing the ticket resource outlined:
    https://developer.zendesk.com/rest_api/docs/core/ticket_comments

    Essentially, the class should implement all actions possible on the Comments resource
    by constructing the relevant urls and making the relevant http method requests needed.

    For this project, the "List Comments" (https://developer.zendesk.com/rest_api/docs/core/ticket_comments#list-comments)
    actions have been supported.
    """

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def list_comments(cls, ticket_id=None, page_num=1):
        """
        ##############
        This will bulk list all the ticket comments (conversation) for a given ticket in the Zendesk API.
        :return: dict
        :param ticket_id: the ticket that will be used to get the associated comments.
        :param query_params: represents any query parameters that need to be used in the request (put in dictionary form).
        Note that if multiple values map to one key, use this format: {"key": "val1,val2,val3..."}.
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

        response = request_mgr.get_json_data(api_url=api_url, query_params=query_params)

        comments = []

        comments_data = response.pop("comments", [])
        for single_comment_data in comments_data:
            response["comment"] = single_comment_data
            comments.append(ZComment.deserialize_api_data(response))

        next_page, previous_page = ZComment._get_paginated_page_nums(response)
        return comments, next_page, previous_page, response.get("count", 0)

    @classmethod
    def deserialize_api_data(cls, resource_data):
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

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def deserialize_api_data(cls, resource_data):
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

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    @classmethod
    def deserialize_api_data(cls, resource_data):
        attachment_data = {
            "id": resource_data.get("id", None),
            "content_url": resource_data.get("content_url", None),
            "content_type": resource_data.get("content_type", None)
        }
        return ZAttachment(**attachment_data)
