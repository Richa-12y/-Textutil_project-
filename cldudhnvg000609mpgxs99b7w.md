# 🟠Meme Generator App - Build your own memes using React Meme Generator

**Hello developer👩‍💻👨‍💻, I always create memes and share them on social media, and I realized that there must be many people who wonder how to build their own meme generator. So, I'm going to show you step-by-step how to build a meme generator app using React JS. Are you excited to build your own meme generator app?**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675777144448/a3a034d9-2a3f-49f1-bf30-f4161af80d1a.png align="center")

## **👉Prerequisites**

Before starting to build a meme generator app using React JS, here are some prerequisites:

1. Basic knowledge of HTML, CSS, and JavaScript.
    
2. Familiarity with React and its components.
    
3. Knowledge of API calls and fetching data from an API.
    
4. Basic understanding of ES6 syntax.
    
5. A text editor like Visual Studio Code.
    
6. A development environment set up on your local machine.
    

It's also helpful to have some experience with Git and GitHub, as version control is an important part of software development.

## **🐱‍👤Setting Development Area**

After creating the React meme generator app, run the following command to start the development server:

`npx create-react-app memegeneratorapp`

`cd memegeneratorapp`

`npm start`

Once the server is up and running, I'll explain the folder structure to you.

![Typing GIFs - Get the best GIF on GIPHY](https://media0.giphy.com/media/13GIgrGdslD9oQ/giphy.gif align="center")

This is the folder structure for your React JS app:-

`src`

* `api`
    
    * `memesApi.js`
        
* `assets`
    
    * `images`
        
* `components`
    
    * `card.css`
        
    * `Card.js`
        
    * `Text.js`
        
* `pages`
    
    * `editfolder`
        
        * `edit.css`
            
        * `Edit.js`
            
    * `footer`
        
        * `Footer.js`
            
        * `footer.css`
            
    * `home`
        
        * `Home.js`
            
        
        * `nav`
            
            * `BrandExample.js`
                
            * `BrandExample.css`
                
    * `App.js`
        
    * `App.css`
        
        ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1675778581429/15c46e6e-2186-40fb-9479-fd6749fc053b.png align="left")
        
          
        The folder structure is set up, so now it's time to install the necessary npm packages for app development. Let's start by running the following command in the terminal or command prompt:
        
    * ```bash
        npm install react-component-export-image react-draggable react-router-dom
        ```
        

This will install all the dependencies listed in the `package.json` file and make sure that the required packages are available for the project.

The packages are:

* `react-component-export-image` version `1.0.6`
    
* `react-draggable` version `4.4.5`
    
* `react-router-dom` version `6.8.0`
    

**<mark>App.js</mark>**

```javascript
import React from "react";
import BrandExample from "./pages/nav/BrandExample";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Edit from "./pages/editfolder/Edit";
import { useNavigate } from "react-router-dom";
import Footer from "./pages/footer/Footer";

const App = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/");
  };
  return (
    <div>
      <BrandExample onClick={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
```

This code is the main component of the React app, named `App`. It imports the following:

* React library
    
* `BrandExample` component from `./pages/nav/BrandExample`
    
* CSS file from `./App.css`
    
* `Routes` and `Route` from the `react-router-dom` library
    
* `Home` component from `./pages/home/Home`
    
* `Edit` component from `./pages/editfolder/Edit`
    
* `useNavigate` hook from `react-router-dom` library
    
* `Footer` component from `./pages/footer/Footer`
    

It uses the `useNavigate` hook to navigate between different routes. The `handleNavClick` function is called when the `BrandExample` component is clicked, and it redirects to the home page (`/`).

The component returns a `div` that contains:

* `BrandExample` component with an `onClick` prop that calls the `handleNavClick` function.
    
* `Routes` component with two `Route` components for the home page (`/`) and the edit page (`/edit`).
    
* `Footer` component.
    

The component is exported as the default export.

**<mark>App.css</mark>**

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.card-all-conatiner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

`BrandExample.js`

```javascript
import React from "react";
import "./brandExmaple.css";
import Logo from "../../assests/logo.png";

const BrandExample = () => {
  const goToProtfolio = () => {
    window.location.assign(
      "https://aquamarine-unicorn-82161f-my-portfoli.netlify.app/"
    );
  };

  return (
    <>
      <div className="brand-container">
        <nav onClick={goToProtfolio} className="nav-title">
          sheCode
        </nav>
        <img src={Logo} alt="photo" onClick={goToProtfolio} />
      </div>
    </>
  );
};

export default BrandExample;
```

The function uses `window.location.assign` method which changes the current URL of the web page to the specified URL, in this case, "[**https://aquamarine-unicorn-82161f-my-portfoli.netlify.app/**](https://aquamarine-unicorn-82161f-my-portfoli.netlify.app/)".

This function can be called when a button is clicked, for example, to redirect the user to a portfolio website.

**<mark>brandExample.css</mark>**

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");

.brand-container {
  width: 100vw;
  background-color: black;
  position: sticky;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 15vh;
}
.nav-title {
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #49ff18,
    0 0 30px #49ff18, 0 0 40px #49ff18, 0 0 55px #49ff18, 0 0 75px #49ff18;
  opacity: 0.5;
  transform: rotate(-43deg);
  cursor: pointer;
}
.nav-title:hover {
  opacity: 1;
}

[alt="photo"] {
  object-fit: cover;
  margin-right: 1rem;
  width: 100px;
  cursor: pointer;
}
```

**<mark>memesApi.js</mark>**

```javascript
export const fetchMemeData = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  return await response.json();
};
```

**<mark>Home.js</mark>**

```javascript
import React, { useEffect, useState } from "react";
import Card from "../../comoponents/Card";
import { fetchMemeData } from "../../api/memesApi";

const Home = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchMemeData().then((memes) => setDetails(memes.data.memes));
  }, []);
  console.log(details);

  return (
    <div className="card-all-conatiner">
      {details.map((el, index) => (
        <Card key={el.id} imageUrl={el.url} name={el.name} count={index + 1} />
      ))}
    </div>
  );
};

export default Home;
```

This code contains two parts, the first part is an exported function "fetchMemeData" which fetches meme data from an API and returns it in JSON format. The second part is a functional component "Home" that uses the `useEffect` and `useState` hooks. The `useEffect` hook is used to call the `fetchMemeData` function and set the state with the returned data. The `useState` hook holds the data in the `details` state. The component maps through the `details` state and passes the data to a `Card` component to display the memes.

**<mark>Card.js</mark>**

```javascript
import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ imageUrl, count, name }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <div className="box" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="content">
            <div className="card-background" />
            <h2>{count}</h2>
            <h3>{name}</h3>

            <button onClick={(e) => navigate(`/edit?url=${imageUrl}`)}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
```

`div` element with the class "box". It sets the background image using `style` prop, with the value being a template literal that includes the `imageUrl` passed as a prop.

Inside the `div`, there is another `div` with the class "content", which contains several elements:

* Another `div` with the class "card-background".
    
* An `h2` element displaying the value of `count` passed as a prop.
    
* An `h3` element displaying the value of `name` passed as a prop.
    
* A `button` element with an `onClick` prop that calls a function when it is clicked. The function uses `navigate` hook from `react-router-dom` library to navigate to a URL that includes the `imageUrl` in the query string, i.e. "/edit?url=${imageUrl}".
    

**<mark>card.css</mark>**

```css
.card-all-conatiner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
}

.container .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

.container .card:nth-child(1) .box .content button {
  background: #2196f3;
  border: none;
  width: 100px;
  padding: 10px;
  border-radius: 8px;
}

.container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

.container .card .box:hover {
  transform: translateY(-50px);
}

.container .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

.container .card .box .content {
  padding: 20px;
  text-align: center;
}

.container .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 4rem;
  color: silver;
}

.container .card .box .content h3 {
  font-size: 1.8rem;
  color: silver;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

.container .card .box .content button {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.container .card .box .content button:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
```

**<mark>Text.js</mark>**

```javascript
import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to Edit Mode");
  console.log(editMode);
  return (
    <Draggable>
      {editMode ? (
        <input
          style={{
            background: "yellow",
            textTransform: "capitalize",
            border: "1px solid black",
          }}
          onDoubleClick={(e) => setEditMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1
          style={{
            background: "red",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
          onDoubleClick={(e) => setEditMode(true)}
        >
          {val}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
```

he component has a `useState` hook that holds the values of the `editMode` and the `val` (text content).

The component returns a `Draggable` component that either displays a `input` or a `h1` element, depending on the value of `editMode`.

If `editMode` is set to `true`, the component will display a yellow-background input field with the value of `val`. The user can change the text value in the input field and the component will update the `val` state. Double-clicking the input field sets `editMode` to `false` which re-renders the component to display the `h1` element.

If `editMode` is set to `false`, the component will display a red-background `h1` element with the value of `val`. The user can double-click the `h1` element to set `editMode` to `true` which re-renders the component to display the input field.

**<mark>Edit.js</mark>**

```javascript
import React, { createRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Text from "../../comoponents/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import "./edit.css";
import Footer from "../footer/Footer";

const Edit = () => {
  const [params] = useSearchParams();
  console.log(params.get("url"));
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };
  const navigate = useNavigate();

  const memeRef = createRef();
  return (
    <>
      <div className="meme-container">
        <div className="meme-container-inside" ref={memeRef}>
          <img src={params.get("url")} alt="meme" width="200px" />
          {Array(count)
            .fill(0)
            .map((el) => (
              <Text />
            ))}
        </div>
        <div className="button-group-container">
          <button className="button-primary" onClick={addText}>
            Add Text
          </button>
          <button
            className="button-secondery"
            onClick={(e) => exportComponentAsJPEG(memeRef)}
          >
            Save
          </button>
          <button className="button-back" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Edit;
```

The component uses the `useSearchParams` hook from `react-router-dom` to get the URL parameters, and extracts the image URL using `params.get("url")`.

The component then uses the `createRef` method from React to create a reference for a `div` element with class name "meme-container-inside". This div contains the image from the URL, and a number of "Text" components equal to the count value, which starts at 0 and is incremented every time the "Add Text" button is clicked.

The component also contains 3 buttons:

* "Add Text": increments the count value, which causes a new "Text" component to be displayed.
    
* "Save": uses the `exportComponentAsJPEG` function to save the meme image with its text as a JPEG image.
    
* "Go Back": uses the `useNavigate` hook to go back to the home page.
    

Finally, the component also contains a Footer component

**<mark>edit.css</mark>**

```css
.meme-container {
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

.button-group-container {
  display: flex;
  justify-content: space-between;
  width: 250px;
  /* background-color: aqua; */
  cursor: pointer;
}
.button-primary {
  width: 70px;
  outline: none;
  border: none;
  background-color: #0d6efd;
  color: white;
  text-transform: capitalize;
  padding: 5px 3px 5px 3px;
  border-radius: 7px;
}
.button-primary:hover {
  background-color: black;
}
.button-secondery {
  width: 70px;
  outline: none;
  border: none;
  background-color: #198754;
  color: white;
  text-transform: capitalize;
  padding: 5px 3px 5px 3px;
  border-radius: 7px;
}
.button-secondery:hover {
  background-color: black;
}
.button-back {
  width: 70px;
  outline: none;
  border: none;
  background-color: #0dcaf0;
  color: white;
  text-transform: capitalize;
  padding: 5px 3px 5px 3px;
  border-radius: 7px;
}

.button-back:hover {
  background-color: black;
}
```

**<mark>Footer.js</mark>**

```javascript
import React from "react";
import "./footer.css";
import facbookLogo from "../../assests/icons8-facebook-48 (1).png";
import githubLogo from "../../assests/icons8-github-64.png";
import pinterestLogo from "../../assests/icons8-pinterest-48.png";
import twitterLogo from "../../assests/icons8-twitter-squared-50.png";
import youtubeLogo from "../../assests/icons8-youtube-48.png";

const Footer = () => (
  <div className="footer">
    <div>
      &copy;
      <em id="date">sheCode</em>
    </div>
    <div className="soc-media-conatiner">
      <img src={youtubeLogo} alt="logoforsocielmedia" />
      <img src={githubLogo} alt="logoforsocielmedia" />
      <img src={facbookLogo} alt="logoforsocielmedia" />
      <img src={twitterLogo} alt="logoforsocielmedia" />
      <img src={pinterestLogo} alt="logoforsocielmedia" />
    </div>
  </div>
);

export default Footer;
```

The footer displays the "sheCode" copyright information, as well as icons for five different social media platforms: YouTube, GitHub, Facebook, Twitter, and Pinterest. The social media icons are imported as image files, and they are all wrapped in `<img>` elements that display the respective logos. The entire footer component is rendered as a `<div>` with a CSS class of "footer".

**<mark>footer.css</mark>**

```css
.footer {
  margin-top: 1rem;
  padding: 1rem;
  background-color: black;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 15vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.soc-media-conatiner {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
[alt="logoforsocielmedia"] {
  width: 50px;
  height: 50px;
}
```

**It's completed! Your meme generator app is ready. I will provide the source code link and a live demo link for you to see it in action. I have tested it on a desktop and it works fine, but *I noticed that the double-click edit mode doesn't work on mobile* devices. I will investigate and update you later.**

%[https://github.com/Richa-12y/MemesApp] 

[memegenertorapp](https://shecode-memes-generator-app.netlify.app/)

![30 Gif bye ideas | gif, giphy, funny gif](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecAk4WgZFXh-0HxJe5CavEoV5xNgy2dCOSO_HkD3D&s align="center")

# **🎯 Wrap Up!!**

![Tomboy GIFs | Tenor](https://media.tenor.com/S_gs6qvuzL4AAAAM/hey-emo-girl-hey-hey-hey-emo-girl-tomboy.gif align="center")

**I hope you have learned something new today. <mark>If you enjoy my blog, please share it with your network and leave a like or comment on my post. Thank you!</mark>**