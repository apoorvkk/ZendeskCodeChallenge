# Zendesk Internship Coding Challenge 2017
A TickerViewer web client that allows HomesRUS (a made up company) to view their Zendesk tickets.

- Installation and how to use.
  - Mention local installation
    - This includes python venv, packages, running server.
    - Mention how you ported angular right into django project for ease of installation and that source code of angular project is in different directory.
  - Mention how to run backend tests.
  - If finished in time, mention online version.

## Summary
This coding challenge required us to create a program that allows employees of a business (particularly customer support employees) to view their customer enquiries and needs via Zendesk tickets. This meant that the program had to communicate with the Zendesk api in order to display
bulk and specific ticket details.

## Architectural Design
I created a backend REST API that communicates directly with the Zendesk API. From here, I created a web client application using Angular 4 that directly communicates with my REST api. The main advantage of this design is that in future, we can incorporate many different client applications in different environments (eg. GUI applications). The REST API supports JSON data interchange format which is very ideal as this format is well documented, human readable and very popular amongst millions of developers.

![alt text](ZTicketViewerBackEnd/design/architectural_design.png)

### Stack and Tools used
*Backend:*
- [django](https://www.djangoproject.com/) - used to create the web application.
- [django REST](http://www.django-rest-framework.org/) - used to actually build a REST API so clients can communicate with the service. This works on top of django.
- [requests](http://docs.python-requests.org/en/master/) - used to directly communicate with the Zendesk API.

*Frontend:*
- [Angular 4](https://angular.io/) - used to communicate with my REST api and also manage the client's frontend.
- [CoreUI-Free-Bootstrap-Admin-Template](https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template) - used for frontend design template.
- [jQuery](https://jquery.com/) - used for frontend design.
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/) - used for frontend design.
- [Fontawesome](http://fontawesome.io/) - used for frontend design.
- [angular2-prettyjson](https://www.npmjs.com/package/angular2-prettyjson) - used to format json data on page.

## Backend API Design
The `z_api` python package is a simple Zendesk Python API client. This package was designed to
act as an interface between the Zendesk API and the users (in this case it was my REST API) who want to communicate with the Zendesk API. This form of abstraction has allowed my REST API to focus on performing actions on Zendesk resources without being concerned about the actual implementation to make requests, process JSON data and work with many more lower level details. Another advantage of separating the REST
API from the implementation of making requests and directly communicating with Zendesk API through an abstracted layer (`z_api`) is that the `z_api` package can be plugged into another environment such as a GUI application.

Essentially, the design starts off with a general class, `ZResource`, which represents any resource in the Zendesk API. From here, we subclass `ZResource` for every resource found in Zendesk's [documentation](https://developer.zendesk.com/rest_api/docs/core/introduction). In each subclass, there will be
certain actions (which would be methods) that can be performed on the resource which would ideally support anything that is outlined in Zendesk's documentation. Due to the scope of this coding challenge, the API client has only been coded to meet the current functional requirements. However if extra functionality is required, the API can be easily extended. Please see `ZTicketViewerBackend/design/zendesk_api_design.pdf` for more details.
