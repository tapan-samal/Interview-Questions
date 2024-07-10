JS Variables and Keywords:

Important question - Explain Difference between Var, Let and Const.
1. Create a function that calculates the area of a rectangle. Inside the function, use Var to declare variables for the length and width, as they might change. Use Const to declare a variable for the formula used to calculate the area, as it remains constant.
2. Write a for loop to iterate over an array of numbers. Use let to declare the loop variable as it needs to be re-assigned for each iteration.
3. Implement an event listener for a button click event. Use let to declare a variable inside the event listener function to keep track of the number of times the button is clicked.
4. Create a block of code, such as an if statement or a loop. Inside the block, use let to declare variables that are only relevant within that block and shouldn't leak outside.
5. Simulate a scenario where you need to reassign a variable. Use let for such variables. For example, in a game, you might need to update the player's score.
6. Write nested loops where the inner loop reuses the loop variable of the outer loop. Use let for the inner loop variable to avoid unexpected behavior.
7.Use const to declare variables that hold references to objects. Even though the object itself may be modified, the reference remains constant.
8. In try-catch blocks, use let for variables that may be reassigned inside the catch block to handle errors gracefully without causing unexpected behavior.
Scenario based Questions –
1.How would you use const to declare configuration values for a web application, such as API endpoints or default settings? Explain why const is suitable for this scenario.
2. In a scenario where you need to iterate over an array and modify its elements, which keyword (var, let, or const) would you use to declare the loop variable? Justify your choice with an example.
3. Explain the difference in scope between variables declared with var and let inside a loop. Provide an example where this difference affects the behavior of the code.
4. Describe a situation where you might need to reassign a variable in your code. Would you use let or const for such variables? Justify your choice with a practical example.
5. How would you use const to declare constants in a JavaScript module? Provide an example of a constant that should not be modified outside the module.
6. When adding event listeners to DOM elements, which keyword (var, let, or const) would you use to declare variables that hold references to the elements? Explain your reasoning
7. Discuss a scenario where block scoping (introduced by let and const) is advantageous. Provide an example where block scoping helps prevent variable leakage and improves code clarity.
8. How can you use let or const in try-catch blocks for error handling? Explain with an example how using these keywords helps manage variable scope and prevents unintended behavior.
9. (I.Q) Describe the concept of hoisting in JavaScript variables. Provide an example where var behaves differently from let or const due to hoisting.
10. Explain why it's beneficial to use const to declare global constants in JavaScript applications. Provide an example of a global constant and explain why it should not be re-assigned.

<---------------------JS Operators-------------------->
1.	Basic Arithmetic Operator
Create a function that takes two numbers as input and performs basic arithmetic operations such as addition, subtraction, multiplication, and division. Allow the user to choose the operation they want to perform.
2.	Comparison Operators Practice:
Write a program that compares two numbers and displays whether they are equal, not equal, greater than, or less than each other. Use various comparison operators such as ==, ===, !=, !==, >, <, >=, and <=.
3.	Logical Operators Challenge:
Design a quiz where users are given logical statements and they have to determine the result using logical operators (&&, ||, !). Provide feedback on whether their answers are correct or not.
4.	String Concatenation Exercise:
Create a function that takes multiple strings as input and concatenates them together using the + operator. Allow users to input strings dynamically and see the result instantly.
5.	Increment and Decrement Practice:
Write a program where users can input a number and then choose to increment or decrement it. Display the updated value after each operation.
6.	Bitwise Operators Challenge:
Provide a set of tasks where users need to solve problems using bitwise operators (&, |, ^, ~, <<, >>). This could include tasks like checking if a number is even or odd using bitwise operators.
7.	Assignment Operators Exercise:
Give users a set of variables with initial values and ask them to perform various operations using assignment operators (+=, -=, *=, /=, %=, etc.). For example, increment a variable by a certain value or perform calculations and assign the result to another variable.
8.	Ternary Operator Practice:
Present users with scenarios where they need to choose between two options based on a condition. Ask them to write code using the ternary operator (condition ? value1 : value2) to handle these scenarios efficiently.
9.	Operator Precedence Challenge:
Provide a series of complex expressions involving multiple operators and ask users to determine the order of operations. This can help reinforce their understanding of operator precedence.
10.	Mixed Operators Exercise:
Create a program that combines various operators in one task. For example, calculate the area of a rectangle given its length and width using arithmetic operators and display the result along with a message

<-----------------------JS Datatypes-------------------->
1.	String Manipulation Task:
Given a string containing a sentence, create a function to count the number of vowels (a, e, i, o, u) in the string and return the count.
2.	Array Operations Task:
Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.
3.	Object Manipulation Task:
Create an object representing a student with properties like name, age, and grades. Write a function to calculate the average grade of the student based on the grades array.
4.	Function as Data Task:
Write a function that takes a callback function as an argument and applies it to every element of an array, returning a new array with the modified elements.
5.	Date Manipulation Task:
Create a function that takes two dates as input and calculates the number of days between them.
6.	Regular Expressions Task:
Write a function that takes a string as input and returns true if it contains only alphanumeric characters, otherwise returns false.
7.	Error Handling Task:
Write a function that takes two numbers as input and divides the first number by the second number. Handle the case where the second number is zero and throw an error in that case.
8.	Closure Task:
Create a function that generates a counter. Each time the generated function is called, it should return the next count.
9.	Prototype Task:
Define a constructor function for a Person object with properties like name and age. Add a method to the prototype of Person objects to greet someone.
10.	Type Conversion Task:
Write a function that takes a number as input and returns it as a string with commas separating every three digits.

<-----------------------Js Objects----------------->
1.	Object Creation Task:
Create an object representing a car with properties such as make, model, year, and color. Write a function to display information about the car.
2.	Object Methods Task:
Define a person object with properties like name, age, and gender. Add a method to the object called introduce that prints a greeting message including the person's name.
3.	Object Iteration Task:
Given an object representing a shopping cart with items and their quantities, write a function to calculate the total price of the items in the cart.
4.	Object Composition Task:
Create two objects representing a rectangle and a circle. Write a function that takes these objects as arguments and calculates the total area covered by both shapes.
5.	Object Inheritance Task:
Define a parent object called Animal with properties like species and sound. Create child objects representing specific animals like dog, cat, and bird that inherit from the Animal object and have additional properties specific to each animal.
6.	Object Serialization Task:
Write a function called serializeObject that takes an object as input and converts it into a JSON string using JSON.stringify().
7.	Object Deserialization Task:
Implement a function called deserializeObject that takes a JSON string as input and converts it back into an object using JSON.parse().
8.	Object Deep Copy Task:
Create a function called deepCopy that takes an object as input and returns a deep copy of that object, ensuring that nested objects are also copied.
9.	Object Getter and Setter Task:
Define an object representing a bank account with properties like balance and interest rate. Add getter and setter methods for the balance property to ensure that the balance cannot be set to a negative value.
10.	Object Extension Task:
Given two objects representing student information and course enrollment, write a function to merge the two objects into a single object containing all the information.

<--------------------JS Strings--------------------------->
1.String Manipulation Task:
Write a function that takes a string as input and returns the reversed version of that string. Use string manipulation methods like split(), reverse(), and join().
2. Substring Extraction Task:
Create a function that extracts a substring from a given string based on specified start and end indices. Ensure that the function handles negative indices appropriately.
3. String Search Task:
Write a function that takes a string and a search term as input and returns the number of occurrences of the search term within the string. Use string search methods like indexOf() or regular expressions.
4. Case Conversion Task:
Implement a function that converts a given string to title case. Ensure that the first letter of each word is capitalized while the rest of the letters are in lowercase.
5 . String Replace Task:
Write a function that takes a string, a search term, and a replacement term as input and replaces all occurrences of the search term in the string with the replacement term.
6. String Truncation Task:
Create a function that truncates a given string to a specified length and appends an ellipsis (...) at the end if the string exceeds the specified length.
7. Whitespace Trimming Task:
Implement a function that removes leading and trailing whitespace from a given string using string trimming methods like trim(), trimStart(), and trimEnd().
String Splitting Task:
8. Write a function that splits a given string into an array of substrings based on a specified delimiter. Ensure that consecutive delimiters are treated as a single delimiter.
9. Character Count Task:
Create a function that counts the number of occurrences of each character in a given string and returns an object mapping each character to its count.
10 .String Validation Task:
Write a function that validates whether a given string is a valid email address. Use regular expressions to perform the validation.

<----------------------JS Number Methods-------------------->
1.	Number Conversion Task:
Write a function that takes a string representing a numeric value and converts it into a number using the Number() method. Ensure it handles edge cases like non-numeric strings gracefully.
2.	Number Rounding Task:
Create a function that rounds a given number to the nearest integer using the Math.round() method. Test it with both positive and negative numbers.

3.	Number Precision Task:
Write a function that truncates a given number to a specified number of decimal places using the toFixed() method. Ensure it returns a string representation of the truncated number.
4.	Number Formatting Task:
Implement a function that formats a given number as currency with a specified currency symbol and precision. Utilize methods like toLocaleString() or manual formatting.
5.	Number Validation Task:
Create a function that checks if a given value is a finite number using the isFinite() method. Ensure it returns true for finite numbers and false for non-finite numbers.
6.	Number Parsing Task:
Write a function that parses a string representing a numeric value and returns the parsed number using the parseInt() or parseFloat() methods. Handle cases where the string contains non-numeric characters gracefully.
7.	Number Comparison Task:
Implement a function that compares two numbers and returns a string indicating whether the first number is greater than, less than, or equal to the second number. Utilize comparison operators like >, <, and ===.
8.	Number Absolute Value Task:
Create a function that returns the absolute value of a given number using the Math.abs() method. Ensure it works correctly for both positive and negative numbers.
9.	Number Exponential Task:
Write a function that calculates the exponential value of a base raised to a given power using the Math.pow() method. Ensure it handles both positive and negative powers.
10. Number Randomization Task:
Implement a function that generates a random number within a specified range using the Math.random() method. Allow users to specify the minimum and maximum values for the range

<------------------------JS Array Methods---------------------------->
1.	Array Length Task:
Write a function that takes an array as input and returns the length of the array using the length property.
2.	Array toString() Task:
Create a function that takes an array of strings as input and returns a single string containing all the elements of the array concatenated together using the toString() method.
3.	Array at() Task:
Implement a function that retrieves the element at a specified index in an array. If the index is out of bounds, return undefined.
4.	Array join() Task:
Write a function that takes an array of strings as input and returns a single string containing all the elements of the array joined together with a specified separator using the join() method.
5.	Array pop() Task:
Create a function that removes the last element from an array and returns that element using the pop() method.
6.	Array push() Task:
Implement a function that adds one or more elements to the end of an array and returns the new length of the array using the push() method.
7.	Array shift() Task:
Write a function that removes the first element from an array and returns that element using the shift() method.
8.	Array unshift() Task:
Create a function that adds one or more elements to the beginning of an array and returns the new length of the array using the unshift() method.
9.	Array delete() Task:
Implement a function that deletes an element at a specified index in an array without changing the length of the array using the delete operator.
10.	Array concat() Task:
Write a function that concatenates two or more arrays together and returns the resulting array using the concat() method.
11.	Array copyWithin() Task:
Create a function that copies a sequence of elements within the same array, effectively overwriting the existing values, and returns the modified array using the copyWithin() method.
12.	Array flat() Task:
Implement a function that flattens a nested array to a single-level array and returns the result using the flat() method.
13.	Array splice() Task:
Write a function that removes elements from an array and/or adds new elements in their place, returning the removed elements as a new array using the splice() method.
14.	Array toSpliced() Task:
Create a function that returns a copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array to be copied using the slice() method.

<----------------Array Find and Search Methods----------------🡪
1.	Array indexOf() Task:
Write a function that takes an array of strings and a search string as input. Implement a search functionality using the indexOf() method to find the index of the first occurrence of the search string in the array. Return -1 if the search string is not found.
2.	Array lastIndexOf() Task:
Create a function that takes an array of numbers and a target number as input. Use the lastIndexOf() method to find the index of the last occurrence of the target number in the array. Return -1 if the target number is not found.
3.	Array includes() Task:
Implement a function that takes an array of objects representing products and a product name as input. Use the includes() method to check if the product with the specified name exists in the array. Return true if the product is found, otherwise false.
4.	Array find() Task:
Write a function that takes an array of objects representing books and a genre as input. Use the find() method to find the first book in the array that belongs to the specified genre. Return the book object if found, otherwise null.
5.	Array findIndex() Task:
Create a function that takes an array of objects representing students and a student ID as input. Use the findIndex() method to find the index of the first student in the array with the specified ID. Return -1 if the student is not found.
6.	Array findLast() Task:
Implement a function that takes an array of strings and a search string as input. Use a loop along with the lastIndexOf() method to find the last occurrence of the search string in the array. Return the string if found, otherwise null.
7.	Array findLastIndex() Task:
Write a function that takes an array of numbers and a target number as input. Use a loop along with the lastIndexOf() method to find the index of the last occurrence of the target number in the array. Return -1 if the target number is not found.

   <--------------JS Array Sorting Methods-------------->
1.Array sort() Task:
Write a function that takes an array of numbers as input and sorts it in ascending order using the sort() method. Test it with both positive and negative numbers. 
2.	Array reverse() Task:
Create a function that takes an array of strings as input and reverses the order of its elements using the reverse() method.
3.	Array toSorted() Task:
Implement a function that takes an array of numbers as input and returns a new sorted array without modifying the original array, using the slice() method followed by the sort() method.
4.	Array toReversed() Task:
Write a function that takes an array of strings as input, returns a new array with the elements in reverse order without modifying the original array, using the slice() method followed by the reverse() method.
5.	Sorting Objects Task:
Create an array of objects representing books with properties like title, author, and publication year. Write a function that sorts the array of books alphabetically by title using the sort() method.
6.	Numeric Sort Task:
Implement a function that sorts an array of numbers in ascending order using the sort() method with a custom comparison function.
7.	Random Sort Task:
Write a function that takes an array of strings as input and sorts it randomly using the sort() method with a custom comparison function.
8.	Math.min() Task:
Create a function that takes an array of numbers as input and returns the smallest number in the array using the Math.min() method.
9.	Math.max() Task:
Implement a function that takes an array of numbers as input and returns the largest number in the array using the Math.max() method.
10.	Home made Min() Task:
Write a function called homeMadeMin that takes an array of numbers as input and returns the smallest number in the array without using the Math.min() method.

11.	Home made Max() Task:
Create a function called homeMadeMax that takes an array of numbers as input and returns the largest number in the array without using the Math.max() method.
  
     <--------------Js Array Iteration--------------------🡪
1.	Array forEach() Task:
Write a function that takes an array of numbers as input and uses the forEach() method to log each element of the array to the console.
2.	Array map() Task:
Create a function that takes an array of numbers as input and uses the map() method to double each number in the array and return a new array containing the doubled values.
3.	Array flatMap() Task:
Implement a function that takes an array of arrays of numbers as input and uses the flatMap() method to flatten the array and return a new array with all the numbers in a single level.
4.	Array filter() Task:
Write a function that takes an array of numbers as input and uses the filter() method to return a new array containing only the even numbers.
5.	Array reduce() Task:
Create a function that takes an array of numbers as input and uses the reduce() method to calculate the sum of all the numbers in the array.
6. Array reduceRight() Task:
Implement a function that takes an array of strings as input and uses the reduceRight() method to concatenate all the strings in the array from right to left.
6.	Array every() Task:
Write a function that takes an array of numbers as input and uses the every() method to check if all the elements in the array are greater than 0. Return true if all elements satisfy the condition, otherwise false.
8.	Array some() Task:
Create a function that takes an array of strings as input and uses the some() method to check if any of the strings in the array contain the letter 'a'. Return true if at least one string satisfies the condition, otherwise false.
9.	Array from() Task:
Implement a function that takes an array-like object as input and uses the Array.from() method to convert it into a real array.
10.	Array keys() Task:
Write a function that takes an array as input and uses the keys() method to iterate over the array and log the index of each element to the console.
11.	Array entries() Task:
Create a function that takes an array as input and uses the entries() method to iterate over the array and log each element along with its index to the console.
12.	Array with() Task:
Implement a function that takes two arrays as input and uses the with() method to concatenate them together and return the resulting array.
13.	Array Spread (...) Task:
Write a function that takes two arrays as input and uses the spread (...) operator to concatenate them together and return the resulting array.

<--------------------Js Array Iteration 2nd level---------------------🡪
1.	Task: Advanced Data Transformation with Objects
You are building a data visualization tool. Given an array of data objects, each representing a data point with properties like x, y, and label, perform the following operations:
Use map() to transform each data point into an object containing only the x and y coordinates.
Use filter() to remove data points where the x or y coordinate is negative.
Use reduce() to calculate the average value of the x and y coordinates for the remaining data points.
2.	Task: Advanced Filtering and Transformation with Nested Objects
You are working on a project that involves processing survey responses. Given an array of survey response objects, each containing nested objects representing responses to different questions, perform the following operations:
Use flatMap() to extract an array of responses to a specific question from all survey response objects.
Use filter() to remove empty or invalid responses.
Use map() to transform the remaining responses into a standardized format.
Use reduce() to calculate the average response value for the question across all survey responses.
3.	Task: Data Processing with Nested Arrays and Objects
You are building an e-commerce platform. Given an array of order objects, each containing nested arrays representing items in the order, perform the following operations:
Use reduce() to calculate the total price of each order.
Use flatMap() to extract an array of all items across all orders.
Use filter() to remove items with a price lower than a certain threshold.
Use map() to transform the remaining items into an object containing only the item name and price.
4.	Task: Advanced Analysis with Nested Arrays
You are analyzing sales data. Given an array of sales objects, each containing nested arrays representing sales transactions, perform the following operations:

Use reduce() to calculate the total revenue for each product.
Use flatMap() to extract an array of all sales transactions for a specific product.
Use filter() to remove sales transactions with a quantity of 0.
Use map() to transform the remaining sales transactions into an object containing the customer name, quantity, and total price.
5.	Task: Data Aggregation and Processing with Complex Structures
You are working on a project involving social media analytics. Given an array of user objects, each containing nested objects representing posts, comments, and likes, perform the following operations:
Use reduce() to calculate the total number of likes for each user.
Use flatMap() to extract an array of all comments across all posts for each user.
Use filter() to remove comments with offensive language.
Use map() to transform the remaining comments into an object containing the post title, comment text, and username of the commenter.
6.	Task: Product Inventory Management
You are tasked with managing the inventory of a store. Each product is represented as an object with properties like name, price, and quantity. Perform the following operations:
Use reduce() to calculate the total value of the inventory.
Use filter() to find products that are out of stock (quantity is 0).
Use map() to create an array of strings representing the product names and their prices formatted as "$X.XX".
          -----------------------JS Date Methods----------🡪
1. Task: Date Formatting
Write a function that takes a JavaScript Date object as input and returns a formatted date string in the format "YYYY-MM-DD".
2. Task: Time Formatting
Implement a function that takes a JavaScript Date object as input and returns a formatted time string in the format "HH:MM:SS".
3. Task: DateTime Formatting
Create a function that takes a JavaScript Date object as input and returns a formatted date-time string in the format "YYYY-MM-DD HH:MM:SS".
4. Task: Get Day of the Week
Write a function that takes a JavaScript Date object as input and returns the day of the week (e.g., "Monday", "Tuesday") as a string.
5. Task: Get Month
Implement a function that takes a JavaScript Date object as input and returns the month (e.g., "January", "February") as a string.
6. Task: Get Year
Create a function that takes a JavaScript Date object as input and returns the year as a four-digit number.
7.Task: Set Day of the Week
Write a function that takes a JavaScript Date object and a day of the week (e.g., "Monday", "Tuesday") as input and sets the date to the next occurrence of that day.
8. Task: Set Month
Implement a function that takes a JavaScript Date object and a month (e.g., "January", "February") as input and sets the date to the first day of that month.
9. Task: Set Year
Create a function that takes a JavaScript Date object and a year as input and sets the date to the same day and month but in the specified year.
10. Task: Calculate Age
Write a function that takes a JavaScript Date object representing a birthdate as input and returns the age of the person as of the current date.

<-------------React Interview Questions----------->
1. Create a React component that includes a textarea. Display the count of characters entered in real-time below the textarea.
2. In React write a component that accepts props that contains an array called data that contains integers. The output from the component needs to display the data arm in numerical order.
3. Write a React component that receives an array of strings as a prop and renders an unordered list () containing list items () for each string in the array.
4. In React write a component that displays a number and a button. When that button is pressed the number is increased by 3.
