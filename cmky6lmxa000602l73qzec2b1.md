---
title: "Day 23 💙 Spiral Traversal of a Matrix (Beginner Edition)"
seoDescription: "Learn how to print a matrix in spiral order, with step-by-step guidance and simple JavaScript code, perfect for beginners"
datePublished: Wed Jan 28 2026 15:29:53 GMT+0000 (Coordinated Universal Time)
cuid: cmky6lmxa000602l73qzec2b1
slug: day-23-spiral-traversal-of-a-matrix-beginner-edition
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769613834833/d15bb459-4725-4738-86f9-608da32819fb.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769614177434/06c557da-ca15-465d-840a-02888b429598.png
tags: 100daysofcode, dsa, coding-journey, learninpublic, dsajourney

---

Hello everyone 👋

Welcome back to **Day 23** of our DSA journey.

Today’s problem looks scary at first glance (matrix + spiral 😵‍💫), but trust me — by the end of this blog, you’ll say:

> “Ohhh… bas itna hi? 😄”

After Day 23, from **tomorrow onwards**, we’ll slowly move into:

* 🔤 Strings
    
* 📦 Arrays (Medium, Hard, Expert – yes, level 3 is waiting 😈)
    

But today… **easy + simple + confidence boost day** 💪

---

## 🧩 Problem Statement (In Simple Words)

Given a matrix, print its elements in **spiral order**.

That means:

* First go **left ➝ right**
    
* Then **top ➝ bottom**
    
* Then **right ➝ left**
    
* Then **bottom ➝ top**
    
* Repeat until nothing is left
    

Basically, we are **peeling the matrix like an onion 🧅**.

*(Yes, onions make you cry. This solution won’t.)*

![Shirley Temple Giggle GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa21xMmI2cGZxNGVrYWVsajZqcTlqdmFuYjJxcHk2enJxcHY4NzVqaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yVZrYMkdgY5Pi/200.gif align="center")

---

## ✅ The JavaScript Code (Don’t Panic)

```js
function spiral(matrix) {
  let result = [];

  while (matrix.length) {
    // top row
    result.push(...matrix.shift());

    // right column
    for (let row of matrix) {
      if (row.length) result.push(row.pop());
    }

    // bottom row
    if (matrix.length) {
      result.push(...matrix.pop().reverse());
    }

    // left column
    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length) result.push(matrix[i].shift());
    }
  }

  return result;
}
```

Now breathe 😮‍💨  
Let’s decode this **line by line**, like a beginner who is learning with chai ☕.

---

## 🪜 Step-by-Step Explanation (Human Version)

### 1️⃣ `let result = []`

This is our **final answer plate 🍽️**.  
Whatever we eat from the matrix, we put it here.

---

### 2️⃣ `while (matrix.length)`

This loop means:

> “Bro, jab tak matrix mein kuch bhi bacha hai… kaam chalu rakho.”

As soon as matrix becomes empty → loop stops.

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmc5bWRxbjZ5bnZxNzYwNWdlbHFqOW5lbXFsMWxiMWh1ejc5OWZ4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif align="center")

---

### 3️⃣ Top Row → `matrix.shift()`

```js
result.push(...matrix.shift());
```

* `shift()` removes the **first row**
    
* `...` spreads all values
    

Example:

```plaintext
[1, 2, 3]
```

Directly goes into result.

👉 Easy win. Confidence +1 😎

---

### 4️⃣ Right Column → `row.pop()`

```js
for (let row of matrix) {
  if (row.length) result.push(row.pop());
}
```

* Go through each row
    
* Take the **last element**
    

We are walking **top ➝ bottom** on the right side.

Think of it as:

> “Har row ka last banda bahar nikalo.” 😂

---

### 5️⃣ Bottom Row → `pop().reverse()`

```js
result.push(...matrix.pop().reverse());
```

* `pop()` removes **last row**
    
* `reverse()` because spiral goes **right ➝ left**
    

Smart shortcut ✨  
No extra loop needed.

---

### 6️⃣ Left Column → `shift()` again

```js
for (let i = matrix.length - 1; i >= 0; i--) {
  if (matrix[i].length) result.push(matrix[i].shift());
}
```

* Move **bottom ➝ top**
    
* Remove **first element** from each row
    

Left wall cleared 🧱

---

## 🧅 Why This Approach Is Loved by Beginners

✔ No index confusion  
✔ Uses simple JS methods  
✔ Feels natural  
✔ Easy to remember

You are literally **removing layers** until nothing is left.

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHByNHRvOTlsYjY2dTF0aDluZ2Jkc3F0NjJpb2wyYmN5aXRicTRoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif align="left")

---

## ⏱️ Time & Space (Very Simple)

* **Time:** O(n × m)
    
* **Space:** O(n × m)
    

No rocket science 🚀

---

## 💬 Final Thoughts

If this felt easy — celebrate 🎉  
If this felt confusing — totally normal 💙

DSA is not about speed.  
It’s about **clarity + consistency**.

![Celebrity gif. Keanu Reeves on The Late Late Show with James Corden. He looks at us with a smile and puts his hand over his heart and bows his head.](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWcwdnNjaDVuYjZjenhnazhscmJvam9xeXNka3lidThoNGgzbXN3OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fWfowxJtHySJ0SGCgN/giphy.gif align="left")

---

### 📣 If you liked this blog:

![Movie gif. Margot Robbie as Barbie drives a pink convertible through the driveway past a pink movie theater, looking very friendly as she smiles and waves with both hands at everyone she's passing on the street.](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWk4OTVjamNheXBpc2VvMHo4b2w1bHMxbnU0eG5mYXhmdzN1cGo1NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qLVGt6Go1dQFp4qVcg/giphy.gif align="left")

❤️ Like  
💬 Comment your doubts  
🔁 Share with your DSA buddy  
➕ Follow for Day 24 (Strings & Arrays start 🔥)

See you tomorrow 👋  
Happy coding ✨