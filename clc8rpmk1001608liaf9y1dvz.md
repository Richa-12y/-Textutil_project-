# 🎇🔈How To Add Login Authentication to React Applications Using React Hooks🎯

**Hello Coders 👩‍💻👨‍💻 In this article, we will learn how to create a login form using React JS with state, functions and we do the Authentication. I hope you already know the React Hooks if you don't know please read my previous articles I all most cover all important Hooks that you can easily understand.**

Many web applications are a mix of <mark>public </mark> and <mark>private pages</mark>. Public pages are <mark>available to anyone</mark>, while a private page requires a <mark>user login</mark>. You can use *authentication* to manage which users have access to which pages. Your [React](https://reactjs.org/) application will need to handle situations where a user tries to access a private page before they are logged in, and you will need to save the login information once they have successfully authenticated. In this article, I will create JSON data to do the authentication in this I'm not using React-Router I will write a separate article for that also this is for beginners.

![TallBoyz lets go game show improv here we go GIF](https://media2.giphy.com/media/3BUYbmXltgQ4zu0Tv5/200w.gif?cid=ecf05e47igz3sht8jaxubnpq04ksbaxlptur7lsubarv8did&rid=200w.gif&ct=g align="center")

## **🐱‍👤Setting Development Area**

`npx create-react-app loginpage`

`cd loginpage`

`npm start`

**After installation, we should have this.**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672291208038/8c5622b0-d715-48b9-a866-31785d7e3e4d.png align="center")

**First We delete the all code inside App.js, App.css it looks like this**

`App.js`

```javascript
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
```

`App.css`

```css
/*in this file there is no code till now*/
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672291989603/7b3c02a9-1077-4ca7-a19b-84107445faa9.png align="center")

This page is howing empty because we didn't write anything in side App.js we create two files `Login.js login.css` In Login.js we will write all code for creating a form and in login.css we will write all the CSS things for the form so let's start.

inside `index.js` we have to add this link for the icon

```javascript
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
      rel="stylesheet"
    />
```

`Login.js`

```javascript
import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Login</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
```

```css
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -80px;
  top: -80px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #ace619);
  right: -30px;
  bottom: -80px;
}
form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}
form * {
  font-family: "Poppins", sans-serif;
  color: #080710;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  border: 1px solid #1845ad;
}
::placeholder {
  color: #080710;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #1845ad;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.social {
  margin-top: 30px;
  display: flex;
}
.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background: linear-gradient(to right, #ff512f, #f09819);
  color: #eaf0fb;
  text-align: center;
}
.social div:hover {
  background: linear-gradient(to right, #270802, #643d05);
  opacity: 1;
}
.social .fb {
  margin-left: 25px;
}
.social i {
  margin-right: 4px;
}
```

after that, we import this file inside `App.js` have a look

```javascript
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
```

In this, I did nothing I hope you are familiar with HTML, and CSS I wrote only HTML, and CSS Here is the output

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672293308240/1b92943c-d89d-4275-aa6e-6242238c99d5.png align="center")

next, we want to get the value of an input field on the button click on React js form:

1. Create a state variable to store the value of the input field.
    
2. Set an `onChange` event handler on the input to update the state variable when the input field value changes.
    
3. Set an `onClick` event handler on a button element.
    
4. Access the state variable in the event handler.
    

Let check our form in that we have two input filed one is for <mark>email </mark> another is for <mark>password </mark> so first set an onChange event handler on the input to update the state variable when the input field value changes.

```javascript
 const[email,setEmail]=useState(null);
  const[psw,setPsw]=useState(null)
```

```javascript
 <input
            type="text"
            placeholder="Email"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPsw(e.target.value)}
            value={psw}
          />
          <button onClick={handleClick}>Login</button>
```

With the `useState()` hook we create a state variable (`email`),(`psw`) to store the current value of the input field.

We set an `onChange` event handler on the input field to make this handler get called whenever the input value changes. In the handler, we use the [`event.target`](http://event.target) property to access the object representing the `input` element. The `value` property of this object contains the input value, so we pass it to `setEmail(), setPsw()` to update `email,psw`, and this reflects on the page.

```javascript
 const handleClick = () => {
    console.log("hello");
  };
```

Check the output:-

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672295202959/f708c2bc-0ecc-427b-9d55-9d00a960c043.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672295234561/e5b86e57-4cea-4096-96e1-780e8e78f941.png align="center")

Complete code after adding onChange and onClick

`Login.js`

```javascript
import React, { useState } from "react";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState(null); //this is for email filed
  const [psw, setPsw] = useState(null); //this is for password filed
  console.log(email);
  console.log(psw);
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Email"
            id="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPsw(e.target.value)}
            value={psw}
          />
          <button onClick={handleClick}>Login</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google" /> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook" /> Facebook
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
```

**Now we create two JSON file and add in Login.js for *authentication here is the code and import both file in*** `Login.js`

`user.json`

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "john",
    "username": "john_123",
    "email": "john@gmail.com",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "shyam",
    "username": "shyam@12",
    "email": "shyam23@gmail.com",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "bob",
    "username": "bob32",
    "email": "bob32@gmail.com",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  },
  {
    "id": 11,
    "name": "ram123",
    "username": "rr",
    "email": "ram@gmail.com",
    "address": {
      "street": "Katihar",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "9187321239",
    "website": "ram.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
```

`auth.json`

```json
[
  { "password": "Ram123", "email": "ram@gmail.com", "id": 11 },
  { "password": "Shyam123@", "email": "shyam23@gmail.com", "id": 5 },
  { "password": "John123@", "email": "john@gmail.com", "id": 3 },
  { "password": "Bob324@", "email": "bob32@gmail.com", "id": 9 }
]
```

`login.js`

```javascript
import UserData from './user.json'
import AuthData from "./auth.json";
```

```javascript
 const handleClick = () => {
    // console.log("hello");
    let fetchData=AuthData.filter((el)=>el.email===email)//it will filter the email and it will also check that is is equal or not
    console.log(fetchData)
    if(fetchData.length!==0){
      alert("correct email id");

    }
    else{
        alert('Invalid Email id')
    }
  };
```

In this what I have done that i applyed fillter method to get the email and what user enter in input box i will compare both of them after that i used if-else it will display in alert user is exits or not in json file.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672296667406/350a6e4a-6959-443e-b163-db29e7bde271.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672296706251/7c267897-6418-49bf-94fb-152efb925573.png align="center")

```javascript
 const handleClick = () => {
    // console.log("hello");
    let fetchData = AuthData.filter((el) => el.email === email); //it will filter the email and it will also check that is is equal or not
    console.log(fetchData);
    if (fetchData.length !== 0) {
      //   alert("correct email id");
      if (fetchData[0].password === psw) {
        //it will check the passowrd given by user and alraedy exits in auth.json file
        setIsLogined(true);
      } else {
        alert("your password is invalid");
      }
    } else {
      alert("Invalid Email id");
    }
  };
```

```javascript
 <>
      {!isLogined ? (
        <div>
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <form>
            <h3>Login Here</h3>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Email"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPsw(e.target.value)}
                value={psw}
              />
              <button onClick={handleClick}>Login</button>
              <div className="social">
                <div className="go">
                  <i className="fab fa-google" /> Google
                </div>
                <div className="fb">
                  <i className="fab fa-facebook" /> Facebook
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>User details</div>
      )}
    </>
```

## **Validate form input with user details**

To add login functionality to the form, first, we declare all the correct user details in JS constants. The following steps are required to accomplish the functionality:

1. Find expected user details by matching the user email.
    
2. If a match is not found then add the error message “**invalid email**“
    
3. else validate the password, show the error message “**invalid password**” if validation fails.
    
4. setIsLogined(true); if all validations pass.
    
5. The preventDefault() method **cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur**.
    
6. Ternary Operator
    
    The ternary operator is a simplified conditional operator like `if` / `else`.
    
    Syntax: `condition ? <expression if true> : <expression if false>`
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672297393564/7e2fa5ab-16c9-4e59-b4b8-2eff36cb6161.png align="center")

Compete code is here`Login.js`

```javascript
import React, { useEffect, useState } from "react";
import "./login.css";
import UserData from "./user.json";
import AuthData from "./auth.json";

const Login = () => {
  const [email, setEmail] = useState(null); //this is for email filed
  const [psw, setPsw] = useState(null); //this is for password filed
  const [isLogined, setIsLogined] = useState(false); //this is for check user is login or not
  const [userid, setUserid] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  console.log(email);
  console.log(psw);
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("hello");

    let fetchData = AuthData.filter((el) => el.email === email); //it will filter the email and it will also check that is is equal or not
    console.log(fetchData);
    if (fetchData.length !== 0) {
      //   alert("correct email id");
      if (fetchData[0].password === psw) {
        //it will check the passowrd given by user and alraedy exits in auth.json file
        setIsLogined(true);
        setUserid(fetchData[0].id); //here we set the userid
      } else {
        alert("your password is invalid");
      }
    } else {
      alert("Invalid Email id");
    }
  };
  //   here useEffect started

  useEffect(() => {
    let data = UserData.filter((el) => el.id === userid);
    setUserDetails(data);
  }, [userid]);
  console.log(userDetails);
  return (
    <>
      {!isLogined ? (
        <div>
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <form>
            <h3>Login Here</h3>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Email"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPsw(e.target.value)}
                value={psw}
              />
              <button onClick={handleClick}>Login</button>
              <div className="social">
                <div className="go">
                  <i className="fab fa-google" /> Google
                </div>
                <div className="fb">
                  <i className="fab fa-facebook" /> Facebook
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>User details it will be display here</div>
      )}
    </>
  );
};

export default Login;
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672298326038/670a8403-da0d-452f-aefc-337cd84ae704.png align="center")

![Girl Group Heart GIF by Dreamcatcher](https://media3.giphy.com/media/LPXRrMvhDHGfcaBvxE/200.gif?cid=ecf05e47zaxjyw82f3pzdoda2c982626jiuzil99bzgfnqcv&rid=200.gif&ct=g align="center")

%[https://www.buymeacoffee.com/kricha000l] 

**<mark>Here is the source code link:-</mark>**

%[https://github.com/Richa-12y/Loginform] 

# **🎯 Wrap Up!!**

**Thank you for reading, I hope you enjoyed it🤩Please share it with your network. <mark>Don’t forget to leave your comments below.</mark>**