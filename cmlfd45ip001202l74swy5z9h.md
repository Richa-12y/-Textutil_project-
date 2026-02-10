---
title: "🔤 Day 27 — Count Vowels & Consonants"
seoTitle: "Vowel and Consonant Counter Tool"
seoDescription: "Learn how to count vowels and consonants in a string with this beginner-friendly guide on string manipulation basics"
datePublished: Mon Feb 09 2026 16:04:20 GMT+0000 (Coordinated Universal Time)
cuid: cmlfd45ip001202l74swy5z9h
slug: day-27-count-vowels-and-consonants
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1770652965000/0bad70f7-2ac9-4c18-9067-6b6d0e9aac23.png
tags: javascript, web-development, learning, dsa, learn-coding, dsawithricha

---

Hello everyone 👋✨  
Welcome back to our **Strings Soft Comeback series**.

Today’s problem is **small**, **friendly**, and **very important** — because this is where beginners usually learn how to:

* Read a string properly
    
* Use loops confidently
    
* Apply conditions correctly
    
* Ignore unnecessary characters
    

And most importantly…

> **How to think, not just code** 🧠💙

So relax.  
Take a sip of chai ☕  
And let’s start.

---

## 🧩 Problem Statement

You are given a string `s`.

Your task is simple:

👉 Count how many **vowels**  
👉 Count how many **consonants**

And return both counts.

---

## 📌 First Things First — What Are Vowels?

Let’s revise (no ego here 😄):

### 🅰️ Vowels

```plaintext
a e i o u
A E I O U
```

### 🔤 Consonants

All other English letters:

```plaintext
b c d f g h j k l m n p q r s t v w x y z
```

⚠️ Very Important:

* Ignore numbers
    
* Ignore spaces
    
* Ignore symbols
    

Only **letters** matter.

![The Office gif. We zoom in on Steve Carell as Michael Scott, who grins as he gives us finger guns.](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZxZGhybmllb2QwbGNlbHN0Y3dxYnI2Yjd1c2lrYndzZ3FvemNkMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cXblnKXr2BQOaYnTni/200.gif align="left")

---

## 🧪 Examples (Crystal Clear)

### Example 1

**Input**

```plaintext
"hello"
```

Break it slowly:

```plaintext
h → consonant
e → vowel
l → consonant
l → consonant
o → vowel
```

✅ Output

```plaintext
{ vowels: 2, consonants: 3 }
```

---

### Example 2

**Input**

```plaintext
"aEiOu"
```

All are vowels (case doesn’t matter).

✅ Output

```plaintext
{ vowels: 5, consonants: 0 }
```

---

## 🧠 How Should a Beginner Think?

Imagine you have **two boxes** 📦📦

* Box 1 → Vowels
    
* Box 2 → Consonants
    

Now you read the string **one character at a time**:

* If it’s **not a letter** → throw it away ❌
    
* If it’s a **vowel** → vowel box
    
* Else → consonant box
    

That’s it.  
No tricks. No shortcuts.

---

## ✅ JavaScript Solution

```js
const countVowelsConsonants = s => {
  const vowels = new Set('aeiouAEIOU');
  let v = 0, c = 0;

  for (const ch of s) {
    if (/[a-zA-Z]/.test(ch)) {
      vowels.has(ch) ? v++ : c++;
    }
  }

  return { vowels: v, consonants: c };
};
```

Now… don’t panic 😮‍💨  
Let’s **read this code like a story**.

---

## 🪜 Line-by-Line Explanation (Human Mode)

### 1️⃣ Vowel Set — Our VIP List 🎟️

```js
const vowels = new Set('aeiouAEIOU');
```

This is a **VIP list**.  
Only vowels are allowed here.

Why `Set`?

* Fast checking
    
* Easy to read
    
* Clean logic
    

![Ad gif. Sitting in front of an old computer, '90s child actor Brent Rambo gives a robust thumbs up to the camera, his mouth a confident upside-down crescent. His autograph is superimposed onto the scene, giving the impression that his stamp of approval truly matters. ](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHR0eHEzdGk2NDdhdHA2cHUyaXM0dWlwemgxMnRxaDNza2F2a3RzNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/111ebonMs90YLu/giphy.gif align="left")

---

### 2️⃣ Counters Start from Zero

```js
let v = 0, c = 0;
```

* `v` → vowel count
    
* `c` → consonant count
    

Both start empty 🫙

---

### 3️⃣ The Loop — One Character at a Time

```js
for (const ch of s)
```

This means:

> “Pick one character…  
> then move to the next…”

Like counting beads on a string 📿

---

### 4️⃣ Ignore Non-Letters 🚫

```js
if (/[a-zA-Z]/.test(ch))
```

This line filters:

* Numbers ❌
    
* Spaces ❌
    
* Symbols ❌
    

Only English letters pass through the gate 🚪

Example:

```plaintext
"h3! e"
→ only h and e are counted
```

---

### 5️⃣ Vowel or Consonant?

```js
vowels.has(ch) ? v++ : c++;
```

This means:

* If character is in vowel list → increase vowel count
    
* Else → consonant count
    

Simple decision. No confusion.

![Cartoon gif. Jerry from The Tom and Jerry Show laughs hysterically, holding his stomach and then slapping his knee, pointing at something.](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGN1N2thNGRkMXZ2NWhidGFzZzg2ZXdmMDVwcGgzaGFqaGM2YXZ2NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fUYhyT9IjftxrxJXcE/200.gif align="left")

---

### 6️⃣ Final Result 📦

```js
return { vowels: v, consonants: c };
```

We return both counts neatly packed.

---

## 🧪 Full Dry Run (So It Really Clicks)

### Input

```plaintext
"hEllo!"
```

| Character | Is Letter? | Vowel? | V | C |
| --- | --- | --- | --- | --- |
| h | ✅ | ❌ | 0 | 1 |
| E | ✅ | ✅ | 1 | 1 |
| l | ✅ | ❌ | 1 | 2 |
| l | ✅ | ❌ | 1 | 3 |
| o | ✅ | ✅ | 2 | 3 |
| ! | ❌ | — | 2 | 3 |

✅ Output:

```plaintext
{ vowels: 2, consonants: 3 }
```

---

## ⚠️ Tricky Edge Cases (Interview-Ready Section)

### 🧪 Empty String

```plaintext
""
→ { vowels: 0, consonants: 0 }
```

---

### 🧪 Only Symbols

```plaintext
"@#$%"
→ { vowels: 0, consonants: 0 }
```

---

### 🧪 Only Spaces

```plaintext
"     "
→ { vowels: 0, consonants: 0 }
```

---

### 🧪 Mixed Characters

```plaintext
"A1e@I!"
→ { vowels: 3, consonants: 0 }
```

---

### 🧪 Only Consonants

```plaintext
"bcdfg"
→ { vowels: 0, consonants: 5 }
```

---

## ❓ Interview Follow-Ups (Very Common)

### ❓ What about letter **'y'**?

* Sometimes vowel
    
* Sometimes consonant
    

👉 Always ask interviewer first.

---

### ❓ Case-sensitive?

👉 Our solution is **case-insensitive**.

---

### ❓ Accented vowels (á, é)?

👉 Requires Unicode handling (advanced topic).

---

## 🔥 Bonus: More String Warm-Ups (Practice Like a Pro)

### 1️⃣ Count Only Vowels

```plaintext
"education" → 5
```

---

### 2️⃣ Replace Vowels with `*`

```plaintext
"apple" → "*ppl*"
```

---

### 3️⃣ Uppercase Only Vowels

```plaintext
"hEllO" → "HELLO"
```

---

### 4️⃣ Count Letters vs Others

```plaintext
"hi! 123" → { letters: 2, others: 4 }
```

---

## ⏱️ Complexity (Simple Words)

* **Time:** `O(n)` → read once
    
* **Space:** `O(1)` → fixed memory
    

---

## 🧠 One-Line Takeaway

> Read one character,  
> ignore junk,  
> check vowel list,  
> count smartly.

That’s all 💙

---

## 🎉 Final Thoughts

If this felt **easy** — celebrate 🎉  
If this felt **slow** — perfect 🌱

Because strong DSA starts with **clear basics**.

📽️ *GIF idea:* Kid finishing puzzle and clapping

---

📣 **If you liked this post:**

* ❤️ Like
    
* 💬 Comment your doubts
    
* 🔁 Share with your string buddy
    
* ➕ Follow for more **String Warm-Ups 🔥**
    

See you in the next one 👋  
**Happy coding ✨**

![Video gif. A young boy is sitting on a log in the forest and he looks grateful as he gently says, "I just wanted to say thanks, partner."](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3gwcWJidWgycGV2bmxqazJmcDRvcm11NDhwNmpoa2M1eDVoY2JiMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2wJsC23ikJg9xe/200.gif align="left")

---