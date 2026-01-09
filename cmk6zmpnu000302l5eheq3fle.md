---
title: "Day 4: Understanding Logic: How to Separate Even and Odd Numbers"
seoTitle: "Even vs. Odd Numbers: A Logical Approach"
seoDescription: "Learn how to separate even and odd numbers into arrays with clear logic, clean code, and DSA simplicity. Perfect for beginners!"
datePublished: Fri Jan 09 2026 14:45:00 GMT+0000 (Coordinated Universal Time)
cuid: cmk6zmpnu000302l5eheq3fle
slug: day-4-understanding-logic-how-to-separate-even-and-odd-numbers
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1767969058328/943eb035-3a8a-4dc5-b6a0-cfdd9dbea368.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1767969442180/9b59e864-fa28-4359-87fe-c237ce3edaad.png
tags: javascript, web-development, webdev, learning, dsa, learning-journey

---

![Starting DSA be like](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3F1eXBpM3FmbW1yY3F1aG5pb2F0Zmt0ZTVpOHJjZ2d5NXVnNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vRfNA1p0rvhMSvS/giphy.gif align="left")

When I was in school, teachers used to ask us to stand in two different lines — one for boys and one for girls. No confusion. No overlap. Everyone had a clear place to go.

While solving today’s DSA problem, that memory suddenly clicked.

**Day 4 of my DSA journey** is about doing something very similar —  
**separating even and odd numbers into two different arrays.**

Simple idea. Powerful thinking.

---

## Why I Picked This Problem Today

After working with maximum, minimum, and average, I wanted a problem where:

* I make decisions inside a loop
    
* I create and manage multiple outputs
    
* I practice clean conditional logic
    

This problem does all three — without being scary.

![Choosing simple problems wisely](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2J1ZGlvZ2FwbHFiZWh1dXR6bDhzOXp6bDVsZ3l6ZzZtcHh2aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKTDn976rzVgky4/giphy.gif align="left")

---

## Understanding the Problem Without Code

Let’s imagine a real-life situation.

You’re organizing a sports event, and participants are wearing jersey numbers.  
Someone tells you:

> “Put all players with **even numbers** on the left side  
> and players with **odd numbers** on the right side.”

You don’t calculate anything fancy.  
You just look at each number and decide where it belongs.

That’s exactly what we’re doing here.

**Input:** `[1, 2, 3, 4, 5, 6]`  
**Output:**

* Even → `[2, 4, 6]`
    
* Odd → `[1, 3, 5]`
    

![This logic actually makes sense](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJxZ2dqbzZ4NXJ6bDFtN3l3NHQ4dGtzZ2Z4eTJpZHFjM2I5NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEYEpIngcmXlHetDqz/giphy.gif align="left")

---

## How I Started Thinking About the Solution

Instead of jumping into code, I asked myself:

* Where will I store even numbers?
    
* Where will I store odd numbers?
    
* How do I decide if a number is even or odd?
    

Once these answers were clear, the solution almost wrote itself.

---

## Step-by-Step Thinking (My Actual Thought Process)

### Step 1: I need two empty containers

One for even numbers, one for odd numbers.

```javascript
let evenNumbers = [];
let oddNumbers = [];
```

---

### Step 2: Look at each number one by one

I used a loop to check every element in the array.

---

### Step 3: Decide where the number belongs

If a number is divisible by 2, it’s even.  
Otherwise, it’s odd.

![DSA decisions be like](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZqM3k3c3V6aTR5bHFyNmx0N2dyd29kNnZxY3p6bXAwZ2xwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

### Step 4: Put the number in the right place

Even goes into the even array.  
Odd goes into the odd array.

---

### Step 5: Return both results

Once the loop ends, both arrays are ready.

---

## Walking Through an Example Slowly

Array: `[1, 2, 3, 4, 5, 6]`

* Start with both arrays empty
    
* `1` → odd → `[1]`
    
* `2` → even → `[2]`
    
* `3` → odd → `[1, 3]`
    
* `4` → even → `[2, 4]`
    
* `5` → odd → `[1, 3, 5]`
    
* `6` → even → `[2, 4, 6]`
    

Every number finds its place. No drama.

![Sorting complete successfully](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNtY2VjZ3BvZTZ0YjE5M3J1eDk4b2t3dW1zNnA2Z2NmbzZrNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYC0LajbaPoEADu/giphy.gif align="left")

---

## Why This Logic Works Every Time

Because:

* Every number is **either even or odd**
    
* We check each number once
    
* We immediately decide and store it
    

No confusion. No extra steps.

---

## Time Complexity (In Normal Words)

**O(n)**  
More numbers → more checks.  
Simple and predictable.

---

## Space Complexity (Honest Explanation)

**O(n)**  
We’re creating new arrays to store results — and that’s totally fine here.

![Complexity but make it chill](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2w0aGR3Mndjb2d1bWtsdW8yZ2N4N3Jsd2M4bDNkMXk2ZzE1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0IylOPCNkiqOgMyA/giphy.gif align="left")

```javascript
// Find the Even and Odd Numbers in an Array
// Given an array of integers, separate the even and odd numbers into two different arrays.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: Even Numbers: [2, 4, 6], Odd Numbers: [1, 3, 5]


// Steps to solve the problem:
// Step1 Initialize two empty arrays, one for even numbers and one for odd numbers
// Step2 Loop through each element in the input array
// Step3 Check if the current element is even or odd using the modulus operator
// Step4 If it's even, push it to the even array; if it's odd, push it to the odd array
// Step5 After the loop ends, return both arrays

//  1. evenNumbers = []
//  2. oddNumbers = []
//  3. i=0 arr[0]=1 oddNumbers=[1]
//  4. i=1 arr[1]=2 evenNumbers=[2]
//  5. i=2 arr[2]=3 oddNumbers=[1,3]
//  6. i=3 arr[3]=4 evenNumbers=[2,4]
//  7. i=4 arr[4]=5 oddNumbers=[1,3,5]
//  8. i=5 arr[5]=6 evenNumbers=[2,4,6]
//  9. return evenNumbers and oddNumbers

// WalkThrough with example:
// Start with empty evenNumbers and oddNumbers arrays
// Check 1: odd, add to oddNumbers -> [1]
// Check 2: even, add to evenNumbers -> [2]
// Check 3: odd, add to oddNumbers -> [1, 3]
// Check 4: even, add to evenNumbers -> [2, 4]
// Check 5: odd, add to oddNumbers -> [1, 3, 5]
// Check 6: even, add to evenNumbers -> [2, 4, 6]
// Return both arrays


let arr = [1, 2, 3, 4, 5, 6];
const separateEvenOdd = (arr) => {
  if(arr.length===0) return null
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }
    return {even: evenNumbers, odd: oddNumbers };
};

const result = separateEvenOdd(arr);
console.log("Even Numbers:", result.even); // Output: Even Numbers: [2, 4, 6]
console.log("Odd Numbers:", result.odd);   // Output: Odd Numbers: [1, 3, 5]

// Time Complexity: O(n) - We traverse the array once.
// Space Complexity: O(n) - In the worst case, all numbers could be even or odd, requiring O(n) space for one of the arrays.
```

---

## The Code (Clean and Simple)

```javascript
const separateEvenOdd = (arr) => {
  if(arr.length===0) return null
  let evenNumbers = [];
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    } else {
      oddNumbers.push(arr[i]);
    }
  }

  return { even: evenNumbers, odd: oddNumbers };
};

// Test it
const result = separateEvenOdd([1, 2, 3, 4, 5, 6]);
console.log("Even Numbers:", result.even);
console.log("Odd Numbers:", result.odd);
```

---

## What I Learned Today

1. Clear conditions make logic easier.
    
2. Sorting ideas exist everywhere in real life.
    
3. DSA becomes simpler when we stop overthinking.
    
4. Consistency matters more than difficulty.
    

---

## The Takeaway

DSA isn’t scary.  
Sometimes it’s just about **putting things where they belong**.

---

## Let’s Learn Together 🌱

If this blog helped you:

* 👍 Like it
    
* 🔔 Follow me for daily DSA posts
    
* 🤝 Connect with me if you’re learning from basics
    

We don’t need to be perfect.  
We just need to be consistent.

![Bye bye see you tomorrow](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDB4dGl3cHBpYzY5YmNsbDJpNWx0bGg2eWc5cTdnczF3N3h4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif align="left")

---