# Mongo-Spring-Angular-MSA Project
We will be building a fixed-file parser and storage application. This application will allow users to upload a fixed-file as well as a file specification. The app will then parse records from the file based on the specification, and store these records in a NoSQL database.

The purpose of this project is for practicing the technology you learn in training. Each of you will have your own project which will go through 4 phases during training:
 1. Database & Server
 2. Angular UI
 3. Microservices
 4. Deployment

### 1. Database & Server
During this phase we will be creating a MongoDB NoSQL database and "wrapping" it in a Spring server. We will be adhering to a 3-tier architecture: data layer, service layer, presentation (API) layer. We will expose CRUD functionality via a RESTful API.

### 2. Angular UI
In the second phase we will create an Angular UI to consume our API. This will allow users to interact with the server via a modern webapp built with Angular. When complete we will have a full client-server application.

### 3. Microservices
The next phase will be breaking up the monolithic server into a set of microservices. We will split the major components of the server into individual programs which will interact with eachother via service mesh.

### 4. Deployment
Lastly we will build a CICD pipeline to deploy our various services to the cloud. We will be using Jenkins as our CICD solution, and deploying our services in docker containers.

## Functional Requirements
A completed project will need to have the following features:
 - Authenticate users with registration and login
 - Parse fixed-length files based on custom specification
 - Store parsed records in a database
 - Store fixed-length file metadata in database
 - Archive fixed-length files to block/object storage
 - View parsed records in JSON format
 - Download copies of original fixed-length files from archive
 - Download a JSON representation of all records from a fixed-length file
 - Offer a web UI for users to access functionality


## Non-functional Requirements
A completred project should also adhere to the following constraints:
 - User passwords should be encrypted
 - User inputs should be validated and sanitized
 - Information should be transmitted between client and server(s) [RESTfully](https://en.wikipedia.org/wiki/REST)




## User Stories
The following describe how features should be implemented from the point of view of various users of the application:

#### As a user I should be able to...
 - Register an account with username and password
 - Authenticate as a registered user by supplying username and password
 - Upload a fixed-length file for parsing records
 - Upload a custom specification for fixed-length files
 - View all fixed-length files I have previously uploaded
 - Re-use custom specifications I have previously uploaded
 - View all records from files I have previously uploaded, grouped by file
 - View all records from files I have previously uploaded, grouped by type
 - Download a copy of the original fixed-length file I had uploaded previously
 - Download a copy of the parsed records from a file I had uploaded previously, formatted in JSON
  
#### As an administrator I should be able to...
 - Do everyting a user can
 - Elevate or demote other users to/from admin role
 - Disable user accounts
 - Delete archived files
 - Delete or modify records

## Stretch Goals & Changes
Currently there are no stretch goals defined. We may add some here later, or we may move functional requirements down here. I would encourage you to add your own features or ideas, and modify the project to make your version unique. You must still adhere to the requirements defined in this document. Feel free to discuss changes to these requirements with your trainer.