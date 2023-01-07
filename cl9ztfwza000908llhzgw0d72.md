# All About useState Hook

**Hello Coders 👩‍💻! So, this is going to be the second part of the React blog app series. In the first part, we discussed about React Props.**

**In the second part, I will be dealing with Hooks I will Create new component and the useState hook in this part.**


# 🎯Introducing Hooks

 *👉Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.😳
*

## 🎯 What is Hooks?

Initially when React js is introduces  there is two type of components one is `Smart components`** (class components is also known as smart components)** another is `dumb components.`**(function components is also known as dumb components)**

   > **dumb components is use to show the `UI` part only it will not perform `logical 
        operation` Like updating of state, working with life cycle method and other complex 
        operation in dumb components to avoid this in React 16.8 Facebook Introduce Hooks
        concepts now with hooks components we can approximately perform all the logical
        operation.  **

![giphy.gif](https://media.giphy.com/media/mGK1g88HZRa2FlKGbz/giphy.gif)

## 🎯 Rules of Hooks

** There are 3 rules for hooks:
**
 
1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional
    
> Note: Hooks will not work in React class components.


## 🎯What is useState Hook?

👉**useState is method to check the updation of state and if state is updated it will render
the components**


## 📌 Syntax:-

```
import { useState } from "react";//At the top of your component, import the useState Hook.

const App = () =>  {
  const [count, setCount] = useState(0);

}
```

### 🎯 Initialize useState

We initialize our state by calling `useState` in our function component.

`useState` accepts an `initial state` and returns `two values`:

- The `current state`.
- A `function that updates the state`.

**When we declare a state variable with useState, it returns a pair — an array with two items. So, by writing square brackets we are doing array `destructuring`.
**

The first value, `count`, is our current state.

The second value,`setCount`, is the function that is used to update our state.

> These names are variables that can be named anything you would like.

### 📌 Manage State using Functional Component

- Create a functional component
- We need a state property initialized to 0.
- We need a method capable of setting that state property value.
- Syntax which we have used below in `const [count, setCount] = useState(0)`; is called Array Destructuring
- The variable counter will always contain the current state value and setCount will accept an argument and set a counter value to that argument.


```
import { useState } from "react";
// 1. Importing useState
// 2. Destructuring useState
const App = () => {
  const [count, setCount] = useState(0);
  // naming our: state variable 'count' and update function 'setCount'
  // 3. useState allows us to pass in the starting value, here it is 0
  /**
   * @desc {*} handleClick trigger the click event to perfomed logical opration
   * @return {void}
   */
  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      setCount(count + 1);
    }
  };
  return (
    <div
      className="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          height: "40px",
          background: "red",
          color: "white",
        }}
      >
        Increment number
      </button>
      <div>{count}</div>
      {/* displaying count with {count} */}
    </div>
  );
};
export default App;
```


- A very first time the component renders a state variable is created and initialized with the default value of 0. The default value is never used on re-renders.
- When you click on the button the `setCount` method is called which will add 1 to the current counter value.
- setCount method will cost the component to re-render.
- After the re-render counter will contain the updated value.


**Output:-
**


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667401490485/VQTfwKAgD.png align="left")


### 📌 useState with previous state

*Now let's take a look at an example where we'll see how to update the state based on the previous state.*

**Let's write a same code again:-
**

```
import { useState } from "react";
// 1. Importing useState
// 2. Destructuring useState
const App = () => {
  const [count, setCount] = useState(0);
  // naming our: state variable 'count' and update function 'setCount'
  // 3. useState allows us to pass in the starting value, here it is 0
  /**
   * @desc {*} handleClick trigger the click event to perfomed logical opration
   * @return {void}
   */
  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      // Update the value based on the previous value

      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div
      className="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          height: "40px",
          background: "red",
          color: "white",
        }}
      >
        Increment number
      </button>
      <div>{count}</div>
      {/* displaying count with {count} */}
    </div>
  );
};
export default App;
```

**Output:-**


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667401979461/Wgy6-SL0p.png align="left")

### 📌 useState with Objects

Now we will use an object as a state variable with the useState hook. So instead of storing a variable, we will work with objects this time.

In the below example, we will initialize the state variable with an object with `name lastName  and jobTitle` as a key.

Let's see the code:-


```
import { useState } from "react";
// 1. Importing useState
// 2. Destructuring useState
const App = () => {
  const [user, setUser] = useState({
    name: "Richa",
    lastName: "Singh",
    jobTitle: "UI Developer",
  });
  /**
   * @desc {*} handleClick trigger the click event to perfomed logical opration
   * @return {void}
   */
  const handleClick = () => {
    setUser((prevUser) => {
      return { ...prevUser, jobTitle: "front-end developer" };
    });
  };
  return (
    <div
      className="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          height: "40px",
          background: "red",
          color: "white",
        }}
      >
        Update details
      </button>
      <div>
        <b>My Details:</b>
        <span>{user.name}</span> <span>{user.lastName}</span>
        <span>{user.jobTitle}</span>
      </div>
    </div>
  );
};
export default App;
```

**Output:-
**

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667402923693/T_Jz1CYTB.png align="left")


## 🕸Summary

- The useState hook allows you to maintain a state inside functional components.
- State setter function will cause the component to re-render.
- If you use the previous value to update state, you must pass a function that receives the previous value and returns an updated value, for example, `setCount((prevCount) => prevCount + 1)`;
- When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function

![giphy.gif](https://media.giphy.com/media/ZdUnQS4AXEl1AERdil/giphy.gif)

.
## 🎯 Wrap Up!!

**That's all for this article. I hope that this Article helped you understand what the useState hook is about and how to use it in your React projects.**Please share it with your network. Don’t forget to leave your comments below.

![giphy.gif](https://media.giphy.com/media/hqYvsWDWMlrMWtVkEm/giphy.gif)

[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)
