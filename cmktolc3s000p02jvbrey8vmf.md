---
title: "🧠 Day 20: Search in a Sorted 2D Matrix"
seoTitle: "Efficient Search in 2D Matrix Guide"
seoDescription: "Explore how to solve a problem in a sorted 2D matrix using binary search, explained step-by-step for beginners"
datePublished: Sun Jan 25 2026 11:54:42 GMT+0000 (Coordinated Universal Time)
cuid: cmktolc3s000p02jvbrey8vmf
slug: day-20-search-in-a-sorted-2d-matrix
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769338459461/e7c5ee58-c2a4-4def-8fba-92f9b188611d.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769341974131/ab089570-e91b-4881-89ce-f477454bc3c3.png
tags: js, javascript, web-development, dsa, dsawithricha

---

---

Yesterday, I solved this problem using brute force.  
Today, I’m trying to **understand** the optimized solution—not memorize it.

And honestly?  
At first glance, this code scared me.

So I decided to **pause everything** and trace it like a beginner.

![Friends gif. Jennifer Aniston as Rachel and Lisa Kudrow as Phoebe jump up and down, clapping their hands and screaming with excitement. ](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHJxbDV0MmJvdjU2ZmRocHM4NnowZGFhZXA4em9jdGF0b3RxbDR1biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/31lPv5L3aIvTi/200.gif align="center")

---

## 🧩 The Matrix We’ll Use for Understanding

```plaintext
mat = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9, 10, 11, 12]
]

target = 8
```

Rows = 3  
Cols = 4

---

## 🧠 Step 1: Pretend This Is a 1D Array

I **did not flatten** the matrix in code.  
I only flattened it **in my head**.

```plaintext
Index:  0  1  2  3   4  5  6  7   8  9 10 11
Value: [1, 2, 3, 4 | 5, 6, 7, 8 | 9,10,11,12]
```

This is the key mental shift.

---

## 🧠 Step 2: Binary Search Setup

```js
let left = 0;
let right = rows * cols - 1; // 11
```

So now:

```plaintext
left = 0
right = 11
```

---

## 🔁 WHILE LOOP — Iteration by Iteration

We now enter:

```js
while (left <= right)
```

Let’s go **iteration by iteration**, like a beginner.

---

## 🔄 Iteration 1

### Step A: Find mid

```plaintext
mid = (0 + 11) / 2 = 5
```

---

### Step B: Convert mid → row & column

```js
row = Math.floor(5 / 4) = 1
col = 5 % 4 = 1
```

ASCII view:

```plaintext
Matrix:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],  ← row = 1
  [9,10,11,12]
]

            ↑
          col = 1
```

So:

```plaintext
midValue = mat[1][1] = 6
```

---

### Step C: Compare

```plaintext
6 < 8
```

So target must be on the **right side**.

```js
left = mid + 1 = 6
```

---

## 🔄 Iteration 2

Now:

```plaintext
left = 6
right = 11
```

### Step A: Find mid

```plaintext
mid = (6 + 11) / 2 = 8
```

---

### Step B: Convert mid → row & column

```js
row = Math.floor(8 / 4) = 2
col = 8 % 4 = 0
```

ASCII:

```plaintext
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]  ← row = 2
   ↑
 col = 0
```

So:

```plaintext
midValue = mat[2][0] = 9
```

---

### Step C: Compare

```plaintext
9 > 8
```

So target must be on the **left side**.

```js
right = mid - 1 = 7
```

---

## 🔄 Iteration 3

Now:

```plaintext
left = 6
right = 7
```

### Step A: Find mid

```plaintext
mid = (6 + 7) / 2 = 6
```

---

### Step B: Convert mid → row & column

```js
row = Math.floor(6 / 4) = 1
col = 6 % 4 = 2
```

ASCII:

```plaintext
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],  ← row = 1
        ↑
      col = 2
]
```

```plaintext
midValue = 7
```

---

### Step C: Compare

```plaintext
7 < 8
```

So:

```js
left = mid + 1 = 7
```

---

## 🔄 Iteration 4 (Final)

```plaintext
left = 7
right = 7
```

### Step A: mid

```plaintext
mid = 7
```

---

### Step B: Convert mid

```js
row = Math.floor(7 / 4) = 1
col = 7 % 4 = 3
```

ASCII:

```plaintext
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],  ← row = 1
           ↑
         col = 3
]
```

```plaintext
midValue = 8
```

---

### 🎯 FOUND IT

```js
midValue === target
return true;
```

---

![found gif](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif align="left")

---

## 📊 Dry Run Table (Beginner Gold)

| Iter | Left | Right | Mid | Row | Col | Value | Action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 11 | 5 | 1 | 1 | 6 | Move Right |
| 2 | 6 | 11 | 8 | 2 | 0 | 9 | Move Left |
| 3 | 6 | 7 | 6 | 1 | 2 | 7 | Move Right |
| 4 | 7 | 7 | 7 | 1 | 3 | 8 | Found |

---

## 🧠 Final Beginner Realization

This problem is **not** about matrices.

It’s about:

* Seeing sorted data
    
* Applying binary search
    
* Learning how index math maps back to 2D
    

Once you trace it like this **once**,  
your brain stops panicking.

---

## 💬 One Honest Line Before Ending

If you couldn’t think of this solution on your own —  
**you’re normal**.

Understanding &gt; memorizing.

![TV gif. Greg Miller from Kinda Funny leans back as he points a finger. Text, "Thank You Sir."](https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Ynp5Y211YjJ4Njh1b3hseXBvZjlsY3JkNHN4amV5MGdxcHU0ejRrbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RipfZWzjUDH25euMpM/giphy.gif align="left")