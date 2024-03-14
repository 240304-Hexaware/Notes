# Mongo-Spring-Angular-MSA Project
We will be building a fixed-length file parser and storage application. This application will allow users to upload a fixed-file as well as a file specification. The app will then parse records from the file based on the specification, and store these records in a NoSQL database.

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
 - ~Authenticate users with registration and login~ now a stretch goal
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
 - ~User passwords should be encrypted~ auth is now a stretch goal
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
 - Authentication - login and register functionality.
   - passwords should not be stored as plaintext
  

## Timeline



### How to start:
Think about "Domain Objects" - (data layer, DB) - Users, files, specifications, metadata, parsed data
  
Think about the API - (presentation layer) what HTTP endpoints will be available to UI, and how will we access them?
  
Think about the work - (service layer) - What stuff will I need to do to those domain objects
  
Think about the UI - What screens will need to show what information and invoke what API calls?

