# 🎯Build E-commerce website UI with REACT.JS & Tailwind CSS🚀

# 🔴**Introduction**

**Hello Coders!👨‍💻👩‍💻In this Article I will teach you how** <mark>to</mark> **create a modern E-commerce website UI** using React.JS and Tailwind CSS. I already wrote a complete article in Tailwind CSS here is the link before starting the project please read this article so you can easily build this project.

%[https://richak.hashnode.dev/a-beginners-guide] 

I'll provide step-by-step instructions so that you can follow along easily. **so let's start**

![episode 19 lets begin GIF by truTV’s Talk Show the Game Show](https://media4.giphy.com/media/l4pSZSaj0ICZHnIHe/200w.gif?cid=ecf05e47ci4i1x4ybgegg1ffws2m6kslmzxd4lprs5dvz0gd&rid=200w.gif&ct=g align="center")

## **📍Setting Development Area**

We need to run this command:-

```bash
npx create-react-app amazonclone

cd amazonclone

npm start
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670432900324/LXuhU0iaf.png align="center")

### **Step 1: Create a Folder Structure and Install Tailwind CSS**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670433099869/JXAJsgz4l.png align="center")

Before creating the project folder and structure we have to install tailwind css and React Icons

#### **<mark>Install Tailwind CSS</mark>**

Install `tailwindcss` via npm, and create your `tailwind.config.js` file.

```bash
npm install -D tailwindcss //Terminal
npx tailwindcss init
```

#### **<mark>Configure your template paths</mark>**

Add the paths to all of your template files in your `tailwind.config.js` file.

```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### **<mark>Add the Tailwind directives to your CSS</mark>**

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

```javascript
//src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Include popular icons in React projects easily with react-icons, which utilizes ES6 imports that allow you to include only the icons that your project is using.

[React icon](https://react-icons.github.io/react-icons)

```bash
npm install react-icons --save
```

### <mark>Usage</mark>

```javascript
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670434059307/PathllrnH.png align="left")

Above is my image folder structure in my project inside <mark>src I created assets components and a lib folder. Then inside the components folder created all the required files.</mark>

Step-2 Create <mark>Navbar</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670435356538/jVJN5FHbC.png align="center")

//<mark>App.js</mark>

```javascript

import "./App.css";
import {Navbar,Add,Hero, Products, Deals, Trending} from "./components";

function App() {
  return (
    <div className="bg-[#232f3e]">
      {/* Navbar */}
      <Navbar />
      {/* Add */}
      <Add />
      {/* Hero */}
      <Hero />
      {/* Products */}
      <Products />
      {/* Deals */}
      <Deals />
      {/* Trending */}
      <Trending />
      {/* Footer */}
      <Footer />     
    </div>
  );
}

export default App;
```

//<mark>Navbar.js</mark>

```javascript
import React from "react";
import logo from "../assests/pngegg.png";
import { BsCart } from "react-icons/bs";//this we take from react icon
import { IoSearch } from "react-icons/io5";
import { GoSettings } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import indianLogo from "../assests/indialogo.PNG";
import { TiArrowRepeat } from "react-icons/ti";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#131921] p-4 flex item-center justify-between md:px-8">
      {/* left */}
      <div className="flex items-center shrink-0">
        <div className="h-10 flex">
          <img src={logo} className="object-cover" alt="pagelogo" />
        </div>
        <div className="hidden text-white/70 p-1 ml-4 md:flex items-center hover:scale-110 border-solid border-2 border-white-600 justify-center h-full hover:text-white ">
          <TbWorld className="text=[22px] m-1" />
          <p>Location</p>
        </div>
      </div>
      {/* Middle */}
      <div className="flex items-center w-full">
        {/* Input */}
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            className="py-2  rounded-full pl-12 placeholder:text-[#131921] outline-0 w-full"
            placeholder="Search..."
          />
          <button className="absolute bg-orange-500 h-full w-12 right-0 flex items-center justify-center rounded-r-full  text-white">
            <IoSearch className="text-[25px] mr-1" />
          </button>

          <button className="absolute h-full w-12 left-0 flex items-center justify-center rounded-l-full">
            <GoSettings />
          </button>
        </div>
        {/* Flag */}
        <div className="hidden text-white md:flex items-center font-bold cursor-pointer mr-4 shrink-0">
          <img
            src={indianLogo}
            alt="indianflag"
            className="w-10 object-cover mr-1"
          />
          <p>IN</p>
          <TiArrowRepeat className="text-[15px] text-white mt-3 " />
        </div>
      </div>
      {/* right */}
      {/* Login container */}
      <div className="flex items-center justify-center m-1 text-center text-white font-bold shrink-0">
        Login
        <BiLogInCircle />
      </div>
      <div className="relative flex items-center justify-center text-white text-[30px]">
        <BsCart />
        <div className="absolute text-[16px] h-full top-1 right-2.1 text-orange-500">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
```

I dived the navbar into 3 categories left, <mark>Middle, and right in the left side it will come to the logo and location middle side input container, flag and right-side cart then import this file to App.js</mark>

<mark>Add.js</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670435822959/88tQF8fq3.png align="center")

<mark>Add.js file import this file inside App.js </mark> this is reusable components

```javascript
import React from "react";

const Add = () => {
  /**
   * @buttons i have to work in this part
   * have to add Router
   *create var button inside array store all the data what we have to display
   * in navbar below then map the data
   */
  const buttons = [
    "Today's Deal",
    "New Products",
    "Seller",
    "Home",
    "Coupons",
    "Fashion",
  ];
  return (
    <div className="bg-[#232f3e]">
      <div className="flex items-center justify-between  h-8 sm:max-w-[80vw] md:max-w-[80vw]  lg:max-w-[55vw] mx-auto sm:px-10 text-[12px] sm:text-[16px]">

     {/* here we done mapping */}

        {buttons.map((button) => (
          <div className="group whitespace-nowrap">
            <div className="text-gray-200/70  hover:text-white px-[0.7rem] border-solid border-2 border-white-600">
              {button}
            </div>
            <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
```

<mark>Hero. js-import this file to App.js</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670436338394/wblkL5EQj.png align="center")

This is hero section

```javascript
import React from "react";
import wallpaper from "../assests/vadim-babenko-8vhu9wtT8ew-unsplash.jpg";
import "../index.css";

const Hero = () => {
  return (
    <>
      <div className="relative w-full bg-[#eaeded] container mx-auto">
        <div className="mx-auto  w-full lg:w-[90vw] xl:w-[70vw]">
          <div className="absolute  grad w-full lg:w-[90vw] flex   h-[15rem] sm:h-[21rem] md:h-[25rem] z-10 xl:w-[70vw]"></div>
          <div className=" w-full  lg:w-[90vw] flex relative  h-[15rem]  sm:h-[21rem] md:h-[25rem] xl:w-[70vw]">
            <img
              src={wallpaper}
              alt="wla"
              className="absolute object-cover w-full  lg:w-[90vw] z-0 h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]"
            />
          </div>
        </div>
      </div>
      {/* Here is post baner start */}
      <div className="p-6 py-12 dark:bg-blue-400 dark:text-white text-white shrink-0 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              35% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">RIASHC</span>
            </div>
            <a
              href="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-white dark:border-gray-400 hover:bg-orange-500"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
```

<mark>Products.js</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670436464871/cs0iOGmOD.png align="center")

```javascript
import React from "react";
import Headphone from "../assests/headphones.png";
import laptop from "../assests/laptop.png";
import phone from "../assests/phone.png";
import watch from "../assests/watch-removebg-preview.png";

import Product from "./Product";

const Products = () => {
  const productDteails = [
    { title: "Headphones", image: Headphone },
    { title: "Laptop", image: laptop },
    { title: "Phone", image: phone },
    { title: "Phone", image: watch },
  ];
  return (
    <div className="bg-[#eaeded] text-black">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  mx-auto w-[80vw] xl:w-[70vw] gap-5">
        {productDteails.map((product) => (
          <Product title={product.title} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
```

<mark>Product.js</mark>

```javascript
import React from "react";

const Product = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full pb-3 rounded-[1rem] mt-4">
      <p className="font-bold text-[20px] pt-2   text-start">{title}</p>
      <div className="bg-[#eaeded] p-4 rounded-[1rem] mt-2 mx-6">
        <img
          src={image}
          className="h-[15rem] sm:h-[8rem] md:h-[6rem] xl:h-[7rem] hover:scale-110 duration-100 ease-out"
        />
      </div>
      <div className=" bg-[#232f3e] hover:bg-orange-500 duration-100 ease-out text-white font-bold w-[7rem] text-center mt-2 py-1 rounded-full">
        <button>BUY</button>
      </div>
    </div>
  );
};

export default Product;
```

I already write a blog on how to pass the <mark>props from parents to children read </mark> that blog here I did the same thing and import this <mark>Products.js to App.js</mark>

<mark>Deals. js-in this file I used the Axios library to fetch the data from API and also useEffect if you want to now more about how to fetch data from API write my previous blog.</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670436780751/JAlEngEjm.png align="center")

```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

const Deals = () => {
  const [takeimage, setTakeimage] = useState([]);
  const featchImageDetailsfromApi = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    setTakeimage(data);
    console.log(data);
  };
  useEffect(() => {
    featchImageDetailsfromApi();
  }, []);

  return (
    <div className="bg-[#eaeded] w-full">
      <div className="mx-auto w-[80vw] xl:w-[70vw] bg-[#eaeded] text-black">
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <h1 className="text-black font-bold text-[40px] flex items-center justify-center">
            Deals
          </h1>
          <div className="grid grid-cols-none gap-4 p-4 mx-auto md:grid-cols-4">
            {takeimage.map((el, i) => {
              return (
                <>
                  <img
                    key={i}
                    src={el.image}
                    alt="dete"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-1 dark:bg-gray-500 aspect-square hover:opacity-5"
                  />
                  <img
                    alt="dete"
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={el.image}
                  />
                  <img
                    src={el.image}
                    alt="dete"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-1 dark:bg-gray-500 aspect-square"
                  />
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Deals;
```

# **<mark>Trending.js</mark>**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670437465231/j_ThHFOKc.png align="center")

Create josn file then import it trending.js

<mark>image.json and cardImage.json-import both files inside Trending.js file</mark>

and Import <mark>Trending.js file inside App.js</mark>

```javascript
[
  { "image": "https://m.media-amazon.com/images/I/81iiPvmfJvL._UY741_.jpg" },
  {
    "image": "https://m.media-amazon.com/images/I/71h8PRDMbFL._AC_UL480_FMwebp_QL65_.jpg"
  },
  { "image": "https://m.media-amazon.com/images/I/417sjFr5QEL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/41ZIcSihDEL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/31nsthRYkHL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/A1bQRIy6ZEL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/91Pifq5qXmL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/61H7sr-PKSS._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/51TnGICeiYS._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/818kmzObgCL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/41rCK6RCLsL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/81LlDO5EDpL._AC_SY200_.jpg" }
]
```

```javascript
[
  {
    "image": "https://m.media-amazon.com/images/I/713VTIhCfOL._AC_UL480_QL65_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/81vCSNQWBNL._AC_UL480_QL65_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/51YDCtCRcJL._AC_UF226,226_FMjpg_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/518sqc4Z8yL._AC_UF226,226_FMjpg_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/41GlwxBlSaL._AC_UF226,226_FMjpg_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/51XyT+kZWlL._AC_UF226,226_FMjpg_.jpg"
  },
  { "image": "https://m.media-amazon.com/images/I/91Pifq5qXmL._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/61H7sr-PKSS._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/51TnGICeiYS._AC_SY200_.jpg" },
  { "image": "https://m.media-amazon.com/images/I/818kmzObgCL._AC_SY200_.jpg" },
  {
    "image": "https://m.media-amazon.com/images/I/918Dyc9BxDL._AC_UL480_QL65_.jpg"
  },
  {
    "image": "https://m.media-amazon.com/images/I/81t3QmqwiFL._AC_UL480_QL65_.jpg"
  }
]
```

<mark>Treding.js</mark>

```javascript
import imageFiles from "../components/image.json";
import cardFiles from "../components/cardImage.json";

const Trending = () => {
  return (
    <>
      <h1 className="font-bold text-[40px] bg-[#eaeded] flex items-center justify-center">
        Trending
      </h1>
      <div className="bg-[#eaeded] w-full flex items-centers justify-center">
        <div className="relative w-[80vw] xl:w-[70vw] flex gap-4 py-6 overflow-x-auto shrink-0">
          {imageFiles.map((el, i) => {
            return (
              <img
                key={i}
                src={el.image}
                className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                alt="Image 1"
              />
            );
          })}
        </div>
      </div>
      <div className="bg-[#eaeded] w-full flex items-centers justify-center">
        <div className="relative flex items-center justify-centerw-[80vw] xl:w-[70vw] dark:text-gray-50">
          <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
              {cardFiles.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el.image}
                    className="object-cover object-center h-96 aspect-square dark:bg-gray-500 p-2"
                    alt="Image 1"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
```

Lastly, we have to create a footer part for the footer we create <mark>Footer.js and</mark> then import that file inside <mark>App.js</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670437656073/GkVvce2ei.png align="center")

```javascript
import React from "react";
import Youtube from "../assests/shine-youtube-icon.png";
import Google from "../assests/3d-fluency-chrome-browser.png";
import Facbook from "../assests/flat-facebook-icon.png";
import Twitter from "../assests/flat-twitter-icon.png";
import Instagram from "../assests/3d-fluency-instagram-logo.png";

const Footer = () => {
  /**
   * here firstfooter container h2 tag we map that
   */
  const footerhtwotage = [
    { htwotext: "Get to Know Us" },
    { htwotwo: "Make Money with Us" },
    { htwothree: "Let Us Help You" },
    { htwofour: "Connect with Us" },
    { htwofive: "© Copyright 1986. All Rights Reserved." },
  ];

  const images = [Youtube, Google, Facbook, Twitter, Instagram];
  /**
   * here in top we import all the image from assests folder
   * then assign all the image in const map this in footer logo
   */
  const pages = ["About Us", "Careers", "Press Releases", "Ecommerce Science"];
  const pagestwo = [
    "Sell on Ecommerce",
    "Sell under Ecommerce Accelerator",
    "Protect and Build Your Brand",
    "Ecommerce Global Selling",
    "Become an Affiliate",
    "Fulfilment by Ecommerce",
    "Advertise Your Products",
    "Ecommerce Pay on Merchants",
  ];

  const pagesthree = [
    "COVID-19 and Ecommerce",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Configuration",
    "Ecommerce App Download",
    "Ecommerce Assistant Download",
    "Help",
  ];
  const pagesFoure = ["Facebook", "Twitter", "Instagram", "YouTube"];
  const pageFive = ["Shop", "Idea", "Blog", "Pricing", "Contact"];

  return (
    <div className="mt-4">
      {/* first container footer start here */}
      <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pages.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* end here first container of footer */}

          {/* second container start here */}
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:white">
              {pagestwo.map((el, i) => {
                return (
                  <a
                    className=" font-medium text-white hover:text-blue-700"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* second container end here */}
          {/* third container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwothree}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesthree.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* third container end here */}
          {/* fourth container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwofour}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesFoure.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* fourth container start here */}
      </footer>
      {/* here is another footer container */}
      <footer className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            {pageFive.map((el, i) => {
              return (
                <li
                  className=" font-medium text-white hover:text-orange-500"
                  key={i}
                  rel="noopener noreferrer"
                  href="/"
                >
                  {el}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              {images.map((el, i) => {
                return (
                  <a
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-6 sm:h-6 dark:bg-blue-400 dark:text-gray-900"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    <img src={el} alt="logo" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        {footerhtwotage.map((el, i) => {
          return (
            <span key={i} className="text-white hover:text-orange-500">
              {el.htwofive}
            </span>
          );
        })}
      </div>
    </div>
    // here is footer container end
  );
};

export default Footer;
```

![crowdfire time ready start it's time GIF](https://media0.giphy.com/media/l3c5MejnGFJJ2W2iI/200w.gif?cid=ecf05e471kdcln4r9f6qbtzspzhnjpo3k5yrz49szwzqnqmb&rid=200w.gif&ct=g align="center")

<mark>If you want to complete the source code for this project I will provide you my Github link here-</mark>

%[https://github.com/Richa-12y/ecommerceProject] 

# **🎯 Wrap Up!!**

Thank you for reading. This is the first time that I wrote a blog article for the project. I hope you enjoyed reading it. Please share it with your network. <mark>Don’t forget to leave your comments below.</mark>

%[https://www.buymeacoffee.com/kricha000l] 

![Bye Bye Love GIF by koreadispatch](https://media1.giphy.com/media/yweRN7UQtS0nhq1UrL/200w.gif?cid=ecf05e478wy2s28mfnqfmilw8yvf45ns7h3zytpwswznki9f&rid=200w.gif&ct=g align="center")