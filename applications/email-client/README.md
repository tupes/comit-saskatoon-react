# Email Client Application

## Description

Email Client Application (ECA) is a simple webmail system that copying essential functionality of other well-known products such as Gmail or Outlook.

## Requirements

- ECA will be in two parts: a server, which will act as a proxy and will be what communicates with a mail server somewhere, and the client, which will talk to our server to do its work.
- The ECA's server will communicate with an email server whose details will be stored in a text file on the MailBag server (so this is a single-user system), and it will communicate with that email server via the popular IMAP protocol for retrieving mail (sorry POP3 users!) and SMTP for sending messages.
- The ECA's server will provide an API to the client that allows it to get a list of mailboxes for the account, a list of messages for a selected mailbox, and pertinent message details for display by the client. It will allow the user to delete and send messages. Finally, the server will provide for storage of contacts and the associated add and delete functions for maintaining them.
- The client will be a web-based application that can be viewed in any web browser. It will provide the user a list of mailboxes in their account, the ability to see a list of messages within a selected mailbox, and the ability to choose and view a message, as well as delete it. It will also allow the user to compose and send a new message to an entered email address. You’ll also give them a list of contacts that they can add people to (and remove from) and initiate an email too quickly.

![Example of final version](https://github.com/tupes/comit-saskatoon-react/blob/master/applications/email-client/Email-client-example.png)
