---
title: "Day 3: My Journey to Calculating the Average of an Array"
seoTitle: "Calculating Array Average: Day 3 Journey"
seoDescription: "A step-by-step guide to calculating the average of an array, addressing edge cases, and optimizing space and time complexities"
datePublished: Thu Jan 08 2026 13:26:05 GMT+0000 (Coordinated Universal Time)
cuid: cmk5hddxh000a02ju3j0l8gbz
slug: day-3-my-journey-to-calculating-the-average-of-an-array
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1767877890944/436d7ed1-f641-4143-9230-0fe9fbc630d3.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1767878663305/cf56bf43-657e-42ef-8fc0-76fbf4ae81f4.png
tags: web-development, learning, frontend-development, dsa, learning-journey, dsajs

---

---

After working on finding the maximum and minimum elements in an array, I wanted today’s problem to stay in the same comfort zone but still make me think logically.

So for **Day 3 of my DSA journey**, I picked this problem:  
**Calculate the average of all elements in an array.**

![Celebrity gif. Audrey Nethery, a young girl with blonde hair, faces away from us holding a silver microphone. She whips her head around, dramatically pushing her long hair off her face and making a sensual expression.](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTEyYTczYnM3enU3aDl2eGdkaGx0dXB2MXNncm9za2Q1eWdlaTRteSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SWoXEoE1lA0uSQcF1h/200.gif align="center")

At first glance, it sounds very basic. But I’ve learned something important already — even simple problems deserve clear thinking. If I rush here, I’ll struggle later when things actually get tough.

---

## What Made Me Pause

I already knew how to calculate an average in real life. Add everything, divide by total count. Easy.

But while coding, a few questions came to my mind:

* What if the array is empty?
    
* Should I store all values somewhere else?
    
* How do I make sure I’m not overcomplicating it?
    

Earlier, I used to ignore these thoughts. Now, I’m trying to slow down and actually *think* before writing code.

![Panic Think GIF by HannahWitton](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTljNXVvaW45dTFkcWxyMHVzN2ljeHR0NTRqNzFhd21zdno1N3MzaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XQud3NOlJ0AiktEC2J/200.gif align="center")

---

## The Problem Explained in Real Life

Imagine you and your friends went out for dinner, and everyone paid a different amount.

![A Beautiful Mind Math GIF by Rooster Teeth](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdnZXpubXk5ZmlobGcyMXpiaW9nd2lsc3pmbDd0a2NpM2M0ZXdmOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l84TE5FS6aTzEkkyGz/200.gif align="center")

Let’s say the amounts are:  
₹4, ₹8, ₹15, ₹16, ₹23, ₹42

Now someone asks:  
“On average, how much did each person spend?”

What would you do?

1. Add all the amounts together
    
2. Divide the total by the number of people
    

That’s it.  
That’s the same logic we’re applying to an array.

**Input:** `[4, 8, 15, 16, 23, 42]`  
**Output:** `18`

---

## How I Thought About Solving It

I didn’t jump into code immediately. I broke it down.

### Step 1: What if the array is empty?

If there are no numbers, there’s no average. So I return `null`.

---

### Step 2: I need something to store the total

I created a variable called `sum` and started it with `0`.

Why 0?  
Because I’m going to keep adding numbers to it.

---

### Step 3: Loop through the array

I go through each number one by one and add it to `sum`.

---

### Step 4: Calculate the average

Once the loop ends, I divide the total sum by the number of elements in the array.

---

### Step 5: Return the result

That final value is my average.

---

## Let’s Walk Through the Example Slowly

Array: `[4, 8, 15, 16, 23, 42]`

* Start with `sum = 0`
    
* Add 4 → sum = 4
    
* Add 8 → sum = 12
    
* Add 15 → sum = 27
    
* Add 16 → sum = 43
    
* Add 23 → sum = 66
    
* Add 42 → sum = 108
    

Now divide:

* `average = 108 / 6 = 18`
    

Return `18`.

Nothing fancy. Just clean logic.

---

## Why This Approach Works

Because I’m:

* Looking at every number exactly once
    
* Adding them carefully
    
* Dividing by the correct count
    

I’m not skipping anything, and I’m not doing extra work.  
By the time the loop finishes, I have all the information I need.

---

## Time Complexity (In Simple Words)

**O(n)**

This just means:

* If there are 6 numbers, I loop 6 times
    
* If there are 100 numbers, I loop 100 times
    

The time increases as the array size increases — in a straight line.

---

## Space Complexity (Even Simpler)

**O(1)**

I’m only using one extra variable: `sum`.

No matter how big the array is, I’m not creating new arrays or storing extra data.  
So the memory usage stays the same.

```javascript
//3 Calculate  the average of all elements in an array
//Problem Statement:
// Given an array of numbers, write a function that returns the average of all the elements in the array.
//Example:
// Input: [4, 8, 15, 16, 23, 42]
// Output: 18

//Steps to solve the problem:

//Step1 Check if array is empty, if yes return null
//Step2 Initialize a variable sum to 0
//Step3 Loop through each element in the array and add it to sum
//Step4 After the loop ends, calculate average by dividing sum by the length of the array
//Step5 Return the average

//  1. arr.length===0 return null
//  2. sum=0
//  3 i=0 arr[0]=4 sum=0+4=4
//  4 i=1 arr[1]=8 sum=4+8=12
//  5 i=2 arr[2]=15 sum=12+15=27
//  6 i=3 arr[3]=16 sum=27+16=43
//  7 i=4 arr[4]=23 sum=43+23=66
//  8 i=5 arr[5]=42 sum=66+42=108
//  9 average=sum/arr.length=108/6=18
// 10 return average

//  WalkThrough with example:
//  Add 4 to sum=4
//  Add 8 to sum=12
//  Add 15 to sum=27
//  Add 16 to sum=43
//  Add 23 to sum=66
//  Add 42 to sum=108
//  Calculate average=108/6=18
//  return 18

let arr = [4, 8, 15, 16, 23, 42];
const calculateAverage = (arr) => {
    if(arr.length===0) return null;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
const result = calculateAverage(arr);
console.log(result); // Output: 18
//Time Complexity: O(n) - We traverse the array once.
//Space Complexity: O(1) - We use a constant amount of space.
```

---

## The Code (Clean Version)

```javascript
const calculateAverage = (arr) => {
  if (arr.length === 0) return null;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

// Test it
const result = calculateAverage([4, 8, 15, 16, 23, 42]);
console.log(result); // Output: 18
```

---

## What I Learned Today

1. Average problems are simple, but clarity matters.
    
2. Handling edge cases early avoids confusion later.
    
3. Writing logic step by step makes DSA less scary.
    
4. Real-life examples make everything easier to understand.
    

---

## The Takeaway

You don’t need complex logic to solve most beginner DSA problems.  
You need patience, clarity, and consistency.

---

## Let’s Learn Together 💙

If you’re also starting DSA:

* Like this post if it helped you
    
* Follow me for daily DSA learning
    
* Connect with me so we can stay consistent together
    

Learning alone is hard. Learning together makes it easier.

---

![Nabae bye bye](https://i.pinimg.com/originals/f1/54/b6/f154b67bdc127262d0461ba9cbff4ae2.gif align="center")