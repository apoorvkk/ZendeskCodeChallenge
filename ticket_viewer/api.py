import z_api


def show_ticket(ticket_id=None):
    """
    This will show the ticket json data of a given ticket id. Users, groups and organizations associated to the ticket
    are sideloaded in order to avoid making duplicate requests. These sideloaded resources are modified from an array
    to a dictionary datastructure.
    :return: dictionary (json data)
    :param ticket_id: the ticket that will be used to get the associated ticket details.
    """

    from ticket_viewer import username, password, subdomain
    ticket_mgr = z_api.ZTicketManager(subdomain=subdomain, username=username, password=password)

    ticket_query_params = {
        "include": "users,groups,organizations"
    }

    ticket_json_data = ticket_mgr.show_ticket(query_params=ticket_query_params, id=ticket_id)

    ticket_json_data["users"] = {r.pop("id"): r for r in ticket_json_data["users"]}
    ticket_json_data["groups"] = {r.pop("id"): r for r in ticket_json_data["groups"]}
    ticket_json_data["organizations"] = {r.pop("id"): r for r in ticket_json_data["organizations"]}

    return ticket_json_data


def list_tickets(page_num=1):
    """
    This will show a list of ticket and their details in json format. We limit the numbebr of tickets of each page to 25
    in order to reduce pressure on the network and meet project specification. Users, groups and organizations
    associated to the ticket are sideloaded in order to avoid making duplicate requests. These sideloaded resources are
    modified from an array to a dictionary datastructure.
    :return: dictionary (json data)
    :param page_num: allows retrieval of a set of tickets on a particular page number.
    """

    from ticket_viewer import username, password, subdomain
    ticket_mgr = z_api.ZTicketManager(subdomain=subdomain, username=username, password=password)

    ticket_query_params = {
        "include": "users,groups,organizations",
        "per_page": 25,
        "page": page_num
    }

    ticket_json_data = ticket_mgr.list_tickets(query_params=ticket_query_params)

    ticket_json_data["users"] = {r.pop("id"): r for r in ticket_json_data["users"]}
    ticket_json_data["groups"] = {r.pop("id"): r for r in ticket_json_data["groups"]}
    ticket_json_data["organizations"] = {r.pop("id"): r for r in ticket_json_data["organizations"]}

    return ticket_json_data


def list_comments(ticket_id=None, page_num=1):
    """
    This will show a list of comments and their details for a specific ticket in json format. We limit the numbebr of
    comments of each page to 10 in order to reduce pressure on the network. Users associated to the ticket are
    sideloaded in order to avoid making duplicate requests. These sideloaded resources are modified from an array to a
    dictionary datastructure.
    :return: dictionary (json data)
    :param page_num: allows retrieval of a set of comments on a particular page number.
    :param ticket_id: the ticket that will be used to get the associated comments.
    """

    from ticket_viewer import username, password, subdomain
    comment_mgr = z_api.ZCommentManager(subdomain=subdomain, username=username, password=password)

    comment_query_params = {
        "include": "users",
        "per_page": 1,
        "page": page_num
    }

    comment_json_data = comment_mgr.list_comments(query_params=comment_query_params, ticket_id=ticket_id)

    comment_json_data["users"] = {r.pop("id"): r for r in comment_json_data["users"]}

    return comment_json_data

