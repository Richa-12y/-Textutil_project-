---
title: "Day 5: Reversing an Array — When I Finally Stopped Fighting the Logic"
seoTitle: "Embracing Logic: Reversing Array Made Easy"
seoDescription: "Explore a step-by-step guide to manually reverse an array using logical thinking and the two-pointer technique"
datePublished: Sat Jan 10 2026 14:59:38 GMT+0000 (Coordinated Universal Time)
cuid: cmk8fldqd000702jrh7tyhepl
slug: day-5-reversing-an-array-when-i-finally-stopped-fighting-the-logic
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768056108908/d78c4bf7-0e54-4c1b-b047-4ecd68890895.png
tags: web-development, learning, dsa, learn-coding, dailydev, learning-journey, dsajs

---

![Starting something new](https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif align="left")

When I first read *“reverse an array without using the built-in reverse method”*, my brain instantly said:

> “But… why? `.reverse()` already exists 😐”

And then I remembered —  
**DSA is not about shortcuts. It’s about understanding.**

So **Day 5 of my DSA journey** is about reversing an array **manually**, step by step, and actually knowing *why* it works.

---

## The Problem (No Complication)

We’re given an array, and we need to reverse its order.

**Input:**  
`[1, 2, 3, 4, 5]`

**Output:**  
`[5, 4, 3, 2, 1]`

No built-in methods allowed.  
Just logic and patience.

![Rules are rules](https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif align="left")

---

## A Real-Life Example That Made Sense to Me

Think about folding a dupatta or scarf.

You hold **one end in your left hand**,  
the **other end in your right hand**,  
and you bring them toward the center.

You don’t start folding randomly in the middle.

That’s exactly how array reversal works.

---

## How I Started Thinking (Instead of Panicking)

I asked myself three simple questions:

* Where do I start? → from the **first element**
    
* Where do I end? → at the **last element**
    
* What do I do in between? → **swap and move inward**
    

That’s it. No overthinking.

---

## Step-by-Step (My Actual Thought Process)

### Step 1: Use two pointers

One pointer starts from the beginning,  
one from the end.

```javascript
let left = 0;
let right = arr.length - 1;
```

---

### Step 2: Swap while they haven’t crossed

As long as `left < right`, keep swapping.

![Brain loading…](https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif align="left")

---

### Step 3: Move both pointers

After each swap:

* `left++`
    
* `right--`
    

Slowly, both move toward the center.

---

### Step 4: Stop at the middle

Once both pointers meet, the job is done.

---

## Walking Through the Example Slowly

Array: `[1, 2, 3, 4, 5]`

* `left = 0`, `right = 4`  
    swap → `[5, 2, 3, 4, 1]`
    
* `left = 1`, `right = 3`  
    swap → `[5, 4, 3, 2, 1]`
    
* `left = 2`, `right = 2`  
    stop
    

Clean. Logical. No confusion.

![Finally works](https://media.giphy.com/media/111ebonMs90YLu/giphy.gif align="left")

---

```javascript
// Reverse an array (without using the built-in reverse method)
//Problem:Reverse the orders of an array without using the built-in reverse method.
//Example Input:[1,2,3,4,5]
//Example Output:[5,4,3,2,1]
//Algorithm:Create new arrayand fill from end to beginning,OR use two-pointer technique to swap elements.


//Step to solve the problem:
//Step1 Initialize two pointers, one at the start (left) and one at the end (right) of the array.
//Step2 While left pointer is less than right pointer, do the following:
//Step3 Swap the elements at the left and right pointers.
//Step4 Move the left pointer one step to the right and the right pointer one step to the left.
//Step5 Repeat until the left pointer is no longer less than the
// right pointer.

//1. left=0,right=4 arr=[1,2,3,4,5] swap arr[0] and arr[4] -> arr=[5,2,3,4,1]
//2. left=1,right=3 arr=[5,2,3,4,1] swap arr[1] and arr[3] -> arr=[5,4,3,2,1]
//3. left=2,right=2 stop as left is not less than right
//4. return arr
//handle edge cases like empty array or single element array.
let arr = [1, 2, 3, 4, 5];
const reverseArray = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
};
const reversedArr = reverseArray(arr);
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]


//Time Complexity: O(n) - We traverse half of the array.
//Space Complexity: O(1) - We are reversing the array in place without using extra space.


//2nd Approach: Using a new array
/*
let arr = [1, 2, 3, 4, 5];
const reverseArrayNew = (arr) => {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
};
const reversedArr = reverseArrayNew(arr);
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
//Time Complexity: O(n) - We traverse the array once.
//Space Complexity: O(n) - We are using an extra array to store the reversed elements.
*/
```

## The Code (Two-Pointer Technique)

```javascript
let arr = [1, 2, 3, 4, 5];

const reverseArray = (arr) => {
if (!Array.isArray(arr) || arr.length === 0) {
        return [];
    }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

console.log(reverseArray(arr)); // [5, 4, 3, 2, 1]
```

---

## Why This Approach Feels Right

Because:

* No extra array is created
    
* No memory waste
    
* Everything happens in place
    

It feels neat — and it is.

---

## Time Complexity (Simple Words)

**O(n)**  
More elements → more swaps.  
Straightforward.

---

## Space Complexity (Even Better)

**O(1)**  
We’re not storing anything extra.

![Efficiency level: unlocked](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif align="left")

---

## What I Learned Today

1. The two-pointer technique is common in data structures and algorithms. Remember to handle edge cases.
    
2. Built-in methods hide important thinking.
    
3. Slow learning sticks longer.
    

---

## The Takeaway

DSA problems aren’t hard.  
We just rush too fast.

Once I slowed down and imagined the process,  
reversing an array felt… natural.

---

## Let’s Learn Together 🌱

If this blog helped you:

* 👍 Like it
    
* 🔔 Follow me for **daily DSA from basics**
    
* 🤝 Connect with me — let’s grow consistently
    

No pressure.  
Just progress.

![Bye for now](https://media.giphy.com/media/xUPGcyi4YxcZp8dWZq/giphy.gif align="left")

---