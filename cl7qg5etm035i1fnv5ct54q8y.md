# How JavaScript Works And Execution Context  🔥

**If you are or want to be a Good JavaScript developer, then you must know how the JavaScript programs are worked internally. In this Blog We are  learn How
javaScript work and Execution Context.
**
## What is an Execution Context?
👉*The Execution Context contains the code that's currently running, and everything that aids in its execution.*
**In other words Everything in JavaScript happens inside an Execution context
**

## Types of Execution Context

- Global Execution Context (GEC)
- Function Execution Context (FEC)

## Global Execution Context (GEC)
> *Whenever we execute JavaScript code, it creates a Global Execution Context (also knows as Base Execution Context).*

## Function Execution Context (FEC)
> *When we invoke a function, a Function Execution Context gets created.*

*Let understand this concept with the help of Container*


![Untitled.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662481506715/uLsYdbdvy.png align="left")


We can assume this container is  **Execution Context** in which whole javaScript Code is executed.

So let us now see How this **Execution Context** actually looks like. Let suppose the above diagram is Execution Context.

The `First Component` is also know as the `Memory Component` so this is place where all 
the variables and functions are stored as `key-value` pairs  something like this key value,
if suppose we have a variables `a` which is equivalent to `15`you can refer the block diagram. It will be stored over here and similarly `function` are stored over in **Memory Component**
> This **Memory Component** is also Know as  **Variable Environment
 **

The `Second Component` of this  **Execution Context** is the `Code Component` this
is the place where code is executed one line at a time it is also know as **Thread of Execution**

> Note:-JavaScript is synchronous single-threaded language

## What is Synchronous single-threaded?
Synchronous single-threaded that means JavaScript `execute one command at a time`
in a specific order so that means it can only go to the next line once the current line has
been finished executing. 

👉 Resources
*Check out some of these resources for a more in-depth:- [JavaScript Execution Context ](https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/)
*
# In closing
So we have discussed how JavaScript programs are worked internally in this Blog. 
That’s it and if you found this article helpful, please hit the 👏 button and feel free to comment below! I’d be happy to talk 😃.

**I write web development articles on my blog @richak.hashnode.dev and post development-related content.
**

![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662484079013/oYoWkPNA5.PNG align="left")
[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)