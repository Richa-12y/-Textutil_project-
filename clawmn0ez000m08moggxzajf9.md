# 🎡How to Fetch Data From API Using useEffect & Axios🏹

**Hello Coders !👩‍💻👨‍💻 In this article we will take look at how to make use of the `useEffect` hook in React to fetch data from an API. We will create a sample React application to retrieve data from the provider and use it in our application.**

![giphy.gif](https://media.giphy.com/media/kiOwGst64f9zh3Ivf8/giphy.gif)

# 🎯 Setting up basic React app

*Let's create a new React application using the following command:-*

```
npx create-react-app apicall
```

*Open the application in code editor(visual studio code)*


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669381664160/DFKV8gUoF.png align="left")

Modify the `App.js` below

```
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Coders 👩‍💻👨‍💻!</h1>
    </div>
  );
};

export default App;
```
**Start the application using the following command:-
**

```
npm start
```

*Once the application starts, the following screen will be displayed in the browser:-
*


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669382148419/op68zTE9B.png align="left")


**👉So as to fetch API data**

*The component will be responsible for displaying an image desc & price etc.. that is received from the API that we are fetching from. we'll be using `fakestoreapi`for get the data.* create file inside component folder that is `Cart.js`
import that file to inside `App.js`

*Here we have a simple component.
*

> App.js

```
import "./App.css";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="App">
      <h1>Hello Coders 👩‍💻👨‍💻!</h1>
      <Cart />
    </div>
  );
};

export default App;
```

> Cart.js

```
import React from "react";

const Cart = () => {
  return <div>Here we call the API </div>;
};

export default Cart;
```

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669384913093/k_gqqKvX1.png align="left")

### ✨To API call do this, we'll need to follow there steps:-

- Import `useState` and `useEffect`
- import `axios` for API call

```
npm i axios
```

- Create our `details` variable as well as the `setDetails` function via useState
- Create out `useEffect` function — this is where we'll perform our fetch
- Within our useEffect function we'll use setDetails to.. well... set details to we map all data that we received

> Cart.js

```
// 1. Import *useState*,*useEffect* an *axios*

import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";

const Cart = () => {
  // 2. Create our *details* variable as well as the *setDetails* function via useState
  // We're setting the default value of details to empty array, so that while we wait for the
  //Create *featchData* function inside get method place the API
  //Do the console.log(data) so we can check that data and update in setDetails(data);

  const [details, setDetails] = useState([]);
  const featchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    setDetails(data);
    console.log(data);
  };
  // 3. Create out useEffect function
  useEffect(() => {
    featchData();
  }, []);

  return (
    <div>
      <h1>Cart Details</h1>
      {/* here display all the data using map method */}
      {details.map((el, i) => {
        return (
          <div key={i} className="cart-container">
            <div>
              <img src={el.image} alt="img" height="300px" />
              <span>{el.description}</span>
              <span>{el.id}</span>
              <span>{el.price}</span>
              <h6>{el.title}</h6>
              <span>{el.rating.rate}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

```

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669386736022/dMVWRGizu.png align="left")

Output:-

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1669387183436/z-9TJZEoz.png align="left")

As always, refer to the docs for more info:

[MDN — Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

[React Hooks](https://reactjs.org/docs/hooks-overview.html)

[Axios](https://axios-http.com/docs/api_intro)

[Fakestoreapi](https://fakestoreapi.com/products/)


## 🎯 Wrap Up!!

I hope you understand that how to fetch the data from API just explore more by yourself. Feel free to reach out here or on my socials for any questions, suggestions, or to say hello 👋 Thank you all !🤩

![giphy.gif](https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif)


[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)
