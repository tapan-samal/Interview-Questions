<h2>TypeScript Interview Questions</h2>
    <h3>01. What is TypeScript...?</h3>
    <p>
       TypeScript is a free and open-source high-level programming language for adding static type definitions in JavaScript. <br>
       It is also called superset of JavaScript and provides compile-time type checking and help in writing more robust and maintainable code. <br>
       TypeScript syntax does not understand by the browser, so TypeScript transpiler convert the syntax to regular JavaScript before execution. <br>
       It is developed and maintained by Microsoft.
    </p>
    <h3>02. What are the advantages of TypeScript...?</h3>
    <p>
       Provide type safety. <br>
       Improve code quality by catch errors at compile time. <br>
       Strict null checks. <br>
       Build scalable and maintainable JavaScript applications. <br>
       Allow to define interfaces, which describe the structure of objects. <br>
       Large and active community support.
    </p>
    <h3>03. What is Type Inferencing in TypeScript...?</h3>
    <p>
       A feature in typescript, that allows the typescript complier to automatically determine the type of variables based on its value. <br>
       It reduce boilerplate by not explicitly specify the types. <br>
       Types of inference in TypeScript: <br>
      > Variable declaration: Types as number, string, boolen etc. <br>
      > Function return types: As parameters type.<br>
      > Contextual typing: As context type. <br>
      > Mixed types in an array. 
    </p>
    <h3>04. What is Contextual typing in TypeScript...?</h3>
    <p>
       A form of type inference where the type of a variable or expression is inferred based on the context in which it is used <br>
       This happens when passing functions as arguments, assigning functions to variables, or working with object properties.
    </p>
    <h3>05. What are the common Basic Types in TypeScript...?</h3>
    <p>
       Boolean: Represents true/false values. <br>
       Number: Applies to both integer and floating-point numbers. <br>
       String: Refers to textual data. <br>
       Array: Offers a flexible way to work with structured data. <br>
       Tuple: Array that specify different data types. <br>
       Enum: Provides a set of named constants. <br>
       Any: Opt-out of type checking for a variable. <br>
       Void: Typically used as the return type for functions that don't return a value. <br>
       Null and Undefined: Allow for the assignment of null and undefined values. <br>
       Never: Represents the type of values that never occur. <br>
       Object: Any JavaScript object. <br>
       Function: Denotes a function type.
    </p>
    <h3>06. What is "any" type in TypeScript...?</h3>
    <p>
       Any type in TypeScript is a special type that allows to opt-out of type checking for a variable. <br>
       It behave like normal JavaScript and losing typescript benefits. <br>
       It is useful in certain situations where need more flexibility, like when dealing with third-party libraries and dynamic content. <br>
       Here, we can re-assign any data type to a variables. 
    </p>
    <h3>07. What is tuples in TypeScript...?</h3>
    <p>
       Tuples are a special type of array that allows to specify mixed types of elements at specific positions within the array. <br> 
       It enforce a fixed length and order of elements with known types. <br>
    </p> 
    <h3>08. What is Enums in TypeScript...?</h3>
    <p>
       In TypeScript, an enum (enumeration) is a way of defining a set of named constants. <br> 
       Enums are useful for representing a collection of related values that can be assigned to a variable. <br>
       Types of Enums: <br>
      > Numeric enums: Values are auto-incremented starting from 0 (by default) or from a specified value. <br>
      > String enums: It allow to assign custom string values to the members. <br> 
      > Heterogeneous enums: It allows enums to have both string and numeric members.
    </p>
    <h3>09. WHat is Never type in TypeScript...?</h3>
    <p>
       The never type in TypeScript represents values that never occur. <br>
       It is a type that indicates the absence of any value and is used to signify that a function never returns or always throws an error. 
    </p>
    <h3>10. What is Union types in TypeScript...?</h3>
    <p>
       Union types allow a variable to hold more than one type of value. <br>
       It provide flexibility while maintaining type safety. <br>
       Union type using the "|" (pipe) symbol.
    </p>
    <h3>11. What is interface in TypeScript...?</h3>
    <p>
       Interface is a feature of TypeScript that allows to define the structure or shape of an object. <br>
       It specify the properties and methods that an object has or should have. <br>
       Allow to extend an interface by using "extends" keyword and create a new interface.
    </p>
    <h3>12. What is type aliases in TypeScript...?</h3>
    <p>
       Type aliases in TypeScript are a way to give a custom name to an existing type. <br>
       This can be useful for making code more readable and maintainable, especially when working with complex types. <br>
       It is used for wide range of type, i.e. primitive type, union type, function type etc.
    </p>
    <h3>13. What is Triple-slash(///) in TypeScript and its uses...? </h3>
    <p>
       Triple-slash directive is a special kind of single-line comment and containing a single XML tag. <br>
       The content of the comment is used to provide information to the compiler. <br>
       Triple-slash directives must appear at the top of the file, before any other statements or comments. <br> 
       Some use cases of ///: <br>
      > Used to reference declaration external files path. <br>
      > Used for adding type definitions for external libraries. <br>
      > Used to specify the set of libraries to be included.
    </p>
    <h3>14. What is Generics in TypeScript...?</h3>
    <p>
       Generics in TypeScript allow to create reusable components. <br>
       It works with variety of data types without sacrificing type safety. <br>
       Generics are represented by type parameters, which act as placeholders for types. <br>
       These parameters are specified within angle brackets and can be used throughout the code to define types. <br>
       This makes the code more flexible and scalable.
    </p>
    <h3>15. What is the "tsconfig.json" file?</h3>
    <p>
       It allow to list various settings in the tsconfig.json file, which is in JSON format. <br> 
       This tells the compiler how to compile a project.  <br>
       This file is the TypeScript project root because it is in the directory.
    </p>
