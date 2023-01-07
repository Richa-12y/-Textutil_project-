# What is Prop Drilling ?🤔✨

**Hey, React js Developers 😇!! In this article we'll cover the prop drilling topic.**

# 🎯What is Prop Drilling ?

**👉 If we want to pass data from `parent component` to it's `nth child components` in such scenario we have to pass data all the `child components` and that is called as a
`prop drilling`
**

*See the below image:-
*

![execution (2).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667926176563/uOWGODzSp.png align="left")

### 🗝Key points:-

 - Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level.

 - We refer prop drilling to the process of sending props from a higher-level component to a lower-level component.


# 🎯 How to avoid prop drilling?🤔

** In React 16 `Facbook Team` introduced concept of `Context API Hooks`with the help of this we can avoid prop drilling. we will learn about `Context API Hooks`in  my next Article.
In this article we will learn about prop drilling.**

![giphy.gif](https://media.giphy.com/media/13tw3BAKGrRMRy/giphy.gif)

### 🚀For example,

*App.js-file*

```
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildOne from "./components/ChildOne";

function App() {
  const [fName, setfName] = useState("Richa");
  const [lName, setlName] = useState("Singh");

  const handleClickOne = (value) => {
    setfName(value);
  };
  const handleClickTwo = (value) => {
    setlName(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>What is Prop Drilling ?</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React useContext Hook
        </a>
        <div>This is a Parent component</div>
        <ChildOne
          fName={fName}
          lName={lName}
          handleClickOne={handleClickOne}
          handleClickTwo={handleClickTwo}
        />
        <button onClick={() => handleClickOne("Hello from App")}>
          Childone
        </button>
        <button onClick={() => handleClickTwo("Hii from App")}>Childone</button>
      </header>
    </div>
  );
}

export default App;
```
---

*ChildOne.js-file*

```
import React from "react";
import ChildTwo from "./ChildTwo";

const ChildOne = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <>
      <div>This is ChildOne Component.</div>
      <ChildTwo
        fName={fName}
        lName={lName}
        handleClickOne={handleClickOne}
        handleClickTwo={handleClickTwo}
      />
      <button onClick={() => handleClickOne("Hello from ChildOne")}>
        Childone
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildOne")}>
        Childone
      </button>
    </>
  );
};


export default ChildOne;
```

---
*ChildTwo.js-file*


```
import React from "react";
import ChildThree from "./ChildThree";

const ChildTwo = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <div>
      <div>This is ChildTwo Component.</div>
      <ChildThree
        fName={fName}
        lName={lName}
        handleClickOne={handleClickOne}
        handleClickTwo={handleClickTwo}
      />
      <button onClick={() => handleClickOne("Hello from ChildTwo")}>
        Childtwo
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildTwo")}>
        Childtwo
      </button>
    </div>
  );
};

export default ChildTwo;
```
---

*ChildThree.js-file*

```
import React from "react";

const ChildThree = ({ fName, lName, handleClickOne, handleClickTwo }) => {
  return (
    <>
      <div>This is ChildThree Component.</div>
      <div>{fName}</div>
      <div>{lName}</div>
      <button onClick={() => handleClickOne("Hello from ChildThree")}>
        ChildThree
      </button>
      <button onClick={() => handleClickTwo("Hii from ChildThree")}>
        ChildThree
      </button>
    </>
  );
};

export default ChildThree;
```
*Output:-*


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667928019150/a3gNV7Orf.png align="left")


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1667928422916/J7fpXXGy6.png align="left")

**Here is Githup Link for Source Code:- 
**
[Clickme](https://github.com/Richa-12y/propsdrilling)

# 🎯Wrap Up!!

That's all for this article. Thank you for your time🤗!! Let's connect to learn and grow together.

[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)

![giphy.gif](https://media.giphy.com/media/fxe8v45NNXFd4jdaNI/giphy.gif)