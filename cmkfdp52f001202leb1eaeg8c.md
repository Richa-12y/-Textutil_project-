---
title: "📅 Day 10: Finding the Index of an Element in an Array"
seoDescription: "Learn how to find the index of an element in an array, handle edge cases, and explain clearly for interviews"
datePublished: Thu Jan 15 2026 11:40:57 GMT+0000 (Coordinated Universal Time)
cuid: cmkfdp52f001202leb1eaeg8c
slug: day-10-finding-the-index-of-an-element-in-an-array
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768476765780/4171530d-e9d8-4596-a2c5-57f0869f0e15.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768477238353/022f8ed4-65b7-4324-828d-52ecc5b3a830.png

---

---

![starting calmly](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Z5Y3VqN3V3NmV3dGQ1a3N0cTN6NnZ2bTFqMXZ1NmI2a2x2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JIX9t2j0ZTN9S/giphy.gif align="left")

Today’s problem is very common —  
and honestly, **this is one of those questions interviewers love to ask beginners**.

Not because it’s difficult,  
but because it shows **how you think**, **how you handle edge cases**, and **how clearly you explain**.

---

## 🧩 Problem Statement

**Find the index of a given element in an array**

### Example

```plaintext
Array  → [1, 2, 3, 4]
Target → 3
Output → 2
```

Why `2`?  
Because array indexing starts from **0**, not 1.

---

## 🤔 Before Writing Any Code (Very Important)

If this problem is asked in an interview, I don’t jump to code immediately.

First, I ask myself (or the interviewer):

* What if the array is empty?
    
* What if the element is not present?
    
* What if the array has only one element?
    
* Should I return `-1` if not found?
    
* Are there duplicate values?
    

These questions show **clarity**, not weakness.

---

## ⚠️ Edge Cases We Must Handle

| Case | Example | Output |
| --- | --- | --- |
| Empty array | `[]`, target `3` | `-1` |
| Element not found | `[1,2,3]`, target `5` | `-1` |
| Single element match | `[3]`, target `3` | `0` |
| Duplicate values | `[1,2,3,3]`, target `3` | first index |
| Invalid input | `null / undefined` | `-1` |

---

![thinking carefully](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F3M2VxNmR4ZGV2a2Y2Z2Y0bHF5MW1kZ3ZtY3p6c3B5eG5nYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btPCcdNniyf0ArS/giphy.gif align="left")

---

## 🧠 Understanding the Problem in Real Life

Imagine you’re looking for a friend’s seat number in a classroom row:

```plaintext
[ A, B, C, D ]
```

You scan seats **one by one** from the start.

The moment you see **C**, you stop and say:  
👉 “Found it — seat number 2.”

That’s exactly what we do here.

---

## ✍️ Step-by-Step Thinking (No Code Yet)

1. Start from the **first element**
    
2. Compare it with the target
    
3. If it matches → return the index
    
4. If not → move to the next element
    
5. If the loop ends → element not found
    

Simple. Logical. Human.

---

## 🚶 Walkthrough With Example

Array:

```plaintext
[1, 2, 3, 4]
Target = 3
```

* Index `0` → value `1` → not match
    
* Index `1` → value `2` → not match
    
* Index `2` → value `3` → ✅ match
    

👉 Return `2`

---

![aha moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2JqZmR3bGk1NGg1bGV2M3R1NHl0Zmt3NGh2aWhqczZtMXJ3biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

## 💻 The Code (Beginner-Friendly)

```js
const findIndex = (arr, target) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

// Test cases
console.log(findIndex([1, 2, 3, 4], 3)); // 2
console.log(findIndex([1, 2, 3], 5));    // -1
console.log(findIndex([], 3));           // -1
```

---

## ⏱️ Time & Space (Simple Words)

* **Time Complexity:** `O(n)`  
    → We may need to check every element
    
* **Space Complexity:** `O(1)`  
    → No extra memory used
    

---

## 🌱 What I Learned Today

1. Index always starts from **0**
    
2. Always decide what to return when not found
    
3. Edge cases matter more than fancy logic
    
4. Simple loops solve many interview problems
    
5. Explaining calmly makes a big difference
    

---

## 🎯 Final Thought

Most DSA problems are not hard.  
They become hard when we **panic** or **skip basics**.

If you can explain this problem clearly,  
you’re already thinking like an interviewer.

---

![see you tomorrow](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWg0NmJpM3A5aG01dGQ2N2Y4cTZ0eTdyM3QzY2NqczE4c2FqeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO6qJiXajN0TyDu/giphy.gif align="left")

---