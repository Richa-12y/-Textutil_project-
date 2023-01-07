# JavaScript Interview Prep Cheatsheet

**Hello coders!! ‍💻 👩‍💻In this Blog, I have tried to list the concepts which will cover  frequently asked questions of any JS interview.
**
So, if you are preparing for your next JS interview this is the perfect cheatsheet for you to review and solidify your skills. Go through this blog and you'll be ready to rock. 🦸‍♀️

# What is Scope🤔?
**👉Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
**
> In other words we can say that Scope is determing where variables function and objects
> are accessible in code during runtime.

**There are two types of scope in JS:
**

- Local Scope
- Global Scope

**👉Points to remember:**-
- Variables defined inside a function are in the local scope
- Variables defined outside of a function are in the global scope.
- Each function when invoked creates a new scope.

## Local Scope

> Variables defined inside a function are in the local scope. And they have a different scope for every call of that function. 

> This means that variables having the same name can be used in different functions. 

> This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.

**Example:-
**

```
var language = "React";

function a() {
  var language = "Js";
  console.log("Inside Function a()-> ", language); //Output: Js
  function b() {
    var language = "CSS";
    console.log("Inside Function b()-> ", language); // Output: CSS
  }
  b();
}

a();

console.log("Outside function-> ", language); //Output: React
```
**Output:-**

![rr.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662820766214/1QRC5agLO.PNG align="left")

*This also tells us that variables having the same name in different execution contexts gain precedence from top to bottom of the execution stack. 
A variable, having a name similar to another variable, in the innermost function (topmost context of the execution stack) will have higher precedence.
*

## Block Statements
> A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and contains a list of zero or more statements and declarations.

```
if (true) {
  var language = "Reat";
  const language2 = "JS";
  let language3 = "CSS";

  console.log("===Inside Block Statement===");
  console.log(language); // Output: JS
  console.log(language2); // Output: PHP
  console.log(language3); // Output: C++
}

console.log("===Outside Block Statement===");

console.log(language); // Output: JS
console.log(language2); // Output: ReferenceError
console.log(language3); // Output: ReferenceError
```

**Output:-
**

![blocs.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662821410805/9JMkdmNhU.PNG align="left")

*Note:-The `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.
*

**Local Scope is further Divide into Two Parts
**
- Block Scope
- Function Scope

Let's discuss one by one👩‍💻👩‍💻

## Block Scope

*The Scope created with a pair of curly braces `{}`
*

**👉Points to remember:**

> Before ES6 (2015), JavaScript had only `Global Scope` and `Function Scope`.

> ES6 introduced two important new JavaScript keywords: `let` and `const`.

> These two keywords provide `Block Scope` in JavaScript.

> Variables declared inside a { } block cannot be accessed from `outside the block`

> Variables declared with the `var` keyword can NOT have block scope.

> Variables declared inside a { } block can be accessed from `outside the block`.

**Example:-
**
```
{
  let x = 10;
}
console.log(x);//x can NOT be used here

```
In the above example we are can't access the variables outside of block we get error 
`ReferenceError: x is not defined`

**Output:-
**
![j1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662818667551/tWMHpWsww.PNG align="left")


Example:-

```
{
let x=10;
}
console.log(x)//// x CAN be used here
```
In this Above example you can see that we are able to access the variables outside of block.

**Output:-
**

![c1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662819163599/drX_pG4dJ.PNG align="left")


## Function Scope

**Local variables have Function Scope, They can only be accessed from within the function.
**

**👉Points to remember:**

> JavaScript has function scope: Each `function creates` a new scope.

> Variables defined inside a function are not accessible (visible) from `outside the function`.

> Variables declared with `var`, `let`and `const` are quite similar when declared inside a function.

Let understand with Example:-

```
function funTime() {
  // "run" function scope
  var message = "I, Write, Code!";
  console.log(message); // 'I, Write, Code!'
}
funTime();
console.log(message); // throws ReferenceError
```
`funTime()` function body creates a scope. The variable message is accessible inside of the `function scope`, but inaccessible outside.

**Output:-
**


![fs.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662820164185/otCPpm3fi.PNG align="left")

Same way, a function body creates a scope for `let`, `const` and even function declarations.

```
function funTime() {
  // "funTime" function scope
  const two = 2;
  let count = 0;
  function run2() {}
  console.log(two); // 2
  console.log(count); // 0
  console.log(run2); // function
}
funTime();
console.log(two); // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2); // throws ReferenceError
```

**Output:-
**

![fs1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662820076342/xXMj6_zFb.PNG align="left")
> 

## Global Scope

> The Javascript global scope is the context where everything in a Javascript program executes by default. 

> This scope includes all variables, objects, and references that are not contained within a customized scope defined by a programmer. Global scope is the entire Javascript execution environment.

```
var language = 'React';
```
*Note:-Variables inside the Global scope can be accessed and altered in any other scope.
*

```
var language = "React";

function handleChange() {
  console.log("Inside Function before modification-> ", language);
  language = "JS";
  console.log("Inside Function after modification-> ", language);
}

handleChange();

console.log("Outside function-> ", language);
```

**Output:-**
![inside.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662822135339/hhVint5wV.PNG align="left")


## What is Scope Chain👩‍🎨?
![Untitled (2).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662822966692/ZwNGw_oBc.png align="left")


**👉The Scope Chain is the hierarchy of scopes that will be searched in order to find a function or variable.
**


**In the creation phase of the [execution context](https://richak.hashnode.dev/how-javascript-works-and-execution-context), the scope chain is created after the variable object. The scope chain itself contains the variable object.
**

*The Scope Chain is used to resolve variables. When asked to resolve a variable, JavaScript always starts at the innermost level of the code nest and keeps jumping back to the parent scope until it finds the variable or any other resource it is looking for. 
The scope chain can simply be defined as an object containing the variable object of its own execution context and all the other execution contexts of its parents, an object having a bunch of other objects.
*

## Lexical Scope
> Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. 
>This means that the child's functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as Static Scope.


```
function a() {
  var language = "React";
  console.log("Inside Function a()-> ", language); //Output: React

  function b() {
    console.log("Inside Function b() before modification-> ", language); // Output: React
    language = "Tailwind";
    console.log("Inside Function b() after modification-> ", language); // Output: Tailwind

    var count = 5;
    console.log("Count inside b()-> ", count); //Output: 3
  }

  b();
  console.log("Inside Function a() after modification-> ", language); // Output: Tailwind
  console.log("Count inside a()-> ", count); //Output: ReferenceError
}

a();
```

**Output:-**
![gg.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662823980612/VhrtfiRQf.PNG align="left")

> Lexical Scope works in a forward manner.
`language` can be accessed by its children's `execution contexts`. But it doesn't work backward to its parents, meaning that the `variable count` cannot be accessed by its `parents`.

## Lexical Environment
👉A lexical environment is a data structure that holds *identifier-variable mapping*. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object or primitive value].

**Lexical in general means in hierarchy or in a sequence**.Whenever a new execution context(EC) is created a new lexical environment  is created and it is referenced in local EC in memory space.

**Lexical Environment: Local Memory + Lexical Environment of its Parent
**

> So in short, a lexical environment is a place where variables and functions live or physically present during the program execution.

*A Lexical Environment has two components:
*

✍✍**Environment record:** is the actual place where the variable and function declarations are stored.


✍✍**Reference to the outer environment:**means it has access to its outer (parent) lexical environment.


* This is what a lexical environment conceptually look like:
*

```
lexicalEnvironment = {
  environmentRecord: {
    <identifier> : <value>,
    <identifier> : <value>
  }
  outer: < Reference to the parent lexical environment>
}
```

*let's try to understand this using a simple example:-
*

![aa.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662825293444/_6mMh9yE5.PNG align="left")
```
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); //it prints the right value. How? See ans below Summary part
  }
}

a();
console.log(b); // now when cursor comes here, it prints NOT DEFINED!

/*
function c is lexically inside function a. 
- So in EC of c(), variables and fun in c (none) + reference of lexical env of parent a() is there
- LE of a() in turn is its memory space + reference to LE of parent (Global EC)
- LE of Global EC points to its memory space + *NULL* (as no parent for Global EC).
*/
```
**Output:-**

![lex.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662824995136/jfjtdLnBb.PNG align="left")

## What is the Call Stack in JavaScript🤔?
👉**The call stack is used by JavaScript to keep track of multiple function calls. **
It is like a real stack in data structures where data can be pushed and popped and follows the `Last In First Out (LIFO) principle`. We use call stack for memorizing which function is running right now. The below example demonstrates the call stack.

```
function f1() {
  console.log("Hi by Richa!");
}

function f2() {
  f1();
  console.log("Hi by Reone!");
}

f2();
```

**Output:-**

![call.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662826746034/gBLFLshBA.PNG align="left")

*Explanation:-
*
The steps and illustrations below explain the call stack of the above function.

**Step 1:** When the code loads in memory, the global execution context gets pushed in the stack.

![Untitled (3).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662827335483/qF08BEWrF.png align="left")

**Step 2:** The f2() function gets called, and the execution context of f2() gets pushed into the stack.


![Untitled (5).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662827893437/C3TH5lJKB.png align="left")

**Step 3: **The execution of f2() starts and during its execution, the f1() function gets called inside the f2() function. This causes the execution context of f1() to get pushed in the call stack.

![Untitled.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662828301613/Csd-0jZhX.png align="left")

**Step 4:** Now the f1() function starts executing. A new stack frame of the console.log() method will be pushed to the stack.


![Untitled (6).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662828571359/51bBsHKuF.png align="left")

**Step 5: **When the console.log() method runs, it will print “Hi by Richa” and then it will be popped from the stack. The execution context go will back to the function and now there not any line of code that remains in the f1() function, as a result, it will also be popped from the call stack.

**Step 6:** This will similarly happen with the console.log() method that prints the line “Hi by Reone” and then finally the function f2() would finish and would be pushed off the stack.



## What is Synchronous single-threaded?
*Synchronous single-threaded that means JavaScript execute `one command at a time` in a specific order so that means it can only go to the next line once the current line has been finished executing.[single-threaded](https://richak.hashnode.dev/how-javascript-works-and-execution-context#cl7rncu0s01hccxnv5hzh59be) **You can refer my previous blog I already explain about single-thread.**
*
> So if you understand what is single threaded means, it's the same concept with Synchronous JavaScript **"one thing at a time"**.

## JavaScript Hoisting🧘‍♀️
*👉Hoisting in JavaScript is a behavior in which a `function` or a `variable` can be used before declaration. For example,
*

```
// using test before declaring
console.log(test); // undefined
var test;
```
> The above program works and the output will be `undefined`. The above program behaves as


```
// using test before declaring
var test;
console.log(test); // undefined
```
Since the variable `test` is only declared and has no value, `undefined` value is assigned to it.

## Variable Hoisting
In terms of variables and constants, keyword `var` is hoisted and `let` and `const` does not allow hoisting.

For example,

```
// program to display value
a = 5;
console.log(a);
var a; // 5
```
> In the above example, variable a is used before declaring it. And the program works and displays the output `5`.


However in JavaScript, initializations are not hoisted. For example,

```
// program to display value
console.log(a);
var a = 5;
```

**Output:-
**

![hos.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662830119101/lALBnDdLW.PNG align="left")

*The above program behaves as:
*

```
var a;
console.log(a);
a = 5;
```
**Output:-
**

![h1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662830312690/7HRjTM4pl.PNG align="left")

> Only the declaration is moved to the memory in the compile phase. Hence, the value of variable `a` is `undefined` because `a` is printed without initializing it.

*Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,
*

```
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); // hello
console.log(b);
```

**Output:-
**

![h2.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662830593342/pikqZbZ6Q.PNG align="left")

> In the above example, variable `b` is hoisted to the top of the function `greet` and becomes a local variable. Hence b is only accessible inside the function. `b` does not become a global variable.


*If a variable is used with the `let` keyword, that variable is not hoisted. For example,
*
```
a = 5;
console.log(a);
let a; // error
```

**Output:-
**

![h3.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662830845593/jM3Iisyx0.PNG align="left")

> While using `let`, the variable must be declared first.

## Function Hoisting
*A function can be called before declaring it. For example,
*

```
greet();

function greet() {
    console.log('Hi, there.');
}
```

**Output:-
**

![h5.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662831137581/59r9G09im.PNG align="left")

> In the above program, the function `greet` is called before declaring it and the program shows the output. This is due to hoisting.

However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;

```
greet();

let greet = function() {
    console.log('Hi, there.');
}
```
**Output:-
**

![h6.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662831238069/E2_8Q2RwN.PNG align="left")

If `var` was used in the above program, the error would be:-`Uncaught TypeError: greet is not a function `

```
greet();

var greet = function () {
  console.log("Hi, there.");
};
```
**Output:-
**

![h8.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662831369923/KEcuFiTEP.PNG align="left")

## 🎇Important key points to remember:-
*Var
*
- Variables declare as `var` in the function scope
- Hosting allowed in `var`
- Reassign value allowed in `var`
- Redeclaration of variable Allowed

*Let
*
- Variables declare as `let` in the block scope
- Hosting not allowed in `let`
- Reassign value allowed in `let`
- Redeclaration of variable not Allowed

*Const
*

- Const declare as `let` in the block scope
- Hosting not allowed in `const`
- Reassign value not allowed in `const`
- Redeclaration of variable not Allowed



## 🎇Different between local Variable Vs Global Variable:-

- local:-It is declared inside a function.

- global:-it is declared outside the function.

- local:-if it is not initialized a garbage value is stored.

- global:-if it is not initialized zero is stored as default.

- local:-data sharing is not possible as data of the local variable can be accessed by only one function.

- global:-data sharing is possible as multiple can access the same global variable.

# Wrap Up!!
Thanks for reading!! I know this is a lot to consume in a single Blog. I hope it was helpful to some extent. Please share it with your network. Don’t forget to leave your comments below.

[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)



![meme.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662833200084/2FU-ML72O.PNG align="left")




- 
