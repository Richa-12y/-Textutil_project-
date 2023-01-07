# 🤔Why do we need to use the CSS Module how to use it in React?🔮

## **🎯 Introduction**

**Hello, Developers!! 👩‍💻👩‍💻 In this blog we are going to learn about** `CSS Module`**. Why do we need to use the CSS Module How to use it in React? It's a good question if you asked we have CSS then why do we need this one let's understand this in this way.**

![Begin Lets Go GIF by FaZe Clan](https://media3.giphy.com/media/LPFmCBiTjEzcUeluCW/200w.gif?cid=ecf05e47mw6td8lunr34x54ro3lrq4y25shi80j6kgz3ve9e&rid=200w.gif&ct=g align="center")

**<mark>CSS Modules allow you to use the same CSS class name in different files without worrying about naming clashes.</mark>**

## What is a CSS module?🤷‍♀️

CSS module is a CSS file in which all class names and animation names are scoped locally by default

**In short, all the CSS declared in the file are local to the file in which this CSS file is imported.**

*We will use CSS modules in the context of React but they are not limited to just React.*

You can use the CSS modules with any module bundler like webpack or browserify or any other way which supports importing CSS files.

## 🎇Benefits of CSS modules:-

![Opportunity Invest GIF by Britannia on EPIX](https://media0.giphy.com/media/f9jwBVzohvX7LSRqWU/200w.gif?cid=ecf05e471v08pz71polbc63uit1o596dqzuqeerdf6p7viw6&rid=200w.gif&ct=g align="center")

1.  **Using CSS modules avoids <mark>namespace collision for CSS classes</mark>**
    
2.  **You can use the same <mark>CSS class in multiple CSS files</mark>**
    
3.  **You can confidently update any CSS file without worrying about <mark>affecting other pages</mark>**
    
4.  **Using CSS Modules <mark>generates random CSS classes </mark> when displayed in the browser**
    
    ## 🕶Why do we need to use the CSS Module?
    
    ![friends with benefits GIF by You're The Worst ](https://media1.giphy.com/media/3oxHQJtzs3AG62o1Zm/200w.gif?cid=ecf05e471v08pz71polbc63uit1o596dqzuqeerdf6p7viw6&rid=200w.gif&ct=g align="center")
    
    ***In the React application, we usually <mark>create a single </mark>*** `.css` ***<mark> file and import it to the main file so the CSS</mark> will be applied to all the components.***
    
    But using <mark>CSS modules helps to create separate CSS files for each component and is local to that particular file and avoids class name collision.</mark>
    
    That's enough about the Introduction. Let's see how to use it in Code.
    
    ![Las Vegas Cartoons GIF by HBO Max](https://media1.giphy.com/media/hd6XWBs25X41NWU8HT/200w.gif?cid=ecf05e47why33cv08luju2sfyne7ymy7gmu2bb7uw21lfvuo&rid=200w.gif&ct=g align="center")
    

## 🎊Using CSS Modules

CSS modules support is provided by `create-react-app` out-of-the-box so we don't need to install or configure anything to get it working.

When working with React, it's a convention to name the CSS file with `.module.css` extension.

Suppose, we have a `button.module.css` file in the `src` folder with the following content:

```javascript
import React from "react";
const Button = () => {
  return (
     <div>
        <h1 className={buttonStyles.title}>CSS Modules</h1>
      </div>
  );
};

export default Button;
```

then in the `src/Button.js` file, we import this file in the following way:

```javascript
import buttonStyles from "./button.module.css";
```

`   button.module.css`

```css
.title {
    font-size: 3rem;
    color: aliceblue;
    font-weight: 700;
    text-align: center;
}
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671204493511/xkpEIjtzv.png align="center")

Check out the above output

If you do the **<mark>inspect</mark>** , you will see that even though we have given as `title` as the class for h1, the final CSS class is different when displayed in the browser.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671204835333/wLS9_q7fY.PNG align="center")

**<mark>So CSS Modules help to create random classes when displayed in the browser.</mark>**

## 🎡Using hyphens while naming classes

![Cartoon gif. Jerry the brown mouse dances excitedly arm in arm with Quacker, a yellow bird. They kick their legs as they dance in a circle. ](https://media3.giphy.com/media/10UeedrT5MIfPG/200.gif?cid=ecf05e47why33cv08luju2sfyne7ymy7gmu2bb7uw21lfvuo&rid=200.gif&ct=g align="center")

**It's common to name a CSS class with hyphen like** `button-containers`**.**

So to use that class inside components we need to use the bracket notation like this:

```javascript
import React from "react";
import buttonStyles from "./button.module.css";

const Button = () => {
  return (
    <>
      <div>
        <h1 className={buttonStyles.title}>CSS Modules</h1>
      </div>
/ see here {buttonStyles["button-containers"]}
      <div className={buttonStyles["button-containers"]}>
        <button className={buttonStyles["btn-one"]}>🎇</button>
        <button className={buttonStyles["btn-two"]}>🎆</button>
        <button className={buttonStyles["btn-three"]}>✨</button>
        <button className={buttonStyles["btn-four"]}>🎉</button>
        <button className={buttonStyles["btn-five"]}>🎊</button>
      </div>
    </>
  );
};

export default Button;
```

**let's see the output**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671207671240/QlSw15bLF.png align="center")

**If you want the completed code I will provide you here you can use that**

**<mark>App.js</mark>**

```javascript
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>CSS Module</b> how to use it in React?
        </p>
        <a
          className="App-link"
          href="https://hashnode.com/@Richa000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join me to Learn React
        </a>
        <Button />
      </header>
    </div>
  );
}

export default App;
```

**<mark>App.css</mark>**

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

**<mark>Button.js</mark>**

```javascript
import React from "react";
import buttonStyles from "./button.module.css";

const Button = () => {
  return (
    <>
      <div>
        <h1 className={buttonStyles.title}>CSS Modules</h1>
      </div>
      <div className={buttonStyles["button-containers"]}>
        <button className={buttonStyles["btn-one"]}>🎇</button>
        <button className={buttonStyles["btn-two"]}>🎆</button>
        <button className={buttonStyles["btn-three"]}>✨</button>
        <button className={buttonStyles["btn-four"]}>🎉</button>
        <button className={buttonStyles["btn-five"]}>🎊</button>
      </div>
    </>
  );
};

export default Button;
```

<mark>button.module.css</mark>

```css
.title {
    font-size: 3rem;
    color: aliceblue;
    font-weight: 700;
    text-align: center;
}
.button-containers{
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
button{
    width:150px;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.btn-one{
    background-color: blue;
}
.btn-two{
    background-color: red;
}
.btn-three{
    background-color: black;

}
.btn-four{
        background-color: yellowgreen;
}
.btn-five{
            background-color:purple;
}
```

<mark>Fine Output you can see below:-</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1671208030074/1dR7Quj7i.png align="center")

## Adding multiple classes

consider we have two classes Then to use both of these classes for the same element we need to use the <mark> ES6 template literal syntax like this:</mark>

```css
<div className={`${buttonStyles["btn-bold"]} ${buttonStyles["btn-active"]}`}>Some text...</div>
```

## 🏆Conclusion

![kal ho na ho bollywood GIF by bypriyashah](https://media0.giphy.com/media/xTiIztiylOG25TzMkM/100.gif?cid=ecf05e47a4uveygea1l14q855aj2su6vo3x791zwotl9du32&rid=100.gif&ct=g align="center")

*   **CSS modules help to avoid global class name collisions**
    
*   **They also help in keeping CSS files clean and easy to organize and maintain**
    
*   **They are similar to styled components for maintaining local scope**
    
*   **They're scoped locally to avoid unintentional side effects elsewhere**
    
*   **They are used as the preferred styling mechanism in Gatsby.js and Next.js and they work out-of-the-box**
    
    %[https://www.buymeacoffee.com/kricha000l] 
    
    # **🎯 Wrap Up!!**
    
    ![Celebrity gif. Jason Momoa looks at us with a warm smile as he forms his hands into a heart shape. He then places his hands under his chin before going back to forming the heart.](https://media2.giphy.com/media/R6gvnAxj2ISzJdbA63/200w.gif?cid=ecf05e47bnh0ayd4jok2r0fjfeeh19cp0utqfubre6pnyq1s&rid=200w.gif&ct=g align="center")
    
    **Thank you for reading, I hope you enjoyed it🤩Please share it with your network. Don't forget to subscribe to get my weekly newsletter with amazing tips, tricks, and articles directly in your inbox**
    
    ![Bye Bye Reaction GIF by Saturday Night Live](https://media0.giphy.com/media/OB4Sjggq8aMJnq4sLQ/200w.gif?cid=ecf05e47zc8fx3lg4bm7p9q2pw5gyy117ihwxri2xjrz8lnj&rid=200w.gif&ct=g align="center")