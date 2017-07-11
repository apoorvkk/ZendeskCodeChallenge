import zendesk_api

username = "apoorv.k.kansal@gmail.com"
password = "ZenDeskChallenge15!9793"
subdomain = "homesrus-aus"


"""
TODO
- comment + preconditions (do we need the precondition even after knowing that exception will be raised at a lower level)?
- exception handling messages
- importing auth details
- testing
"""


def show_ticket(ticket_id):
    ticket_mgr = zendesk_api.ZTicketManager(subdomain=subdomain, username=username, password=password)

    ticket_query_params = {
        "include": "users,groups,organizations"
    }

    ticket_json_data = ticket_mgr.show_ticket(query_params=ticket_query_params, id=ticket_id)

    ticket_json_data["users"] = {r.pop("id"): r for r in ticket_json_data["users"]}
    ticket_json_data["groups"] = {r.pop("id"): r for r in ticket_json_data["groups"]}
    ticket_json_data["organizations"] = {r.pop("id"): r for r in ticket_json_data["organizations"]}

    return ticket_json_data


def list_tickets(page_num=1):
    ticket_mgr = zendesk_api.ZTicketManager(subdomain=subdomain, username=username, password=password)

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


def list_comments(ticket_id, page_num=1):

    comment_mgr = zendesk_api.ZCommentManager(subdomain=subdomain, username=username, password=password)

    comment_query_params = {
        "include": "users",
        "per_page": 1,
        "page": page_num
    }

    comment_json_data = comment_mgr.list_comments(query_params=comment_query_params, ticket_id=ticket_id)

    comment_json_data["users"] = {r.pop("id"): r for r in comment_json_data["users"]}

    return comment_json_data

