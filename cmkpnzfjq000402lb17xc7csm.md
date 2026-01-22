---
title: "Day 17 – Union of Two Arrays (Beginner DSA Journal)"
seoTitle: "Union of Two Arrays Explained"
seoDescription: "Learn how to find the union of two arrays using beginner-friendly step-by-step guidance with Set in JavaScript. Suitable for novice programmers"
datePublished: Thu Jan 22 2026 16:26:35 GMT+0000 (Coordinated Universal Time)
cuid: cmkpnzfjq000402lb17xc7csm
slug: day-17-union-of-two-arrays-beginner-dsa-journal
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769098164147/6f59c2bc-03e4-4e52-9fd4-d46e42db3bea.png
tags: js, javascript, web-development, learning, dsa, learning-journey, dsa-series, dsawithricha

---

I’m going to be very honest today.

When I first saw this problem, my brain froze for a few seconds. Not because it was tough, but because **I didn’t understand what the problem actually wanted**.

So in this blog, I’ll explain it **the way I finally understood it**, with a real-life example, slow thinking, and clean code. If you are a beginner, this one is for you 🤍

---

## First, let’s forget code for a minute

### Real-life example (this helped me a lot)

Imagine this:

* You have a **contact list** in your phone (arr1)
    
* Your friend has another **contact list** (arr2)
    

Now you want to create **one final contact list**:

* No duplicate contacts
    
* Everyone should appear only once
    
* Sorted properly
    

That final list is called **UNION**.

That’s it. That’s the problem.

---

## Now coming back to arrays

### Example 1

arr1 = \[1, 2, 3, 4, 5\]  
arr2 = \[2, 3, 4, 4, 5\]

Let’s think like a human:

* 2,3,4,5 → present in both arrays → common
    
* 1 → present only in arr1 → distinct
    
* arr2 has no extra unique element
    

So final union = \[1,2,3,4,5\]

---

## Beginner confusion I had

My first thought was:

> “Should I compare every element of arr1 with arr2?”

That would mean **nested loops**, more confusion, more bugs.

Then I asked myself:

> “Is there a way to just *remember* what I have already seen?”

And that’s where **Map** comes in.

---

## Is Map the BEST approach? (honest answer)

Short answer: **No. Map is good, but not the best for beginners or for this exact problem.**

Let me explain honestly.

Using Map works, but:

* We don’t actually need frequencies
    
* We only care about **unique elements**
    
* Counting adds unnecessary thinking for a beginner
    

So yes, Map solves the problem, but it is **slightly over-engineered**.

There is a **cleaner, more natural approach**.

---

## The BEST approach for this problem (Set – real beginner friendly)

When I rethought this problem calmly, I realized something:

> UNION means **unique elements**.

And JavaScript already gives us a tool for that.

### Enter: Set ✅

A Set:

* Stores only unique values
    
* Automatically removes duplicates
    
* Matches the meaning of UNION perfectly
    

So instead of *counting*, we just *collect*.

---

## Step-by-step thinking with Set (very slow)

### Step 1: Create an empty Set

Think of Set like a basket.  
If you try to put the same item twice, it ignores it.

---

### Step 2: Loop through arr1

Take each element and add it to the Set.

Example:  
arr1 = \[1,2,3,4,5\]

Set after arr1:  
{1,2,3,4,5}

![harry potter GIF](https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YXgxZmxsOGt2ODNnbW9kbnYzMmRtdjVpeW10cDY5ZWJ4b2VuYTJkMCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/fxwcsRbq9RTdPCjd5y/200.gif align="center")

---

### Step 3: Loop through arr2

Now do the same.

arr2 = \[2,3,4,4,5\]

Set after arr2:  
{1,2,3,4,5}

Notice:

* Duplicate 4 is ignored
    
* No extra logic needed
    

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGpucjNmMjE2eTZvNmFoNGE1cjh6YzJ6Zzg4MnBtbnl2NnBiZTRibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlBO7eyXzSZkJri/giphy.gif align="left")

### Step 4: Convert Set to Array

Because Set is not index-based.

---

### Step 5: Sort the array

![TV gif. Trevor Noah holds his bunched fists under his chin in excitement and says "The suspense is killing me!"](https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aXZsa2d2NXF1Z290NWVhdHlhdTJ6amdkNzY3YnlyZzB2YWljZXA2dSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/SWVzkIlHdEckF81gnA/giphy.gif align="left")

Union must be in ascending order.

That’s it.

I don’t care about the **values** anymore.

The **keys of the map ARE the UNION**.

---

## JavaScript Code (BEST & CLEAN – Set approach)

Why this is better:

* No frequency logic
    
* No conditions
    
* Very easy to read
    
* Matches the problem meaning exactly
    

```javascript

// Optimal Approach:
// 1. Use a Set to store unique elements from both arrays.
// 2. Loop through both arrays and add each element to the Set.
// 3. Convert the Set back to an array.
// 4. Sort the array in ascending order.
// 5. Return the sorted array.


const unionOfArrays = (arr1, arr2) => {
  const unionSet = new Set();

  // add elements from first array
  for (let i = 0; i < arr1.length; i++) {
    unionSet.add(arr1[i]);
  }

  // add elements from second array
  for (let i = 0; i < arr2.length; i++) {
    unionSet.add(arr2[i]);
  }

  // convert set to array
  const unionArray = Array.from(unionSet);

  // sort in ascending order
  unionArray.sort((a, b) => a - b);

  return unionArray;
}
// Example usage:
const arr1 = [1, 2, 2, 3];
const arr2 = [2, 3, 4, 5];
const result = unionOfArrays(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 4, 5]




// Example usage:
// const arr1 = [1, 2, 2, 3];
// const arr2 = [2, 3, 4, 5];
// const result = unionOfArrays(arr1, arr2);
// console.log(result); // Output: [1, 2, 3, 4, 5]

//please expain the code with input and output as well
// lik step by step walkthrough
// i=0; 0<4;->true 
// unionSet = {}
// unionSet = {1}
// i=1; 1<4;->true
// unionSet = {1}

// unionSet = {1,2}
// i=2; 2<4;->true
// unionSet = {1,2}
// unionSet = {1,2}  (2 is already present so not added)

// i=3; 3<4;->true
// unionSet = {1,2}
// unionSet = {1,2,3}

// i=4; 4<4;->false


// Now adding elements from second array
// i=0; 0<4;->true
// unionSet = {1,2,3}
// unionSet = {1,2,3} (2 is already present so not added)

// i=1; 1<4;->true
// unionSet = {1,2,3}
// unionSet = {1,2,3} (3 is already present so not added)

// i=2; 2<4;->true
// unionSet = {1,2,3}
// unionSet = {1,2,3,4}
// i=3; 3<4;->true

// unionSet = {1,2,3,4}
// unionSet = {1,2,3,4,5}
// i=4; 4<4;->false

// Converting set to array
// unionArray = [1,2,3,4,5]

// Sorting array in ascending order
// unionArray = [1,2,3,4,5]

// Returning the result
// Output: [1,2,3,4,5]
```

---

---

## Edge cases (don’t skip this)

1. One array empty  
    arr1 = \[\]  
    arr2 = \[1,2\]  
    Union = \[1,2\]
    
2. Both arrays empty  
    Union = \[\]
    
3. All duplicates  
    arr1 = \[1,1,1\]  
    arr2 = \[1,1\]  
    Union = \[1\]
    

All handled ✔️

---

## Time & Space (simple words)

* We loop through both arrays once → fast
    
* Sorting unique elements → manageable
    

Time: O(n + m)  
Space: O(k)

k = unique elements

---

## Day 17 Reflection

This problem taught me something important:

> If you can explain a problem without code,  
> you can solve it with code.

DSA is not about speed.  
It’s about **clear thinking**.

If this helped you even a little — Day 17 is worth it 🤍

See you on Day 18 🚀