# Mongo-Spring-Angular-MSA Project
We will be building a fixed-length file parser and storage application. This application will allow users to upload a fixed-file as well as a file specification. The app will then parse records from the file based on the specification, and store these records in a NoSQL database.

## Most Relevant New Info (3/28): 
### Functional Requirements for MVP:
A completed project will need to have the following features:
 - Parse fixed-length files based on custom specification (MVP #1)
 - Store parsed records in a database (MVP #1)
 - Archive fixed-length files to block/object storage (MVP #1)
 - Store fixed-length file metadata in database - specifically the location where the archived file was stored (MVP #1)
 - View parsed records (3 views for MVP, see below) (MVP #2)
   - Whenever I parse a file, I should imediately get the parsed data rendered on screen
     - on the backend we get the fixed-length file, parse it according to a spec file, and return the JSON representation of all records parsed form that file.
   - A view of all parsed records from the current user (even if we don't have real authentication)
     - on the backend you get the request and query the database for all records associated with that user
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
   - A view of all records that are of a specific type (for instance maybe I want to see all car records, which are those parsed from the fixed-lencth files that a car spec file describes)
     - on the backend you get the request and query the database for all records associated with specific spec file.
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
 - Offer a web UI for users to access functionality (MVP #1-3)

### MVP Deadlines:
MVP #1 - **By EOB on Friday 3/29**:
 - parsing prototype complete - You can choose a file from within an angular SPA, transmit it to the backend in an HTTP request, have your server pick up the file from the request and parse it, then persist the records, drop the file into storage, and finally respond to the request with the JSON representation of the parsed data.

MVP #2 - **By EOB Tuesday 4/2**:
 - expanded parsing - We need to be able to parse any file based on any spec file
   - The user should be able to define a new spec, select that spec file from within our angular SPA, transmit it to the backend, have it get interpreted so that it can be used to parse fixed-length files.
   - The user should be able to view historic parsed records, see required views above.
     - view all records associated with the current user
     - view all records associated with a spec
   - ability to parse multiple records from a file.
     - Method 1: The records are not be delimited by any character in the file, just like the fields we would be parsing based on fixed-length widths.
     - Method 2: We delmimit records with a character like newline "\n", however the records themselves still need to be fixed-length.

MVP #3 - **By EOB Thursday 4/4** (code freeze!): 
 - The application should be in it's final state and ready to be demonstrated in the presentation on 4/5.
 - The front end should be useable, but doesn't have to be the most beautiful thing ever
 - You should be ready to present and speak on your project for 5-10 mins, and be ready for a Q/A where Kyle, Carolyn, or anyone in the audience can ask questions.
   - You want a script!
   - You want a slideshow (powerpoint, prezi, or whatever)
   - Make sure to introduce yourself at the start
   - Demonstrate your application in use
   - Discuss the project, some example topics include:
     - Talk about not just the deliverable, but the journey to the finish line
     - Interesting parts of the project
     - toughest challenges
     - how you overcame challenges
     - or you were totally blocked


## Project Spec (updated 3/28):
The most important info is above, you can achieve MVP with those things. Below are some more specific details from the original document. If you are concentrating on catching up to MVP, everything you need is above. **See Kyle with any questions as soon as possible!**




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
The next phase will be breaking up the monolithic server into a set of microservices. We will try to split the major components of the server into individual programs which will interact with eachother via service mesh. This may not be doable in the time we have, but I would encourage everyone to create a branch of their application and give it a go once the necessary features are in place.

### 4. Deployment
Lastly we will build a CICD pipeline to deploy our various services to the cloud. We will be using Jenkins as our CICD solution, and deploying our services in docker containers. If you are unable to deploy your project in time for the showcase, having it local willbe just fine. I encourage everyone to branch their repo and give it a go. 

## Functional Requirements
A completed project will need to have the following features:
 - Parse fixed-length files based on custom specification (MVP #1)
 - Store parsed records in a database (MVP #1)
 - Archive fixed-length files to block/object storage (MVP #1)
 - Store fixed-length file metadata in database - specifically the location where the archived file was stored (MVP #1)
 - View parsed records (3 views for MVP, see below) (MVP #2)
   - Whenever I parse a file, I should imediately get the parsed data rendered on screen
     - on the backend we get the fixed-length file, parse it according to a spec file, and return the JSON representation of all records parsed form that file.
   - A view of all parsed records from the current user (even if we don't have real authentication)
     - on the backend you get the request and query the database for all records associated with that user
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
   - A view of all records that are of a specific type (for instance maybe I want to see all car records, which are those parsed from the fixed-lencth files that a car spec file describes)
     - on the backend you get the request and query the database for all records associated with specific spec file.
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
 - Offer a web UI for users to access functionality (MVP #1-3)

The following items are now **stretch goals**, not required for MVP
 - Authenticate users with registration and login
   - You don't need to worry about authentication or authorization, but you will still want to keep track of a user interacting with the app.
   - You can just send a username or something in the header so the backend knows who is requesting things
   - Call this a "trusting system", if a request claims to be from user: kplummer, then we just accept that
 - Download copies of original fixed-length files from archive
   - This is referring to recovering a copy of the original fixed-length file as it was archived
   - see **demo-file-transfer** for example of sending files in HTTP requests and responses
 - Download a JSON representation of all records from a fixed-length file
   - This was referring to creating a text file with the JSON representations of the records. Now, just rendering the data on screen in the SPA is MVP and this is a stretch goal.

## Non-functional Requirements
A completred project should also adhere to the following constraints:
 - ~User passwords should be encrypted~ auth is now a stretch goal
 - ~User inputs should be validated and sanitized~ Don't worry too much about this, consider it a stretch goal. Focus primarily on making the workflows basic enough for end users. We will assume our users are smart and well behaved.
 - Information should be transmitted between client and server(s) [RESTfully](https://en.wikipedia.org/wiki/REST)
   - This is absoutely required, and I think everyone is already doing this just fine.
   - Resource representations should be sent in HTTP request/response bodies as JSON




## User Stories
The following describe how features should be implemented from the point of view of various users of the application:

#### As a user I should be able to...
 - ~Register an account with username and password~ stretch goal
 - ~Authenticate as a registered user by supplying username and password~ stretch goal
 - Upload a fixed-length file for parsing records
 - Choose a specification for fixed-length files
   - Users should be able to define a spec file in notepad and transmit that file to the server
   - JSON would be best, something like this:
  ```JSON
{
  "manufacturer":
  {
    "start_pos": 0,
    "end_pos": 19,
    "dataType": "String"
  },
  "model":
  {
    "start_pos": 20,
    "end_pos": 39,
    "dataType": "String"
  },
  "year":
  {
    "start_pos": 40,
    "end_pos": 43,
    "dataType": "String"
  }
}
```
 - ~View all fixed-length files I have previously uploaded~ stretch goal
 - ~Re-use custom specifications I have previously uploaded~ stretch goal
 - View records parsed from files
   - Whenever I parse a file, I should imediately get the parsed data rendered on screen (MVP #1)
     - on the backend we get the fixed-length file, parse it according to a spec file, and return the JSON representation of all records parsed form that file.
   - A view of all parsed records from the current user (even if we don't have real authentication)  (MVP #2)
     - on the backend you get the request and query the database for all records associated with that user
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
   - A view of all records that are of a specific type (for instance maybe I want to see all car records, which are those parsed from the fixed-lencth files that a car spec file describes)  (MVP #2)
     - on the backend you get the request and query the database for all records associated with specific spec file.
     - then return that collection of records to the front end, where it is "unwrapped" and rendered on screen (not just in the console)
 - ~Download a copy of the original fixed-length file I had uploaded previously~ stretch goal
 - ~Download a copy of the parsed records from a file I had uploaded previously, formatted in JSON~ stretch goal
  
#### As an administrator I should be able to...
If authentication is a stretch goal, user roles might depend on auth, and so all of this can be considered a stretch goal.
 - ~Do everyting a user can~
 - ~Elevate or demote other users to/from admin role~
 - ~Disable user accounts~
 - ~Delete archived files~
 - ~Delete or modify records~

## Stretch Goals & Changes
 - Authentication - login and register functionality.
   - passwords should not be stored as plaintext
 - Administrator role - see admin user stories above
  

## Timeline
 - ~End of Phase 1: Server skeleton and proof of concept - should be able to post and retrieve data from the database via API call~
 - ~End of Phase 2: Minimal UI in place and able to consume some parts of API, not all features comeplete yet but some features completed
 - ~End of Phase 3: Feature complete UI and server, not necessarily bug free or well polished.~
   - ~Potentially broken the monolith application into multiple services~
 - ~End of Phase 4: feature complete, polished, possible deployed to the cloud, ready to showcase.~


### How to start:
Think about "Domain Objects" - (data layer, DB) - Users, files, specifications, metadata, parsed data. How do they relate? 1-to-1? 1-to-many? Many-to-many? Do we need
to preform CRUD on each, or will only some of those funcitons be required?
  
Think about the work - (service layer) - What stuff will I need to do to those domain objects? You can probably have just one method for C, U, and D, but may need several methods for reading the data in different ways.
  
Think about the API - (presentation layer) what HTTP endpoints will be available to UI, and how will we access them? How will the UI consume the resources?
  
Think about the UI - What screens will need to show what information and invoke what API calls? How will the user find what they're looking for? 


