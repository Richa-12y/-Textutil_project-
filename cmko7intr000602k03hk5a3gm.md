---
title: "Day 16 of My DSA Journey 🚶‍♀️"
seoTitle: "DSA Journey: Day 16 Highlights"
seoDescription: "Discover XOR's power in solving a common arrays problem: finding a unique single element when all others appear twice. Perfect for efficient coding!"
datePublished: Wed Jan 21 2026 15:57:53 GMT+0000 (Coordinated Universal Time)
cuid: cmko7intr000602k03hk5a3gm
slug: day-16-of-my-dsa-journey
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769009876505/ffc92ba0-ff54-49d1-9636-c36966aafc2e.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769012608774/f71594ae-9075-4666-a432-481e70312c85.png
tags: javascript, web-development, learning, hashnode, dsa, learning-journey, dsa-series, dsawithricha

---

## The Problem

> Given a **non-empty array of integers**,  
> every element appears **twice except one**.  
> Find that **single element**.

### Example 1

```plaintext
Input:  [2, 2, 1]
Output: 1
```

### Example 2

```plaintext
Input:  [4, 1, 2, 1, 2]
Output: 4
```

Only **one number appears once**.  
All others appear **exactly twice**.

---

## My First Thought (and Why It Failed)

My brain immediately went here:

> “What if I just compare `arr[i] !== arr[i+1]` and return that?”

Sounds reasonable… right?

But then reality hit.

😵 **This only works if the array is sorted**  
And the problem **never said** the array will be sorted.

So for this input:

```plaintext
[4, 1, 2, 1, 2]
```

Comparing neighbors is useless.  
The logic breaks completely.

That’s when I realized —  
**I need a logic that doesn’t depend on order.**

---

## Brute Force Approach (The Obvious One)

Before jumping to anything fancy, let’s think like a beginner (which I am).

### The idea

* Pick one element
    
* Count how many times it appears
    
* If it appears **once**, return it
    

Simple. Very human.

### How it works

1. Outer loop → pick `arr[i]`
    
2. Inner loop → count occurrences of `arr[i]`
    
3. If count === 1 → that’s the answer
    

🧠 Brain doing nested loops math  

![Nbc Theory GIF by Manifest](https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NHJ3cXlndXc1b2RvZ3JtM3F4a2E5enNsOGZsb2RqMTg1ZGJwdzh3ZCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/holtIZKkypQhSmSpEq/200.gif align="center")

### Code (Brute Force)

```js
const singleNumberBrute = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      return arr[i];
    }
  }
};
```

### Why this is not great

* Time Complexity: **O(n²)** 😬
    
* Works… but slow for big arrays
    

So yes, it works — but interviews won’t be impressed.

---

## Enter XOR 😵‍💫 (The Part That Confused Me)

Everyone kept saying:

> “Just use XOR. Easy.”

And I was like:

> **NO. It is not easy. What even is XOR?**

So I stopped memorizing and started **understanding**.

---

## XOR — Beginner Explanation (No Tech Jargon)

XOR means **Exclusive OR**.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769010587205/522852b8-4725-403f-8cac-4d97851e7270.png align="center")

### The rule is VERY simple:

> **Same → 0**  
> **Different → 1**

That’s it. Nothing more.

🧠 Logic loading…  

![Movie gif. Rowan Atkinson as Mr. Bean in Mr. Bean's Holiday, stands in a field of yellow flowers on a windy day. He looks off into the distance and then at his watch, before scratching his head. ](https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NG9wNmFiaGZncXA2Mnp3YnVidHNzazk3cWc2eDFuZ3BjaXBsa210ciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/QBd2kLB5qDmysEXre9/200.gif align="center")

---

## The Only XOR Properties You Need (THIS IS KEY 🔑)

### 1️⃣ Same number XOR same number = 0

```plaintext
5 ⊕ 5 = 0
```

Duplicates cancel each other.

---

### 2️⃣ Any number XOR 0 = that number

```plaintext
5 ⊕ 0 = 5
```

---

### 3️⃣ Order doesn’t matter

```plaintext
a ⊕ b ⊕ a = b
```

Because `a ⊕ a = 0`

---

## The One-Line Intuition (REMEMBER THIS ❤️)

> **XOR cancels duplicates and keeps the difference**

Read that again.  
This is the entire logic of the problem.

---

## Applying XOR to Our Problem

Let’s take this example:

```plaintext
[4, 1, 2, 1, 2]
```

Start with:

```plaintext
result = 0
```

Now XOR everything one by one.

![thelosthusband look texas search searching GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGh2cWtndXpsejR1aXJwZGN6ajN5OWtsaXAzNW03bGgxZG4zZzM5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/US1ByUdhPgm1Agt5h8/200.gif align="center")

### Step-by-step walkthrough

```plaintext
result = 0 ⊕ 4 = 4
result = 4 ⊕ 1 = 5
result = 5 ⊕ 2 = 7
result = 7 ⊕ 1 = 6
result = 6 ⊕ 2 = 4
```

🎯 Final result = **4**

Why?

* `1 ⊕ 1 = 0`
    
* `2 ⊕ 2 = 0`
    
* `0 ⊕ 4 = 4`
    

All duplicates vanish.  
Only the unique number survives.

💡 Aha moment  

![Movie gif. Nicholas Cage as Peter in Vampire's Kiss leaning forward from an office chair with a cigarette hanging out of his mouth, pointing out excitedly.](https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bjY1Y29ocXNlNzQ4d3pja2t1Z3VxcjV4d2l1ZTU5NW9oOTk2c2ZrOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RrVzUOXldFe8M/200.gif align="center")

---

## Clean XOR Solution (Best Approach)

![Movie gif. Robert Downey Jr. as Tony Stark in Iron Man has his arms crossed and he rolls his eyes dramatically. ](https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWJhZXFicGtqMnZyYzZnYmNxZHk1cjdsOGswc3Q3ZXU0enQ1cmR3bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qmfpjpAT2fJRK/giphy.gif align="center")

```js
const singleNumber = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i];
  }

  return result;
};
```

---

## Why This Works (In Plain English)

* Every number that appears **twice** cancels itself
    
* XOR doesn’t care about order
    
* Only the number that appears **once** remains
    

It’s not magic.  
It’s just math + logic.

---

## Time & Space Complexity (Simple Version)

### ⏱ Time Complexity: **O(n)**

* One loop
    
* One pass through the array
    

---

### 💾 Space Complexity: **O(1)**

* Only one variable (`result`)
    
* No extra memory
    

This is why XOR is loved in interviews.

---

## What I Learned Today

![Salt Bae Steak GIF](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Y3aWxwODFueXA4ZmJydHFmb2hqcnlwYXZ6c240aHRyaXRsOXF6NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4Jz3a8jO92crUlWM/200.gif align="center")

* My first instinct isn’t always correct — and that’s okay
    
* XOR looks scary until you stop memorizing and start understanding
    
* **“XOR cancels duplicates and keeps the difference”** — this sentence saved me
    
* Not every smart solution is complicated
    

---

## DSA Fear vs Reality 😅

![Celebrity gif. Jason Momoa looks at us with a warm smile as he forms his hands into a heart shape. He then places his hands under his chin before going back to forming the heart.](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Y3aWxwODFueXA4ZmJydHFmb2hqcnlwYXZ6c240aHRyaXRsOXF6NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/R6gvnAxj2ISzJdbA63/giphy.gif align="left")

---

## Final Takeaway

If a problem says:

> “Every element appears twice except one”

Your brain should immediately whisper:

> **XOR.**

---

### Question for You 💬

Did XOR confuse you the first time too?  
Or did you also try brute force before understanding it properly?

Let’s struggle together 😄