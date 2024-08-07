<h2> React Interview Questions</h2>
    <h3>1. What is React.js...? Imp</h3>
    <p>
         React is a lightweight open source JavaScript library for building user interfaces(UI). <br>
         It was developed and maintained by meta formerly called Facebook. <br>
         Some Important Features that make different react from others: <br>
        > Component based architecture: Reusability <br>
        > Single page application: Single HTML Page <br>
        > Virtual DOM: Lightweight <br>
        > JSX (JavaScript and XML): Allow HTML like code <br>
        > Follow Unidirectional data flow: Higher lavel component to lower level component <br>
        > Cross platform: For Android, IOS, Linux <br>
        > Open source: Free to use <br>
    </p>
    <h3>2. What are the differences between library and framework...?</h3>
    <p>
         Library : <br>
        > A library is a collection of pre-written functions, classes, and modules that can be used to perform specific tasks or operations. <br> 
        > Libraries are more flexible and more control on overall structure and flow of application. <br>
        > Libraries are smaller in size and depends on external libraries. <br>
        > Libraries are more faster bcz developer have more control to choose required specific components and libraries. <br> <br>
         Framework : <br>
        > A framework is a pre-defined architecture that dictates the overall structure and flow of an application. <br>
        > Frameworks provide a more rigid structure and bound to follow set of rules and conventions. <br>
        > Frameworks are larger in size bcz it provide complete structure and not depends on external libraries. <br>
        > Framework's rules and conventions may slow down development in some cases.
    </p>
    <h3>3. What is Single Page Application(SPA)...? Imp</h3>
    <p>
         Single Page Applications(SPA) load a single HTML page and update its content without loading entire page from the server. <br>
         Whenever user do some action on the websites, in response the content is dynamically updated. <br>
         In React, component-based architecture and virtual DOM play a powerful role for building SPAs. <br>
         It provides rich interactivity, performance and more responsive user experience. <br>
    </p>
    <h3>4. What are the advantages and disadvantages of React...? Imp</h3>
    <p>
         Adavantages of React : <br>
        > Simple to build Single Page Application by using reusable components.<br>
        > React is cross platform and open source, means free to use. <br>
        > It is Lightweight and very fast because of Virtual DOM. <br>
        > React has large community and ecosystem. <br>
        > Easy to testing and debugging. <br><br>
         Disadvantages of React : <br>
        > React is not a good choice for very small applications. <br>
        > React depends on external libraries for many complex features.
    </p>
    <h3>5. What are the differences between React and Angular...?</h3>
    <p>
         <b>React Featues: </b><br>
        > React is a JavaScript library. <br>
        > React uses virtual DOM which makes browser faster. <br>
        > React is smaller in size and lightweight, therefore faster sometimes. <br>
        > React depends on external libraries for many complex features. <br>
        > React is simple to learn and more popular than Angular. <br><br>
         <b>Angular Featues: </b><br>
        > Angular is complete framework of JavaScript. <br>
        > Angular uses the real DOM. <br>
        > Angular is bigger than React, because it is a complete framework. <br>
        > Since Angular is a complete framework, therefore it provide built-in support for features like routing, forms, validation and HTTP requests. <br>
        > Angular is slightly difficult to learn as it has Typescript, OOPS concept and many more things.
    </p>
    <h3>6. Explain about the default file structure in React...?</h3>
    <p>
         The file structure of a React.js application can vary depending on the project's complexity and organization preferences. <br>
         Explaining below about default file structure : <br><br>
        > ReactDOM : It is a JavaScript library that renders components to the DOM or browser. <br>
        > node_modules : It is a directory that store all dependencies library installed via npm. <br>
        > Public : It contains public assets that are served directly to the user's browser, such as HTML file, images, fonts and other static resources. <br>
        > index.html : The index.html file is the single HTML template where React application is typically mounted. <br>
        > src : It is a directory, where application source code resides. Under src we create components for application development. <br>
        > App.js : It is the root component in a React application and defines the structure, layout and routing in the application. <br>
        > index.js : The entry point for React application, where React is typically initialized and the root component is rendered. <br>
        > .gitignore : This file lists files and directories that should be excluded from version control when using Git.<br>
        > package-lock.json : It generate by npm and provide details about record and packages. <br>
        > package.json : Configuration file for npm. It contains project metadata, dependencies, and scripts for building and running the application.<br>
        > README.md : Project documentation that provides an overview of the application and instructions for setup and usage.
    </p>
    <h3>7. What are the difference between React element and React component...? Imp</h3>
    <p>
         React Element <br>
        > A React element is a simple object that describes what we want to see on the screen. <br>
        > It takes the properties like type, props and key. <br>
        > It created by using JSX syntax or directly using React.createElement. <br>
        > Its immutabe in nature, once created, it cannot be changed. <br>
        > Rendered directly by React to update the UI. <br><br>
         React Component <br>
        > React component is a reusable building block for developing UI. <br>
        > There are two types of component i.e. Functional component and Class based component. <br>
        > It created by defined as a function or a class that extends React.Component. <br>
        > It can be stateful or stateless, and can manage their own state. <br>
        > Returns React elements which are then rendered by React.
    </p>
    <h3>8. What are the types of components in React...? Imp</h3>
    <p>
         There are two main types of components in React: <br>
         Functional Component: <br>
        > Also known as stateless components, but now can manage the states by using of hooks. <br>
        > Defined as JavaScript functions. <br>
        > Accept props (properties) as an argument and return React elements.<br>
        > Do not have internal state or lifecycle methods. <br>
        > Modern approach to build reusable components with less boilerplate code.<br>
        > It emphasize simplicity, modularity, and flexibility.<br><br>
         Class Component: <br>
        > Also known as stateful components and can manage local state with this.state. <br>
        > Defined as JavaScript(ES6) classes that extend React.Component. <br>
        > Have a render method that returns React elements. <br>
        > Can have internal state and use lifecycle methods. <br>
        > Traditional approach to build components with more boilerplate code. <br>
        > Difficult to understand and debug and less flexibility.
    </p> 
    <h3>9. Adavantages of Function component in ReactJS...?</h3>
    <p>
         More concise and readable syntax compared to class components. <br>
         Manage states in a simple and declarative way by useState hooks. <br>
         Managing lifecycle events in function components became more straight forward by useEffect hooks. <br>
         Function components, promote code reusability by introducing custom hooks. <br> 
         Better performance by function component optimization through memoization and virtual DOM.
    </p>
    <h3>10. What is Virtual DOM and how it works in ReactJS...? Imp</h3>
    <p>
         The Virtual DOM is a lightweight representation of the Real DOM that kept in memory. <br>
         When a component is first rendered, it creates a virtual representation of the UI called the Virtual DOM. <br>
         The Virtual DOM is not directly modifying the Real DOM, changes are first made to the Virtual DOM by reconciliation process. <br>
         React uses a diffing algorithm during reconciliation to minimize the number of updates to the real DOM. <br> 
         Virtual DOM optimize the updates and improve the performance without reload the entire web page. <br>
    <h3>11. What is NPM and NPX...? </h3>
    <p>
        NPM : <br>
       > NPM stands for Node Package Manager. <br>
       > It is a built-in Package manager for the Node.JS platform. <br>
       > NPM is primarily focused on package management and script execution. <br>
       > It is used to install, uninstall, run, update and manage packages or libraries written in React. <br><br>
        NPX : <br>
       > NPX stands for Node Package eXecute. <br>
       > npx is a package runner tool that comes with npm. <br>
       > It is used to execute packages directly from the command line. <br>
       > It does not install packages globally. <br>
       > NPX runs packages locally by default but can also execute global packages.
    </p>
    <h3>11. What is JSX and why it is used in ReactJS...? Imp</h3>
    <p>
         JSX(JavaScript XML) is an extention of JavaScript that allows to write HTML-like code in JavaScript file. <br>
         JSX is used to write declarative syntax, that describe output based code. <br>
         JSX syntax is not understand by browser, so Babel transpiler convert the code from JSX to regular JavaScript internally. <br> <br>
         Adavantages of JSX : <br>
        > Improve code readability and writability. <br>
        > Error checking in advance(Type Safety). <br>
        > Support JavaScript expression {...}. <br>
        > Improved Performance. <br>
        > Code reusability
    </p>
    <h3>12. What is React Fiber...?</h3>
    <p>
         React Fiber is the new reconciliation algorithm. <br>
         It was introduced in React 16 version and is designed to enable asynchronous rendering. <br>
         Importance of React Fiber: improve performance, smoother animations, responsive UIs and better flexibiity. <br>
         Some key features of React Fiber: <br>
        > Allow to render asynchronously. <br>
        > Prioritize different types of work. <br>
        > Ability to pause and resume rendering work. <br>
    </p>
    <h3>13. What is MVC(Model-View-Controller) ...?</h3>
    <p>
         The MVC is a design pattern in web development to organize the structure of an application. <br>
         The MVC pattern helps to improve code maintainability and reusability. <br>
         It has three inter-connected components with distinct role and responsibility. <br>
        > Model: The Model represents the application's data and business logic. It is responsible for data storage, retrieval and manipulation. <br>
        > View: The View is responsible for presenting the data to the user and rendering the user interface (UI). <br>
        > Controller: It acts as an intermediary between Model and View. It receives user input from the View, processes that input and updates the View accordingly.
    </p>      
    <h3>14. Explain the difference between Props and State...? Imp</h3>
    <p>
         Props : <br>
        > Props are the way to pass data from a higher level component to lower level component. <br>
        > Props(properties) are immutable in nature. <br>
        > We access the props for read or display only. <br>
        > Props are like the function parameter. <br><br>
         State : <br>
        > States are the current data of a component is managed within the component. <br>
        > States are mutable, so we change and update the states over time. <br>
        > States are like local variables declared in the function body. <br>
         Uses of State: Dynamic data storage, UI updates, User input handling, Component interaction, fetching data etc.
    </p>
    <h3>15. What is Prop Drilling and how can avoid props drilling...? Imp</h3>    
    <p>
         Prop Drilling is the process of passing down data from parent component to lower level component through multiple layers of components. <br>
         It makes code harder to maintain, debug and to read, because props pass through multiple components unnecessarily. <br>   
         Ways to avoid prop drilling: <br>
        > Using Context API <br>
        > Using Redux Library <br>
        > Using Callback Function <br>
        > Using React Hooks <br>
        > Using React Router <br>
    </p>
       <h3>16. What is Hooks in React JS...?</h3>
    <p>
         Hooks are inbuilt functions or methods provided in react advanced version(16.8). <br>
         Hooks are used manage state, lifecycle events and side effects in functional components. <br>
         Advantages of Hooks: cleaner code, component based architecture, easy to learn, easy to test, reusability, encapsulating side effects. <br>
    </p>
    <h3>17.What is useState and its importance in ReactJS...? Imp</h3>
    <p>
         useState is a built-in and widely used hook to functional component. <br>
         UseState is used to manage and update the states of a component and enabling dynamic behavior to user interfaces. <br>
         The useState function returns a destructured array containing a current state and a function to update that state. <br>
         The initial value of useState can be of any data type, depending on different scenarios. <br><br>
         Syntax: const [currentData, setCurrentData] = useState(0); <br>
         When to use "useState" : <br>
        > Managing UI-related state: Tracking things like form input values, visibility of elements, counters etc. <br>
        > Toggling state: Handling boolean flags that determine the visibility or behavior of elements or components. <br>
        > Tracking user interactions: Manage state that is directly controlled by user, such as button clicks, form submissions, and input changes.
    </p>
    <h3>18. What is useEffect and its uses in functional component in ReactJS...? Imp</h3>
    <p>
         useEffect is a built-in hook in React that allows to perform side effects in functional components. <br>
         Side effects are the actions that occur outside of the normal component and render itself without event handling. <br>
         Mostly used useEffect for HTTP Call, DOM manipulation, Browser Storage, Intervals and more. <br>
         It takes two arguments, first is effect function and another is dependency array(optional). <br>
         Syntax: useEffect(() => {effect function}, [dependencies]); <br>
         Uses of useEffect(): <br><br>
        > Without dependency: useEffect(() => {//execute after every render}); <br> 
        > Empty dependency: useEffect(() => {//execute only once during the mounting phase}, []); componentDidMount. <br> 
        > Specified dependency: useEffect(() => {//execute only when specified dependencies changed}, [x, y]); componentDidUpdate. <br> 
        > Cleanup tasks: useEffect(() => { return() => {//like: clearInterval(intervalId)}}, []); componentWillUnmount<br>
    </p>
    <h3>19. What is the role useContext() hook in ReactJS...? Imp</h3>
    <p>
         UseContext hooks provides a way to pass data from parent to child components without passing props. <br>
         CreateContext() function returns an object with provider and consumer properties. <br>
         The Provider property is responsible for providing the context value to all its child components. <br>
         The Consumer property use the hook useContext consume the context value in child components. <br>
         It avoid props drilling and access context values directly within deeply nested components. <br>
         By using useContext() we can make functionality like: Theme Switching(dark/light), Localization(language selection), Notification System and much more. 
    </p>
    <h3>20. What is UseMemo and its importance in React...? Imp</h3>
    <p>
         useMemo is a React hook that memoizes the computation value and only recalculates, when one of its dependencies changes. <br>
         The main purpose of useMemo is to optimize performance by avoiding expensive calculations on every render. <br>
         It should avoid for trivial computations, as it adds complexity without significant performance benefits. <br>
         It takes a function and an array of dependencies as arguments to execute and memoized the value. <br>
         Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]); <br><br>
    </p>
    <h3>21. What is UseCallback and its importance in React...? Imp</h3>
    <p>
         useCallback is a react hook that returns a memoized version of a callback function and only changes, when one of its dependencies changes. <br>
         The main purpose of useCallback is to optimize performance by preventing unnecessary re-creations of functions. <br>
         It prevents unnecessary re-renders of child components, when a parent component passes a callback function as a prop to a child component. <br>
         It maintain stable function reference. <br>
         It should also avoid using for every function, as it adds complexity and might not provide significant performance benefits. <br>
         It takes a callback function and an array of dependencies as arguments. <br>
         const memoizedCallback = useCallback(() => {// Your callback logic}, [dependency1, dependency2, ...]); <br><br>
    </p>
    <h3>22. What is Redux and how it works in ReactJS...? Imp</h3>
    <p>
         Redux is an open-source JavaScript library for managing the state globally of an application. <br>
         It provides a predictable and centralized way to manage and update the state of in React components. <br>
         Redux is not only specified to React, but popular for react ecosystem. <br>
         Stages of Redux to manage state: <br>
        > Create Action(order): Actions are plain JavaScript objects with type and payload properties, that describe the changes in the state of application. <br>
        > Create Reducer(update): Reducer is a pure function that take the current state and action as arguments and return a new state in response to an action. <br>
        > Create Store: Entire application contains a single and centralized store for holding states.
    </p>
    <h3>23. What is Redux ToolKit in ReactJS...?</h3>
    <p>
         Redux Toolkit is a updated and simplify version of React redux. <br>
         It helps the applications easier and more efficient by reducing the boilerplate code. <br>
         Key features of the Redux Toolkit include: <br>
        > createSlice: A function that allows to define a reducer and its actions in a more concise way. <br>
        > configureStore: A function that create a Redux store with common configurations, including setting up middleware( Redux Thunk). <br>
        > createAsyncThunk: A function that generates asynchronous action creators for handling asynchronous logic, such as fetching data from an API. <br>
        > createEntityAdapter: A utility for managing normalized state structures, often useful when dealing with relational data.
    </p>

   <h3>24. Explain about useSelector and useDispatch in React-redux...? Imp</h3>
    <p>
         Both are hooks provided by React Redux. <br>
         UseSelector allows component to subscribe to the redux store and access its updated state for display purpose. <br>
         UseDispatch return a reference to dispatch function from redux store, which is used to dispatch action and store variables in function. 
    </p>
    <h3>25. What are the differences between Redux and Redux Toolkit...? Imp</h3>
    <p>
         Redux : <br>
        > In Redux, we have to configure Redux DevTool Extensions explicitly. <br>
        > We have to mannualy handle and change the state immutabily. <br>
        > Configuration of Redux store is too complicated. <br>
        > Need to create Reducers and Creators separately(lots of boilerplate code). <br>
        > Lots of code need to to write to asynchronous requests and handling error code was also manual. <br>
        > Class Based implementation. <br><br> 
         Redux Toolkit : <br>
        > It provides automatic support for Redux DevTools Extension. <br>
        > It provides the supprot for Immer.js library which automatically changes the code immutabily. <br>
        > Configuration of Redux store is much easier and built in support of middleware. <br>
        > A createSlice() function that come in handy to replace create Action and create Reducer functions with a single function. <br>
        > createAsyncThunk to make asynchronous requests. <br>
        > Functional implementation with Typescript and supports of Hooks.
    </p>
    <h3>26. What is Component Life Cycle method in ReactJS...? Imp</h3>
    <p>
         Lifecycle methods allow to perform actions at different stages in the life of a component. <br>
         LCM is a complete process of creating a component, inserting into the DOM, updating it, and finally removing it from the DOM. <br>
         After introduction of React Hooks in React version 16.8, the use of class-based lifecycle methods is less common. <br>
         There are three phases of Life Cycle Method: <br> <br>
         Mounting Phase: <br>
        > This phase begins when a component is first created and inserted into the DOM and ends when the component is rendered for the first time. <br>
        > constructor(): Invoked when a component is first created and used for initializing state and binding event handlers. <br>
        > componentDidMount(): Invoked after the component is mounted and used to perform side-effects, like fetching data. <br><br>
         Updating Phase: <br>
        > This phase begins when a component receives new state or props and ends when the component is re-rendered. <br>
        > componentDidUpdate(): Invoked after component is updated and used for perform actions, like updating the DOM or fetching new data based on changes. <br> <br>
         Unmounting Phase: <br>
        > This phase begins when a component is removed from the parent component's render() method and ends when the component is completely removed from the DOM. <br>
        > componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed. Used for cleanup up subscriptions and removing event handlers.
    </p>
   <h3>27. What is Higher-Order component and it's uses in ReactJS....? Imp</h3>
    <p>
         Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. <br>
         HOC takes another component as an argument and adds extra functionality to component. <br>
         The main purpose of HOCs is to encapsulate and reuse common logic across multiple components. <br>
         It avoids code duplication and keeps components focused on their primary responsibility. <br>
         It also lead to complex component tree, making debugging difficult and wrapping too many HOCs can result in "wrapper hell. <br>
         HOCs are commonly used for handling authentication, authorization, data fetching and conditional rendering. <br>
    </p>
    <h3>28. How can optimize performance in a React application...? Imp</h3>
    <p>
         Use React Profiler: Identify performance bottlenecks that need optimization. <br>
         Memoization with useMemo and useCallback: Prevent unnecessary recalculations and re-renders. <br>
         Lazy Loading: Load only the necessary components and resources and reduce the initial bundle size and use react.lazy(). <br>
         Code Splitting: Divide application into smaller chunks and improving initial load times. <br>
         Optimize Images and Assets: Compress and optimize by cosidering responsive images and assets. <br>
         Use React.Fragment: <> </> Avoid creating unncessary DOM nodes.
    </p>  
    <h3>29. What is Fragment and how important in ReactJS...?</h3>
    <p>
         Fragment is a way to wrap list of elements in JSX without adding extra nodes to the DOM. <br>
         By using div tag to wrap the elements, that create extra node. <br>
         The shortest way to use fragment is <> </> symbol instead React.Fragment. 
    </p>
    <h3>30. What is Controlled and UnControlled Components in React...? Imp</h3>
    <p>
         Controlled and Uncontrolled components used for handling form elements like input fields, checkboxes and radio buttons. <br>
         Controlled Component: <br>
        > Controlled components are manage by their own state. <br>
        > Controlled component use useState hook to keep track of the value of the form field and add an onChange event handler to update the state. <br>
        > Controlled components are more flexible and powerful, but more complex to write. <br><br>
         Uncontrolled Component: <br>
        > Uncontrolled components do not manage by their own state. <br>
        > Uncontrolled component use a ref keyword and manipulate the state by help of DOM. <br>
        > Uncontrolled components are simpler to write, but less flexible.
    </p>
    <h3>31. What is useRef hook and how it works in ReactJS...? Imp</h3>
    <p>
         The useRef is a hook that allows directly to access and interact with DOM elements in a functional component. <br>
         It returns a mutable object called a "ref" object for reference. <br>
         The ref object has a .current property that holds the current value of the ref. <br>
         It is used for focusing an input element or scrolling to a particular element and store the state of a form for manupulation.
    </p>
    <h3>32. What is Mounting and how it differences from rendering...?</h3>
    <p>
         Mounting refers to the process of creating a React component and inserting it into the DOM. <br>
         Rendering refers to the process of updating a React component's DOM representation. <br>
         Mounting only happens once in intial stage. <br>
         Rendering can happen multiple times, whenever the component's state changes. <br>
         Mounting is the broader process that encompasses rendering.
    </p>
    <h3>33. What is Middlewares and explain about some important middlewares...?</h3>
    <p>
         Middleware is a way to extend the behavior of the Redux store. <br> 
         It allow to intercept actions before reach the reducer. <br>
         It is particularly useful for managing side effects, like making asynchronous API calls, logging and error handling. <br> 
         Some important middlewares are : <br>
        > Redux-thunk: Allows to dispatch functions instead of just plain objects and useful for handling asynchronous requests. <br>
        > Redux-logger: A simple middleware library that logs every action to the console for debugging. <br>
        > Redux-saga: Manages side effects and asynchronous operations in a more structured way.
    </p>
    <h3>34. What is unidirectional data flow in ReactJS...?</h3>
    <p>
         Unidirectional data flow is a pattern in React where data pass in one way direction. <br>
         In react mostly parent components can only pass data to child components and child component always receive the data. <br>
         It helps to write predictable and maintainable code. <br>
         It makes easier to debug application.
    </p>
    <h3>35. What is Lifting state up in ReactJS...?</h3>
    <p> 
         Lifting state up in React refers to the practice of moving state from a lower-level component to a higher-level component. <br> 
         It mostly used to share state and functionality between multiple components in a centralized and efficient way. <br>
         It promotes centralized state management, avoids prop drilling, encourage reusability and improve performance.
    </p>
    <h3>36. What is Synthetic Events in React...?</h3>
    <p>
         In React, Synthetic events are a cross-browser wrapper around the browser's original events. <br>
         It ensure consistent behavior and handling of events across different browsers and devices. <br>
         Synthetic events have preventDefault() and stopPropagation() methods for controlling event behavior. <br>
         It simplify event handling, promote consistent behavior across browsers and contribute to better performance in event-driven applications.
    </p>
    <h3>36. What is difference between Flux and Redux...?</h3>
    <p>
         Redux and Flux are both used to manage the state of a React application. <br>
         Redux : <br>
        > Redux has a single and centralized store. <br>
        > Actions are dispatched directly to the store. <br>
        > Redux supports middleware to intercept actions before the reducer. <br>
        > Redux is easier to debug and a predictable state flow. <br><br>
         Flux : <Br>
        > Flux has multiple stores. <br>
        > Actions are dispatched first to dispatcher and then to stores. <br>
        > Flux does not have built-in middleware. <br>
        > Flux is harder to debug because of multiple stores.
    </p>
    <h3>37. Difference between React and React Native...?</h3>
    <p>
         React : <br>
        > React is a library. <br>
        > React is used for building web interfaces. <br>
        > Run on Web browsers. <br>
        > HTML and CSS are used for UI. <br>
        > Deployed as web applications. <br><br>
         React Native : <br>
        > React Native is a Framework. <br>
        > React Native is used for building mobile applications. <br>
        > Run on iOS and Android platforms. <br>
        > Natiive UI components(View, text) are used for UI. <br>
        > Deployed through app stores(App store, Google Play).
    </p>
    <h2>Short Notes : </h2>
    <h4> Props in JSX: Props(properties) are a way to pass data from parent component to a child component.</h4>
    <h4> Callback Function: Parent component provide callback function to child component to invoke and pass data back to parent component.</h4>
    <h4> Transpiler: A Transpiler is a tool that converts source code from one high-level programming language to another high-level programming language .</h4>
    <h4> Compiler: A Compiler is a tool that converts high-level programming language into lower-level language .</h4>
    <h4> Component: A component is a reusable building block for creating user interfaces.</h4>
    <h4> Export Default: It is used to make this App component available for import using import statement in other files.</h4>
    <h4> Spread Operator: The spread operator(...) is used to expand or spread an array or object.</h4>
    <h4> Strict Mode: In React, "strict mode" is a developer tool that helps identify problems and warnings in application's components during development. </h4>
    <h4> Node.js: It an open-source, server-side runtime environment that allows developers to run JavaScript code outside of a web browser.</h4>
    <h4> NPX: npx is a command-line tool that comes with npm and is used for running Node.js packages.</h4>
    <h4> Conditional Rendering: If/else statement, Ternary Operator, && Operator and Switch Statement.</h4>
