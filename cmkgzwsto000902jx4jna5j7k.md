---
title: "📅 Day 11: Left Rotate the Array by One"
seoTitle: "Array Rotation: Shift Left by One"
seoDescription: "Learn to left rotate an array by one position with examples and edge cases. Beginner-friendly guide to mastering array manipulation"
datePublished: Fri Jan 16 2026 14:50:32 GMT+0000 (Coordinated Universal Time)
cuid: cmkgzwsto000902jx4jna5j7k
slug: day-11-left-rotate-the-array-by-one
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768574334396/dc504afb-6259-4dec-8fcb-1ce5aa829da2.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768575007793/daf8aef7-801e-4370-b1cd-decf9e18c032.png
tags: javascript, web-development, learning, dsa, learning-journey, dsa-series, dsawithricha

---

---

```plaintext
Example 1:Input: nums = [1, 2, 3, 4, 5]  
Output: [2, 3, 4, 5, 1]  
Explanation: Initially, nums = [1, 2, 3, 4, 5]  
Rotating once to the left results in nums = [2, 3, 4, 5, 1].

Example 2:Input: nums = [-1, 0, 3, 6]  
Output: [0, 3, 6, -1]  
Explanation: Initially, nums = [-1, 0, 3, 6]  
Rotating once to the left results in nums = [0, 3, 6, -1].
```

---

![starting day 11 calmly](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGQ5dHc5Z3F3b2d6eGZ5NXZpYmJ4eWVhNXRmM3o2ZzVxZzF5ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13HgwGsXF0aiGY/giphy.gif align="left")

Today is **Day 11** of my DSA journey, and honestly, this problem is something we already do in real life — just never thought about it as “DSA”.

---

## 🧩 Problem Statement (In Simple Words)

You’re given an array.  
You need to **rotate it to the left by one position**.

👉 No return  
👉 Just modify the same array

---

## 🧪 Example 1

```plaintext
Input  → [1, 2, 3, 4, 5]
Output → [2, 3, 4, 5, 1]
```

What happened?

* `1` moved from the front to the end
    
* Everything else shifted one step left
    

---

## 🧪 Example 2

```plaintext
Input  → [-1, 0, 3, 6]
Output → [0, 3, 6, -1]
```

Same logic. Different numbers.

---

![simple but tricky](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3JtZ2FqYTN3bWR5d3BqOW4zY2Z2eHJpMWp6dGZ6MHBqNmF4eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vRfNA1p0rvhMSvS/giphy.gif align="left")

---

## 🤔 Before Writing Code (This Matters in Interviews)

Before touching code, I pause and think:

* What if the array is empty?
    
* What if it has only one element?
    
* Can I modify the same array?
    
* Do I need extra space or not?
    

These questions show **clarity**, not confusion.

---

## ⚠️ Edge Cases (Don’t Skip These)

| Input | Output | Why |
| --- | --- | --- |
| `[]` | `[]` | Nothing to rotate |
| `[5]` | `[5]` | One element stays same |
| `[1,2]` | `[2,1]` | Simple swap-like shift |

---

## 🧠 Real-Life Way to Understand This

Imagine you’re standing in a line:

```plaintext
[A, B, C, D]
```

Now the first person (`A`) goes to the **end** of the line.

Result:

```plaintext
[B, C, D, A]
```

That’s left rotation by one.

---

![this makes sense now](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3h4aDRxZHBqbnBndnZzZXN1d3dwbzZ4Z3A5d3c3cGx5c2d6NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEYEpIngcmXlHetDqz/giphy.gif align="left")

---

## 🛠️ Brute Force Approach (Easy to Understand)

This is the approach beginners usually start with — and that’s **okay**.

### How I Think About It

1. Store the first element
    
2. Shift all elements one step left
    
3. Put the stored element at the end
    

---

## 🧠 Understand the input

```js
nums = [1, 2, 3, 4, 5]
```

Goal 👇  
Move **first element to last**, and shift others **one step left**.

Expected output:

```js
[2, 3, 4, 5, 1]
```

---

## 🛑 Edge Case (Very Important in Interview)

```js
if (!Array.isArray(nums) || nums.length <= 1) {
  return;
}
```

Meaning in simple words:

* If input is **not an array** → stop
    
* If array has **0 or 1 element** → no rotation needed
    

👉 Interviewers LOVE this check.

---

## 📦 Save the first element

```js
const first = nums[0];
```

Now:

```js
first = 1
nums = [1, 2, 3, 4, 5]
```

Why we do this?  
👉 Because once we shift elements, **1 will be lost**.  
So we keep it safe.

---

## 🔄 Loop Walkthrough (MOST IMPORTANT PART)

### Loop code

```js
for (let i = 0; i < nums.length - 1; i++) {
  nums[i] = nums[i + 1];
}
```

### Let’s go step by step 👇

---

### 🟢 Before loop starts

```plaintext
nums = [1, 2, 3, 4, 5]
first = 1
```

---

### 🔁 Loop Round 1

```plaintext
i = 0
nums[0] = nums[1]
```

What happens?

```plaintext
nums[0] = 2
```

Array now:

```plaintext
[2, 2, 3, 4, 5]
```

---

### 🔁 Loop Round 2

```plaintext
i = 1
nums[1] = nums[2]
```

Array now:

```plaintext
[2, 3, 3, 4, 5]
```

---

### 🔁 Loop Round 3

```plaintext
i = 2
nums[2] = nums[3]
```

Array now:

```plaintext
[2, 3, 4, 4, 5]
```

---

### 🔁 Loop Round 4

```plaintext
i = 3
nums[3] = nums[4]
```

Array now:

```plaintext
[2, 3, 4, 5, 5]
```

---

### ❌ Loop stops

Why?

```plaintext
i < nums.length - 1
i < 4
```

We **don’t touch last index** yet.

---

## 🧩 Put first element at the end

```js
nums[nums.length - 1] = first;
```

Means:

```plaintext
nums[4] = 1
```

Final array:

```plaintext
[2, 3, 4, 5, 1]
```

🎉 Done!

---

## 🧪 Final Output

```js
[2, 3, 4, 5, 1]
```

---

## 💬 How to explain this in an interview

> “First, I save the first element.  
> Then I shift all elements one step left using a loop.  
> Finally, I place the saved element at the end.  
> I also handle edge cases like empty or single-element arrays.”

---

---

![smooth execution](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2w2bGJ3OWc4dXN0a2M5ZGN6dXB3MTh3cXR3ZXQ1bG5xZnJpYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif align="left")

---

## 💻 Code (Clean & Beginner-Friendly)

```js
const leftRotateByOne = (nums) => {
  if (!Array.isArray(nums) || nums.length <= 1) {
    return;
  }

  const first = nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }

  nums[nums.length - 1] = first;
};

// Test
let nums = [1, 2, 3, 4, 5];
leftRotateByOne(nums);
console.log(nums); // [2, 3, 4, 5, 1]
```

---

## ⏱️ Time & Space (In Normal Words)

* **Time Complexity:** `O(n)`  
    → We move through the array once
    
* **Space Complexity:** `O(1)`  
    → No extra array used
    

---

## 🌱 What I Learned Today

1. Rotation is just controlled shifting
    
2. Saving the first element is the key idea
    
3. Edge cases matter even in simple problems
    
4. Clear steps &gt; clever tricks
    
5. Interviewers love this problem
    

---

## 🎯 Final Thought

DSA is not about magic.  
It’s about **breaking problems into tiny steps** and explaining them calmly.

If you understand this, you’re on the **right path**.

---

![see you tomorrow](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZ3dG5vN2w5ZGNkZTR5MWY2dW5yOHVqY3E1eXAwcHd3YjZxZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO6qJiXajN0TyDu/giphy.gif align="left")

---

## 💬

Don’t rush DSA.  
**Understand → Practice → Repeat**

Tomorrow, we’ll make it even more interesting 🚀  
See you on **Day 12** 💙