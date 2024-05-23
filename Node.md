 <h1> Node/Express Interview Questions</h1>
    <h3>1. What is Node.JS...? Imp</h3>
    <p>
         Node.js is an open-source JavaScript runtime environment executing JavScript code on the server side. <br>
         Node.js is built on the V8 JavaScript engine, which developed by Google, written in C++ and compiles with JavaScript code. <br>
         Node.js uses event-driven, non-blocking I/O model, which makes lightweight and efficient for building scalable network applications. <br>
         Node.js is neither a language nor a framework or library. 
    </p>
    <h3>2. Explain the main advantages of using NodeJs...?</h3>
    <p>
         Node.js allows developers to write client-side as well as server-side JavaScript code. <br>
         Node.js has a in-built and widely used packaging manager, called NPM. <br>
         Node.js uses an event-driven, non-blocking I/O model that makes application lightweight and efficient. <br>
         Node.js uses a single-threaded architecture with event looping. <br>
         Node.js runs on cross-platform, like Windows, macOS, Linux, Android, and iOS. <br>
         Node.js is open-source and free to use.
    </p>
    <h3>3. What is the difference between Nodejs and JavaScript...?</h3>
    <p> 
         Node.js is a runtime environment, while JavaScript is a programming language.  <br>
         Node.js provides a platform for executing JavaScript code on the server-side, while JavaScript is primarily used on the client-side. <br>
         Node.js is commonly used developing APIs, but JavaScript access and manipulate the APIs by adding functionality. <br>
         Express is the popular framework of Nodejs, but in JavaScript React library is popular. 
    </p>
    <h3>4. Difference between require and import in Nodejs...?</h3>
    <p>
         By require, we can't load selectively, but with import, we can load selective way. <br>
         Require is synchronous in nature, but import load asynchronously. <br>
         Require is traditional, but import available after introduction of ES6. <br>
         For import availability, we have to add "type": "module" in package.json.
    </p>
    <h3>5. What are the HTTP status codes and explain about types…?</h3>
    <p>
       HTTP status codes provide information about the outcome of a request i.e. success, failure or other status. <br>
       Categories of HTTP status code: <br>
       1xx Informational: <br>
      > 100 Continue: The server connected and the client should proceed to send the request body. <br>
       2xx Success: <br>
      > 200 OK: The request was successful. <br>
      > 201 Created: The request was successful and a new resource was created. <br>
      > 204 No Content: The server successfully processed but no content to send in the response. <br>
       3xx Redirection: <br>
      > 301 Moved Permanently: The requested resource has been permanently moved to a new location. <br>
      > 302 Found or Moved Temporarily: The requested resource has been temporarily moved to a different location. <br>
       4xx Client Error: <br>
      > 400 Bad Request: The server did not understand the request. <br>
      > 401 Unauthorized: The request requires user authentication. <br>
      > 403 Forbidden: The server understood the request, but it refuses to authorize it. <br>
      > 404 Not Found: The requested resource could not be found on the server. <br>
      > 429 Too Many Request: <br>
    </p>
    <h3>6. What is the importance of dotenv in NodeJs...?</h3>
    <p>
         Dotenv helps keep sensitive information such as API keys, database passwords, and other secrets out of the code. <br>
         Dotenv makes it easy to manage environment variables in one place. <br>
         It allows to easily switch configurations between development, testing, and production environments by modifying the .env file. 
    </p>
    <h3>7. What is MongoDB and How does it differ from relational databases...?</h3>
    <p>
         MongoDB is a open-source and document-oriented NoSQL database management system. <br>
         It stores data in a flexible and JSON-like documents called BSON (Binary JSON). <br>
         Traditional databases are used tables and rows format, where MongoDB uses collections and documents to organize data.
    </p> 
    <h3>8. What is indexing in MongoDB? Why is it important...?</h3>
    <p>
        Indexing in MongoDB improves query performance by allowing the database to quickly locate documents based on indexed fields.
    </p>
    <h3>9. Differentiate between single-field and compound indexes. When would you use each...?</h3>
    <p>
         Single-field indexes index a single field, while compound indexes index multiple fields together. 
    </p>
    <h3>10. Give an example of using aggregation pipelines in MongoDB to perform complex operations...?</h3>
    <p>
        
    </p>
    <h3>11. Explain the use of aggregation stages like $match, $group, $project, and $sort...?</h3>
    <p>
         The MongoDB Aggregation Framework is used for data aggregation operations like grouping, filtering, and transforming data. It allows for complex data processing and analysis.
    </p>
    
    <h3>12. Describe the differences between embedding and referencing in MongoDB schema design...?</h3>
    <p>
        
    </p>
    
    <h3>13. When would you use embedding versus referencing for relationships between documents...?</h3>
    <p>
        
    </p>
    
    <h3>40. How do you handle denormalization in MongoDB...?</h3>
    <p>
        
    </p>
    
    <h3>40. Does MongoDB support transactions? Explain the concept of multi-document transactions...?</h3>
    <p>
        
    </p>

    <h3>40. What is MongoDB replication? Describe the roles of primary and secondary nodes in a replica set....?</h3>
    <p>
        
    </p>
    
    <h3>40. How do you ensure data consistency and fault tolerance in MongoDB replication...?</h3>
    <p>
        
    </p>
    
    <h3>40. What are the security features available in MongoDB? How do you secure a MongoDB deployment...?</h3>
    <p>
        
    </p>
    
    <h3>40. Explain sharding in MongoDB and how it contributes to scalability...?</h3>
    <p>
        
    </p>
    
    <h3>40. What factors would you consider when designing a sharded MongoDB cluster?...?</h3>
    
