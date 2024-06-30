<h2>JavaScript Interview Questions</h2>
<h3>1. What is JavaScript ...?</h3>
    <p>
       JavaScript is a scripting language for converting static pages to interactive and dynamic web pages. <br />
       It is commonly used for adding functionality to websites, enhancing user interfaces, and developing web applications. <br>
       It is a versatile programming language for both client-side(front-end) and server-side(back-end) development. <br>
       JavaScript was invented by Brendan Eich in 1995. <br> <br>
       Dynamic language means the data types of variaables can change during runtime. <br>
       JavaScript Engine : A JavaScript engine is a crucial component in web browsers where code is executed. Example: V8(Chrome), 
      Spider-Monkey(Firefox), JavaScript-Core(Safari).
    </p>
    <h3>2. What is JavaScript used for...?</h3>
    <p>
       DOM (Document Object Model) manipulation <br />
       Event Handling <br />
       Asynchronous Requests <br />
       Animations & Effects <br />
       Data Manipulation (Sorting, Filtering, etc) <br />
       Storing Data (Cookies, LocalStorage, etc) <br />
       SPA (Single Page Application) <br />
       Creating APIs & Web Servers (Node.js, Deno)
    </p>
    <h3>3. Why we prefer first language as JavaScript...?</h3>
    <p>
       Popularity: One of the most widely used language in the world. <br />
       Versatility: Used for many different things, such as dynamic web pages, APIs, mobile and even desktop applications. <br />
       Relatively Easy to Learn: Compared to other lower languages, JavaScript is pretty easy to learn and a great language to start  
      with. <br />
       Community: Great community, support, resources and tools.
    </p>
    <h3>4. How many ways JavaScript can display data…?</h3>
    <p>
      JavaScript can display data in 4 ways: <br />
       Writing into HTML element, using innerHTML. <br />
       Writing into the HTML output using document.write(). (For testing purpose) <br />
       Writing into an alert box, using window.alert(). <br />
       Writing into the browser console, using console.log(). (For debugging purpose)
    </p>
    <h3>5. What is Statement in JavaScript...?</h3>
    <p>
       In JavaScript, a statement is a unit of code that performs a specific task or action. <br />
       It is a complete instruction that JavaScript can execute. <br />
       Statements can be used to control the flow of executions, perform calculations, assign values to variables, declare functions 
      and many more.
    </p>
    <h3>6. Explain JavaScript comments…?</h3>
    <p>
       JavaScript comments can be used to explain JavaScript code and to make it more readable. <br />
       Comments can also be used to prevent execution, when testing alternative code. <br />
       Single line comment : // <br />
       Multi-line comment : /*…..*/
    </p>
    <h3>7. Explain about JavaScript history in short...?</h3>
    <p>
       JavaScript was invented by Brendan Eich in 1995 -> work for Netscape Navigator -> "Mocha" -> "LiveScript" -> "JavaScript". <br>
       ECMAscript standardise the JavaScript -> ES1 in 1997 -> ES5 in 2009(lots of new features). <br />
       ES6 in 2015 (Biggest update in the history of JavaScript) -> tc39 decide JavaScript's features. <br />
       ES7 : ES2015 -> ES8 : ES2017.
    </p>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    <h2>B. Variables and Operators :</h2>
    <h3>8. What is Variable in JavaScript...?</h3>
    <p>
       In JavaScript, A Variable is simply the name of storage loaction, which used to store and manipulate data.<br />
       Variables are declared by using var, let and const keywords. <br />
       The variables must be identified with a unique names because of case-sensitive. <br />
       A variable declared without a value will have the value undefined.
    </p>
    <h3>9. What are the rules of naming a variable in JavaScript...?</h3>
    <p>
       Identifier must be meaningful with unique name. <br />
       Name always begin with letter, underscore and dollar sign. <br />
       Name can only conatain letters, underscore, dollar-sigh and numbers. <br />
       Reserved words by JavaScript cannot be used as name. <br />
       Conventions- Writting format should be camelCase.
    </p>
        <h3 class="vvi">10. What is scopes in JavaScript…? Imp</h3>
    <p>
       Scope is the accessibility of variables, functions and objects in some particular part of code during runtime.<br />
       It determine the visibility and lifetime of variables and functions in code. <br /><br />
       Global Scope: <br />
      > Variables and functions declared in the global scope are accessible throughout the entire JavaScript program.<br />
      > It is not limited to any specific function or block of code. <br />
      > Global scope lead to naming conflicts, so harder to maintain and debug the code. <br /><br />
       Function Scope(Local): <br />
      > Variables declared inside a function have local scope, that accessible only within that function. <br />
      > Local scopes are not accessible by outside function, so it not create any naming conflicts. <br /><br />
       Block Scope(ES6): <br />
      > Introduced in ES6, block scope allows variables to be scoped to the nearest enclosing block, that is { }. <br />
      > Variables declared with let and const have block scope, meaning they are only accessible within the block. <br />
    </p>
    <h3>11. What is Operator in JavaScript and Explain types of Operators...?</h3>
    <p>
       Operators are symbols used to perform operations on values and variables. <br /><br />
       Types of Operator : <br />
      > Arithmetic Operators: Addition(+), Subtraction(-), Multiplication(*), Division(/), Modulus(%) and Exponentiation(**). <br />
      > Assignment Operators: Assignment(=), Add & assign(+=), Subtraction & assign(-=), (*=), (/=), (%=) and (**=).<br />
      > Comparison Operators: Equal(==), Strict Equal(===), Inequal(!=), Strict Inequal(!==), Greater than(>), Less than(<), (>=) and 
      > Logical Operators: Logical AND(&&), Logical OR(||) and Logical NOT(!).<br />
      > Bitwise Operators: Bitwise AND(&), Bitwise OR(|), Left Shift(<<) and Right Shift(>>). <br />
      > Unary Operators: Unary Plus(+), Unary Minus(-), Increment(++) and Decrement(--). <br />
      > Ternary/Conditional Operator: `condition ? true : false` <br />
      > Type Operators: typeof and instanceof. <br><br>
       Expression : An Expression is a combination of values, variables and operators, which computes to a value.
    </p>
    <h3 class="vvi">12. What is the difference between == and === in JavaScript…? Imp</h3>
    <p>
       Both are the comparison operator. <br>
       == operator used for "loose equality", that compare the values between variables and return a logical value, either true or 
       false.<br />
       === operator is used for "strict equality", that compares the values as well as the data type of value. <br />
       == operator also called Type Conversion(Coercion), because it convert the operands to a common data type before comparison. 
      <br/>
       === operator does not perform any type coercion or type conversion. <br>
       Use strict equality is a good practice for most comparisons for a predictable result and less error-prone behavior.
    </p>
    <h3>13. What are the types of Conditional statements in JavaScript...?</h3>
    <p>
       JavaScript supports various types of conditional statements that allow to control the flow of code based on different 
      conditions. <br>
       If-else Statement: <br>
      > The if-else statement allows to execute one block of code if the condition is true and another block if the condition is false.         <br>
      > It use when the codes are complex and multiline executions. <br>
      > Syntax: if (condition1) { code } else if (condition2) { code} else { code }<br><br>
       Switch Statement: <br> 
      > The switch statement is used to perform different actions based on different conditions. <br>
      > It is more structured way to write the codes. <br>
      > Syntax: switch(expression) {case value1: //code; break; case value2: //code; break; default: //code;}<br><br>    
       Ternary Operator: <br>
      > The ternary operator is a shorthand way of writing an if-else statement in a single line. <br>
      > It use when the code has simple condition and single value evaluation. <br>
      > Syntax: condition ? expressionIfTrue : expressionIfFalse;
    </p>
    <h3>14. What is short-circuit evaluation in JavaScript…?</h3>
    <p>
       Short-circuit is a concept where the evaluation stops the execution after the initial argument determined the result. <br>
       In JavaScript, the logical AND (&&) and logical OR (||) operators use short-circuit evaluation. <br>
       In AND operator, If the first operand is false, the remaining operands are not evaluated, and the result is false. <br>
       In OR operator, If the first operand is true, the remaining operands are not evaluated, and the result is true.
    </p>
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>C. Data Types :</h2>
    <h3>15. What is data types in JavaScript and Explain the differences between primitive and Non-Primitive data types…? Imp</h3>
    <p>
      Data Type: A data type determines the type of values that can be stored in a variable. <br /> <br />
       Primitive Data Type : <br />
      > Primitive data types are immutable, which means their value cannot be changed or modified once they are assigned. <br />
      > It can hold only single value. <br />
      > Primitive data type compare by value. <br />
      > Data Stored directly in the stack memory.<br />
      > Primitive data types are : Number, String, Booleans, undefined, Null, BigInt and Symbol.<br /><br />
       Reference/Non-Primitive Data Type : <br />
      > Non-Primitive data types are mutable and their values can be changed at any time.<br />
      > It can hold multiple values with methods. <br />
      > Nor-primitive data type compare by reference. <br />
      > Data Stored in the heap memory and accessed by reference.<br />
      > Non-Primitive data type : Object(Array, Function and Date).
    </p>
    <h3>16. What are the different data types exist in JavaScript…?</h3>
    <p>
       There are 8 types of data types. Seven are primitives and one is non-primitive.  <br>
       String: Represents sequence of characters, enclosed in single or double quotes. Ex. “Good Moring”, ‘Hello JavaScript’. <br />
       Number: Represents both integer and floating-point numbers. Ex. 15, 55.66, nan, infinity. <br />
       Boolean: Represents a logical value, either true or false. <br />
       Undefined: Represents a variable that has been declared but not assigned a value explicitly. <br />
       Null: Represents an intentional absence of any object value. The type of null is object. <br>
       BigInt: <br> 
       Symbol: <br>
       Object: An object is a complex data type that represents a collection of key-value pairs. <br />
    </p>
    <h3>17. What is NaN property in JavaScript…? Imp</h3>
    <p>
       NaN stands for "Not-a-Number" and is a special value in JavaScript to indicate that a value is not a valid number. <br>
       NaN is returned when an arithmetic operation or a mathematical function fails to produce a meaningful result. <br>
       Typeof of NaN will return a number. <br>
       Use the isNaN() function to check if a value is NaN.
    </p>
    <h3>18. Why the data type of null is an object even after primitive data type...?</h3>
    <p>
       It is a bug in JavaScript that typeof null is an object.<br />
       It should not an object in the conventional sense, as a primitive value. <br />
       Actually, JavaScript uses a type tagging system in memory to classify different data types. <br />
       The type tag for null was erroneously set to the same value as objects, which is why typeof null reports "object."
    </p>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>D. Function :</h2>
    <h3>18. What is function in JavaScript…?</h3>
    <p>
       A function is a reuseable block of code that perform a specific task and return a value. <br />
       JavaScript function is executed when something invoke or call it. <br />
       The main purpose of function is to reuse code/method for different arguments and to produce different results.<br />
    </p> 
    <h3>19. What is function Declaration in javascript...?</h3>
    <p>
       A function declaration is a way to define a reuseable block of code that can be executed when it invoked. <br />
       Function declarations are hoisted in JavaScript. <br />
       Syntax: It is defined with the 'function' keyword, followed by a name and followed by parentheses (…). The parentheses may     
      include parameter names separated by commas. The code to be executed by the function, is placed inside curly brackets {…}. The 
      'return' keyword also used to return the value/output of the function.
    </p>
    <h3> 20. What is the difference between Params and Arguments in function...? Imp</h3>
    <p>
       Parameters : <br />
       Parameters are variables listed in the function definition within the parentheses. <br />
       They act as placeholders for values that will be passed into the function when it is called. <br /><br>
       Arguments : <br />
       Arguments are the actual values or expressions within the parentheses that are passed to a function when it is invoked. <br />
       Argument values passed to function to be used as the values for the parameters. <br />
       The number and order of arguments must match the number and order of parameters in the function definition.
    </p>
    <h3>21. What are the types of functions…?</h3>
    <p>
      Named Function: Functions declared with a unique and meaningful name are referred to as Named Function.<br />
      Anonymous Function: A function declared without any name. This function is used for small logics and single time execution.<br />
      Function Expression: A function expression is a way to define a function in JavaScript by assigning it to a variable. Mostly 
     used for anonymous function and not allow to hoisting.<br />
      Arrow Function: Arrow functions, also known as fat arrow functions, are a concise syntax for defining functions in modern 
     JavaScript. <br />
       Callback Function: A callback function is a function that is passed as an argument to another function. <br />
       Higher-order Function: A Higher-Order function in JavaScript either takes another functions as arguments or returns a function 
      as its result.<br />
       IIFE: IIFE stands for Immediately Invoked Function Expression.
    </p>
    <h3>22. What is Callback Function and it's uses in real application in JavaScript...? Imp</h3>
    <p>
       A callback function is a function that passed into another function as an argument.<br />
       It is invoked inside the outer function to complete the task. <br />
       Callback functions are a fundamental concept in asynchronous programming, allowing to work with events, timers, fetch API and 
      more.<br /><br>
       Uses of Callback Function: <br />
      > Iteration(forEach, map, filter, reduce) <br />
      > Event handling <br />
      > Asynchronous operations(setTimeout, setInterval) <br />
      > Higher-order functions <br />
      > Promises <br /><br />
       Callback Hell : The term Callback Hell is used to describe a situation where multiple nested callbacks make the code difficult 
      to read and maintain during asynchronous operations.
    </p>
    <h3>23. What is IIFE and why IIFE used in JavaScript...? Imp</h3>
    <p>
       IIFE stands for Immediately Invoked Function Expression. <br />
       IIFE executed immediately after function declaration. <br />
       IIFE is used to create a private scope for variables to avoid polluting the global scope. <br />
       It wrap the function within parentheses to turn it into an expression and then invoke it. <br />
       IIFE function must be ended with semicolon.
    </p>
    <h3>24. What are First-Class functions in JavaScript…? Imp</h3>
    <p>
       In a programming language is said to have first-class functions if fuctions are treated like variables. <br> 
       Implication of first-class functions: <br>
      > Functions as Values: Functions can be assigned to variables and stored in data structures. <br>
      > Functions as Arguments: Functions can pass as arguments. This is commonly used in higher-order functions and callback patterns. 
      <br>
      > Functions as Return values: Functions can be returned from other functions, allowing for the creation of closures and the 
      ability to encapsulate state.
    </p>
    <h3>25. What is Pure Function and what are the possible side-effect in JavaScript...? Imp</h3>
    <p>
       A Pure function is a function where the return value is only determined by its arguments without any side effects. <br />
       It always produce the same output for the same input and cannot modify the state.<br />
       A Impure function can produce different outputs for the different input and allow to modify the state.<br />
       Side-effects that make function impure by deafult : <br />
      > Making an HTTP request <br />
      > Asynchronous Function(Promise & Fetch) <br />
      > DOM Manipulations <br />
      > Printing to screen or console(alert() & console.log()) <br />
      > Fetching Current time <br />
      > Math.random
    </p>
    <h3 class="vvi">26. What is Currying Function in JavaScript...? Imp</h3>
    <p>
       Currying is the process of taking a function with multiple arguments and transformed into a sequence of functions, each taking 
      a single argument.<br />
       It allows to apply partial arguments to the function and create new function. <br />
       Currying is useful for creating more reusable, modularity, clarity and create functional pipelines.
    </p>
    <h3 class="vvi">27. Explain Hoisting in JavaScript with example...? Imp</h3>
    <p>
       Hoisting is the default behavior in JavaScript to be assumed, that moving all the declarations at the top of the scope before 
      code execution.<br />
       Before hoisting, we have to know the Code execution process. <br>
       It follows two phases, first is the creation phase where hoisting happen and second is the execution phase where we get output. 
      <br>
       After ES6, only regular function can hoisted . <br />
       Variables declared by var can hoisted and through undefined, but in case let and const the hoisting not work properly and 
      return error. <br>
       JavaScript allow only the declaration to be hoisted, not the initialization (assignment). <br>
    </p>
    <h3 class="vvi">28. What is Closures in JavaScript...? Imp</h3>
    <p>
       A closure is the combination of a function and the lexical environment within which that function is declared.<br />
       The closure can access variables and functions from its containing function, even after the outer function has completed its 
      execution.<br />
       The closure preserves the outer scope reference inside its inner scope. <br />
       Closures are especially useful for preserving data privacy and creating functions with encapsulated state.<br />
       Data Encapsulation : Closures allow to create private variables and encapsulate data within a function, protecting it from 
      being accessed or modified from outside the function.
    </p>
    <h3>29. What are the differences between Laxical Scope and Closure in JavScript...? Imp</h3>
    <p>
       Laxical Scope <br />
      > Lexical scope is called static scope, is about how variables and functions are organized based on the code structure. <br />
      > Lexical scope defines the accessibility and visibility of variables based on their location in nested(inner) functions. <br />
      > Laxical scope act as a provider.<br /> <br>
       Closures<br />
      > A closure is the combination of a function and the lexical environment within which that function is declared.<br />
      > The closure can access variables and functions from its containing function, even after the outer function has completed its 
      execution.<br />
      > Closure act as Consumer. <br>
       In simple word, Laxical scope giving a structure and authority to access data from outer scope to closure and Closure preserves 
      the same data.
    </p>
    <h3>30. What is API and explain about it's method in JavaScript...?</h3>
    <p>
       API stands for Application Programming Interface. <br>
       It is used to enables the communication and exchange data between web browsers and servers. <br> 
       Some common methods and concepts related to working with APIs in JavaScript: <br><br>
       Fetch Method: <br>
      > The fetch() is a modern API function that provides an interface for fetching(sending/receiving) data from resorces. <br />
      > Fetch() is a global method for network(https) request and returning a promise which is fulfilled once the response is 
      available. <br />
      > A fetch() promise only rejects when a network error is encountered.<br>
      > It uses Request[method(get, post, put, delete), heder, body] and Respose[response.json(), response.text(), response.status, 
      response.ok] objects. <br>
      > Syntax: let promise = fetch(url, [option]).then(response).catch(error); <br><br>
       Axios Method: <br>
      > Axios is a popular third-party library for making HTTP requests. <br> 
      > It is used in both browser and Node.js environments and provides a clean and concise syntax for handling asynchronous 
      operations. <br> 
      > Syntax: axios.get/post/put/delete(url[, config]).then(response).catch(error); <br>
      > Configuration options include: params, headers, timeout properties.<br><br>
       XMLHttpRequest Method: <br>
      > The traditional way to make HTTP requests in JavaScript is using XMLHttpRequest. <br> 
      > Syntax: let xhr = new XMLHttpRequest();
    </p>    
    <h3 class="vvi">31. What is call, apply and bind in JavaScript...? Imp</h3>
    <p>
       Call, Apply and Bind are inbuilt methods of JavaScript, used for sharing the methods of object. <br>
       Call(): <br />
      > Call is used to invoke a function with a specified 'this' value and takes arguments individually. <br />
      > It immediately invokes the function. <br />
      > With call(), an object can use a method belonging to another object.
      <br /><br />
       Apply(): <br />
      > Apply is used to invoke a function with a specified 'this' value, but it takes arguments as an array. <br />
      > It also immediately invokes the function. <br />
      > With the apply(), we can write a method that can be used on different objects. <br /><br />
       Bind(): <br />
      > Bind is used to create a new function with a specified 'this' value and potentially pre-set arguments. <br />
      > It does not invoke the function immediately. <br />
      > With the bind() method, an object can borrow a method from another object.
    </p>    
    <h3 class="vvi">32. What is Recursive function in JavaScript…? Imp</h3>
    <p>
       A functon that calls itself within the body during its execution is called a recursive function. <br>
       A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion). <br>
       The base case is what stops the recursion from continuing on forever. It act like a terminating condition. <br>
       This function call itself untill it reaches a base case, where a condition under the function stops calling itself and returns 
      a result. <br>
    </p>
    <h3 class="vvi">33. What is Memoization in JavaScript...?</h3>
    <p>
       Memoization is an optimization technique used to improve the performance of functions by caching their results. <br>
       This is particularly useful for functions that have heavy computation or involve repetitive calculations. <br>
       It doesn't repeat all the work, instead, retrieving the same information from cache and gives the answer quickly. 
    </p>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>E. Array & Objects :</h2>
    <h3>34. What in Array in JavaScript...?</h3>
    <p>
       An Array is a data structure that allows to store and manipulate a collection of values. <br />
       It can holds different data types, such as numbers, strings, objects, or other data. <br />
       Elements in an array can access by index position and the Zero is the first index of an array. <br />
       Array in JavaScript is dynamic, means we can add or remove elements from an array at any time. <br />
       Length property is used to display total numbers of element in an array. <br>
       Elements in an array are ordered. <br>
       Arrays are denoted by square bracket [].
    </p>  
    <h3>35. What is object in JavaScript...?</h3>
    <p>
       An object is a complex data type that represents a collection of key-value pairs. <br />
       It is used to store multiple values, that a combination of values and functions. <br />
       Objects are dynamic, which means we can add, modify, or delete properties at runtime. <br />
       Properties and Methods of an object can access by dot notation or square bracket notation. <br>
       Properties in an object are unordered. <br>
       Objects are denoted by curly braces {}.
    </p>  
    <h3>36. What are the differences between dot notation and bracket notation in Object...?</h3>
    <p>
       Dot notation and Bracket notation are both used to access properties and methods of an object. <br> 
       Dot Notation : <br>
      > Syntax: objectName.property <br>
      > Dot notation requires the property name to be a valid identifier known at the development time. <br>
      > Dot notation cannot access properties with names containing spaces and special characters. <br>
      > Dot notation is more concise and often used when the property names are known in advance. <br><br>
       Square Bracket Notation : <br>
      > Syntax: objectName['property'] <br>
      > Square bracket notation allows for dynamic property access. <br>
      > Square bracket notation is the only way to access properties with names containing spaces or special characters. <br>
      > Square bracket notation is more versatile when dealing with programmatically determined property names.
    </p>
    <h3 class="vvi">37. Explain several ways to create objects in JavaScript…? Imp</h3>
    <p>
       In JavaScript, there are several ways to create objects as per their use cases and advantages. <br />
       Object Literal Notation: Simplest way by define properties and their values within curly braces. <br />
       Object Constructor: Use the "new" keyword with a constructor function. <br />
       Object.create(): Object.create method allows to create a new object with the specified prototype object. <br />
    </p>  
    <h3>38. What is loop…? What are the types of loops in JavaScript…?</h3>
    <p>
       A loop is a programming way to run a set of instruction or code repeatedly until a certain condition is met.<br />
       Types of Loop: <br />
      > For loop : Loops through a block of code for a specific number of iterations.(Initialization, Condition, Increment/Decrement in 
      single line).<br />
      > For/In loop : Loops through the properties of an object. It access the values associated by using keys as the index. <br />
      > For/Of loop : Loops through the values of an iterable object like arrays and strings. It access each value directly without 
      using index. <br />
      > While loop : Loops through a block of code while a certain condition is true. <br />
      > Do-while loop : It is similar to while loop, except that the block of code is executed at least once, even if the condition is 
      false.
    </p>    
    <h3>39. What is the main difference to use for of loop and forEach loop in JavaScript…? Imp</h3>
    <p>
       for of Loop: <br>
      > It is used to iterate over any iterable object like strings, arrays, maps, sets, and other iterable objects. <br>
      > It is suitable to more control over the loop. <br>
      > Here we can use break and continue statement inside loop. <br><br>
       forEach Method: <br>
      > It is used to iterate over an array and perform an action for each element in the array. <br>
      > Here we can not use break and continue statement.
    </p>
    <h3>40. What is the difference between Break and Continue statement in JavaScript…?</h3>
    <p>
       Break: The break statement is used to terminate the loop, when the certain condition is met. <br> 
       It is used to exit a loop prematurely. <br>
       Continue: The continue statement is used to skip the current iteration, if the condition is met. <br>
       It is used to skip the current iteration and move on to the next iteration.
    </p>   
    <h3 class="vvi">41. Explain the differences between foreach() and map() method in JavaScript…? Imp</h3>    
    <p>
       Foreach() and Map() methods are used to iterate over an array and perform an action for each element in the array. <br>
       In ForEach method doesn't craete a new array even not modify the original array. <br />
       forEach() method return undefined instead of new array. <br /><br />
       map() method is used to create a new array based on transformed values without modifying original array. <br />
       map() method return a new array and leave the original array unchanged.
    </p>    
    <h3 class="vvi">42. What is the difference among Map, Filter and Reduce method in JavaScript...? Imp</h3> 
    <p>   
       Map() : <br />
      > map() is a method to iterate over an array and create a new array based on transformation of each element, without modifying 
      original array.<br />
      > Syntax: <br>
      > Example: If we have a list of numbers and want to square each number, we can use the "map" operation to apply the square 
      function to each element in the list. <br /><br />
       Filter() : <br />
      > Filter is a higher-order array method is used to filter the elements from an array according to given conditions and contain in 
      a new array.<br />
      > Syntax: <br>
      > Example: If you have a list of numbers and you want to filter out all even numbers, you can use the "filter" operation with a 
      predicate function that checks if a number is even. <br /><br />
       Reduce() : <br />
      > Reduce is a powerful array method used to iterate through an array and accumulate a single value based on specified conditions 
      applied to the original array. <br />
      > Syntax: <br>
      > Example: If you have a list of numbers and you want to find their sum, you can use the "reduce" operation with an addition 
      function. It starts with an initial accumulator value (e.g., 0) and iterates through the list,
      adding each element to the accumulator.
    </p>
    <h3 class="vvi">43. What is JSON and method of JSON in JavaScript…?</h3>
    <p>
       JSON stands for JavaScript Object Notation. <br />
       JSON is a lightweight data interchange format, which store and transporting data.<br />
       A common use of JSON is to exchange data between a web server. <br />
       Data exchange with web server is always a string. <br />
       Functions and Dates are not allowed in JSON. <br />
      <br />
       Methods of JSON : <br />  
      * JSON.parse(): Convert data to object. <br />
      * JSON.stringify(): Convert data to string.
    </p>  
    <h3>44. What are benefits of using map() instead of loops...? Imp</h3>
    <p>
       The map method provides a concise and expressive syntax for transforming each element of an array. <br>
       It is easier to read and understand. <br>
       It emphasizes immutability by creating a new array with the transformed values instead of modifying the existing array. <br>
       The map method can easily parallelized by JavaScript engines and allowing for better performance in certain scenarios. <br>
       Automatically creates a new array with the transformed values.
    </p> 
    <h3 class="vvi">45. What is the difference between slice and splice method in JavaScript...? Imp</h3>  
    <p>
      Both method used with arrays in JavaScript, but serve for different purposes. <br />
       Slice Method: <br />
      > The slice method is used to extract a portion of an array. <br />
      > It returns a new subset of original array without modifying source array. <br />
      > Syntax: array.slice(start index, end index(excluded)). <br /><br />
       Splice Method: <br />
      > The splice method is used to change the elements of an array by removing, replacing or adding elements to it.<br />
      > It returns the deleted elements as an array and modifies the original array. <br />
      > Syntax: array.splice(startIndex, deleteCount, ...addElements)
    </p>
    <h3 class="vvi">46. Explain the difference betwen shallow copy and deep copy in JavaScript…? Imp</h3>
    <p>
       In JavaScript, the concepts of shallow copy and deep copy are related to copying objects and arrays. <br>
       Shallow Copy : <br>
       A shallow copy creates a new object or array, but it does not create copies of nested objects or arrays. <br>
       Changes made to the nested objects or arrays in the copy are reflected in the original, and vice versa. <br>
       Shallow copying is generally faster than deep copying because it only involves copying references. <br>
       Shallow copy using : Object.assign({}, originalObject). <br><br>
       Deep Copy : <br>
       A deep copy creates a new object or array along with copies of all nested objects or arrays. <br>
       Changes made to the nested objects or arrays in the copy do not affect the original. <br>
       Deep copying is necessary when we want complete independence between the original and the clone. <br>
       Deep copy using: JSON.parse(JSON.stringify(originalObject)).
    </p>
    <h3>47. What is Set Object in JavaScript…?</h3>
    <p>
       The Set object is a collection of unique values, means it is not allowed duplicate values. <br>
       We create a new Set using "new Set()". <br>
       Set method provides properties like add, delete, size and has for data manipulation. <br> 
       Set can be used to remove duplicate values from arrays. 
    </p>
    <h3>48. What are "array like" objects in  JavaScript…?</h3>
    <p>
       In JavaScript, an "array-like" object has some similar characteristics to arrays, i.e. length property and indexed elements. 
      <br>
       Here are types of array like object: <br>
       Arguments: When a function called, it gets access all parameters passed to a function by a special keyword "arguments". <br>
       Strings: Strings can be treated as array-like objects because length property and individual element can access by index. <br>
       HTML Collections: DOM selectors such as querySelectorAll and getElementsByClassName can use length property and access by index.
    </p>
    <h3>49. Explain important String methods in JavaScript…?</h3>
    <p>
       String.length(): Returns the length of a string.  <br>
       String.toUpperCase(): Converts a string to uppercase. <br>
       String.toLowerCase(): Converts a string to lowercase. <br>
       String.replace(): Replaces a specified value with another value in a string. <br>
       String.concat(): Combines two or more strings.<br>
       String.split(','): Splits a string into an array of substrings based on a specified separator.<br>
       String.trim(): Removes whitespace from both ends of a string. <br>
       String.charAt(): Returns the character at the specified index. <br>
       String.indexOf(): Returns the index of the first occurrence of the specified substring. <br>
       String.includes(): Check if a string contains a specified substring and returns true/false.
    </p>
    <h3>50. Explain some important Array methods in JavaScript…?</h3>
    <p>
       Array.push(): Adds elements to the end of an array. <br>
       Array.pop(): Removes the last element from the end of an array. <br>
       Array.unshift(): Adds one or more elements to the beginning of an array. <br>
       Array.shift(): Removes the first element from the beginning of an array. <br>
       Array.concat(): Create new array by combining arrays. <br>
       Array.join(): Join all elements of an array into a single string and allows to specify a separator. <br>
       Array.toString(): Converts an array to a string representation. <br>
       Array.sort(): Sort the elements in alphabetic/ascending order in an array. <br>
       Array.reverse(): Reverse the order of elements in an array. <br>
       Array.slice(): Return a subset of new array from starting index to end index(end index excluded). <br>
       Array.splice():  Used to add, remove or replace the elements in an array(startIndex, deleteCount, ...itemsAdd).<br>
       Array.indexOf(): Returns the index of specified element in an array. <br>
       Array.find(): Return the first element that satisfies the condition and if not return undefined. <br>
       Array.filter(): Return an array of elements that satisfies the condition.
    </p>
    <h3>51. Explain some important Math methods in JavaScript…?</h3>
    <p>
       Math.random(): Returns a pseudo-random number between 0 and 1 (inclusive of 0, but not 1). <br>
       Math.round(): Rounds a number to the nearest integer. <br>
       Math.ceil(): Rounds a number up to the nearest integer. <br>
       Math.floor(): Rounds a number down to the nearest integer. <br>
       Math.max(): Returns the largest numbers. <br>
       Math.min(): Returns the smallest numbers. 
    </p>
    <h3>52. Explain some important methods of Object on JavaScript…?</h3>
    <p>
       Object.keys(objName): Returns an array of a given object's own enumerable property names. <br>
       Object.values(objName): Returns an array of a given object's own enumerable property values. <br>
       Object.entries(objName): Returns an array of a given object's own enumerable property [key, value] pairs. <br>
       Object.assign(objName): Copies the values of all enumerable properties from one or more source objects to a target object. <br>
       Object.freeze(objName): Freezes an object, preventing new properties from being added and existing properties from being 
    removed or modified.
    </p>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>F. DOM and Events :</h2>
    <h3>53. What is DOM and it uses in JavaScript…? Imp</h3>
    <p>
       DOM stands for Document Object Model. The document object represents the whole HTML document. <br>
       DOM is a programming interface that represents and interacts with the structure and content of a web page. <br>
       It creates a tree-like representation of document, where each element, attribute and content in the document is a node in the 
      tree. <br>
       DOM allow to access, manipulate, update and respond to user actions on a web page, called DOM Manipulation. <br>
       It plays a crucial role in web development and enables the creation of dynamic and interactive web applications.
    </p>
    <h3>54. What are the Selectors in JavaScript…?</h3>
    <p>
       Selectors in JavaScript refer to a mechanism used to select specific HTML elements from DOM based on IDs, class and tag names. 
      <br>
       Methods of DOM selector : <br>
      > document.getElementById("idName"): Access single element(First default) <br>
      > document.getElementsByClassName("className"): Access multiple elements(HTML Collections) <br>
      > document.getElementsByTagName("tagName"): Access multiple elements <br>
      > document.querySelector("#idName / .className / tagName"): Access single(default first) <br>
      > document.querySelectorAll(".className / tagName"): Access multiple elements <br>
    </p>
    <h3>55. What are the Properties and Methods in DOM manipulation...?</h3>
    <p>
       DOM properties provide information about and allow manipulation of objects. <br> 
       Here are some important properties in the DOM: <br><br>
       Create and Append Elements : <br>
      > createElement: Create new element.<br>
      > appendChild: Use to append the new created element to document.<br>
      > cloneNode: Copy the existing element with all attributes.<br><br>
       Element Properties: <br>
        > tagName: Returns the tag name of an element in uppercase. <br>
        > className: Gets or sets the value of the class attribute of an element. <br>
        > id: Gets or sets the value of the id attribute of an element. <br>
        > innerText: Returns the text content of the element and all its children. <br>
        > innerHTML: Gets or sets the HTML content within an element. <br>
        > textContent: Gets or sets the plain text content of an element. <br>
        > style: Provides access to the inline style of an element. <br> <br>
       Attribute Properties: <br>
        > getAttribute(name): Gets the value of a specified attribute. <br>
        > setAttribute(name, value): Sets the value of a specified attribute. <br>
        > removeAttribute(name): Removes a specified attribute. <br> <br>
       ClassLists: <br>
        > classList.add: Add new class to an element. <br>
        > classList.remove: Remove existing class from an elements. <br>
        > classList.toggle: 
       Node Properties: <br>
        > parentNode: References the parent node of an element. <br>
        > childNodes: Represents a collection of child nodes as a NodeList. <br>
        > firstChild: References the first child node of an element. <br>
        > lastChild: References the last child node of an element.
    </p>
    <h3 class="vvi">56. What is the use of Event Handling in JavaScript...? Imp</h3>
    <p>
       Event Handling is the process of responding to user actions in a web page. <br />
       The addEventListener method of JavaScript allows to attach an event and with a function that event perform on the web page. <br 
      />
       It play a crucial role in creating interactive and dynamic web applications. <br>
       Syntax: selectedElement.addEventListener('click', function() {//codes}); <br>
       Some Important Event Handlers are : <br />
       Mouse Events(click, dblclick, mouseover), Keyboard Events(keyup, keydown), Form Events(submit, change, focus), Window 
      Events(load, resize, scroll).
    </p>  
    <h3>57. What is Event Objcet in JavaScript…? Imp</h3>
    <p>
       An event object is an object that contains information about an event that has occurred. <br>
       Event objects are automatically created by the browser and passed as a parameter to event handler functions when an event 
      occurs. <br>
       The event object has various properties and methods: event.type, event.target, event.clientX, event.clientY. <br>
       It has a preventDefault method that can be called to prevent the default behavior[event.preventDefault()].
    </p>
    <h3>58. What is Event Delegation in JavaScript…? Imp</h3>
    <p>
       Event delegation is a technique, which attach a single event handler to a common ancestor of multiple elements. <br>
       This is useful when a large number of similar elements, as it reduces the number of event handlers. <br>
       The benefits of event delegation include reduced memory consumption, improved performance, and the ability to handle 
      dynamically. <br>
       Event delegation is particularly useful when dealing with lists, tables, or other collections of elements.
    </p>
    <h3 class="vvi">59. What is Event Propagation/Flow in JavaScript...? Imp</h3>
    <p>
       Event Propagation is a way of defining the element order when an event occurs in a web page. <br />
       There are two ways of Event Propagation in HTML DOM: <br />
      > Event Capturing : In event capturing the outer most element's event is handled first and then moving towards the inner 
      elements. <br />
      > Event Bubbling : In event bubbling the inner most element's event is handled first and then moving towards the outer elements.
    </p>
    <h3 class="vvi">60. What is Event loop and how it works in JavaScript...? Imp</h3>
    <p>
       The event loop is a mechanism in JavaScript that allows to execute code asynchronously. <br>
       The event loop continuously checks the call stack and the callback queue. <br>
       When call stack is empty, the event loop takes the first function from the callback queue and pushes it to call stack for 
      execution. <br>
       After completing execution, it removed from the stack in a last-in-first-out (LIFO) manner. <br>
       The event loop is responsible for making JavaScript responsive and interactive.
    </p>
    <h3>61. What is the difference between Debouncing and Throttling in JavaScript…?</h3>
    <p>
       Debouncing is a technique where delay the execution of a function until after a certain amount of time has passed. <br>
       This is useful for frequently used function, like search, scroll or resize event listener. <br>
       Decreases the frequency of invoked function, which can enhance performance and avoid pointless effort. <br>
       Throttling is a similar technique to debouncing, instead of delaying the execution of a function, it limits the rate at which a 
      function <br>
    </p>
    <h3>62. What is Browser Object Model(BOM)...?</h3>
    <p>
      > The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. <br />
      > It consists of the objects navigator, history, screen, location and document which are children of the window.<br />
      > There are no official standards for the Browser Object Model (BOM). .
    </p>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    <h2>G. Asynchronous :</h2>
    <h3 class="vvi">61. What are differences between Asynchronous and Synchronous operations in JavaScript...? Imp</h3>  
    <p>
      Synchronous : <br />
       JavaScript is a single-threaded and synchronous by default. <br>
       Synchronous is a process of executing the code one after another in a sequential order. <br />
       This operation block the main program flow untill the current task is completed. <br />
       Synchronous operations are predictable and straightforward because they occur in order they are written.<br /><br />
      Asynchronous : <br />
       Asynchronous operations allow the program to executing multiple tasks parallelly without waiting for the current task to 
      complete. <br />
       Asynchronous operation is essential for resposive web applications and avoid time consuming. <br />
       JavaScript provides mechanisms like callbacks, setTimeout, setInterval, promises and Async/await with asynchronous code. <br /> 
      <br />
    </p>  
    <h3 class="vvi">62. What is Promises in JavaScript...? Imp</h3>
    <p>
       A Promise is an object in JavaScript, which represents the eventual completion or failure of an asynchronous operations. <br />
       It is an alternative approach for callbacks by reducing the callback hell and writing the cleaner code. <br>
       A promise represents a value that may not be available yet but will be available at some point in the future.<br />
       Promise can be in one of 3 states : pending, resolved or rejected. <br />
       Use of promise in real applications: API Calls, File Handling, Data Fetching, Event Handling and Animations. <br> 
       Syntax : const promise = new Promise((resolve, reject) => { //Asynchronous operations //If successful, call resolve(value) //If 
      failed, call reject(error)}); <br>
       Promise.all() method is used to handle multiple promises concurrently. <br>
       Promise Chaining : The process of executing a sequence of asynchronous tasks one after another using promises is known as 
      Promise chaining.
    </p>
    <h3>63. What is Async/await in JavaScript…? </h3>  
    <p>
       The async keyword is used to define a asynchronous function, which means the code inside async function will not block the 
      execution of other code.<br>
       The await keyword is used only inside an async function to pause the execution of the function until the promise is resolved or 
      rejected. <br>
       An async function always returns a promise. <br> 
       It provides more concise and synchronous-looking syntax for working with promises. <br>
       An async function can contain zero or more await expressions.
    </p>
    <h3>64. What is purpose of Async/Await, compare with promises...? Imp</h3>
    <p>
       Async/await and Promises are both features in JavaScript that deal with asynchronous programming. <br>
       Async/await is more modern and convenient way to work with asynchronous code in JavaScript. <br>
       It provides a cleaner and more readable syntax, bcz more sequential manner of writing asynchronous code. <br>
       Error handling in async/await is done by using try-catch blocks and make more similar to synchronous error handling. <br>
       On the other hand, Promise also used more widely and useful, where async/await is not applicable or necessary.
    </p>
    <h3 class="vvi">65. What is SetTimeout and SetInterval in JavaScript…?</h3>
    <p>
       SetTimeout : The setTimeout() is a built-in JavaScript function that allow to schedule the execution of a function after a 
      specified delay asynchronously. <br>
       SetInterval : The setInterval() is a built-in JavaScript function that allow to repeatedly execute a function at a specified 
      intervals asynchronously. <br>
       Syntax: setTimeout/setInterval(function, delay, param1, param2, ...); <br>
       Both functions return timer ID to clear the scheduled function executions using clearTimeout and clearInterval. <br>
       Both setTimeout and setInterval functons are used milliseconds for delaying time.
    </p>
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    <h2>H. OOP (Object Oriented Programming) :</h2>
    <h3 class="vvi">66. What is OOP in JavaScript...?</h3>
    <p>
       OOP stands for Object-Oriented Programming. <br />
       OOP is a programming paradigm that uses objects and classes to organize and structure the code. <br />
       Objects have properties(variables) and methods(functions) are used to represent and manipulate data. <br />
       OOP in JavaScript is based on the concept of prototypes. <br><br>
       There are 4 main principles in OOP : <br />
      > Abstraction: Abstraction is the act of hiding unnecessary details about user by creating classes and objects. <br />
      > Encapsulation: Encapsulation is the act of bundling data and methods together into a single unit and protect data from outside 
      to get access & modify.<br />
      > Inheritance: Inheritance is the act of creating new class from an existing class by inheriting properties and methods and 
      promoting code reusability. <br />
      > Polymorphim: Polymorphism allows objects of different types to be treated as objects of a common type.
    </p>
    <h3 class="vvi">67. What is "this" keyword and its purposes in JavaScript...? Imp</h3>
    <p>
       "this" keyword refers to the current execution context or scope. <br />
       It clearify the confusion between the key and the parameter. <br />
       It is commonly used in constructors to assign the values to object properties. <br>
       Some use cases of this keyword: <br />
      > In global scope, It return window object means global object. <br>
      > Inside Function, this keyword represents undefined during strict mode. But in non-strict mode replaced to global object. <br>  
      > Inside Object, return the object property and value. <br>
      > Inside DOM, reference to HTML element.
    </p>  
    <h3>68. What is class in JavaScript...?</h3>
    <p>
       A Class is a template for creating objects with similar properties and methods. <br />
       ECMAScript 2015, also known as ES6, introduced JavaScript Classess.<br />
       Syntax: Use the keyword class to create a class and always add a method named constructor(). <br>
       A Constructor is a special type of method within classes that are automatically called when an object is created using new 
      keyword.
    </p>  
    <h3>69. What is Class inheritance in JavaScript...?</h3>
    <p>
      > Class inheritance in JavaScript allows to create a subclass that inherits properties and methods from a base class or supper 
      class. <br />
      > The subclass can reuse and extend the functionality of the super class by using 'extends' keyword.
    </p>  
    <h3 class="vvi">70. What is Prototype in JavaScript ...?</h3>
    <p>
       Every object in JavaScript has a built-in property, which is called its prototype. <br>
       The prototype is a fundamental concept that allows objects to inherit properties and methods from other objects. <br>
       It's a way to share and reuse functionality among objects.
    </p>
    <h3>71. What is a Prototype chain in JavaScript...?</h3>
    <p>
      > The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects through their 
      prototype objects.<br />
      > Every object has a property called __proto__ or [Prototype]. <br />
      > Access a property or method on an object, JavaScript checks that property exists or not. If not looks up the prototype chain to 
      find in the prototype object. <br />
      > This process continues until it reaches the end of the prototype chain or finds the desired property/method.
    </p>  
    <h3>72. What is the difference between prototype and __proto__ in JavaScript...?</h3>
    <p>
       prototype is a property of constructor functions that defines the methods and properties to be shared among instances. <br>
       __proto__ is an internal property of objects used to access their prototype and is generally not recommended for direct use. 
     </p>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>Advanced :</h2>
    <h3>74. Explain Static type vs Dynamic type...?</h3>
    <p>
       JavaScript is a dynamic type language, where type can be changed.<br />
       C, C++ and Java are static type language, where types are strict.<br />
       TypeScript is a strict version of JavaScript, which allows static-typing. <br />
       The Static-type makes code more verbose and less prone to errors. <br />
       TypeScript is designed by Microsoft.
    </p>
    <h3 class="vvi">75. What is a strict mode in javascript...? Imp</h3>
    <p>
       Strict Mode is introduced in ES5 that allows a program in a “strict” operating context. <br />
       It enhance the language by catching errors in advance, preventing global variables, restrict the use of reserved keywords and 
      prohibit duplicate name etc.<br />
       The "use strict" directive is used to enable strict mode in code.
    </p>
    <h3>76. What is Call Stack and Heap memory in JavaScript...?</h3>
    <p>
      JavaScript uses automatic memory management through a mechanism called the "heap" and "call stack." <br />
       Call Stack : <br />
      > The call stack is a data structure that keeps track the execution of code. <br />
      > The primitive data types are stored directly in stack memory. <br />
      > When a JavaScript function is called, it added to the top of the call stack. <br />
      > As function completed execution, it removed from the stack in a last-in-first-out (LIFO) manner. <br /><br />
       Heap Memory : <br />
      > The heap is a region of memory where JavaScript engines allocate memory for objects. <br />
      > Objects like arrays, objects, functions, and other complex data types are stored in the heap. <br />
      > Heap allocating memory for new objects and releasing memory when objects are no longer referenced or needed.<br />
    </p>
    <h3>77. What is Web Storage and its uses...?</h3>
    <p>
       The Web Storage is used to store data locally within the browser. <br>
       There are two types of web storage: Local Storage and Session Storage. <br>
       Some important uses of web storage : <br>
      > Storing user preferences or settings(theme selection, language preference, etc). <br>
      > Caching data to improve performance. <br>
      > Remembering user Actions and State. <br>
      > Implementing Offline functionality. <br>
      > Storing client side Tokens.
    </p>
    <h3>78. What are the differences between Local storage and Session Storage in HTML5…? Imp</h3>
    <p>
       Local storage and Session storage are two web storage by HTML5 that allow to store data by the users locally. <br />
       They are similar in many ways but have some few key differences: <br /><br />
       Local Storage: <br>
      > Data stored in localStorage is accessible across multiple windows and tabs of same origin(domain). <br />
      > Data stored in localStorage persists even after the browser is closed or reopened. <br>
      > Data remains available in local storage until manually cleared by the user or removed programmatically. <br />
      > Local Storage offers a larger storage limit compared to Session Storage. <br /><br />
       Session Storage: <br>
      > Data stored in sessionStorage is specific to a particular browsing session and accessible only within the same window. <br>
      > Data stored in sessionStorage is cleared automatically, when browser window or tab is closed. <br />
      > Data stored in sessionStorage is temporary and available only for the duration of the browsing session. <br />
      > Session Storage has a smaller storage limit compared to Local Storage. <br>
      > Session storage may be a better option for projects that handle sensitive information.
    </p>
    <h3>79. Explain about different methods applying to Local storage and Sessionstorage...?</h3>
    <p>
       Methods of Local Storage : <br />
      > localStorage.setItem(key, value): Stores a key-value pair in local storage. <br />
      > localStorage.getItem(key): Retrieves the value associated with the specified key. <br />
      > localStorage.removeItem(key): Removes an item with the specified key from local storage. <br />
      > localStorage.clear(): Clears all items in local storage. <br />
      > localStorage.hasOwnProperty(key): Returns true if the key exists in local storage, otherwise false. <br /><br />
       In Session Storage also the same methods, like local storage, only the 'local' keyword will replace to 'session'.
    </p>
    <h3>80. What is a Cookie...?</h3>
    <p>
       Cookies are the small piece of data that is stored in the user's browser. <br />
       Cookies are saved as key/value pairs. <br />
       It is commonly used by websites to remember information about the user's browsing activity, preferences, and interactions with 
      site. <br>
       Types: Session cookies are romoved when close the browser, and Persistent cookies are stored for a longer period.
    </p>
    <h3>3. What is IndexedDB and explain about the basic patterns...?</h3>
    <p>
         IndexedDB is a web browser API, that allows web applications to store and retrieve large amounts of structured data locally. 
        <br>
         It create and manage client-side databases asynchronously. <br>
         It enable offline storing, that improved performance and better user experiences. <br>
         It is more powerful than local storage. <br><br>
         Basic Patterns: <br>
        > Open a database using the indexedDB.open() method. <br>
        > Create an object store in the database using createObjectStore() method. <br>
        > Start transaction and make a request to do some database operation using transaction(['objName'], 'readwrite/readonly') 
        method. <br>
        > Wait for the operation to complete by listening to the right kind of DOM event. <br>
        > Provide response with result.
    </p>
    <h3 class="vvi">81. What is Debugging in JavaScript...?</h3>
    <p>
       Debugging is the process of testing, finding and fixing errors, bugs or unexpected behaviour in code. <br />
       Programming code might contain syntax errors or logical errors or reference errors or type error etc. <br />
       The goal of debugging is to understand how a program is executing, locate the source of a problem, and make corrections the 
      code. <br>
       Console.log() statements is a common practice for logging information to the console during debugging. <br />
       The debugger keyword use to stops execution of JavaScript and allowing to inspect the program's state.
    </p>    
    <h3>82. What is happens behind the scenes when the "new" keyword is used in JavaScript…?</h3>  
    <p>
      > The new keyword initiates the creation of new object in JavaScript. <br />
      > The new object gets linked to the prototype property of the constructor function. <br />
      > The constructor function is called with specified arguments. <br />
      > After the constructor function has been called, if it does not return a non-primitive value, then the newly created object is 
      returned.
    </p>  
    <h3>83. Explain code execution process in JavaScript...?</h3>
    <p>
       Code execution follows a two-phase process: the creation phase (hoisting) and the execution phase. <br />
       These phases are part of the JavaScript runtime's process for handling code. <br /><br /> 
       Creation Phase (Hoisting): <br />
      > During the creation phase, the JavaScript engine scans the code and sets up the following: <br />
      > Variable declared names are registered in the current scope, are initialized with the value undefined. <br />
      > Function declarations are also hoisted to the top of their containing scope. <br />
      > However, the assignments (the actual values) of variables are not hoisted, only the declarations. <br /><br />
       Execution Phase: <br />
      > After the creation phase, the JavaScript engine proceeds to the execution phase, where it executes the code from top to bottom. 
      <br />
      > Variables are assigned their actual values during the execution phase. <br />
      > Functions declared during the creation phase are available for execution. <br />
      > Variables declared with let and const, do not exhibit the same hoisting behavior with var, but they are still subject to the 
      two-phase process. <br />
      > The JavaScript engine maintains a stack of execution contexts, called the "call stack." When a function is called, a new 
      execution context is
      pushed onto the stack. When the function completes, its execution context is popped off the stack.
    </p>
    <h3>84. Explain about Exception/Error handling and best practices for handling error in JavaScript…?</h3>
    <p>
       Error handling in JavaScript is the process of dealing with errors that may occur during the execution of a program. <br>
       Errors can happen for various reasons, such as incorrect user input, network issues, or unexpected runtime conditions. <br> 
       Effective error handling is crucial for building robust and maintainable JavaScript applications. <br>
       Here are some best practices for error handling in JavaScript: <br>
      > Use Try-Catch Blocks: Wrap code inside a try block for exception and handle exceptions using a catch block. This helps prevent 
      from crashing application. <br>
      > Provide Descriptive Error Messages: When catching an exception, display a descriptive error message. This helps providing 
      useful information about the nature of the error. <br>
      > Throwing Custom Errors: Use the throw statement to create and throw custom error objects. It provide additional information 
      about the context and nature of the error.<br>
      > Logging Errors: Log errors to a centralized logging system or console. This helps in tracking and diagnosing issues in a 
      production environment.
    </p>
    <h3>87. What are the difference between JavaScript and Java...?</h3>
    <p>
       JavaScript : <br>
      > JavaScript is an object-oriented scripting language. <br>
      > JavaScript is prototype-based, where objects can serve as prototypes for other objects. <br>
      > JavaScript is dynamic-type, allow variables to hold values of any type without explicit type declarations and type checking is 
      done at runtime. <br>
      > JavaScript mainly used for enhancing the functionality of web pages. But the advent of Node.js can also use for server-side 
      development. <br><br>
       Java : <br>
      > Java is an object-oriented programming language. <br>
      > Java is a class-based, object-oriented programming language. <br>
      > Java is a static-type language, means that variable types are explicitly declared and checked at compile-time. <br>
      > Java is used for building operating systems, mobile apps (Android), enterprise-level server-side applications.
    </p>
    <h3>88. What is console and explain different methods of console...?</h3>
    <p>
       The console is an object that provides access to the browser's debugging console. <br />
       Console object is a property of window object. <br />
       Console Uses REPL, that is Read -> Evaluate -> Print -> Loop. <br /><br />
      Some Important methods used in console are : <br />
      > console.log(): Used to log messages to the console and often used for debugging and display variables values.<br />
      > console.error(): Used to log error messages to the console with a distinctive appearance. <br />
      > console.warn(): Warning messages with a distinctive appearance. <br />
      > console.table(): Display data in tabular format. <br />
      > console.group/gropuEnd(): Group console output into collapsible blocks.<br />
      > console.clear(): Clears the console, remove all previous log messages and output. <br />
      > console.count(): Useful for tracking how many times a particular code or function has been executed. <br />
      > console.info(): Provide additional informationabout data. <br />
      > console.dir(): Useful for inspecting the structure and properties of complex objects like arrays, objects or DOM elements.
    </p>  
    <h3>89. What is Git...?</h3>
    <p>
       Git is a version control system, it helps us to track the changes made in our code/projects. <br>
       It is the most popular version control system in software development field. <br>
       It is free and open source software. <br>
       It is fast and scalable, can be used in large project. <br>
       It is use to track the history of code and help to collaborate. <br>
       Flow: GitHub repo => clone => changes => add => commit => push
    </p>
    <h3>90. What is GitHub...?</h3>
    <p>
       Github is a website used by developers to store and manage their codes/projects with the help of Git. <br>
       On GitHub, projects are stored in folder structure that is known as "repository" in sort called "repo".
    </p>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <h2>ECMAScript 6</h2>
    <h3>91. What is ECMAScript(ES) and explain about important versions of ES introduced in JavaScript…?</h3>
    <p>
       The name "ECMAScript" is derived from the organization that standardizes the specification, the European Computer Manufacturers 
      Association (ECMA). <br>
       ECMAScript provides the rules, guidelines and functionality that developers and browser vendors must follow to implement the 
      scripting language. <br>
       ES5(2009) and ES6(2015) come with major features. <br> 
       ES6  was the major leap forward for JavaScript introducing many syntactic and structural enhancements. <br>
       The last and updated versionof ECMAScript is ES12(ECMAScript 2021).
    </p>
    <h3>92. Explain some features in ES6...?</h3>
    <p>
       ES6 (ECMAScript 2015) a different versions of the ECMAScript standard with several new features and improvements. <br>
       ES6 make JavaScript code more readable, maintainable, and expressive. <br> 
       Here are some key features introduced in ES6 : <br>
      > ES6 introduced let for reassignment and const for constant reference. <br> 
      > ES6 introduced arrow functions, providing a concise syntax for writing anonymous functions. <br>
      > ES6 introduced template literals, a convenient way to work with strings and include variables by using backticks compared to 
      traditional string concatenation. <br>
      > ES6 allows to set default values for function parameters, but it has less priority than arguments. <br>
      > ES6 introduced a more familiar class syntax for creating objects and dealing with inheritance. <br>
      > ES6 introduced destructuring assignment, allowing to extract values from arrays or properties from objects and assign them to 
      variables in a concise manner. <br>
      > ES6 introduced the spread operator to spread the contents and rest operator to collects the remaining infinite arguments into 
      an array.
    </p>
    <h3 class="vvi">93. What are the differences between var, let and const…? Imp</h3>
    <p>
       var: <br />
       The var keyword is used to declared a variable with function scope or global scope. <br />
       Var allows to re-declare and re-assign the value. <br />
       Variables declared with var are hoisted, means can access before it's declaration. <br />
       Var is not recommended to use, after ES6 due to naming conflict.<br /><br>
       let: <br />
       The let keyword is used to declare a variable with block-scoped.  <br />
       Let cannot be redeclared but can re-assign the value. <br />
       Variables declared with let are hoisted, but not initialized. <br /><br />
       Const: <br />
       The const keyword is used to declare a constant value with block scope.<br />
       Const does not allow to re-declare and re-assign the reference. But values in objects and arrays can modify.<br />
       Variables declared with const are also hoisted, but not initialized.
    </p>
    <h3 class="vvi">94. What is Temporal Dead Zone in JavaScript…?</h3>
    <p>
       The Temporal Dead Zone(TDZ) refers to a specific behavior related to the hoisting of variables declared with the let and const 
      keywords. <br>
       When we declare a variable using var, it gets hoisted to the top of its scope and return undefined. <br> 
       Where let and const declarations also get hoisted, but not the initialization and return reference error, this behavior called 
      TDZ. <br>
       The TDZ is the time between entering the scope where the variable is declared and the actual initialization of the variable. 
    </p>
    <h3 class="vvi">95. What are Template Literals and String Interpolation in JavaScript...?</h3>
    <p>
       Template literals, introduced in ES6, provide a convenient way to concatenation strings in JavaScript by using backticks``. <br>
       Template literals allow Inject variables & functions, Multiline strings, Expression evaluation, use conditional statement and 
      use quotations inside. <br>
       Template literals offer several advantages: <br>
      > String Interpolation: Expressions inside ${} are evaluated and inserted into the string, making it easy to include variables or 
      expressions. <br>
      > Multiline Strings: Template literals allow multiline strings without the need for explicit line breaks. <br> 
      > Tagged Templates: Template literals can be tagged with a function and receives the literals and interpolated values as 
       arguments.
    </p>
      <h3 class="vvi">96. What are the differences between Spread Operator and Rest Operator in JavaScript…? Imp</h3>  
    <p>
       Spread Operator and Rest Operator introduced in ES6. <br>
       Both parameter, denoted by "...". <br>
       Spread Operator : <br />
      > It allows to spread/expand the elements of an iterable array/object into another array/object. <br />
      > It's primarily used for creating shallow copies, merging and adding elements from iterable data structures. <br />
      > The spread operator is a convenient and concise way to work with arrays and objects. <br /><br />
       Rest Operator : <br />
      > It allows to collects the remaining arguments into an array. <br />
      > We can destructure elements from an array using the rest operator. <br />
      > The rest operator simplifies the handling of infinite argument lists. <br />
      > Rest operator always keep at the end of parameter. <br> 
    </p>  
    <h3 class="vvi">97. What is the difference between Arrow function and Regular function in JavaScript…? Imp</h3>
    <p>
       Arrow functions and Regular functions in JavaScript have some key differences in their syntax, behavior, and use cases. <br /> 
      <br />
       Arrow Function : <br />
      > Arrow functions is also known as Fat arrow function use a concise syntax with the => arrow operator. <br />
      > It allow to use single expression with an implicit(without) return keyword. <br />
      > Arrow functions do not have their own this context, so inherit from global context. <br />
      > Arrow functions do not have their own arguments object, so inherit from global scope. <br />
      > Arrow functions cannot be used as constructor functions with the new keyword. <br /><br />
       Regular Function : <br />
      > Regular functions are defined using the 'function' keyword. <br />
      > It is also allow single expression, but with explicit return (uses the return statement). <br />
      > Regular functions have their own this context. <br />
      > Regular functions have their own arguments object. <br />
      > Regular functions can be used as constructor functions with new keyword and allow to create objects.
    </p>
    
