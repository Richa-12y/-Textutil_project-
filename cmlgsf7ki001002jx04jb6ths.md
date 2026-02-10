---
title: "Day 28 – Find the First Non-Repeating Character (And Why It’s Smarter Than It Looks)"
seoTitle: "Find First Non-Repeating Character Easily"
seoDescription: "Discover how to find the first non-repeating character efficiently, a critical concept in coding interviews for clean and optimized code solutions"
datePublished: Tue Feb 10 2026 16:00:36 GMT+0000 (Coordinated Universal Time)
cuid: cmlgsf7ki001002jx04jb6ths
slug: day-28-find-the-first-non-repeating-character-and-why-its-smarter-than-it-looks
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1770738619397/f7ed0894-4110-4bd5-b2fe-e0881f45eeda.png
tags: js, javascript, web-development, reactjs, hashnode, dsa, dsawithricha

---

Day 28.

![Alia Bhatt Hello GIF by DuroflexWorld](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hmdWJobXJrZ2htdHAyOTEwaGJpcDhoMGNrbjhtMnBsenN4Mmx2OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hiWRsZSF0mYEpikTfk/giphy.gif align="left")

  
I won’t say I’m writing DSA blogs daily because I’m not. Most days go into development work, meeting deadlines, and fixing bugs that nobody else wants to touch.

But whenever I get a little breathing room, I come back here. Not to be perfect. Just to keep moving.

Today’s problem is small, but it teaches a big lesson: how thinking clearly can save you from slow, messy code.

Alright, let’s do this properly 😊

---

## 🧠 The Problem (In Simple Words)

Given a string:

* Find the **first character** that **does not repeat**
    
* Return its **index**
    
* If *every* character repeats → return `-1`
    

### Examples

```plaintext
"leetcode"      → 0   (l)
"loveleetcode"  → 2   (v)
"aabb"          → -1
```

Simple? Yes.  
Tricky in interviews? Also yes 😄

![Alia Bhatt Raazi GIF by Dharma Productions](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hmdWJobXJrZ2htdHAyOTEwaGJpcDhoMGNrbjhtMnBsenN4Mmx2OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SOx1vpFO681KJmH1n9/giphy.gif align="left")

---

## 🚦 Why Interviewers Love This Question

Because it tests:

* Can you **count efficiently**?
    
* Can you avoid nested loops?
    
* Do you understand **time vs space tradeoffs**?
    
* Can you think beyond the happy path?
    
* ![ranveer singh bollywood GIF by Zee Cinema Channel](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hmdWJobXJrZ2htdHAyOTEwaGJpcDhoMGNrbjhtMnBsenN4Mmx2OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ri84Q1eewPEtnKPFmb/200.gif align="left")
    

---

## ❌ The Naive (Slow) Way

Most beginners do this:

> For each character, scan the whole string again to see if it repeats.

That’s **O(n²)**.  
Works… until the input size explodes 💥

Interviewers will smile politely and then move on.

---

## ✅ The Smart Way (Two Pass Strategy)

We’ll do this in **two clean steps**:

---

### 🧩 Step 1: Count frequency of each character

We walk through the string once and store how many times each character appears.

Think of it like attendance:

* `l` → present 1 time
    
* `e` → present 3 times
    
* `t` → present 1 time
    

We’ll use a `Map` for that.

![Alia Bhatt GIF by Gangubai Kathiawadi](https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDI1aG9qcnpuMjF4dzRrZGZvZW1uYzloYTIzeDh4dW54amY4bWI3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RVos4GUELoVm72ZlvL/200.gif align="left")

  
👉 `l → 1`, `e → 1`, `e → 2`, `t → 1`, …

---

### 🧩 Step 2: Find the first character with frequency = 1

Now we walk the string **again**, from left to right:

* The **first** character whose count is `1` → that’s our answer 🎯
    

![Alia Bhatt Namaste GIF by Gangubai Kathiawadi](https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDI1aG9qcnpuMjF4dzRrZGZvZW1uYzloYTIzeDh4dW54amY4bWI3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/O734A7bZAaJMZe6Bvo/200.gif align="left")

---

## 🧪 Walkthrough Example: `"loveleetcode"`

### Step 1 – Frequency Map

```plaintext
l → 2
o → 2
v → 1
e → 4
t → 1
c → 1
d → 1
```

### Step 2 – Scan from left

* `l` → repeats ❌
    
* `o` → repeats ❌
    
* `v` → appears once ✅
    

🎉 Answer = **index 2**

---

## 🧑‍💻 JavaScript Solution

![Bollywood Controlar GIF by Huptech Web](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDI5OWoydHRlMm91NXlxMXppMXVtazRvZWJpY2VwcHJjeG1vODg1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XBpEgheIVWnC8hwc46/giphy.gif align="left")

```javascript
const firstNonRepeating = s => {
  const freq = new Map();

  // Step 1: Count frequency
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Step 2: Find first non-repeating
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }

  return -1;
};
```

---

## ⏱️ Complexity (Interview-Ready Answer)

* **Time Complexity:** `O(n)`
    
* **Space Complexity:** `O(min(n, alphabet size))`
    

Why `min`?

* If alphabet is small (like lowercase letters), space is constant.
    
* If Unicode? Space grows.
    

---

## 🔍 Interview Follow-Ups (Very Important)

![Hera Pheri Lol GIF by Bombay Softwares](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDI5OWoydHRlMm91NXlxMXppMXVtazRvZWJpY2VwcHJjeG1vODg1aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AGGcmjQuwPHvvpotns/giphy.gif align="left")

### 1️⃣ Return character instead of index?

Easy:

```js
return s[i];
```

---

### 2️⃣ Streaming Input (One Pass, Unbounded)

This is where it gets spicy 🌶️

You can’t store the whole string.  
Solution idea:

* Maintain:
    
    * Frequency map
        
    * Queue of potential non-repeating characters
        
* As stream comes:
    
    * Increment count
        
    * Remove from queue if count &gt; 1
        

This tests **real-world system thinking**.

---

### 3️⃣ Unicode Support?

![deepika padukone bollywood GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3A4bXV3ZjNmd2QyaW4ybnptZ2Y5cWsycWwxeW8zZndteGE0eXBvOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2YWxmumMFiRq8isM/100.gif align="left")

JavaScript strings are UTF-16.

* Emojis can be **multi-byte**
    
* `for...of` is safer than indexing
    
* Real production systems need careful handling here
    

Interviewers LOVE when you mention this casually.

---

## 🧠 Final Advice

This problem isn’t about strings.

It’s about:

* **Thinking in passes**
    
* **Using data structures wisely**
    
* **Writing clean, readable logic**
    

And about consistency — even if it’s not daily.

You showed up today.  
That counts. 💙

![Happy New Year GIF](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3A4bXV3ZjNmd2QyaW4ybnptZ2Y5cWsycWwxeW8zZndteGE0eXBvOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/brgx4FFnUiLZbZzkos/200.gif align="left")

---