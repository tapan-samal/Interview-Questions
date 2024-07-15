 <h2> Node/Express Interview Questions</h2>
    <h3>1. What is Node.JS...? Imp</h3>
    <p>
         Node.js is an open-source JavaScript runtime environment executing JavScript code on the server side. <br>
         Node.js is built on the V8 JavaScript engine, which developed by Google, written in C++ and compiles with JavaScript code. <br>
         Node.js uses event-driven, non-blocking I/O model, which makes lightweight and efficient for building scalable network applications. <br>
         Node.js is neither a language nor a framework. 
    </p>
    <h3>2. Explain the main advantages of using NodeJs...?</h3>
    <p>
         Versatile Language: Allows developers to write client-side as well as server-side JavaScript code. <br>
         NPM Ecosystem: It has built-in and widely used packaging manager, called NPM. <br>
         Asynchronous & Non-blocking: Uses an event-driven, non-blocking I/O model that makes application lightweight and efficient. <br>
         Single-threaded: Node.js uses a single-threaded architecture with event looping. <br>
         Cross-platform: Supports deployment on various operating syastems. Like Windows, macOS, Linux, Android, and iOS. <br>
         Open-source: Being an open-source technology, It continuously benefits from community contributions, updates, and enhanced packages.
         Real-time capabilities: 
    </p>
    <h3>3. What is the difference between Nodejs and JavaScript...?</h3>
    <p> 
         Node.js is a runtime environment, while JavaScript is a programming language.  <br>
         Node.js provides a platform for executing JavaScript code on the server-side, while JavaScript is primarily used on the client-side. <br>
         Node.js is commonly used developing APIs, but JavaScript access and manipulate the APIs by adding functionality. <br>
         Express is the popular framework of Nodejs, but in JavaScript React library is popular.
         JavaScript running on spider monkey, V8 and JavaScript core engine, where Node js run only on V8. 
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
       5xx Server Error: <br>
      > 500 Internal Server Error: A error message indicating a server failure. <br>
      > 501 Not Implemented: The server does not support the functionality required to fulfill the request. <br>
      > 502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from an upstream server. <br>
      > 503 Service Unavailable: The server is not ready to handle the request due to down for maintenance or overloaded. 
    </p>
        <h3>6. What are the differences between Client side and Server side...?</h3>
    <p>
         Client-Side(Browser): <br>
        > It runs on the user's web browser. <br>
        > The primary languages are HTML, CSS and JavaScript. <br>
        > It works with document, window and event objects. <br>
        > Responsibility to handle UI display, user interactions and client side logics. <br><br>
         Server-Side(Node): <br>
        > It runs on the server. <br>
        > Primary language is JavaScript. <br>
        > It handle request, response and database objects. <br>
        > Handle business logic, data storage/access, authentication, authorization etc.
    </p>

    <h3>7. What is the difference between Runtime environment and Framework...?</h3>
    <p>
         Runtime environment primarily focuses on providing the necessary infrastructure for code execution, including memory management and input output operations. <br>
         Framework simplifying the development process by offering a pre-defined architecture, libraries and best practice.
    </p>
    
    <h3>8. What are Events, Event Emitter, Event Queue, Event Loop and Event Driven in Node.js...?</h3>
    <p>
         Event: Events are objects that represent actions or occurrences happened in a program. <br>
         Event Emitter: Event Emitter is a core module in Node.js that allows to emit and handle events. <br>
         Event Queue: Event queue holds event listeners/callbacks until they are processed by the event loop. <br> 
         Event Handler(Listener): Function that responds to specific events. <br>
         Event Loop: Event loop manage asynchronous operations in a non-blocking manner by tracking events from event queue and executes in loop. <br>
         Event Driven Architecture: Actions and responses are driven by events rather than a linear flow of code execution.
    </p>
    
    <h3>9. What is Express.JS...?</h3>
    <p>
         Express.js is a framework built on the top of NodeJs. <br>
         It is designed to simplify the process of building web application and APIs. <br> 
         It provides a set of features like simple routing system, middleware support, error handling and serve static files (HTML, CSS, JavaScript, images).
    </p>

    <h3>10. Explain the different types of methods use with "app" object ...?</h3>
    <p>
         Routing methods used to define routes that respond to specific HTTP requests. <br>
        > app.get/post/put/delete(path, callback); <br>
         Middleware functions to access request object, response object and next function. <br>
        > app.use(path, middleware); <br>
         Application settings that control the behavior of the application. <br>
        > app.set("name", "value"); <br>
         Templating methods used to render view templates. <br>
        > app.render(view, locals, callback); <br>
         Utility methods provide additional functionalities for handling requests and responses. <br>
        > app.listen(port, [hostname], [backlog], [callback]);
    </p>

    <h3>11. Explain Serving static files in Express...?</h3>
    <p>
         Serving static files involves delivering files such as images, CSS files, JavaScript files, and other assets directly to the client. <br>
         Express provides a built-in middleware function, express.static, to serve static files. <br>
         Relative directory: Syntax: app.use(express.static('public')); || app.use('/static', express.static('public')); <br>
         Absolute/Different directory: app.use('/static', express.static(path.join(__dirname, 'public')));
    </p>

    <h3>12. What is Middleware and how it works in Node.js...?</h3>
    <p>
         Middleware is a powerful tool that executes functionalities between the request and response cycle without modifying the core code in the application. <br>
         Middleware is used to implement a series of functionality, like authentication, logging, error handling and data transformation. <br>
         It takes three arguments: request object, response object and next function. Next is used to call the next middleware function.  <br>
         Examples: <br>
        > Logger Middleware: For logging requests and responses. Popular is morgan. <br>
        > Body Parser Middleware: To parse incoming request bodies. <br>
        > Router-level Middleware: Used to apply middleware to specific routes. <br>
        > Error-handling Middleware: To catch and handle errors. <br>
        > CORS Middleware: To enable Cross-Origin Resource Sharing. <br>
        > Static Files Middleware: To serve static files such as images, CSS files, and JavaScript files.
    </p>

    <h3>13. Explain about diffrent types of middleware in express...?</h3>
    <p>
         Application-level middleware <br>
        > Application-level middleware is bound to an instance of the express object. <br>
        > Example: app.use(), app.method(), app.render() and app.listen(); <br><br>
         Router-level middleware <br>
        > Router-level middleware works in the same way as application-level, except it is bound to an instance of express.Router(). <br>
        > Example: router.use() and router.get/post(); <br><br>
         Error-handling middleware <br>
        > Error-handling middleware is defined with four arguments(err, req, res, next) to identify an error-handling middleware function. <br>
        > Example: app.use((err, req, res, next) => {}); <br><br>
         Built-in middleware <br>
        > express.static: Serves static assets such as HTML files, images, and so on. <br>
        > express.json: Parses incoming requests with JSON payloads. <br>
        > express.urlencoded: Parses incoming requests with URL-encoded payloads. <br><br>
         Third-party middlewar <br>
        > Third-party middleware is available from npm, that used to add functionality to Express app. <br>
        > body-parser, cors, errorhandler, morgan, multer, helmet, passport etc.
    </p>



    <h3>11. What is the difference between Authentication and Authorization in Node.js...?</h3>
    <p>
         Authentication and authorization are two important concepts for application security. <br>
         Authentication is the process of verifying a user's identity. <br>
         Common authentication mechanisms include username/password authentication, token-based authentication and Social login. <br> 
         Authorization is the process of determining permissions to access resource or perform specific action by user. <br>
         Authorization can be role-based(e.g., admin, user, guest) or attribute-based (e.g., user's age, location, subscription status).
    </p>
    
    <h3>12. What is Bcrypt and explain the use of bcrypt library in Node.js...?</h3>
    <p>
         Bcrypt is a hashing algorithm, that convert a simple password into hashed password before storing in database. <br>
         It applies salt (a unique random string value) to the password before hashed to makes the hash unpredictable. <br>
         It use bcrypt.compare function internally to extracts the salt from the stored hashed password and uses it to hash the entered password for comparison during user login. <br>
         Bcrypt library is a valuable tool for purpose of security, ease of use and performance.  
    </p>

    <h3>13. What is JWT and its importance in Nodejs...?</h3>
    <p>
         JSON Web Token is an open standard for securely transferring data within parties using a JSON object. <br>
         JWT is used for stateless authentication mechanisms for users and providers, means maintaining sessions on the client side instead of storing sessions on the server. <br>
         JWTs consist of three parts: header, payload, and signature. <br>
          ● Header: Contains metadata about the type of token and the cryptographic algorithms used to secure the token. <br>
          ● Payload: Contains the statements about the user and additional data. <br>
          ● Signature: Verifies the integrity of the token and ensures that it has not been tampered with during transmission.  <br>
         Jsonwebtoken library provide two crucial functions jwt.sign() and jwt.verify() for handling JWT in Node.js. <br>
          ● jwt.sign(): This function is used to generate a new JWT token based on the provided payload and options. <br>
          ● jwt.verify(): This function is used to verify and decode a JWT token to retrieve the original payload.
    </p>

    <h3>14. What is Buffer in Nodejs?</h3>
    <p>
         A buffer is a region of memory that is used to store data temporarily in a computer. <br>
         In Node.js, buffers are used to store and manipulate binary data. <br>
         Binary data is data that is made up of bytes, which includes images, audio and video files. <br>
         Node.js provides methods for working with buffers. <br>
          > Buffer.alloc(): Creates a new buffer of a specified size. <br>
          > Buffer.from(): Creates a new buffer from an existing string or array. <br>
          > Buffer.write(): Writes data to a buffer. <br>
          > Buffer.read(): Reads data from a buffer. <br>
          > Buffer.toString(): Converts a buffer to a string.
    </p>

    <h3>15. What are Streaming in NodeJS...?</h3>
    <p>
         Streaming is the process of reading or writing data in small, without loading the entire data set into memory at once. <br>
         This is especially important when working with large files or handling real-time data. <br>
         It helps conserve memory and improves performance by processing data asynchronously. <br><br>
         There are are 4 types of strems: <br>
        > Readable streams: Allow data to be read from a source. <br>
        > Writable streams: Allow data to be written to a destination. <br>
        > Duplex streams: Allowing data to be both read from and written to the same stream. <br>
        > Transform streams: Allow to modify or transform the data as it is read and written.
    </p> 

    <h3>16. Name of some events, that fired by Streams...?</h3>
    <p>
         Streams in Node.js emit several events for handling various operations and scenarios. <br>
         Here are some of the common events fired by streams: <br>
        > data: Fired when data is available to be read from the stream. <br>
        > end: Fired when there is no more data to be read from the stream. <br>
        > error: Fired when an error occurs while reading or writing to the stream. <br>
        > close: Fired when the stream and its underlying resources have been closed.
    </p>

    <h3>17. What is the differences between Microservice architechture and Monolithic architechture ?</h3>
    <p>
         Microservices Architecture <br>
        > A microservices architecture is a modern approach to design an application with multi-tier architecture and independently deployable services. <br>
        > Easier to scale horizontally. <br>
        > Development complex due to managing multiple services. <br>
        > Freedom to choose the best technology for each service. <br>
        > More flexible as components can be developed, deployed, and scaled independently. <br>
        > Communication may be slower due to network calls. <br>
        > Best for Large and complex applications. <br><br>
         Monolithic Architecture <br>
        > A monolithic architecture is a traditional approach to design an application with single-tier architecture and deployed as a single unit. <br>
        > Horizontal scaling can be challenging. <br>
        > Development is simpler initially. <br>
        > Limited technology choices. <br>
        > Less flexible as all components are tightly coupled. <br>
        > Communication between components is faster. <br>
        > Best for small and simple application.
    </p>

    <h3>18. What is EJS in Node...?</h3>
    <p>
         EJS stands for Embedded JavaScript Templating. <br> 
         It is a popular templating engine for Node.js and web development. <br> 
         EJS templates are regular HTML files with embedded JavaScript code. <br> 
         When an EJS template is rendered, the JavaScript code is executed and the resulting HTML is sent to the client. <br>
         EJS and Express can be used together to create dynamic web applications.  <br>
         EJS templates can be used to generate HTML content, and Express can be used to handle routing.
    </p>

    <h3>19. What is the importance of dotenv in NodeJs...?</h3>
    <p>
         Dotenv helps keep sensitive information such as API keys, database passwords, and other secrets out of the code. <br>
         Dotenv makes it easy to manage environment variables in one place. <br>
         It allows to easily switch configurations between development, testing, and production environments by modifying the .env file. 
    </p>
    
    <h3>20. What is GraphQl and how its important in programming language...?</h3>
    <p> 
         GraphQL is an open source query language that describes how a client should request information through an API. <br>
         It optimize an application by batching multiple requests into a single network query. <br>
         It allow clients to request only the data they require from the single end point. <br>
         It simplifies the API interactions and reduces number of network requests. <br>
         It provides more efficient, powerful, and flexible alternative to traditional RESTful APIs.
    </p>
