---
title: "🚀 Day 18/100: Two Sum—Stop Double-Looping Your Life (and Your Code 👩💻)"
seoTitle: "Optimize Two Sum: Stop Double-Looping"
seoDescription: "Optimize Two Sum problems with efficient coding: use hash maps instead of double loops for better interview performance"
datePublished: Fri Jan 23 2026 14:19:05 GMT+0000 (Coordinated Universal Time)
cuid: cmkqyvbcp000902l2173o1rau
slug: day-18100-two-sumstop-double-looping-your-life-and-your-code
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769177623083/7d0023f4-f1fa-4953-98f0-fad18bf99cf5.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769177913170/c2b5e8d6-374d-4692-9b0c-db0b0d246968.png
tags: javascript, web-development, learning, hashnode, dsa, learning-journey, dsa-series, dsawithricha

---

Alright. Be honest.

At some point in your coding life, you *definitely* wrote a nested loop, leaned back in your chair, and thought:

> “Yeah… this should work.”

And technically?  
It **did**.

But interviews don’t care about *technically*.  
They care about **efficiently**.

Welcome to **Two Sum** — the problem that humbles beginners and secretly teaches you how grown-up code thinks.

---

## 🎯 The Mission (a.k.a. The Setup Every Interviewer Loves)

You’re given:

* An array of numbers 👉 `arr`
    
* A target number 👉 `target`
    

Your task?

### Variant 1

👉 Tell me **IF** two numbers exist whose sum = target (YES / NO)

### Variant 2 (the real one)

👉 Give me their **indices**

Think of it like this:

You’re at a party 🎉  
Everyone has a number on their shirt (the array).  
The host whispers:

> “Some **two people here add up to 14**.  
> Find them. Quickly.”

---

![thinking gif](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif align="left")

---

## 🐌 Phase 1: The “I Have All Day” Approach (Brute Force)

This is where **all of us** start. No shame.

You pick one number…  
Then compare it with **every other number**.

```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      return [i, j];
    }
  }
}
```

### Why this hurts 💀

* Time Complexity: **O(n²)**
    
* For small arrays → fine
    
* For big arrays → your laptop fan starts narrating its life story
    

This approach is lovingly called:

> **“The O(Nooooo 😭)”**

---

![laptop fan gif](https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif align="left")

---

## 🧠 Phase 2: The “Big Brain” Move (Hash Map Magic)

Now we stop being reactive…  
and start being **intentional**.

Instead of checking *everyone with everyone*, we do this:

> “If I know what I need, I don’t need to guess.”

### 🔑 The Core Idea (Read This Slowly)

If:

* `target = 14`
    
* current number = `6`
    

Then I **already know**:  
👉 I’m looking for `8`

So the real question becomes:

> “Have I seen an 8 **before**?”

That’s it.  
That’s the whole trick.

---

## ⚠️ Pro Tip (Important!)

* `Set` → good for **YES / NO**
    
* `Map` → required for **returning indices**
    

Because interviews want **proof**, not vibes.

---

## ⚡ Optimized Solution (One Loop. One Brain.)

```javascript
const twoSum = (arr, target) => {
  const visited = new Map(); // number -> index

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const complement = target - current;

    if (visited.has(complement)) {
      return [visited.get(complement), i];
    }

    visited.set(current, i);
  }

  return [-1, -1]; // no pair found
};
```

---

![mind blown gif](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

## 🧪 Step-by-Step Walkthrough (Target = 14)

Array: `[2, 6, 5, 8]`

| Current | Need | Map Status | Action |
| --- | --- | --- | --- |
| 2 | 12 | empty | save 2 |
| 6 | 8 | no 8 | save 6 |
| 5 | 9 | no 9 | save 5 |
| 8 | 6 | ✅ FOUND | return `[1, 3]` |

✨ Done in **one pass**.

---

## 🚀 Why This Is a Real Level-Up

### ✅ Time Complexity

**O(n)** — one clean walk through the array

### ✅ Space Complexity

**O(n)** — extra memory, massive speed gain

This is the moment you stop writing “working code”  
and start writing **interview-ready code**.

---

## ⚠️ Edge Cases You MUST Handle (Interview Gold)

Don’t skip these — interviewers love them 👇

### 1️⃣ Empty or Single Element Array

```js
arr = []
arr = [5]
```

👉 No pair possible → return `[-1, -1]`

---

### 2️⃣ Same Number Used Twice?

```js
arr = [7, 7]
target = 14
```

✅ Valid — indices are different

Our map solution handles this perfectly.

---

### 3️⃣ Negative Numbers

```js
arr = [-3, 4, 7, 10]
target = 7
```

👉 `-3 + 10 = 7`

Works without any extra logic. 🎯

---

### 4️⃣ Multiple Valid Answers

```js
arr = [1, 2, 3, 4, 5]
target = 6
```

👉 `[1,4]` or `[2,3]`

Interviewers usually accept **any one valid pair** unless specified.

---

## 🧭 Final Takeaway

Two Sum isn’t about numbers.

It’s about this mindset shift:

> **“Don’t search blindly. Remember what you’ve seen.”**

That single thought shows up **everywhere**:

* Sliding Window
    
* Prefix Sum
    
* Subarrays
    
* Caching
    
* Even system design later on 👀
    

---

![keep going gif](https://media.giphy.com/media/12XDYvMJNcmLgQ/giphy.gif align="left")

---

### 💬 Your Turn

Would you like Day 19 to cover:

* 🔥 **Three Sum**
    
* 🧩 **Subarray Sum = K**
    

Leave a comment so we can continue this trend 💪✨