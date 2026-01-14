---
title: "📅 Day 9: Find the Sum of All Positive Numbers in an Array"
seoDescription: "Learn to identify sum of positive numbers in an array, handle edge cases, and enhance problem-solving skills with clear logical steps"
datePublished: Wed Jan 14 2026 15:43:59 GMT+0000 (Coordinated Universal Time)
cuid: cmke6xtmk000202jo30cm8jxa
slug: day-9-find-the-sum-of-all-positive-numbers-in-an-array-1
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768405276756/8592b3dd-d2b1-4895-9dca-e97478610fd6.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768405416031/a0f4aadb-c00e-4d64-aeff-54f3d42cccd7.png
tags: javascript, web-development, reactjs, hashnode, dsa, dsa-series

---

---

![starting the day calmly](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZ0a3V2cWRmNnE3Ymd1MThmYjF1b3U1Z3Z4Z2F4eDF6ZXNnNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4FGuhL4U2WyjdkaY/giphy.gif align="left")

Today is **Day 9** of my DSA journey.

The problem sounds very easy at first — and honestly, **that’s the point**.  
This is one of those problems where interviewers don’t test your math…  
they test **how you think**, **how you handle edge cases**, and **how clearly you explain**.

---

## 🧩 Problem Statement

**Find the sum of all positive numbers in an array**

### Example

```plaintext
Input  → [1, -2, 3, 4, -5]
Output → 8   (because 1 + 3 + 4 = 8)
```

---

## 🤔 Before Writing Code (How I Think First)

If an interviewer gives me this problem, I **pause** and ask myself:

* What do we mean by **positive**?  
    👉 Only numbers greater than `0`
    
* What if the array is empty?
    
* What if there are **no positive numbers**?
    
* What if the input is not even an array?
    

These thoughts matter more than speed.

---

## ⚠️ Edge Cases (Very Important)

Let’s be clear about them:

| Input | Output | Why |
| --- | --- | --- |
| `[]` | `0` | Nothing to add |
| `[-1, -2, -3]` | `0` | No positive numbers |
| `[5]` | `5` | Single positive |
| `[0, 1, 2]` | `3` | `0` is not positive |
| `null / undefined` | `0` | Safe handling |

---

![thinking about edge cases](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2o0NmN6NXV2N2R0MXVwZXp5NnBzZXh1eDRqN3NqZWV6bTN0YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btPCcdNniyf0ArS/giphy.gif align="left")

---

## 🧠 Understanding the Logic (No Code Yet)

Think of it like this:

You have a box of numbers.  
Some are **helpful (positive)**, some are **not useful (negative or zero)**.

Your job is simple:

* Look at each number
    
* If it’s positive → add it
    
* Otherwise → ignore it
    

No drama. No shortcuts.

---

## ✍️ Step-by-Step Thinking (My Actual Thought Process)

1. Start with a `sum` = 0
    
2. Go through each number in the array
    
3. Check:
    
    * Is this number greater than 0?
        
4. If yes → add it to `sum`
    
5. After the loop ends → return `sum`
    

---

## 🚶 Walkthrough With Example (Slow & Clear)

Array:

```plaintext
[1, -2, 3, 4, -5]
```

Start:

```plaintext
sum = 0
```

* See `1` → positive → `sum = 1`
    
* See `-2` → ignore
    
* See `3` → positive → `sum = 4`
    
* See `4` → positive → `sum = 8`
    
* See `-5` → ignore
    

### ✅ Final Answer

```plaintext
8
```

---

![aha moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmYzMnZqZ3B0c3k2a3JmZmZtbmhkZ2o3dXV4bDNmNmJta2p3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

## 💻 The Code (Simple & Honest)

```js
const sumOfPositiveNumbers = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
};

// Test cases
console.log(sumOfPositiveNumbers([1, -2, 3, 4, -5])); // 8
console.log(sumOfPositiveNumbers([-1, -2]));         // 0
console.log(sumOfPositiveNumbers([]));               // 0
```

---

## ⏱️ Time & Space (In Normal Words)

* **Time Complexity:** `O(n)`  
    👉 We look at each number once
    
* **Space Complexity:** `O(1)`  
    👉 We only use one variable (`sum`)
    

---

## 🌱 What I Learned Today

1. Easy problems still need clear thinking
    
2. Edge cases show maturity
    
3. Positive means **strictly greater than zero**
    
4. Explaining logic matters more than writing code fast
    
5. Beginners understand when we slow down
    

---

## 🎯 Final Thought

DSA is not about memorizing tricks.  
It’s about **thinking calmly**, **checking basics**, and **explaining clearly**.

That’s what interviewers actually listen for.

---

![see you tomorrow](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3JqN2V0dWx3aW8wZXF2dDZ1ZWd6Ymp0NjVjYmlmMHB2dXBzYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO6qJiXajN0TyDu/giphy.gif align="left")

---