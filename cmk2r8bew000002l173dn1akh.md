---
title: "Day 1: My Journey to Finding the Maximum Number in an Array"
seoTitle: "Finding the Maximum: Day 1 Journey"
seoDescription: "A beginner's guide to finding the maximum number in an array with a step-by-step explanation of the process and complexities"
datePublished: Tue Jan 06 2026 15:38:46 GMT+0000 (Coordinated Universal Time)
cuid: cmk2r8bew000002l173dn1akh
slug: day-1-my-journey-to-finding-the-maximum-number-in-an-array
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/044AnorPjAU/upload/b34d9798a218268588cc8113aa4e946a.jpeg
tags: web-development, webdev, dsa, learning-journey, dsainjava

---

I'm starting my DSA journey, and honestly, I was looking for something simple enough that I wouldn't feel completely lost, but also something that would make me think a little. Finding the maximum number in an array seemed perfect—it's not scary, and I figured if I can't solve this, I shouldn't even attempt harder problems.

Plus, I remembered doing something similar in basic programming, so I had a tiny bit of confidence going in. That's important when you're just starting out—you need at least *one* win on Day 1.

## What Confused Me Initially

Here's the thing: my first instinct was to use some built-in method like `Math.max()`. I literally thought, "Why would anyone write code for this when JavaScript already has a method?"

But then I realized—that's exactly the problem! In DSA, the point is to understand *how* these things work, not just use them. It's like asking "why write code when I can copy and paste from Stack Overflow?" You learn nothing that way.

The confusion was also about *where to start*. Do I compare all elements to each other? Do I sort the array first? Do I... I don't know. That's what confused me—too many paths, not knowing which one was right.

## The Problem Explained Simply

Imagine you're in a room with your friends, and everyone writes their age on a piece of paper. You need to find out who's the oldest.

You'd pick up the first paper (let's say someone is 22). Then you check the next one—is it higher than 22? Maybe it's 25. Great, so now 25 is the highest. You keep doing this with every paper until you've checked everyone. By the end, you know the maximum age.

That's literally what we're doing with an array. We're comparing numbers one by one until we find the biggest one.

**The input:** `[3, 5, 7, 2, 8]`

**The output:** `8`

That's it. Simple, right?

## Walking Through the Solution

Let me think through this step by step, the way I actually solved it:

**Step 1:** What if someone hands me an empty array? That would be weird, so I should handle that case first. If the array is empty, there's no maximum, so I'll return `null`.

```javascript
if(arr.length===0) return null;
```

**Step 2:** I need a variable to keep track of the highest number I've seen so far. I'll start by assuming the first number in the array is the maximum. This makes sense because I have to start somewhere.

```javascript
let max = arr[0]
```

So with `[3, 5, 7, 2, 8]`, my `max` is initially `3`.

**Step 3:** Now I loop through the rest of the array, starting from index 1 (not 0, because I already used that element).

```javascript
for(let i=1; i<arr.length; i++){
```

**Step 4:** For each number, I ask: "Is this number bigger than my current max?" If yes, I update `max`. If no, I move on.

```javascript
if(arr[i] > max){
    max = arr[i]
}
```

**Step 5:** After checking every single number, I return `max`.

```javascript
return max
```

## Let's Actually Walk Through an Example

Okay, let me trace through this with `[3, 5, 7, 2, 8]`:

* **Start:** `max = 3` (the first element)
    
* **i=1:** Compare 5 with 3. Is 5 &gt; 3? Yes! So `max = 5` now.
    
* **i=2:** Compare 7 with 5. Is 7 &gt; 5? Yes! So `max = 7` now.
    
* **i=3:** Compare 2 with 7. Is 2 &gt; 7? No. `max` stays 7.
    
* **i=4:** Compare 8 with 7. Is 8 &gt; 7? Yes! So `max = 8` now.
    
* **Loop ends:** Return `max`, which is `8`.
    

See? We're just asking the same question over and over: "Is the current number bigger?" Eventually, we've asked it enough times that we know we have the answer.

## Why Does This Actually Work?

Here's the beautiful part: if I check every single number in the array and keep track of the largest one I've seen, then by the end, I *have* to have the overall largest number.

It's impossible not to. Because I've looked at all of them, and I've updated my "maximum" every time I found something bigger. So the final value in `max` is definitely the biggest number in the array.

That's why the algorithm works. It's not magic, it's just logic.

## Time Complexity: The Simple Version

Okay, so everyone talks about "O(n)" and I used to think that was intimidating. But here's the reality:

**Time Complexity: O(n)**

What does O(n) mean? It means the time it takes to run my code depends on the size of the input. If my array has 5 numbers, I make about 5 comparisons. If it has 1000 numbers, I make about 1000 comparisons.

In other words: *the bigger the array, the longer it takes, and the relationship is linear.*

I loop through the array once. Once. That's it. I'm not comparing each element to every other element (that would be slower). I'm just going through the list in a single pass.

So if the array doubles in size, the time it takes doubles. Simple.

## Space Complexity: The Simple Version

**Space Complexity: O(1)**

This is my favorite part because it's so efficient.

Here's what's happening: I'm using one variable `max` to store the answer. No matter how big my array is—100 elements or 1 million elements—I'm still only using that one variable.

I'm not creating a new array, I'm not storing anything extra, I'm not making copies. Just that one `max` variable. So the extra memory I'm using doesn't change based on the input size.

O(1) means: **constant space**. Always the same, no matter what.

## The Code (Clean Version)

Here's the final code, written cleanly:

```javascript
const findMaxInArray = (arr) => {
  // Handle the edge case of an empty array
  if (arr.length === 0) return null;
  
  // Start with the first element as the maximum
  let max = arr[0];
  
  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // If we find a bigger number, update max
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  // Return the maximum number
  return max;
}

// Test it
const result = findMaxInArray([3, 5, 7, 2, 8]);
console.log(result); // Output: 8
```

## What I Learned Today

1. **Even "simple" problems have a process.** I can't just guess my way through DSA. There's a logical flow.
    
2. **Building a habit of checking edge cases is important.** What if the array is empty? These "what if" questions matter.
    
3. **I don't need to optimize for problems like this yet.** But understanding the time and space trade-offs is the foundation for when I work on harder problems.
    
4. **Thinking out loud actually helps.** When I traced through the example by hand, everything clicked. I'm going to do this more often.
    

## The Takeaway

Sometimes the simplest approach is the right approach. Don't overthink it.

---

## Question for You

Have you ever solved a problem in a complicated way when a simple approach would've worked? How did you figure out the simpler way? (I'd love to hear about it!)