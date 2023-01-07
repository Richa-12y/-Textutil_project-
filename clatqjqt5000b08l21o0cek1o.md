# 🎊How To Use Refs In React With Hooks✨

**Hello React Developers!! 👨‍💻👩‍💻 Today we are going to learn about useRef**

## 🎯 Introduction

*The useRef hook is the new addition in React 16.8.useRef is short for `reference` and is a hook which allows you to persist values between renders. *

![giphy.gif](https://media.giphy.com/media/LPwy2d5M050noHXDUe/giphy.gif align="left")

**As a reminder, it’s crucial to follow the rules of Hooks when using any Hook, not just `useState` or `useRef`: **

![giphy.gif](https://media.giphy.com/media/LwyaWIE6zAHmdX8oDE/giphy.gif align="left")

*   Hooks should only be called from the top level of your React function
    
*   Hooks must not be called from nested code (e.g., loops, conditions)
    
*   Hooks may also be called at the top level from custom Hooks
    

### 🔑Key Points:-

*   The `useRef` Hook allows you to persist values between renders.
    
*   It can be used to store a mutable value that does not cause a re-render when updated.
    
*   It can be used to access a DOM element directly.
    

## 🎯`useRef`

In order to work with refs in React you need to first initialize a ref which is what the useRef hook is for.

> This hook is very straightforward, and takes an initial value as the only argument.

** 📢Syntax: **

```javascript
const reference = useRef("initial value")
```

In the above example we have created a ref called `reference` and set its default value to `initial value`. This means that reference is now equal to an object that looks like this.

```javascript
{
  current: 'initial value'
}
```

*This returns an* `object` which has a `key` called `current`, initialized with this `initial value`.

## 🎯How To Use Refs

**A very common use case for using `useRef` is for when, suppose you click on a button, and then on its click you want an input to come into focus. **

```javascript
const inputToFocus = useRef(null);
```

**Then on its click you want an input to come into focus. To do this, we would need to access the DOM element of input and then call its function `focus()` to focus the input. **

```javascript
const clickHandler = () => {
    inputToFocus.current.focus();
  };
```

**This is easy to do in JavaScript by just selecting the input using** `querySelector` or by `id/class` and then calling its `focus()` function, but `React` does not have a simple way built in to do it. so this can be achieved using `useRef`.

### 📍Let see the example

```javascript
import React, { useRef } from "react";

const Useref = () => {
  const inputToFocus = useRef(null);
  const clickHandler = () => {
    inputToFocus.current.focus();
  };
  return (
    <div>
      <input ref={inputToFocus} type="text" placeholder="Enter somethings" />
      <button onClick={clickHandler}>Focus on Input</button>
    </div>
  );
};

export default Useref;
```

**Output:- **

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669210047495/pMX7Y3Id-.png align="left")

## 🎯 Using Refs Beyond The DOM

**While most use cases for refs lie with referencing DOM elements, refs can also be used for any form of storage that is persisted across component renders. A very common use case for this would be storing the previous value of a state variable.**

The above code will update the `previousName` ref every time the name changes so that it always has the previous value of the name variable stored in it. \*

### 📍Let see the example

*   Use `useRef` to keep track of previous state values
    
*   This time we use a combination of `useState`, `useEffect`, and `useRef` to keep track of the previous state.
    
*   In the useEffect, we are updating the `useRef` current value each time the `name` is updated by entering text into the input field.
    

```javascript
import React, { useEffect, useRef, useState } from "react";

const Useref = () => {
  const [name, setName] = useState(""); 
  const previousName = useRef(null);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    previousName.current = name;
  }, [name]);
  return (
    <div>
      <input
        onChange={handleChange}
        value={name}
        placeholder="Enter somethings"
      />
      <div>
        <h2>Current Value: {name}</h2>
        <h2>Previous Value: {previousName.current}</h2>
      </div>
    </div>
  );
};
```

**Output:- **

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669211714092/Y-i3HvxE7.png align="left")

# 🎯 The differences between `useRef` & `useState`

![giphy.gif](https://media.giphy.com/media/O27MnLaYGAfZb9BGLA/giphy.gif align="center")

*   Both preserve their data during `render cycles` and `UI updates`, but only the `useState` Hook with its updater function causes `re-renders`
    
*   `useRef` returns an `object` with a `current property` holding the actual value. In contrast, `useState` returns an `array` with two elements: the first item constitutes the `state`, and the second item represents the state `updater function`
    
*   `useRef‘s` current property is `mutable`, but useState‘s state `variable` not. In contrast to the current property of `useRef`, you should not directly assign values to the state variable of `useState`. Instead, always use the `updater function` (i.e., the second array item). As the React team recommends in the documentation for `setState` in class-based components (but still true for function components), treat state like an immutable variable
    
*   `useState` and `useRef` can be considered data Hooks, but only `useRef` can be used in yet another field of application: to gain direct access to `React components or DOM elements`
    

# 🎯 When to use Refs and States

![giphy.gif](https://media.giphy.com/media/6w6qtI6GIOam29NddG/giphy.gif align="center")

*   Refs are useful when getting user input, DOM element properties and storing constantly updating values.
    
*   If you are storing component related info or use methods in components states are the best option.
    

# 🎯 Wrap Up!!

**I hope you learned something new🤗, if you wish to read more about these topics, you can refer to the resources below! You can also comment down your thoughts** [**W3School**](https://www.w3schools.com/react/react_useref.asp)

![giphy.gif](https://media.giphy.com/media/l3vRbyZfZkTv1GzbG/giphy.gif align="center")