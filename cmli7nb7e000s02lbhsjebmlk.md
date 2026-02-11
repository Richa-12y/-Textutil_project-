---
title: "📅 Day 29 of DSA Journey
Counting Character Frequency (Map vs Object)"
seoTitle: "Character Frequency: Map vs Object Methods"
seoDescription: "Explore character frequency counting using Map and Object in JavaScript for efficient data handling in coding interviews and problem-solving"
datePublished: Wed Feb 11 2026 15:54:35 GMT+0000 (Coordinated Universal Time)
cuid: cmli7nb7e000s02lbhsjebmlk
slug: day-29-of-dsa-journey-counting-character-frequency-map-vs-object
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1770824809355/6c537f5b-8094-442c-b35d-3ca659488aa5.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1770825256161/7341d74a-b05c-4712-9f3b-410ad01a5c90.png
tags: javascript, web-development, learning, hashnode, dsa, learning-journey, dsawithricha

---

## 🌸 Small Intro

![Sarcastic Pankaj Tripathi GIF by Bombay Softwares](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW12NWRvcmdrOXMwbzUxYjE4dnFrZjI2cGtlcW14dHBtMmkxY2lncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4o5ETlMfZM4tKKAIY1/giphy.gif align="left")

Today was surprisingly calm.

No big bugs.  
No “why is this not working???” moment.  
No staring at the screen for 20 minutes.

And when that happens, I feel fresh.

So I thought —  
Let’s solve something small but fundamental.

Because sometimes growth doesn’t come from hard problems.  
It comes from understanding simple ones deeply.

So today’s topic:

> **Count frequency of characters in a string**

Simple? Yes.  
Important? VERY.

---

# 🧩 Problem

Given a string:

```js
"hello"
```

Return:

```js
{ h: 1, e: 1, l: 2, o: 1 }
```

Count how many times each character appears.

---

# 🤔 Why Is This Important?

![Confused 3 Idiots GIF by Bombay Softwares](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW12NWRvcmdrOXMwbzUxYjE4dnFrZjI2cGtlcW14dHBtMmkxY2lncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EaSRzJYZabLZ3LuCvQ/giphy.gif align="left")

Because this logic is used in:

* Anagram problems
    
* Duplicate detection
    
* Most frequent character
    
* Palindrome checks
    
* Hashing concepts
    
* Sliding window problems
    

This is a **foundation problem**.

---

# ✅ Approach 1: Using `Map()` (Clean & Modern Way)

![Om Shanti Om Bollywood GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW12NWRvcmdrOXMwbzUxYjE4dnFrZjI2cGtlcW14dHBtMmkxY2lncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUNd9QGPYSRKQqXBK0/100.gif align="left")

Here’s the code:

```js
const charFrequency = s => {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  return Object.fromEntries(freq);
};
```

Now let’s go slowly. Beginner style.

---

# 🔍 Step-by-Step Walkthrough

### Input:

```js
s = "hello"
```

---

## 🔹 Step 1

```js
const freq = new Map();
```

We create an empty Map.

Think of it like a small notebook 📒  
Where:

* Left side = character
    
* Right side = count
    

Right now:

```plaintext
freq = {}
```

---

## 🔹 Step 2

```js
for (const ch of s)
```

This loop reads one character at a time.

So internally it reads:

```plaintext
'h'
'e'
'l'
'l'
'o'
```

---

# Now the Magic Line 👇

```js
freq.set(ch, (freq.get(ch) || 0) + 1);
```

Let’s break this carefully.

---

## 🧠 When `ch = 'h'`

* `freq.get('h')` → undefined
    
* `(undefined || 0)` → 0
    
* `0 + 1 = 1`
    

So now:

```plaintext
{ h => 1 }
```

---

## 🧠 When `ch = 'e'`

* Not present
    
* `(undefined || 0) = 0`
    
* `0 + 1 = 1`
    

Now:

```plaintext
{ h => 1, e => 1 }
```

---

## 🧠 When `ch = 'l'` (first time)

* Not present
    
* Becomes 1
    

```plaintext
{ h => 1, e => 1, l => 1 }
```

---

## 🧠 When `ch = 'l'` (second time)

* `freq.get('l')` = 1
    
* `(1 || 0)` = 1
    
* `1 + 1 = 2`
    

Now:

```plaintext
{ h => 1, e => 1, l => 2 }
```

---

## 🧠 When `ch = 'o'`

Becomes:

```plaintext
{ h => 1, e => 1, l => 2, o => 1 }
```

---

## 🔹 Final Step

```js
return Object.fromEntries(freq);
```

This converts Map into a normal object:

```js
{ h: 1, e: 1, l: 2, o: 1 }
```

Done 🎉

---

# 🤯 Why This Part Works?

![Mira Rajput News GIF](https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MXNnbGhqZ2s3OHFmOWhxcmtkZXY2ZGQwcm1vcGFqM2tkY2hjOGxkZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JaS735sEYqspi/200.gif align="left")

```js
(freq.get(ch) || 0) + 1
```

This means:

If character exists → use old count  
If not → use 0

Then add 1.

Very clean trick.  
Very common in interviews.

---

# ⏱ Complexity

* **Time:** O(n)  
    (We read each character once)
    
* **Space:** O(k)  
    (k = unique characters)
    

---

# ✅ Approach 2: Using Plain Object `{}` (Interview Classic)

![Oh God Omg GIF by Bombay Softwares](https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGxlc281eXU5cjQwNmVob3VpNDVob2h4MHlqYTFhN2h5Zm9mb215NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YO3hmqqiuR2JB416KE/giphy.gif align="left")

Sometimes interviewers prefer object instead of Map.

Here’s the version:

```js
const charFrequency = s => {
  const freq = {};
  
  for (const ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  return freq;
};
```

---

## 🔍 How This Works

Instead of:

```js
freq.get(ch)
```

We use:

```js
freq[ch]
```

Everything else is same.

For `"hello"`:

```plaintext
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

---

# 🆚 Map vs Object (Which Should I Use?)

| Feature | Map | Object |
| --- | --- | --- |
| Interview safe | ✅ | ✅ |
| Cleaner syntax | Slightly | Very simple |
| Order guaranteed | ✅ | Mostly |
| Most common in DSA | ❌ | ✅ |

👉 In interviews, object `{}` is more common.

---

# 🌿 What I Learned Today

![Rajpal Yadav Bollywood GIF](https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGxlc281eXU5cjQwNmVob3VpNDVob2h4MHlqYTFhN2h5Zm9mb215NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MM3qT9KJNYbJXvqk2L/200.gif align="left")

Today was not a stressful day.  
And that’s important.

Because:

> Not every DSA day needs to be intense.  
> Some days are for strengthening basics.

Character frequency looks small.  
But this logic is used everywhere.

If you master this —  
you unlock 20 more problems automatically.

---

# 💭 Final Reflection (Day 29 Thought)

![chennai express bollywood GIF](https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bWw2NDZ4dXRqMzJoaWhyeTZ3ODdlbzlxdWU1MjdjY3gzemRjd2prZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2YWoTnLKYEfsNNss/100.gif align="left")

Today I felt calm.  
No big debugging.  
No frustration.

Just simple logic.  
Clear understanding.  
One solid foundation stronger.

And honestly…

That feels powerful 💙