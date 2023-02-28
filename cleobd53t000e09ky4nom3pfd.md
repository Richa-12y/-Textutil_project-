# Explanation of inline, block, and inline-block elements in css🎯

*In this article, I'll be explaining the* ***<mark>differences between inline, inline-block, and block elements in CSS.</mark>*** *Understanding the differences between these elements is important, as it affects how they are displayed on a webpage. This knowledge is particularly relevant for front-end developers, as it helps them to create the desired layout and design for a webpage.*

In interviews for web development positions, it's not uncommon for candidates to be asked about these three types of elements and how they differ. Therefore, it's important to have a good understanding of what they are and how they work. So, **<mark>let's dive into the world of inline, inline-block, and block elements and learn how to use them effectively in web development. So How's the josh😂</mark>**

![Begin Lets Go GIF by FaZe Clan](https://media3.giphy.com/media/LPFmCBiTjEzcUeluCW/200w.gif?cid=ecf05e47hhdvinenxkfyarql2ki8wxhiqtoxuhqpibv55mp1&rid=200w.gif&ct=g align="center")

### **Explained in non-dev terms:-**

Imagine you're creating a menu for a restaurant website. You want to list **<mark>different food items and their prices in a row. To do this, you can use the inline element.</mark>**

**<mark>It will display each food item and its price next to each other, like a row of seats.</mark>** However, if you want to add some **<mark>more information about each food item, such as a short description or a picture, you can use the inline-block element instead.</mark>**

This element will display the food items and their prices in the same row, but it allows you to add more information about each item, like a customized seat. Finally, if you want to display a large picture of the restaurant or a section of text, you can use the block element.

**<mark>This element will take up the full width of the page, like a section of the restaurant reserved for a large party.</mark>** You can add as much content as you want without worrying about it spilling over into other elements, just like a large party can take up as much space as they need without affecting other diners.

**<mark>Here is an example code snippet for the restaurant menu using HTML and CSS:</mark>**

```xml
<!DOCTYPE html>

<html>

<head>

	<title>
Restaurant Menu</title>

	<style>

		/* Set font styles and sizes */
		body {
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5;
			margin: 0;
			padding: 0;
		}
		h1 {
			font-size: 24px;
			margin: 20px 0;
		}
		h2 {
			font-size: 20px;
			margin: 15px 0;
		}
		p {
			margin: 10px 0;
		}
		
		/* Set styles for inline elements */
		.inline {
			display: inline;
			margin-right: 10px;
		}
		
		/* Set styles for inline-block elements */
		.inline-block {
			display: inline-block;
			margin-right: 20px;
			padding: 10px;
			background-color: #eee;
			border: 1px solid #ccc;
			border-radius: 5px;
			width: 200px;
			height: 250px;
			text-align: center;
		}
		
		/* Set styles for block elements */
		.block {
			display: block;
			margin: 30px 0;
			text-align: center;
		}
	</style>

</head>

<body>

	<!-- Inline elements -->

	<h1>
Restaurant Menu</h1>

	<div class="inline">
Hamburger - $8.99</div>

	<div class="inline">
Fries - $2.99</div>

	<div class="inline">
Soda - $1.99</div>

	
	<!-- Inline-block elements -->

	<h2>
Specials</h2>

	<div class="inline-block">

		<img src="burger.jpg" alt="Burger">

		<h3>
Burger Combo</h3>

		<p>
Our famous burger, fries, and a drink.</p>

		<p>
$10.99</p>

	</div>

	<div class="inline-block">

		<img src="pizza.jpg" alt="Pizza">

		<h3>
Pizza Party</h3>

		<p>
A large pizza with your choice of toppings.</p>

		<p>
$15.99</p>

	</div>

	
	<!-- Block element -->

	<div class="block">

		<img src="restaurant.jpg" alt="Restaurant">

		<h2>
About Us</h2>

		<p>
Welcome to our restaurant! We offer a variety 
of delicious food and drinks. 
Come and join us for a meal today.</p>

	</div>

</body>

</html>

```

![I Understand 2 Chainz GIF by MOST EXPENSIVEST](https://media4.giphy.com/media/fs6e9kDwsta5QnGhJh/200w.gif?cid=ecf05e47bgg6p7tlh5ba5xoq209la7h26u1ipxxhvawlg0e5&rid=200w.gif&ct=g align="center")

%[https://codepen.io/Richa-12y/pen/yLxgoBO?editors=1100] 

This code creates a menu with inline elements for listing individual items, inline-block elements for displaying special items with additional information, and a block element for displaying a larger section of text about the restaurant. The CSS styles set the display property for each element type to achieve the desired layout.

## **✨Inline Elements:**

Inline elements are those that are laid out in a horizontal line within a text block. They do not force a line break after the element and only take up as much width as necessary to contain their content. **Examples of inline elements include &lt;a&gt;, &lt;span&gt;, &lt;img&gt;, &lt;em&gt;, and &lt;strong&gt;. Inline elements do not accept height and width properties.**

![Happy Hailee Steinfeld GIF by Pitch Perfect](https://media2.giphy.com/media/MVDPX3gaKFPuo/200w.gif?cid=ecf05e47pb9j74mo4ec7lwn0z9p13d01ed3il7bzpfeh6ynj&rid=200w.gif&ct=g align="center")

## **✨**Block Elements:

Block elements are those that take up the full width available to them and create a new line after the element. They stretch to the left and right edges of the parent container. Block elements are ideal for creating large sections of content such as paragraphs, headings, and divs. **Examples of block elements include &lt;p&gt;, &lt;div&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;h1&gt;, and &lt;form&gt;. Block elements accept height and width properties.**

![Friends gif. Lisa Kudrow as Phoebe and Jennifer Aniston as Rachel jump up and down, smiling and clapping their hands exuberantly at something offscreen. ](https://media1.giphy.com/media/YnBntKOgnUSBkV7bQH/200.gif?cid=ecf05e47pb9j74mo4ec7lwn0z9p13d01ed3il7bzpfeh6ynj&rid=200.gif&ct=g align="center")

## **✨**Inline-Block Elements:

Inline-block elements are a combination of inline and block elements. They are laid out in a horizontal line like inline elements but also accept height and width properties like block elements. Inline-block elements allow us to create blocks that flow with text content and take up only the required space. **Examples of inline-block elements include &lt;button&gt;, &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt;.**

![Reality TV gif. Supermodel Heidi Klum excitedly claps and dances in a cloud of confetti on America's Got Talent. ](https://media1.giphy.com/media/artj92V8o75VPL7AeQ/200w.gif?cid=ecf05e47pb9j74mo4ec7lwn0z9p13d01ed3il7bzpfeh6ynj&rid=200w.gif&ct=g align="center")

### 🎇Differences between inline, block, and inline-block elements:

**<mark>Inline elements only take up as much width as necessary to contain their content,</mark>** while *<mark>block elements take up the full width available to them and create a new line after the element.</mark>* I**nline elements cannot accept height and width properties, while block elements can. Inline-block elements are a combination of both inline and block elements and allow us to create blocks that flow with text content and take up only the required space.**

```xml
<div>

    <span>
This is an inline element.</span>

    <br>

    <p>
This is a block element.</p>

    <button>
This is an inline-block element.</button>

</div>

```

In the above code, the span element is inline and appears on the same line as the text, the **p element is block and takes up the full width of the parent container, and the button element is inline-block and appears on the same line as the text but can also have a set width and height.**

# **🎯 Wrap Up!!**

![Thank You So Much GIF by Way Nation](https://media3.giphy.com/media/YUeQ2C7F1hfj98fy8A/200w.gif?cid=ecf05e470e199th8877zybkcbqgekchdiyn9hn1361tv5px0&rid=200w.gif&ct=g align="center")

**Thank you for taking the time to read our blog. We hope you found the information useful and informative. We are constantly striving to create valuable content that benefits our readers, and your support and engagement mean everything to us.**

*If you have any feedback or suggestions for future topics, please don't hesitate to reach out to us.* **We value your input and want to ensure that we continue to provide the best possible experience for our readers. Again, thank you for your support and for being a part of our community. We look forward to sharing more with you in the future!**