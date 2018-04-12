# react-event
Small express &amp; react progressive web app based on create-react-app. Fetches events from an oracle Database and displays them (even if offline). 

=========

* Backend : Express - Oracle
* Frontend: React & PWA & LocalStorage (Based on create-react-app) 
* They both run together using concurrently, and the front sets the back as a proxy. 

Pre-requisites
--------------------
You will need to have an oracle client installed on your machine. I used oracleExpress (free version of oracle) and sqlDeveloper.
If you want to test the application, you'll need to create a Table 'Events' with the following columns: 
* ID (int)
* NAME (varchar)
* DESCRIPTION (varchar)
* ADDRESS1 (varchar)
* ADDRESS2 (varchar)
* LONGITUDE (varchar)
* LATITUDE (varchar)

Furthemore, you'll need to modify the file "server.js" and change the configuration. (User, password and connection string)

N.B: If you want to test the PWA (offline mode with caching), you'll need to build the application, it won't work in dev mode.

Installation
--------------------
1. Clone the repository `git clone https://github.com/Svanaks/react-event.git`
2. Go in the project repository and run `npm install` which will install all the packages needed for the server
3. Go in the client folder `cd client`
4. Run `npm install` to install all the client side packages
5. To run the application in dev mode, `npm run dev` it will run the dev server on port 5000 (you'll have access to json data on 
localhost:5000/api/events and localhost:5000/api/events/:id) and the client on port 3000 by default using concurrently
6. To build the application, `npm run build`. 
7. To start production, `npm start` after you made the build and then go on localhost:5000

If you just want to see how it looks, you can see some pictures and a description on my [personal website](http://williambloch.com)

