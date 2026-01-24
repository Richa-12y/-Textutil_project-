---
title: "🚀 Day 19/100: Search in a 2D Matrix — How I Solved It as a Beginner"
datePublished: Sat Jan 24 2026 15:04:32 GMT+0000 (Coordinated Universal Time)
cuid: cmksfxm8m000102ie7ruqh6uy
slug: day-19100-search-in-a-2d-matrix-how-i-solved-it-as-a-beginner
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769265096002/9f4828a3-56bf-4ede-bb36-7332ee819897.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769267056327/3d1267ad-27bb-482f-93cc-37503abcc222.png

---

Let me be very honest today.

When I saw this problem for the **first time**, my brain went completely blank.  
2D matrix. Conditions. Sorted rows. Extra rules.

And I was like:

> “Okay… but **how do I even start thinking?**”

So today’s blog is **not about the optimal solution**.  
It’s about **how a beginner actually approaches this problem** — step by step, without panic.

👉 **We’ll save the smart solution for Day 20.**  
Today, we just want to **solve it**.

---

## 🧩 Problem Statement

You are given:

* A 2D array (matrix) called `mat`
    
* Rows are sorted
    
* First element of each row is greater than the last element of the previous row
    
* A number called `target`
    

Your task is simple:  
👉 **Check whether the target exists or not**

That’s it.  
No tricks (for today 😄).

---

### Example

```plaintext
mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

target = 8
```

Output: `true`

---

![thinking gif](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif align="left")

---

## 🧠 How a Beginner Actually Thinks

Forget all the conditions for a moment.

As a beginner, my thought process was:

> “I know how to check a number in an array.  
> But this is a 2D array… so I’ll just check **everything**.”

And honestly?  
That’s a **valid starting point**.

---

## 🐌 Step 1: Brute Force

### What does brute force mean?

👉 Go through **each row**  
👉 Inside that, go through **each column**  
👉 Compare every element with the target

If you find it → return `true`  
If you don’t → return `false`

---

## ✍️ Code

```javascript
const searchMatrix = (mat, target) => {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === target) {
        return true;
      }
    }
  }
  return false;
};
```

---

## 🔍 Let’s Understand Every Loop

Matrix:

```plaintext
[
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]
```

Target = `8`

---

### Outer Loop (`i` → rows)

* `i = 0` → first row `[1,2,3,4]`
    
* `i = 1` → second row `[5,6,7,8]`
    

---

### Inner Loop (`j` → columns)

For `i = 0`:

* `j = 0` → `1 !== 8`
    
* `j = 1` → `2 !== 8`
    
* `j = 2` → `3 !== 8`
    
* `j = 3` → `4 !== 8`
    

Move to next row.

For `i = 1`:

* `j = 0` → `5 !== 8`
    
* `j = 1` → `6 !== 8`
    
* `j = 2` → `7 !== 8`
    
* `j = 3` → `8 === 8` ✅ FOUND
    

Return `true`.

---

![found gif](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif align="left")

---

## ⚠️ Edge Cases (Beginner Must Know)

Even in brute force, we should think about basics.

### 1️⃣ Empty Matrix

```js
mat = []
```

👉 Nothing to search  
👉 Return `false`

---

### 2️⃣ Single Element Matrix

```js
mat = [[5]]
target = 5
```

👉 One comparison  
👉 Return `true`

---

### 3️⃣ Target Not Present

If the loops finish and nothing matches, we return `false`.

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** `O(N × M)`
    
    * We check every element
        
* **Space Complexity:** `O(1)`
    
    * No extra memory used
        

Is it fast? ❌  
Is it correct? ✅  
Is it okay for beginners? **ABSOLUTELY YES**

---

## 💭 Real Talk

At this stage, **you are not supposed to think of the optimal solution**.

Your brain is still learning:

* How to read the problem
    
* How to use loops confidently
    
* How to not panic seeing “2D matrix”
    

And that’s perfectly fine.

---

![relax gif](https://media.giphy.com/media/l3V0lsGtTMSB5YNgc/giphy.gif align="left")

---

## 🧭 What’s Coming on Day 20?

Tomorrow, once this logic feels comfortable, we’ll ask:

> “Wait… the matrix is sorted.  
> Are we wasting effort by checking everything?”

That’s when:

* Binary Search
    
* Index mapping
    
* Smart thinking
    

…will slowly make sense.

👉 **But not today.**

---

## ✅ Final Note

If you can write **this solution on your own**,  
you are already progressing.

Optimization can wait.  
Understanding cannot.

**Day 19 done. Proud of you.** 💙