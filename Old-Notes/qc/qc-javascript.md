# QC Questions on JavaScript

 - What is Javascript?
   - A dynamically-typed, interpreted, high-level, multi-paradigm language originally used in browsers, but now has backend support thank to libraries like Node.
     - dynamically-typed: means that javascript types can be changed and coerced, there is not a set type associated with any indiividual variable.
     - interpreted: means that the code is interpreted line-by-line rather than compiled and run.
     - high-level: means that we are abstracted away from hardware and other low-level management
     - multi-paradigm: means that the language does adhere to any particular programming paradigm (onject-oriented, functional, etc.)
     - browser-based: means that (originally) this code was interpreted by some browser component, but now we have engines that allow for javascript backend code, like Node.
 - What are arrays in JS? can you change their size?
   - A number of elements in contiguous memory that are grouped together as a whole. Javascript arrays are dynamically sized, and grow as needed.
 - What built-in data structures does JavaScript provide?
   - Arrays, Objects, Sets, Maps, and maybe the case can be made for JSON(though Kyle disagrees.) Classes?
 - What is the difference between var, let, and const keywords? 
   - Var - global scope variable
   - Let - block scoped variable, inroduced in ES6.
   - Const - block scoped variable which cannot be changed to re-assigned. Introduced in ES6.
 - What are the different scopes of variables in JS?
   - Global scope: global scope is global, the variable can be used anywhere in the script.
   - Block scope: variable cannot be accessed outside of the {block of code} in which it was declared.
   - Function scope: variable cannot be accessed outside of the function in which it was declared.
 - Does JS have classes? If so, when were they introduced? 
   - Yes. ES6.
 - What’s the difference between a normal function declaration and an arrow function? 
   - Arrow functions are anonymous (not given a name), commonly written in-line, useful for callbacks.
   - Normal functions are given a name, are commonly written as a declaration and invoked elsewhere.
 - What is object and array destructuring?
   - Destructuring: breaking apart collections of elements (arrays/objects) and assigning the individuals to some other variables.
 - What is the rest/spread operator? (...)
   - Rest: "The rest of the arguments" a final item in a parameter list which can take in any number of parameters, these are then collected into an array representing those parameters.
   - Spread: Can be used to break collections (objects/arrays) apart and manipulate all elements as though they were individuals listed in-line.
 - How would you set default values for parameters to a function? 
   - myFunction(key = value, name = "Kyle"){//some logic here}
 - Give the syntax for template literals / string interpolation 
   - \`This is a ${variable}\`
 - What are callback functions? 
   - A function passed as an argument to another function in order to be invoked as part of that function.
 - What are self-invoking functions?
   - An anonymous ad-hoc function that calls itself as soon as it is declared, the syntax is to enclose the declaration in parenthesis and then give a parameter list (function declaration)();
 - What is the difference between == and ===? Which one allows for type coercion?
   - == allows type coercion, === does not(strict comparison). 
 - What is the difference between for-of and for-in loops?
   - For-in iterates through enumerable properties of objects or arrays. This would be keys for objects, and indices for arrays.
   - For-of, new in ES6, uses an iterator object to iterate through iterable values (like key/value pairs in an object)
   - For-in iterates over keys, while For-of iterates through elements.
 - Explain the async/await keywords. Why is it preferred to use this instead of .then() methods? 
   - Async denotes a function can use the await keyword. The await keyword tells the application to wait for a promise to be fulfilled before completing a statement.
   - Async/await is more readable than chained .then()s
 - What is a generator function? What’s the point of the yield keyword? 
   - A generator function produces a generator object which is a series of executions that can be "paused" and "resumed" later. Yield causes the execution to pause.
 - What is the DOM? How is it represented as a data structure?
   - Document Object Model - this is representation of the HTML document as it exists within browser memory. It is a tree structure where elements correspond to nodes.
 - What object in a browser environment allows us to interact with the DOM? 
   - document object (also window object too)
 - List some ways of querying the DOM for elements 
   - By id = getElementById();
   - By Class = getElementsByClassName();
   - By element/tag name = getElementsByTagName();
 - How would you insert a new element into the DOM? 
   - .append();
   - .appendChild();
   - .createElement();
   - .insertBefore();
   - .innerHTML();
 - What are event listeners? What are some events we can listen for? What are some different ways of setting event listeners? 
   - Event listeners are objects that registered to a DOM node that listen for a specific event to propigate through that node, and have a callback function.
   - Event Handlers are the callback functions that take action when an event is detected.
   - onClick, onSubmit, mouseOver, onHover, onFocus, onKeyDown, onKeyUp, keyPressed, etc.
 - What is bubbling and capturing and what is the difference? 
   - bubbling: events propigating upward through the DOM from child to parent all the way to document.
   - capturing: can be seen as the reverse of bubbling, events propigate down from root to some node. Note: The event targets that node, and only takes one path through the DOM to get there. (It does not "broadcast" to all children of any parent, it only propigates down one path.)
 - What are some methods on the event object and what do they do? 
   - event.preventDefault();
   - event.stopPropigation();
   - event.stopImmediatePropigation();
 - How would you submit a form using JS? 
   - You can use onSubmit to invoke a js function directly `onsubmit={myFunc()}`
   - You can use an event listener to catch the form's submit event.
 - What new features did ES6 introduce? 
   - Arrow functions
   - template literals
   - let/const
   - classes
   - generator functions
   - spread/rest operators
   - for-of
