class TicketManager(ZendeskRequestManager):
    '''
    Responsible for
    '''

    def __init__(self, domain, username, password):
        super().__init__(domain, username, password)

    def show_ticket(self, id):
        full_url = "{url}/tickets/{id}.json".format(url=self.url, id=id)
        resource = self._get(self, full_url)
        return resource['ticket']

    def list_tickets(self):
        full_url = "{url}/tickets.json".format(url=self.url)
        resources = self._get(full_url)
        return resources[]


class HomesRUsTicketViewer(TicketViewer):

    def __init__(self):
        super().__init__("homesrus-aus.zendesk.com", "apoorv.k.kansal@gmail.com", "ZenDeskChallenge15!9793")
