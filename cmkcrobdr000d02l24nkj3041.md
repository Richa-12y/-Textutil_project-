---
title: "📅 Day 8: Remove Duplicates from an Array (How I Finally Understood It)"
seoTitle: "Understanding Array Duplicate Removal"
seoDescription: "Learn how to effectively remove duplicates from an array and understand key interview problem-solving strategies"
datePublished: Tue Jan 13 2026 15:48:55 GMT+0000 (Coordinated Universal Time)
cuid: cmkcrobdr000d02l24nkj3041
slug: day-8-remove-duplicates-from-an-array-how-i-finally-understood-it
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768317174914/b4a41365-8f2e-493e-a546-b8b6634a11cd.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768319263792/86687653-925a-48ce-951f-a879cf117786.png
tags: remove-duplicates-using-sethas-explicit-way

---

![starting fresh](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBxZ2I3ZGFoZzRrNmNqYnd6d2w3M2U3MHBtNzVnN2d5a2x1ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26AHONQ79FdWZhAI0/giphy.gif align="left")

Today is **Day 8** of my DSA journey.

The problem looks small, but it teaches **a very important thinking pattern** that interviewers actually care about.

---

## 🧩 Problem Statement

**Remove duplicate elements from an array**

### Example

```plaintext
Input  → [1, 2, 2, 3, 4, 4]
Output → [1, 2, 3, 4]
```

---

## 🤔 Before Writing Code (Interview Mindset)

If I were in an interview, **before touching the keyboard**, I would ask:

1. Can the array be empty?
    
2. Can it have only one element?
    
3. Should I keep the **original order**?
    
4. Can I use extra space or not?
    
5. Are values numbers, strings, or mixed?
    

These questions **show maturity**, not weakness.

---

## ⚠️ Edge Cases (Always Handle These)

```js
[]           → []
[5]          → [5]
null         → []
"hello"      → []
```

---

## ✅ Approach 1: Using `Set` + `has()` (BEST for Interviews)

This is the **cleanest** and **most explainable** solution.

### Code

```js
const removeDuplicates = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  let seen = new Set();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {   // 👈 real magic
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }

  return result;
};
```

---

## 🧠 Walkthrough

Array:

```plaintext
[1, 2, 2, 3, 4, 4]
```

Start with:

```plaintext
seen   = {}
result = []
```

---

### 👉 Read `1`

* Have I seen `1` before? ❌
    
* Save it
    

```plaintext
seen   = {1}
result = [1]
```

---

### 👉 Read `2`

* Seen before? ❌
    
* Save it
    

```plaintext
seen   = {1, 2}
result = [1, 2]
```

---

### 👉 Read `2` again

* Seen before? ✅
    
* Skip it ❌
    

---

### 👉 Read `3`

* New number → save
    

```plaintext
seen   = {1, 2, 3}
result = [1, 2, 3]
```

---

### 👉 Read `4`

* New → save
    

```plaintext
seen   = {1, 2, 3, 4}
result = [1, 2, 3, 4]
```

---

### 👉 Read `4` again

* Already seen → skip
    

---

### ✅ Final Output

```plaintext
[1, 2, 3, 4]
```

---

![light bulb moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5nN2p1cGF3dHB0ZW13d3ZtZnJ6MG5tdXExNmU2ZHVrOGM4YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Mbf88ZsXzG6E9hC/giphy.gif align="left")

---

## ✨ One-Line ES6 Solution (Clean but Don’t Explain Like This)

```js
const unique = arr => [...new Set(arr)];
```

✔ Short  
❌ Hard to explain in interviews

---

## 🔁 Approach 2: Using `filter()` + `indexOf()`

```js
const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) return [];

  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
};
```

### How this works (simple words):

* `indexOf(item)` → first position of that item
    
* If current index === first position → keep it
    
* Else → duplicate → skip
    

❌ Slower  
❌ Confusing for beginners

---

## 🏆 Which Approach Is Best & Why?

| Method | Interview | Speed | Explanation |
| --- | --- | --- | --- |
| Set + has() | ⭐⭐⭐⭐⭐ | Fast | Very clear |
| One-line Set | ⭐⭐ | Fast | Hard to explain |
| filter + indexOf | ⭐⭐ | Slow | Confusing |

👉 **Winner:** `Set + has()`

---

![winner moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd25vZ3QzMHF3bDNxOXp4NHl0NjR3eG5mNzRzNnN0aXh1aWF0eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif align="left")

---

## 🧠 What I Learned Today

1. Always ask edge cases first
    
2. `Set` remembers what we’ve seen
    
3. `has()` makes logic readable
    
4. Simple logic &gt; clever code
    
5. Interviews care about **thinking**, not shortcuts
    

---

## 🌱 Final Thought

This problem is not about duplicates.  
It’s about **how you think and explain**.

If a beginner reads this and says

> “Ohhh, now I get it”

— then the blog did its job.

---