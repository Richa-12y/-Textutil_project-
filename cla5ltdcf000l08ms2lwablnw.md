# ✨useEffect Hook for Absolute Beginners✨

\*\*Hello Developers!! 👨‍💻👩‍💻 So we learned about differences between props and state in previous article. Today we are going to learn about very important topic in react js hook which is useEffect(). \*\*

![giphy.gif](https://media.giphy.com/media/23eImiq8DuPe9PmLV3/giphy.gif align="left")

* In initial day's when React introduced function components called as Dumb components because we can't performer updation as well as life cycle event in functional components so useEffect comes in picture to help us to perform life cycle event in functional based components and it divided life cycle method majority in three parts:-\*
    

* 🎊componentDidMount
    

> It will run at least one time after components get render on screen at first time.

* 🎆componentDidUpdate
    

> In some condition we want our components update when a particular variables or function get updated

* 🎇componentWillUnmount
    

> Whenever components removed from the page in such case if we want to perform some task in that case we used componentWillUnmount

# The useEffect Hook Usages

👉**The callback function we pass to the useEffect hook runs the side effects.** React runs it on every render of a component by default. However, side effects can be expensive and performance-intensive to run on every render. We can control it using the dependency *array argument we pass to the useEffect hook*.

## 🚀UseEffect's basic syntax looks like this:-

\*\*The useEffect hook takes two arguments, \*\*

* A callback function to define and clean up a side effect.
    
* An optional dependency array that ensures when to run a side effect defined inside the callback function.
    

```javascript
// Syntax of useEffect Hook:
useEffect(callback, [dependencies]);
```

\*Let see with example how to write useEffect in code :- \*

```javascript
// Simple Example:
// Import useEffect hook from React:-In top 
import { useEffect } from 'react'

function App() {
  // Use useEffect Hook:
  useEffect(() => {
    // Execute some code.
  }, c)

  // ...
}
```

# 🎯useEffect dependency options

```javascript
// Option 1 - no dependencies 0r Zero dependencies
useEffect(() => {
  // heavy logic that runs after each render
});

// Option 2 - empty dependencies
useEffect(() => {
  // create an event listener, subscription, fetch one-time data
}, []);

// Option 3 - with dependencies
useEffect(() => {
  // fetch data whenever A, B or C changes.
}, [a, b, c]);
```

# 🎯We will learn Six usages of useEffect hook to run and clean up a side effect.

## 📍Side Effect Runs `After Every` Render

The first is the default case. If you do not pass the dependency array to the useEffect hook, the callback function executes on every render. Thus React will run the side effect defined in it after every render.

\*\*Synatx:- \*\*

```javascript
useEffect(() => {
  // Side Effect
});
```

\*\*Example👓 \*\*

It is not a highly used use case scenario. We may always want to control the run of a side effect.

```javascript
import { useState, useEffect } from "react";
import "./styles.css";
const App=()=>{

  const[name, setName]=useState('How you Doing');
useEffect(()=>{
  setName("I'm Good")
})
 return(
   <div>{name}</div>
 )
}
export default App;
```

![giphy.gif](https://media.giphy.com/media/d2Z4rTi11c9LRita/giphy.gif align="left")

## 📍 Side Effect Runs`Only Once`After Initial Render

You may want to run the side effect just once after the initial render. A typical case will be fetching data making an API call, and storing the response in the state variable after the initial render. You do not want to make this API call again.

You can pass an empty array as the second argument to the useEffect hook to tackle this use case.

\*\*Synatx:- \*\*

```javascript
useEffect(() => {
  // Side Effect
}, []);
```

In this case, the side effect runs only once after the initial render of the component.

**Example:-**

```javascript
import { useState, useEffect } from "react";
import "./styles.css";
const App = () => {
  const [compliment, setCompliment] = useState("You are Beautiful");
  useEffect(() => {
    setTimeout(() => {
      setCompliment("Thank you");
    }, 2000);
  }, []);
  return <div>{compliment}</div>;
};
export default App;
```

![giphy.gif](https://media.giphy.com/media/EIzlcxzGuqjhBVcnbD/giphy.gif align="left")

## 📍 Side Effect Runs After `State Value` Changes

You may need to run a side effect depending on a state value. For example, you may have a side effect to prepare a greeting message based on a spoken language(English, Spanish, Hindi, Tamil, etc.). Here the spoken language value is stored in a state variable.

Every time we select a spoken language, the state gets updated. As the state value gets updated, you want to recreate the greeting message. To solve this use case, you must pass the state variable to the useEffect hook as part of the dependency array.

**Synatx:-**

```javascript
useEffect(() => {
  // Side Effect
}, [state]);
```

In this case, the side effect will run every time the value of the state variable changes. If multiple state variables influence a side effect, you can pass them as comma-separated in the dependency array.

**Synatx:-**

```javascript
useEffect(() => {
  // Side Effect
}, [state1, state2, state3]);
```

**Example:-**

```javascript
import { useState, useEffect } from "react";
import "./styles.css";
const App = () => {
  const [titleName, setTitleName] = useState("shanu");
  const [age, setAge] = useState(22);

  useEffect(() => {
    setTimeout(() => {
      setTitleName("richa");
    }, 2000);
  }, []);

  useEffect(() => {
    if (titleName === "shanu") {
      setAge(22);
    } else {
      setAge(23);
    }
  }, [titleName]);

  return (
    <div>
      {titleName}
      {age}
      <button onClick={() => setTitleName("shanu")}></button>
    </div>
  );
};
export default App;
```

## 📍 Side Effect Runs `After Props Value` Change

Just like the state, we can also use props as a dependency to run the side effect. In this case, the side effect will run every time there is a change to the props passed as a dependency.

```javascript
useEffect(() => {
  // Side Effect
}, [props]);
```

You can pass multiple props as comma-separated as dependencies like the previous example.

## 📍 Side Effect Runs After `Props and State Value Change`

What if you need to run the side effect every time a combination of state and props change. This use case may occur when your side effect depends on the state and props values. In this case, you need to pass both the state and props variables as dependencies.

```javascript
useEffect(() => {
  // Side Effect
}, [props, state]);
```

![giphy.gif](https://media.giphy.com/media/EPnhZNSLUx6EAg7t9D/giphy.gif align="left")

## 📍 Side EffectCleanup

So far, we have seen how and when to run a side effect. It is also essential that we clean up the side effect to taking care of the application's performance. Every side effects are different. So, the cleanup strategy for the side effect will differ.

For example, if you have a side effect of running a timer using the setTimeout function, you need to clean it up by invoking the clearTimeout function. But how do we do it?

To clean up a side effect, you need to return a function from the callback function we pass to the useEffect hook. You must place the side effect clean up logic inside the returned function.

```javascript
useEffect(() => {
  // Side Effect

  return () => {
    // Side Effect Cleanup
  }
}[props, state]);
```

**Example:-**

```javascript
import { useState, useEffect } from "react";
import "./styles.css";
const App = () => {
const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

   return(
     <div>I've rendered {count} times!</div>
   )
};
export default App
```

![giphy.gif](https://media.giphy.com/media/26mE87gmEO9sHYIQE/giphy.gif align="left")

🎯 Wrap Up!!

\*\*I hope you learned something new🤗, if you wish to read more about these topics, you can refer to the resources below! You can also comment down your thoughts \*\* [W3School](https://www.w3schools.com/react/react_useeffect.asp)

![giphy.gif](https://media.giphy.com/media/PF4NopbRuZj8I/giphy.gif align="left")

[![](https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00 align="left")](https://www.buymeacoffee.com/kricha000l)