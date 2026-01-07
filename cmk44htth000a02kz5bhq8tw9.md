---
title: "Day 2: My Journey to Finding the Minimum Number in an Array"
seoTitle: "Finding the Array's Minimum: A Journey"
seoDescription: "Learn how to find the minimum number in an array with a simple, reliable approach and understand time and space complexity"
datePublished: Wed Jan 07 2026 14:37:51 GMT+0000 (Coordinated Universal Time)
cuid: cmk44htth000a02kz5bhq8tw9
slug: day-2-my-journey-to-finding-the-minimum-number-in-an-array
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Nv-vx3kUR2A/upload/334a3ef654a924ba486dde5ab60ad209.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1767796617013/8f583eba-854f-4821-ab57-c78f777ba28c.jpeg
tags: web-development, webdev, dsa, dsainjava, dsainjavascript

---

---

After solving the “find maximum number in an array” problem yesterday, I didn’t want to jump into something new immediately. I wanted to **stay with the same concept** and really let it sink in.

So today, I picked the opposite version of the same problem:  
**finding the minimum number in an array**.

It sounds almost too simple. But that’s exactly why I chose it. If I can clearly explain this without confusion, I know my basics are getting stronger.

Sometimes repeating a similar problem isn’t boring — it actually builds confidence.

---

## What Confused Me Initially

Honestly?  
My first thought was: *“This is literally the same as finding max, just flipped.”*

And that’s true — but I still paused.

I asked myself:

* Am I missing any edge case?
    
* What if the array has negative numbers?
    
* What if the smallest number is already at the start?
    

I also noticed a small mental trap: when problems feel “too easy,” we tend to rush. That’s when mistakes happen. So I slowed down on purpose and treated this like a fresh problem.

---

## The Problem Explained Simply

Think of this like checking electricity bills in your house.

You start with the first bill amount.  
Then you look at the next one and ask:  
“Is this lower than what I’ve seen so far?”

If yes, that becomes the new minimum.  
If not, you move on.

You keep doing this until you’ve checked all the bills.  
At the end, the smallest bill amount is your answer.

That’s exactly what we’re doing with an array.

**Input:** `[3, 5, 7, 2, 8]`  
**Output:** `2`

---

## Walking Through the Solution

Let me break this down the way I actually thought about it.

### Step 1: Handle the edge case

If someone gives me an empty array, there’s no minimum value. So I return `null`.

```javascript
if (arr.length === 0) return null;
```

---

### Step 2: Assume the first element is the minimum

I have to start somewhere, so I assume the first number is the smallest.

```javascript
let min = arr[0];
```

For `[3, 5, 7, 2, 8]`, `min` starts as `3`.

---

### Step 3: Loop through the rest of the array

I start from index `1` because index `0` is already used.

```javascript
for (let i = 1; i < arr.length; i++) {
```

---

### Step 4: Compare and update

For every element, I ask one simple question:  
“Is this number smaller than my current min?”

If yes, I update `min`.

```javascript
if (arr[i] < min) {
  min = arr[i];
}
```

---

### Step 5: Return the result

Once the loop ends, `min` holds the smallest value.

```javascript
return min;
```

---

## Let’s Actually Walk Through an Example

Using `[3, 5, 7, 2, 8]`:

* Start: `min = 3`
    
* `i = 1`: Compare `5 < 3` → No → min stays `3`
    
* `i = 2`: Compare `7 < 3` → No → min stays `3`
    
* `i = 3`: Compare `2 < 3` → Yes → min becomes `2`
    
* `i = 4`: Compare `8 < 2` → No → min stays `2`
    

Loop ends → return `2`

Same question. Repeated calmly. That’s it.

---

## Why Does This Actually Work?

Because I’m checking **every single element** in the array.

If a smaller number exists, I will eventually encounter it and update my `min`.  
By the time I reach the end, there’s no number left unchecked — so the value stored in `min` must be the smallest.

It’s simple logic, but very reliable.

---

## Time Complexity: The Simple Version

**Time Complexity: O(n)**

Why?  
Because I’m looping through the array **once**.

* 5 elements → 5 checks
    
* 1000 elements → 1000 checks
    

The time grows linearly with the input size. No nested loops. No extra work.

---

## Space Complexity: The Simple Version

**Space Complexity: O(1)**

I’m only using:

* one variable (`min`)
    

No extra arrays. No copies.  
No matter how large the input is, the extra memory stays the same.

---

## The Code (Clean Version)

```javascript
const findMinInArray = (arr) => {
  // Handle the edge case of an empty array
  if (arr.length === 0) return null;

  // Start with the first element as the minimum
  let min = arr[0];

  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // If we find a smaller number, update min
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // Return the minimum number
  return min;
};

// Test it
const result = findMinInArray([3, 5, 7, 2, 8]);
console.log(result); // Output: 2
```

---

## What I Learned Today

1. Similar problems reinforce understanding — repetition isn’t bad.
    
2. Even easy problems deserve slow thinking.
    
3. Time and space complexity become clearer when the logic is clear.
    
4. Tracing values manually helps avoid assumptions.
    

---

## The Takeaway

If you understand how to find the maximum, you already understand how to find the minimum — you just need to flip the comparison.

---

## Question for You

When you practice DSA, do you prefer solving **variations of the same problem** or jumping into something completely new? Why?

---