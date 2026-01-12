---
title: "Day 7: Finding the Second Largest Element — How Interviewers Actually Expect You to Think"
seoTitle: "Second Largest Element: Interview Guide"
seoDescription: "Discover how to find the second largest element in an array efficiently, focusing on interview expectations and problem-solving strategies"
datePublished: Mon Jan 12 2026 14:56:21 GMT+0000 (Coordinated Universal Time)
cuid: cmkbacvph000102l25evy5arv
slug: day-7-finding-the-second-largest-element-how-interviewers-actually-expect-you-to-think
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768229202333/11edd242-dbc6-46fe-902c-cbfb48171906.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1768229705887/b05fad1d-8a64-4883-afd8-cae4878b4c11.png
tags: javascript, web-development, learning, dsa, learn-coding, learning-journey, dsa-series

---

**Problem:**  
**Find the second largest element in an array.**

**Example:**  
Input: `[1, 5, 2, 9, 3]`  
Output: `5`

---

![deep breath before DSA](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFqNWR2YW5tZWx1emR5b2QzYWR5Z29uY2p6YWRmN3V5bXh1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Zt6ML6BklcajjsA/giphy.gif align="left")

---

## 🧠 Step 1: Think Like an Interviewer (Not a Coder)

If I’m sitting in a interview, **I don’t start coding**.

I first ask:

> “Before I proceed, can I confirm the edge cases?”

Interviewers LOVE this.

---

## ❓ Questions I Should Ask the Interviewer

These are **real interview questions**, not theory.

1. **Can the array be empty?**
    
2. **Can it have only one element?**
    
3. **Can numbers be negative?**
    
4. **What about duplicates?**
    
    * Example: `[5, 5, 5]`
        
5. **Do you want the second largest *distinct* number?**
    
6. **Should I return a number or something like** `null` / `-1` if not possible?
    

Even if the interviewer says:

> “Assume a valid array”

Still — **thinking this way matters**.

---

![interviewer watching your thinking](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXQxOXo1cWxsdmF6NXRnZ3d1Ym9jbnh3NnRkNnA0OWZxOXdxNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlHFRbmaZtBRhXG/giphy.gif align="left")

---

## 🧪 Step 2: Write Test Cases BEFORE Code

This saves you from silly mistakes.

### Normal Case

```js
[1, 5, 2, 9, 3] → 5
```

### Edge Cases

```js
[] → null
[5] → null
[5, 5, 5] → null
[-10, -3, -20] → -10
[10, 9] → 9
```

If I can’t explain these, **I’m not ready to code**.

---

## 🧠 Step 3: Human Thinking (Not Algorithm Names)

Forget fancy words.

I tell myself:

> “I just need to track the **biggest** and the **second biggest** number while walking through the array once.”

That’s it.

No sorting yet.  
No extra arrays.  
Just comparison.

---

![light bulb moment](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHd6aG80ZG42Y3d5Y3JsbWJ6aTRoZ2s2Z2xtZ3Zvd3Z2cDg0NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

## 🧩 Step 4: Decide Variables (Beginner Confusion Explained)

This part confused me earlier too.

### ❌ What NOT to do

* Don’t store arrays when you need numbers
    
* Don’t name variables randomly (`a`, `b`, `temp123`)
    
* Don’t mix objects when logic is simple
    

### ✅ What We Actually Need

We only need **two numbers**:

* `largest`
    
* `secondLargest`
    

So variables = **numbers**, not arrays or objects.

---

## 🧠 Step 5: Dry Run (This Is Interview Gold)

Array: `[1, 5, 2, 9, 3]`

---

## Problem in simple words

We have this list of numbers:

```plaintext
[1, 5, 2, 9, 3]
```

We want:

* the **largest**
    
* the **second largest**
    

But we are **not sorting**.  
We are just **looking once**.

---

## How I explain before starting (interview mindset)

> “I’ll keep track of two values while scanning the array:  
> one for the largest so far,  
> and one for the second largest so far.”

At the beginning:

* I haven’t seen any number yet.
    

So mentally I say:

```plaintext
Largest → nothing yet
Second Largest → nothing yet
```

---

## Now I scan the array **one number at a time**

### 🟢 First number: `1`

This is the **first number I see**.

So obviously:

* it becomes the largest
    
* second largest is still empty
    

```plaintext
Largest → 1
Second Largest → —
```

Human thought:

> “1 is the only number I’ve seen, so it’s the biggest.”

---

### 🟢 Next number: `5`

Compare with largest (`1`):

* `5` is bigger than `1`
    

So:

* `5` becomes the new largest
    
* the old largest (`1`) becomes second largest
    

```plaintext
Largest → 5
Second Largest → 1
```

Human thought:

> “5 beats 1, so 5 is first, 1 goes to second.”

---

### 🟢 Next number: `2`

Compare with largest (`5`):

* `2` is smaller than `5`
    

Compare with second largest (`1`):

* `2` is bigger than `1`
    

So:

* largest stays the same
    
* second largest becomes `2`
    

```plaintext
Largest → 5
Second Largest → 2
```

Human thought:

> “2 can’t beat 5, but it beats 1,  
> so it takes second place.”

---

### 🟢 Next number: `9`

Compare with largest (`5`):

* `9` is bigger
    

So:

* `9` becomes the new largest
    
* old largest (`5`) moves to second largest
    

```plaintext
Largest → 9
Second Largest → 5
```

Human thought:

> “9 beats everyone.  
> 5 is now second best.”

---

### 🟢 Last number: `3`

Compare with largest (`9`):

* smaller
    

Compare with second largest (`5`):

* smaller
    

So:

* ignore it
    

```plaintext
Largest → 9
Second Largest → 5
```

Human thought:

> “3 is too small to matter.”

---

## Final Result (no code, just logic)

```plaintext
Second Largest = 5
```

---

## 🧠 The mental rule (very important)

Every number you see will fall into **one of these three cases**:

1️⃣ Bigger than largest → becomes largest  
2️⃣ Smaller than largest but bigger than second → becomes second largest  
3️⃣ Smaller than both → ignore

If you remember this rule, you’ll never get confused again.

---

## How to explain this in an interview (one-liner)

> “I scan the array once, and for each number I decide whether it  
> replaces the largest, the second largest, or is ignored.”

| Current | What happened | Largest | Second Largest |
| --- | --- | --- | --- |

<table><tbody><tr><td colspan="1" rowspan="1"><p>1</p></td><td colspan="1" rowspan="1"><p>First number → biggest</p></td><td colspan="1" rowspan="1"><p>1</p></td><td colspan="1" rowspan="1"><p>—</p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1"><p>5</p></td><td colspan="1" rowspan="1"><p>Bigger than 1</p></td><td colspan="1" rowspan="1"><p>5</p></td><td colspan="1" rowspan="1"><p>1</p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1"><p>2</p></td><td colspan="1" rowspan="1"><p>Between 5 and 1</p></td><td colspan="1" rowspan="1"><p>5</p></td><td colspan="1" rowspan="1"><p>2</p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1"><p>9</p></td><td colspan="1" rowspan="1"><p>Bigger than all</p></td><td colspan="1" rowspan="1"><p>9</p></td><td colspan="1" rowspan="1"><p>5</p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1"><p>3</p></td><td colspan="1" rowspan="1"><p>Smaller than both</p></td><td colspan="1" rowspan="1"><p>9</p></td><td colspan="1" rowspan="1"><p>5</p></td></tr></tbody></table>

---

![dry run success](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3B3czh5amx6ZTh3MHF5a3o3dXN5NXR6a3pndHF5NGN4bHZ1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif align="left")

---

## 💻 Step 6: Code (Clean, Interview-Ready)

```javascript
const findSecondLargest = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
};

// Test
console.log(findSecondLargest([1, 5, 2, 9, 3])); // 5
```

---

## ⏱ Time & Space Complexity (Explain Like a Human)

### Time Complexity

**O(n)**  
We walk through the array **once**.

### Space Complexity

**O(1)**  
We only store two numbers — no extra memory.

---

![complexity but calm](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3U5M3dzN3d6aGJtZzJ0bDJrcDg4YTVtMHRkN29sM2g5bHdkZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0IylOPCNkiqOgMyA/giphy.gif align="left")

---

## 🧠 What Interviewers Really Check Here

They are NOT checking:  
❌ how fast you type  
❌ fancy JS tricks

They ARE checking:  
✅ edge case awareness  
✅ clarity of thought  
✅ ability to explain  
✅ calm problem-solving

---

## 📌 One Small Alternate Thought (Sorting — Why Not)

Yes, sorting works:

```js
arr.sort((a,b) => b-a)[1]
```

But interviewers will ask:

> “Why are you sorting when you don’t need to?”

Sorting = **O(n log n)**  
Our approach = **O(n)**

So we choose wisely.

---

## 🌱 Final Takeaway

This problem taught me:

* Always ask about edge cases
    
* Think before code
    
* Variables should match the problem
    
* Explanation matters more than syntax
    

---

![bye see you tomorrow](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXE5dDdlYmM0dHllZGNjdW9jMHRqZHFjZTR2cmV1ZDB0bG1xYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif align="left")

---