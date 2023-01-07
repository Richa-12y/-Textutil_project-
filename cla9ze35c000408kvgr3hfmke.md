# Understanding React “useContext” Hooks
🚀

**We already learn about *[prop drilling](https://richak.hashnode.dev/what-is-prop-drilling) *in our previous article👨‍💻.Today we are going to learn about useContext hooks. we used useContext to avoid “prop drilling”**

![giphy.gif](https://media.giphy.com/media/j6BbusyOqoS7arjEpT/giphy.gif)

# 🎯What is useContext in React JS?

The useContext hook is the `new addition in React 16.8`. “useContext” hook is used to create common data that can be accessed throughout the** component hierarchy without passing the props down manually to each level.
**


> In simple word `useContext` is a React Hook that lets you read and subscribe to context from your component.😇


## 📍 How to use the context?

Using the context in React requires 3 simple steps: 
`creating the context`, `providing the context`, and `consuming the context`.

###     ✨Creating the context

*  To create context, you must Import createContext and initialize it:
*

```
import { createContext } from 'react';
export const ChildOneContext = createContext();
```

###     ✨Providing the context

*Wrap child components in the Context Provider and supply the state value.
*


```
import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import ChildOne from "./components/ChildOne";

export const ChildOneContext = createContext();

let data = {
  data: [
    {
      heading: "shanu",
      img: "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/11/IMG-20221108-WA0006.jpg?w=701&ssl=1",
    },
    {
      heading: "richa",
      img: "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/11/IMG-20221108-WA0006.jpg?w=701&ssl=1",
    },
  ],
  title: " this is bhanu",
};
export function App() {
  return (
    <div className="App">
      <ChildOneContext.Provider value={data}>
        <ChildOne />
      </ChildOneContext.Provider>
    </div>
  );
}

export default App;
```
###     ✨Consuming the context

*Consuming the context can be performed in 2 ways.
But we learn only first way, how to use the `useContext(ChildOneContext)` React hook:*


```
import React, { useContext } from "react";
import { ChildOneContext } from "../App";
import Cart from "./Cart";
import { childContext } from "./ChildTwo";

const ChildThree = () => {
  const { data } = useContext(ChildOneContext);
  const result = useContext(childContext);
  console.log(data);
  console.log(result);

  return (
    <>
      {data.map((el, i) => {
        return (
          <Cart
            onClick={() => console.log(el.heading)}
            name={el.heading}
            src={el.img}
          />
        );
      })}
    </>
  );
};

export default ChildThree;
```

![giphy.gif](https://media.giphy.com/media/TgOYjtgKpS9jAytUlh/giphy.gif)


![Untitled (16).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668017859005/LtMgUOMb5.png align="left")

*You can have as many consumers as you want for a single context. If the context value changes (by changing the value prop of the provider <Context.Provider value={data} />), then all consumers are immediately notified and re-rendered.*


*If the consumer isn't wrapped inside the provider, but still tries to access the context value (using useContext(ChildOneContext),then the value of the context would be the default value argument supplied to createContext(defaultValue) factory function that had created the context.*


## 📢When do you need context?🤔

**The main idea of using the context is to allow your components to access some global data and re-render when that global data is changed. Context solves the props drilling problem: when you have to pass down props from parents to children.**

*You can hold inside the context:
*

- global state
- theme
- application configuration
- authenticated user name
- user settings
- preferred language
- a collection of services

*On the other side, you should think carefully before deciding to use context in your application.*

**Here is Githup Link for Source Code:- [Clickhere](https://github.com/Richa-12y/propsdrilling/tree/feature/usecontext)
**

### 🎯 Conclusion

**The context in React is a concept that lets you supply child components with global data, no matter how deep they are in the components tree.**

*Using the context requires 3 steps: creating, providing, and consuming the context.
*

> When integrating the context into your application, consider that it adds a good amount of complexity. Sometimes drilling the props through 2-3 levels in the hierarchy isn't a big problem.



### 🎯 Wrap Up!!

That's all for this article. I hope that this Article helped you understand what the useContext hook is about and how to use it in your React projects.Please share it with your network. Don’t forget to leave your comments below.

[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)

![giphy.gif](https://media.giphy.com/media/l0IycQmt79g9XzOWQ/giphy.gif)