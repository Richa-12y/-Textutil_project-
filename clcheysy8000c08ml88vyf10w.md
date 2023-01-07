# 🔴All about Modern Layouts in CSS

Hello Coders👩‍💻👨‍💻 in articles will provide instruction on the fundamental layout tools and techniques available in CSS. At the end of the lessons is an assessment to help you check your understanding of layout methods by laying out a webpage.

what is a modern CSS layout? Modern CSS layouts **enable developers to write really meaningful and robust styling rules with just a few keystrokes**. The talk above and this subsequent post examine 10 powerful lines of CSS that do some serious heavy lifting.

![Austin Powers Hello GIF](https://media1.giphy.com/media/QQkyLVLAbQRKU/200w.gif?cid=ecf05e4712hy0dk2grz5kmxu9jz189zdiey9o0ry9b2pgty6&rid=200w.gif&ct=g align="center")

## 👉Prerequisites

Before starting this module, you should already:

1. Have basic familiarity with HTML, as discussed in the [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) module.
    
2. Be comfortable with CSS fundamentals, as discussed in [CSS first steps overview](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
    
3. Understand how to [style boxes.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)
    

## Responsive CSS Grid

Create an intrinsically responsive grid layout, optionally using a CSS custom property to extend to variable contexts. Each column will resize at the same rate, and items will begin to break into a new row if the width reaches the `--min` value.

%[https://codepen.io/Richa-12y/pen/vYaXNqR] 

## Responsive Flexbox Grid

Create an intrinsically responsive grid layout, optionally using a CSS custom property to extend to variable contexts. Each column will resize at the same rate *until* reaching the `--min` width. At that point, the last item will break into a new row and fill any available space.

%[https://codepen.io/Richa-12y/pen/RwBGVpw] 

## Sidebar Says: `grid-template-columns: minmax(<min>, <max>) …)`

This demo takes advantage of the [minmax](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax) function for grid layouts. What we're doing here is setting the minimum sidebar size to be `150px`, but on larger screens, letting that stretch out to `25%`. The sidebar will always take up `25%` of its parent's horizontal space until that `25%` becomes smaller than `150px`.

Add this as a value of grid-template-columns with the following value: `minmax(150px, 25%) 1fr`. The item in the first column (the sidebar in this case) gets a `minmax` of `150px` at `25%`, and the second item (the `main` section here) takes up the rest of the space as a single `1fr` track.

%[https://codepen.io/Richa-12y/pen/YzjGVxK] 

## Pancake Stack: `grid-template-rows: auto 1fr auto`

Unlike the Deconstructed Pancake, this example does not wrap its children when the screen size changes. Commonly referred to as a [sticky footer](https://developer.mozilla.org/docs/Web/CSS/Layout_cookbook/Sticky_footers), this layout is often used for both websites and apps, across mobile applications (the footer is commonly a toolbar), and websites (single page applications often use this global layout).

Adding `display: grid` to the component will give you a single column grid, however the main area will only be as tall as the content with the footer below it.

To make the footer stick to the bottom, add:

```css
.parent {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

This sets the header and footer content to automatically take the size of its children, and applies the remaining space (`1fr`) to the main area, while the `auto` sized row will take the size of the minimum content of its children, so as that content increases in size, the row itself will grow to adjust.

%[https://codepen.io/Richa-12y/pen/YzjGVaP] 

## 12-Span Grid`grid-template-columns: repeat(12, 1fr)`

Next, we have another classic: the 12-span grid. You can quickly write grids in CSS with the `repeat()` function. Using: `repeat(12, 1fr);` for the grid template columns gives you 12 columns each of `1fr`.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.child-span-12 {
  grid-column: 1 / 13;
}
```

Now you have a 12-column track grid, we can place our children on the grid. One way to do this would be to place them using grid lines. For example, `grid-column: 1 / 13` would span from the first line to the last (13th) and span 12 columns. `grid-column: 1 / 5;` would span the first four.

%[https://codepen.io/una/pen/eYJOYjj] 

## Line Up: `justify-content: space-between`

For the next layout, the main point to demonstrate here is `justify-content: space-between`, which places the first and last child elements at the edges of their bounding box, with the remaining space evenly distributed between the elements. For these cards, they are placed in a Flexbox display mode, with the direction being set to column using `flex-direction: column`.

This places the title, description, and image block in a vertical column inside of the parent card. Then, applying `justify-content: space-between` anchors the first (title) and last (image block) elements to the edges of the flexbox, and the descriptive text in between those gets placed with equal spacing to each endpoint.

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

%[https://codepen.io/Richa-12y/pen/MWBjmqX] 

## Clamping My Style: `clamp(<min>, <actual>, <max>)`

Here's where we get into some techniques with [less browser support](https://caniuse.com/#feat=css-math-functions), but have some really exciting implications for layouts and responsive UI design. In this demo, you are setting the width using clamp like so: `width: clamp(<min>, <actual>, <max>)`.

This sets an absolute min and max size, and an actual size. With values, that can look like:

```css
.parent {
  width: clamp(23ch, 60%, 46ch);
}
```

The minimum size here is `23ch` or 23 character units, and the maximum size is `46ch`, 46 characters. [Character width units](https://meyerweb.com/eric/thoughts/2018/06/28/what-is-the-css-ch-unit/) are based on the font size of the element (specifically the width of the `0` glyph). The 'actual' size is 50%, which represents 50% of this element's parent width.

What the `clamp()` function is doing here is enabling this element to retain a 50% width *until* 50% is either greater than `46ch` (on wider viewports), or smaller than `23ch` (on smaller viewports). You can see that as I stretch and shrink the parent size, the width of this card increases to its clamped maximum point and decreases to its clamped minimum. It then stays centered in the parent since we've applied additional properties to center it. This enables more legible layouts, as the text won't be too wide (above `46ch`) or too squished and narrow (less than `23ch`).

This is also a great way to implement responsive typography. For example, you could write: `font-size: clamp(1.5rem, 20vw, 3rem)`. In this case, the font-size of a headline would always stay clamped between `1.5rem` and `3rem` but would grow and shrink based on the `20vw` actual value to fit the width of of the viewport.

This is a great technique to ensure legibility with a minimum and maximum size value, but remember it is not supported in all modern browsers so make sure you have fallbacks and do your testing.

%[https://codepen.io/Richa-12y/pen/poZEPYK] 

## Aspect Ratio Gallery

The `aspect-ratio` property [has support in all major modern browsers](https://caniuse.com/mdn-css_properties_aspect-ratio), and by combining it with `object-fit` and flexbox, we can create a smol responsive gallery. Check out the CSS via your your browser Inspector to modify the CSS custom properties on `.smol-aspect-ratio-gallery` and see how they affect this layout.

The demo initially sets a height as a fallback for browsers that do not yet support `aspect-ratio`, and then uses `@supports` to upgrade to use of `aspect-ratio`.

Note that `aspect-ratio` isn't just for images, but any element!

%[https://codepen.io/Richa-12y/pen/GRBjEKW] 

%[https://www.buymeacoffee.com/kricha000l] 

# **🎯 Wrap Up!!**

**More snippets coming soon!** While you're waiting, check out my in-depth [React](https://hashnode.com/@Richa000) js articles and others **Thank you for reading, I hope you enjoyed it🤩Please share it with your network. <mark>Don’t forget to leave your comments below.</mark>**

![Korean Drama Fighting GIF by The Swoon](https://media0.giphy.com/media/Uk7kn3MJXuAyOGpLAu/200w.gif?cid=ecf05e479unbv648e7r290fh6wao9623s7abl8njh98n8lsk&rid=200w.gif&ct=g align="center")