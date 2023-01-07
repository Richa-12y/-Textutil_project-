# 🦸‍♀️React useMemo Hook ultimate guide🚀

## **🎯 Introduction**

**Hello, Developers!! 😇👩‍💻 With the release of React 16.8, there are many useful hooks you can now use in your React applications.** *One of the built-in Hooks that was introduced in 16.8 is* `useMemo`**<mark>.</mark> <mark>This hook has the potential to improve performance in your application.</mark>**

**This article will explore how re-rendering works in React, why that is an important consideration for React applications**, and how the `useMemo` hook can leverage it to **<mark>create a performance boost in your applications. it provides to make your code even faster.</mark>**

![Austin Powers Hello GIF](https://media1.giphy.com/media/QQkyLVLAbQRKU/200w.gif?cid=ecf05e4712hy0dk2grz5kmxu9jz189zdiey9o0ry9b2pgty6&rid=200w.gif&ct=g align="center")

🔑**Definition:-**

**useMemo** — ***<mark>returns a memoized value, which helps avoiding expensive calculations on every render.</mark>***

### **What problem does useMemo solve?🧐**

![Seems Jimmy Fallon GIF by The Tonight Show Starring Jimmy Fallon](https://media0.giphy.com/media/qY4LO6LEbn4IlEEHDK/200w.gif?cid=ecf05e47j4cp7jmxwugnn25zk14olstiol8jddts7ud5nrqv&rid=200w.gif&ct=g align="center")

`useMemo` **is a React hook that memorizes the output of a function**. That is it. useMemo <mark>accepts two arguments:</mark> a <mark>function and a list of dependencies</mark>. `useMemo` will *call the function and return its return value*. Then, every time you call `useMemo` again, it will first check if any dependencies have changed. If not, it will return the cached return value, not calling the function. <mark>If they have changed, </mark> `useMemo` <mark> will call the provided function again and repeat the process.</mark>

```javascript
import { useMemo } from 'react';
// ...
const result = useMemo(() => runHeavyCalc(data), [data]);
```

**I will explain this as a point so you can easily remember this.**

**<mark>You need to pass two things to </mark>** `useMemo`**<mark>:</mark>**

1.  A calculation function that takes no arguments, like `() =>`**,** and returns what you wanted to calculate.
    
2.  A list of dependencies including every value within your component that’s used inside your calculation.
    

## **When should you use it?🤷‍♀️**

![Look At Us Paul Rudd GIF by First We Feast: Hot Ones](https://media1.giphy.com/media/SUEjfSLaD6f77lyzH6/200w.gif?cid=ecf05e4737t64rk284b73h47b0o7tbb16tqlll0brabqxyie&rid=200w.gif&ct=g align="center")

**Firstly, it is important to note that your code must not depend on** `useMemo`. *In other words, you should be able to replace* `useMemo` *calls with direct function calls and not change anything in the application behavior, except the performance.* **The easiest way to do it is to write code without** `useMemo` **first, then add as needed.**

**<mark>To understand </mark>** `useMemo` **<mark> and when should you use it, check out this example. Firstly, look at this code</mark>**

![running along music video GIF by Columbia Records UK](https://media0.giphy.com/media/ce1jBtfpX1X59x4adp/100.gif?cid=ecf05e47pjf9tx1vocir6ezecw6ghfo8wpqaw2np0vuhybz6&rid=100.gif&ct=g align="center")

## **🐱‍👤Setting Development Area**

`npx create-react-app hooksmemo`

`cd hooksmemo`

`npm start`

**After installation, we should have this.**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670775095511/riL3seHmM.png align="center")

I tried to think what would be the simplest app I could build to demonstrate the idea. One thing is for sure it should have a counter, and a button to increment that counter.

<mark>Let’s see the code</mark>

`App.js`

```javascript
import logo from "./logo.svg";
import "./App.css";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>useMemo</b> Skipping expensive recalculations.
        </p>
        <a
          className="App-link"
          href="https://hashnode.com/@Richa000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join me to Learn React
        </a>
        <Container />
      </header>
    </div>
  );
}

export default App;
```

I created `Container file` inside src folder then import that file inside `App.js`

```javascript
import React, { useState } from "react";

const Container = () => {
  const [count, setCount] = useState(0);
  console.log("App rendered with count", count);

  const handleIncrementButton = () => {
    setCount(count + 1);
     };
  return (
    <div
      style={{
        width: "450px",
        height: "350px",
        border: "1px solid white",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h1>Hello Coders👩‍💻!</h1>
      <p style={{ color: "white" }}>Counter: {count}</p>
      <button
        onClick={handleIncrementButton}
        style={{
          background: "red",
          padding: "10px 15px",
          color: "white",
          border: "none",
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default Container;
```

`App.css`

```css
.App {
  text-align:start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  width: 100vw;
  height: 100vh;
}

.App-logo {
  height: 20vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items:center;
  justify-content:flex-start;
  font-size: calc(10px + 2vmin);
  color: greenyellow;
  cursor: pointer;
}

.App-link {
  color: #f00b0b;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Output:-

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670778773951/7RKQBiqyH.png align="center")

**Try it. On every click of the increment button, the App component would re-render and the following console log will appear:-**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670779203648/UUqzifxfV.png align="center")

**Simple right? But we need to make it complicated then I will explain it to you in easily way**😂. We want to add data fetching from a mock API, and a heavy calculation based on the fetched data.

<mark>The new code is highlighted:-</mark>

```javascript
import React, { useEffect, useState } from "react";

const Container = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  console.log("App rendered with count", count);

  console.log("App rendered with count", count);
  const handleIncrementButton = () => {
    setCount(count + 1);
  };

  const fetchData = () => {
    // Imagine here an API call which returns a random number
    return Math.random();
  };
  const runHeavyCalc = (data) => {
    if (!data) return;
    console.log("Computing heavy func with data", data);
    // Math.floor is not heavy, use your imagination again
    return Math.floor(data * 100);
  };
  useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);
  const result = runHeavyCalc(data);
  return (
    <div
      style={{
        width: "450px",
        height: "350px",
        border: "1px solid white",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h1>Hello Coders👩‍💻!</h1>
      <p style={{ color: "white" }}>Counter: {count}</p>
      <p style={{ color: "blue" }}>Result is {result}</p>
      <button
        onClick={handleIncrementButton}
        style={{
          background: "red",
          padding: "10px 15px",
          color: "white",
          border: "none",
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default Container;
```

<mark>OK. What we’ve added here is a </mark> `useEffect` <mark>hook to fetch data from an API.</mark> Since the fetching is async by nature, we save the result to state when it returns (for brevity, written without async functions).

**Then we run the** `runHeavyCalc` **function on it, and show the result on the screen**

Now let’s click the button a couple of times and look at the console:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670780113036/k3APY2ICr.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670780140877/ktRDKmsBT.png align="center")

# **What happened here?🤔**

![It Happens Season 3 GIF by Portlandia](https://media2.giphy.com/media/3o6fJdlKejPY66AqHK/200w.gif?cid=ecf05e476g3ifw2rsxzu089x4ii594m0p0n3ml21gz7tz6k1&rid=200w.gif&ct=g align="center")

1.  The first message is printed twice because the App initially rendered with counter 0, then rendered again when the API fetch changed the state.
    
2.  Every counter increment button click re-rendered the App component, printing the new counter.
    
3.  Every render also ran the heavy calculation, printing the random number before calculation.
    

![Korean Smile GIF](https://media0.giphy.com/media/4Zamdp80x9cWLxPbNa/200.gif?cid=ecf05e479unbv648e7r290fh6wao9623s7abl8njh98n8lsk&rid=200.gif&ct=g align="center")

**Why do we run the heavy calculation more than once, then?**

### **useMemo to the rescue**

**Let’s look at the line calling the heavy calculation again:**

`const result = runHeavyCalc(data);`

<mark>The answer is that React doesn’t know it shouldn’t run the calculation again. It doesn’t even know it’s a calculation; it’s just a line of code running on every render.</mark>

**To make this calculation run only once, we’ll import the useMemo hook and refactor the line:**

```javascript
import React, { useEffect, useMemo, useState } from 'react';
...
const result = useMemo(() => runHeavyCalc(data), [data]);
```

Similar to the *useEffect* syntax, the passed callback will only run when a value changed in the dependency array — in our case when the **data** value changes.

With the new code, clicking the button a couple of times will result in the following console logs:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670781160595/HLHKEPZm6.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670781185342/ue8PbDzCP.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670781204087/1bTj9s3Bo.png align="center")

```javascript
import React, { useEffect, useState, useMemo } from "react";

const Container = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  console.log("App rendered with count", count);
  const handleIncrementButton = () => {
    setCount(count + 1);
  };

  const fetchData = () => {
    // Imagine here an API call which returns a random number
    return Math.random();
  };
  const runHeavyCalc = (data) => {
    if (!data) return;
    console.log("Computing heavy func with data", data);
    // Math.floor is not heavy, use your imagination again
    return Math.floor(data * 100);
  };
  useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);
  //   const result = runHeavyCalc(data);
  const result = useMemo(() => runHeavyCalc(data), [data]);

  return (
    <div
      style={{
        width: "450px",
        height: "350px",
        border: "1px solid white",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h1>Hello Coders👩‍💻!</h1>
      <p style={{ color: "white" }}>Counter: {count}</p>
      <p style={{ color: "blue" }}>Result is {result}</p>
      <button
        onClick={handleIncrementButton}
        style={{
          background: "red",
          padding: "10px 15px",
          color: "white",
          border: "none",
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default Container;
```

**<mark>Here is my GitHub Link for the code:-</mark>**

%[https://github.com/Richa-12y/useMemoHOOKS] 

%[https://www.buymeacoffee.com/kricha000l] 

# **🎯 Wrap Up!!**

**Thank you for reading, I hope you enjoyed it🤩Please share it with your network. <mark>Don’t forget to leave your comments below.</mark>**

![Korean Drama Fighting GIF by The Swoon](https://media0.giphy.com/media/Uk7kn3MJXuAyOGpLAu/200w.gif?cid=ecf05e479unbv648e7r290fh6wao9623s7abl8njh98n8lsk&rid=200w.gif&ct=g align="center")