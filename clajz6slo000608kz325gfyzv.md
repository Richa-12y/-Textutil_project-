# 🎇Top 5 React Component Libraries 🏆

**Hello React js Developer👩‍💻 In this article I will share you top 5 React component library for your application. Picking the proper React component library for your application could be problematic since there are lot of libraries, available nowadays.
**


*To make your task easy and simple I have collected the 5 best React component libraries that are popular among developers based on google search trends.*

# 🎯1.Material UI


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668619901168/bBjTHMyBC.png align="left")

---

**With 69.2k stars and 22.7k forks on GitHub Material UI ranks among the most popular React Component libraries in JS. To build high quality digital experience it offers more simplistic elements.
**

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668620866809/eNyBQc72k.png align="left")

- Material UI is an open-source React component library that implements Google's Material Design.

- It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

- Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.

**📢Here is link:-
**

  [Material UI](https://mui.com/material-ui/getting-started/overview/)

## 🗜Installation

```
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
```

### ♦Usage:

```
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
# 🎯2.Ant Design


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668620981604/-x8ntZvi4.png align="left")
---

**With 72.9k stars and 28.9k forks in GitHub, Ant Design also known as AntD is the second most popular React based framework and often it is used to build enterprise applications.**


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668621389033/YdqSOKz98.png align="left")

- It is basically written in Typescript with static types. It contains high-quality components to build interactive user interfaces.

- The  major difference between AntD when compared to Material UI and other libraries is it doesn't has a lot of themes as Material UI and Bootstrap. It has around 12 pre-built themes which ranges from $12 to $999.

- AntD offers AntD pro which contains components, templates, packages designed for data visualization and other graphical solutions.

**📢Here is link:-
**

[Ant Design ](https://ant.design/)


## 🗜Installation

```
//Using npm‌
npm install antd
//Using yarn
yarn add antd
```

### ♦Usage:

```
import { DatePicker } from 'antd';

ReactDOM.render(<DatePicker />, mountNode);
```

**You can import style sheets manually using the below import statement.
**

```
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
```

# 🎯3.React Suite


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668621444103/GSeJOtJP6.png align="left")
---

**With 7.2k stars and 841 forks forks in GitHub, React Suite is a set of react component libraries for enterprise system products. It is a well-thought-out and developer-friendly UI framework..**


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668621939996/W-vRQRT42.png align="left")

**Browser
**

React Suite supports the latest, stable releases of all major browsers and platforms. IE<=10 is no longer supported since React Suite 5.0. React Suite is designed and implemented for use on modern desktop browsers rather than mobile browsers.

**Server**

React Suite supports server side rendering. Support Next.js to build applications.
Installation

## 🗜Installation

```
npm i rsuite --save
or if you prefer Yarn

yarn add rsuite
```

### ♦Usage

```
import { Button } from 'rsuite';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

function App() {
  return <Button appearance="primary">Hello World</Button>;
}
```
**📢Here is link:-
**

[React Suite](https://rsuitejs.com/)

# 🎯 4.React Bootstrap


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668622055820/Ppabth4Qq.png align="left")

---


**React Bootstrap was initially named as Twitter Blueprint which was developed by Mark Otto and Jacob Thornton at Twitter. It is very similar to the original bootstrap but was built using React and has some few differences.**


*Each component in React bootstrap was built from scratch using React without using the dependencies like jQuery.*

> When you love using Bootstrap and suppose you are using React to develop your web application you can use React Bootstrap since you can use some all-time favourite Bootstrap components.

## 🗜Installation

```
npm install react-bootstrap bootstrap
```

### ♦Usage

```
import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎯🧿
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);
export default App;
```


**📢Here is link:-
**

[React Bootstrap](https://react-bootstrap.github.io/)

# 🎯 5 Grommet


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668622449096/RHQzWX0zO.png align="left")
---

**Grommet was developed by HPE and can be used for any kind of screens like mobile phone or laptops. It offers more vibrant and colorful themes than Material UI and Ant Design.
**

*Grommet has around 7.4k stars and nearly 900 forks in GitHub. It is a component library which is designed for responsiveness and accessible web projects.
*


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668622516098/i-I9ivppt.png align="left")

It does not contain a lot of themes but it does provide two useful tools to customize themes.

- Grommet Theme Designer
- Grommet Designer


They have an active Slack community for support and bugs can be submitted through GitHub.  It provides codesandbox with each component including template pattern and component library on storybook.

*Many large companies like Uber, Boeing, Netflix, Samsung and Twilio used Grommet to * design their websites. Have a look at the [Grommet's components](https://v2.grommet.io/components) using which you can build an unique website.

## 🗜Installation

```
npm install grommet grommet-icons styled-components --save
```
### ♦Usage

```
import React from 'react';
import { Grommet, Heading } from 'grommet'
function App() {
  return (
    <Grommet className="App">
    </Grommet>
  );

}
export default App;
```
It also has set of [SVG icons](https://icons.grommet.io/?) which you can install using the below command.

```
npm install grommet-icons
```

**📢Here is link:-
**

[Grommet](https://rsuitejs.com/)


🎡Wrap up!

**That's all for this article. you in choosing the best React library for your site and while choosing the frameworks and libraries always focus on the uses and the features of library. Please share it with your network. Do comment your favourite React library 
**



[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)

![giphy.gif](https://media.giphy.com/media/l0IycQmt79g9XzOWQ/giphy.gif)