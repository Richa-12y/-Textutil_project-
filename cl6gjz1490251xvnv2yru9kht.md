# A Guide to CSS Flexbox


**CSS flexbox gives the ability to format HTML pages more efficiently. It provides complete control over the alignment, direction, order and box sizes. Before the CSS flexbox came into existence, we had floats. Floats allowed us to control only the horizontal position of the items. As the browser support of flexbox has been increased, you are most likely to use them while working with CSS.
**

Floats were tough. Even a simple header menu would need a lot of work. At the same time, flexboxes are easy to learn and gives a lot more ability to format. In this Blog I will a give you very useful cheat sheet to help you easily learn CSS flexbox. Let’s get right into it.


# 👜 Flex Container Properties

> 💥`display:flex;` Property

   The `display:flex;`is used to invoke the flexbox. This style goes inside the parent element or the flex container as we say here. When the browser sees this, it will render everything inside the container as a flexbox.

```
.main-container{
    display: flex;
 }
```

To start, we'll need an HTML file and a CSS file for styles. Let's say we have an HTML file called index.html and a CSS file called styles.css. We'll have a div called `main-container`, and all the direct child elements of the main-container will have a div of `container-item`. So, our HTML file will look like this.

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="main-container">
      <div class="container-one">
        <img src="./img/learncodeonline.jpg" alt="locimg" />
      </div>
      <div class="container-two">
        <img src="./img/leran2.jpg" alt="locimgthree" />
      </div>
      <div class="container-three">
        <img src="./img/learn2.jpg" alt="locimgtwo" />
      </div>
    </div>
  </body>
</html>
```

The classes `container-one`, `container-two`, `container-three`, etc. are given to style the particular divs. Now, let's style the file.


```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: 7em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 7em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```
output:-


![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659693159288/Tk3UyCGU_.PNG align="left")


## 🥅The flex-direction property

The property flex-direction allows us to define in which direction we want to stack container elements inside the main-container(parent) element(column, row).
The flex-direction property has four different options:-

> row      
> row-reverse      
> column      
> column-reverse

The default is the row. If we set it to column, our flex items will be aligned vertically. The row-reverse option will set the direction opposite to the text-direction.


**Here is the syntax:-
**

```
.main-container{
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
}
```

**row**
```
.main-container{
  display: flex;
  flex-direction: row; /* row direction */

}
```
Output:-

![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659693159288/Tk3UyCGU_.PNG align="left")

**row-reverse
**

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    flex-direction:row-reverse;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: 7em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 7em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

```

Output:-

![Capture4.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659696895572/xp0zMNfrO.PNG align="left")

**column 
**

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    flex-direction:column;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: 7em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 1em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 1em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 7em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 1em;
    border-radius: 50%;
}
```

Output:-

![Capture1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659695908779/eS5Zsuoaj.PNG align="left")


**column-reverse**

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    flex-direction:column-reverse;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: 5em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 1em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 5em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 1em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 5em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 1em;
    border-radius: 50%;
}
```
Output:-

![Capture2.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659696192190/h_4SinOfd.PNG align="left")


##  🥅  flex-wrap Property

The `flex-wrap` property has three options to choose from:

> nowrap
> wrap
> wrap-reverse

`wrap`: when you want to wrap elements.
`no-wrap`: when you don’t want to wrap elements. The default property is nowrap.
`wrap-reverse`: when you want to reverse and wrap elements.

Here is syntax:-

/* Assuming .main-container is the Parent Container */

```
.main-container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```



**wrap**
```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="main-container">
      <div class="container-one">
        <img src="./img/learncodeonline.jpg" alt="locimg" />
      </div>
      <div class="container-two">
        <img src="./img/leran2.jpg" alt="locimgthree" />
      </div>
      <div class="container-three">
        <img src="./img/learn2.jpg" alt="locimgtwo" />
      </div>
      <div class="container-one">
        <img src="./img/learncodeonline.jpg" alt="locimg" />
      </div>
      <div class="container-two">
        <img src="./img/leran2.jpg" alt="locimgthree" />
      </div>
    </div>
  </body>
</html>
```

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: 7em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 7em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```

**Have a look at the output below:-
**

![Capture5.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659698286568/nhaLk--2z.PNG align="left")


```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    flex-wrap: wrap-reverse;
    width: 800px;
    height: 500px;
    margin:auto;
}
.container-one{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    margin-top: -5em;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
    margin-top: 7em;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
    margin-top: 7em;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```

Output:-

![Capture6.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659698668327/veEIc1BfC.PNG align="left")




## ⚗ justify-content Property

The property `justify-content`allows us to align `container` elements inside the `main-container`(parent) in the main axis. That means when the `container` elements are in a row direction, it aligns them horizontally. On the other hand, when they are in a column direction, it aligns them vertically.


`Main Axis`: It is the primary axis through which all the flex-items are laid off. It does not have to be horizontal always. It depends on the flex-direction property.

`Cross Axis`: It is the axis perpendicular to the main axis. So, if the main axis is the X-axis(flex-direction:row) then it'll be the Y-axis and vice-versa.

*We mostly use these properties with justify-content:-*

`Flex-start`: container are packed to the start of the main axis.

`Center`: container are packed to the center of the main axis.

`Flex-end`: container are packed flush to the end of the main-axis

 `Space-between`: The first conatiner (one,two,three) is packed to the start of the main axis; the end item is packed to the end of the main axis. The spacing between the pairs of each adjacent elements is the same.

`Space-around`: The container(one,two,three) are evenly distributed along the main-axis. The spacing between each adjacent elements is the same. But the space before the first item and after the last item is half of the spacing between each of the elements.

`Space-evenly`: The spacing between all the adjacent elements and space before the container(one,two,three) and after the last container all are same. All the spacings are evenly distributed here.
The images below show the alignment properties and how the elements align according to the values:



![img8.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659699619190/0TCW6MVt_.PNG align="left")

And the next three,


![img9.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659699848306/vcNWG96PE.PNG align="left")


**Here is the syntax:-
**

/* Assuming .main-container is the Parent Container */
```
.main-container {
  display: flex;
  justify-content: flex-start | flex-end | center | space-around | space-between | space-evenly;
}
```



**center**

```
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="main-container">
      <div class="container-one">
        <img src="./img/learncodeonline.jpg" alt="locimg" />
      </div>
      <div class="container-two">
        <img src="./img/leran2.jpg" alt="locimgthree" />
      </div>
      <div class="container-three">
        <img src="./img/learn2.jpg" alt="locimgtwo" />
      </div>
    </div>
  </body>
</html>

```

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    justify-content: center;
    width: 800px;
    height: 800px;
    margin-top: 10em;
    
}
.container-one{
     width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```

Output:-



![img10.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659700652079/nqDQlPaNF.PNG align="left")


**flex-start**

```
.main-container{
    display: flex;
    justify-content: flex-start;
    width: 800px;
    height: 800px;
    margin-top: 10em;
    
}

```

Output:-

![img11.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659700842097/GV0s33iQ0.PNG align="left")



**flex-end**

````
.main-container{
    display: flex;
    justify-content: flex-end;
    width: 90vw;
    height: 800px;
    margin-top: 10em;
    }

```

Output:-

![img14.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659701188785/nQPbIkKcW.PNG align="left")


**space-between
**
```
.main-container{
    display: flex;
    justify-content:space-between;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
```

Output:-

![Screenshot (12).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659701559076/978HnAjt9.png align="left")

**space-around
**

```
.main-container{
    display: flex;
    justify-content:space-around;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}

  ```

Output:-


![Screenshot (13).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659701713023/IfFnUzItT.png align="left")


**   space-evenly
**

```
.main-container{
    display: flex;
    justify-content:space-evenly;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}

```

Output:-


![Screenshot (14).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659702089189/F-mEkhQ6a.png align="left")


## 📖 align-items Property

We have seen that the `justify-content` property helps us to align items in the `main axis`. To `align items` in the `cross-axis`, we have to use the `align-items`property. Usually, we use the below values with `align-items`:-


Flex-start: Aligns the container(one,two,three) to the start of the cross axis.

Flex-end: Aligns the container to the end of the cross axis.

Center: Aligns the container to the center of the cross axis.

Stretch: Stretches the container to fill the container

Baseline: The baseline will align the flex-items to the baseline of the content.

*Here is an image that pictorially explains the different values:-
*


![01.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1659702909949/VuRv9BeLtX.PNG align="left")

*Here is the syntax:-
*

/* Assuming .main-container is the Parent Container */
```
.main-container {
  display: flex;
  align-items: flex-start | flex-end | baseline | stretch;
}
```

**flex-start
**
```
.main-container{
    display: flex;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
```

Output:-


![Screenshot (15).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659703215492/Ua_y94kWa.png align="left")


**flex-end
**

```
.main-container{
    display: flex;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}

```

Output:-

![Screenshot (16).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659703361807/WCT5C5HlM.png align="left")


**center**
```
.main-container{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
  ```
Output:-

![Screenshot (18).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659703571812/7UziNNMBy.png align="left")


**baseline**

```
.main-container{
    display: flex;
    align-items: baseline;
    width: 100vw;
    height: 100vh;    
}
```
Output:-

![Screenshot (19).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659703730949/mqOpf79d8.png align="left")


**stretch
**

```
.main-container{
    display: flex;
    align-items: stretch;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
```
Output:-
%[
![Screenshot (20).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659703892217/pcMSgUzAw.png align="left")
ink]


**Child Properties
**

*The order property
*

The property `order` is used on (container-one,two,three)child elements to change the order of elements.

```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
.container-one{
     width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    order:1;
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
}

.container-two img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```
Output:-

![Screenshot (21).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659705573609/sA9cTLofM.png align="left")


**The flex-grow property
**

The property `flex-grow` allows child elements to grow using the remaining space.
```
*{
    outline: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(29, 93, 96, 1) 45%, rgba(20, 156, 184, 1) 78%);
}

.main-container{
    display: flex;
    width: 100vw;
    height: 100vh;
    margin-top: 10em;
    
}
.container-one{
     width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: brown;
    
}
.container-one img {
   width: 100px;
   margin-left: 3em;
   margin-top: 4em;
   border-radius:50%;
}

.container-two{
    display: flex;
    flex-grow:0.4;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: green;
}

.container-two img {
    width: 100px;
    margin-left: 15em;
    margin-top: 1em;
    border-radius: 50%;
}

.container-three {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:red;
}

.container-three img {
    width: 100px;
    margin-left: 3em;
    margin-top: 4em;
    border-radius: 50%;
}
```

Output:-

![Screenshot (22).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659705971538/ehHl-IS43.png align="left")


**🥏  align-content Property:
*

The `align-content` property sets and distributes the space between and around the `flex-items` along the cross axis of the flexbox. It works like the `justify-content` for the cross-axis. It'll only work if your container is set to `flex-wrap: wrap`.

The values that align-content property takes are:

`Flex-start`: Aligns items to the start of the cross-axis of the container.
`Flex-end`: Align items to the end of the cross-axis.
`Center`: Align items to the center of the cross-axis.
`Stretch`: Stretches or takes the full space for the flex items.
`Space-between`: Spaces are evenly distributed.
`Space-around`: Items are evenly distributed between all the lines.


Here is the syntax:-

/* Assuming .main-container is the Parent Container */
```
.main-container {
  display: flex;
  align-content: flex-start | flex-end | center | stretch | space-between |
    space-around;
}
```

**flex-start
**

```

.main-container{
    display: flex;
    align-content: flex-start;
    width: 100vw;
    height: 50vh;
    margin-top: 10em;
    background-color: aliceblue;
    
}
```

![Screenshot (23).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659707117115/fK5sDXjb9.png align="left")



**Conclusion**:-


And finally we come to the end of the flexbox. In this Blog we covered majority flexbox properties that you will need to use on your project. It's not good idea to memorize all
the flex-box properties  but you can continually come back to this blog for quick recap refreshers on what each property does. 

Thank you for reading the article. I hope you found it useful.

