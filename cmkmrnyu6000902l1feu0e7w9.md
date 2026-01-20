---
title: "🧩15: Find the Missing Number in an Array (Beginner-Friendly DSA)"
seoTitle: "Find Missing Number in Array Guide"
seoDescription: "Beginner-friendly guide to find the missing number in an array using simple math and loops. Ideal for DSA novices"
datePublished: Tue Jan 20 2026 15:46:20 GMT+0000 (Coordinated Universal Time)
cuid: cmkmrnyu6000902l1feu0e7w9
slug: 15-find-the-missing-number-in-an-array-beginner-friendly-dsa
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768923543374/3a375f00-8b86-4ae9-9b28-bc8b172a61db.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768923953787/7877ee76-a3ca-4e3b-afb1-baa678098715.png
tags: js, javascript, web-development, dsa, dsa-series, dsawithricha

---

---

## 📌 Problem Statement

You are given:

* A number **N**
    
* An array containing **N-1 numbers**
    
* Numbers are from `1` to `N`
    
* **Exactly one number is missing**
    

Your task is to find the missing number.

---

### Example 1

```plaintext
Input:
N = 5
array = [1, 2, 4, 5]

Output:
3
```

---

### Example 2

```plaintext
Input:
N = 3
array = [1, 3]

Output:
2
```

---

## 🧠 Think Like a Beginner (Very Important)

Before coding, think logically:

> “Agar mujhe pata hai total kitna hona chahiye  
> aur mujhe pata hai abhi kitna hai  
> toh jo difference hai… wahi missing number hai!”

🧠 **Math calculation loading…**  

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2F5NzR1MW1lbWV6NGJlOG03bzU5ZDJqN2s4NHcxcWIzd205NzFkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IylOPCNkiqOgMyA/giphy.gif align="left")

---

## 🧮 Step 1: Find Expected Sum

Formula for sum from `1` to `N`:

```plaintext
N * (N + 1) / 2
```

Example:

```plaintext
N = 5
Expected Sum = 5 * 6 / 2 = 15
```

---

## 🔁 Step 2: Find Actual Sum Using Loop

We now add all array elements using a loop.

🔁  

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Noc2lyZGgycDZxMzZoaGk4MmFvOGc2NnJjc290dW5tazNnYm1qMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26n6WywJyh39n1pBu/giphy.gif align="left")

For `[1,2,4,5]`:

```plaintext
1 + 2 + 4 + 5 = 12
```

---

## 🎯 Step 3: Subtract to Get Missing Number

```plaintext
Missing Number = Expected Sum - Actual Sum
15 - 12 = 3
```

🎯  

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb291d2EyMWZxb2kycjZsZ2h3anI4NWhiejZnNmQ2bWZxYXd5aXl6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/111ebonMs90YLu/giphy.gif align="center")

---

## 🧑‍💻 JavaScript Code (Beginner Friendly)

```js
function findMissingNumber(N, arr) {
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }

  return expectedSum - actualSum;
}
```

---

## 🔍 Loop Breakdown (No Fear Zone)

```js
for (let i = 0; i < arr.length; i++) {
  actualSum = actualSum + arr[i];
}
```

| i | arr\[i\] | actualSum |
| --- | --- | --- |
| 0 | 1 | 1 |
| 1 | 2 | 3 |
| 2 | 4 | 7 |
| 3 | 5 | 12 |

Slow + simple = confidence 📈

---

## ⚠️ Edge Cases (Why This Logic Still Works)

### ✅ Missing number at start

```plaintext
[2,3,4,5] → Missing = 1
```

### ✅ Missing number at end

```plaintext
[1,2,3,4] → Missing = 5
```

### ✅ Only one number missing

This formula works **only because exactly ONE number is missing**.

---

## ⏱️ Time & Space Complexity

* **Time Complexity:** `O(N)` (one loop)
    
* **Space Complexity:** `O(1)` (no extra memory)
    

Efficient + clean ✨

---

## 😅 DSA Fear vs DSA Reality

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3RydGVvajMzYWJocXg1cDlrcWN0YWh6bHR4ZDBkYzZudWU5YzYzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif align="left")

Before DSA: 😨  
After understanding logic: 😎

---

## ❤️ Final Words

DSA is not scary.  
Bad explanations are.

If this made you feel **“Oh, I can do this”** — mission successful 🚀

💬 Comment **“MORE DSA”** and I’ll keep posting beginner-friendly blogs like this.

— **Richa K.** 💻✨

---