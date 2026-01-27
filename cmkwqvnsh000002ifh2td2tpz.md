---
title: "📘 Day 22: Leaders in an Array"
seoTitle: "Identifying Array Leaders"
seoDescription: "Discover the step-by-step journey to understanding "Leaders in an Array", from initial confusion to mastering the optimal approach"
datePublished: Tue Jan 27 2026 15:22:01 GMT+0000 (Coordinated Universal Time)
cuid: cmkwqvnsh000002ifh2td2tpz
slug: day-22-leaders-in-an-array
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769526775106/d8b7b4dc-5eed-4019-9526-4df8e74bb751.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769527300193/dad9ab6f-e964-42f3-999f-c73a03b0e110.jpeg
tags: js, javascript, learning, hashnode, dsa, learning-journey, dsa-series, dsawithricha

---

---

*(The problem that confused me… until it didn’t)*

I’ll be very honest today.

When I first saw **“Leaders in an Array”**, my brain went completely blank.  
I didn’t even understand **what the problem was asking**, forget about solving it.

I googled.  
I watched videos.  
I asked AI.

Most explanations jumped directly to the **optimal approach**, and I was like:

> “Wait… but how did you even THINK of this?”

So today’s blog is not about being smart.  
It’s about **learning step by step**, exactly the way I did — as a beginner who is trying to upskill daily.

This is **Day 22**, and yes, it felt difficult.

![Animated GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXgzeXc4aWZ0MnVmdGowcGFidWt3YW1teHZucTBsMnBzanpnbGFkNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/RYncCb9oPLtW8/giphy.gif align="center")

---

## 🔍 First: What is the problem ACTUALLY saying?

### Problem statement (in simple words)

You are given an array.  
You need to find all **leaders** in that array.

### ❓ What is a leader?

An element is called a **leader** if:

> **It is greater than all the elements to its right side**

That’s it.  
No sorting.  
No rearranging.  
Only **look at the right side**.

![Great Job GIF by MOODMAN](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGM1aG1zdGp0MG5uOHZsb2lxdGtqN254NWxlNHk2eWMwMmVhNWdzMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VhWVAa7rUtT3xKX6Cd/200.gif align="center")

---

## 🧠 Let’s understand with an example (slowly)

### Example 1

```plaintext
arr = [4, 7, 1, 0]
```

We check each element and ask:

> “Is there any element on my right that is bigger than me?”

---

### Step-by-step thinking

#### Check 4

```plaintext
4 | 7 1 0
```

❌ 7 is bigger → NOT a leader

#### Check 7

```plaintext
4 7 | 1 0
```

✅ 7 is bigger than 1 and 0 → LEADER

#### Check 1

```plaintext
4 7 1 | 0
```

✅ 1 is bigger than 0 → LEADER

#### Check 0

```plaintext
4 7 1 0 |
```

✅ Last element → ALWAYS a leader

---

### ✅ Output

```plaintext
7 1 0
```

At this point, I **finally understood the problem**.  
That itself took time — and that’s okay.

---

## 🪜 Approach 1: Brute Force (Beginner-Friendly Way)

![Celebrity gif. Rihanna in the music video for "Work" leaning her head back and singing the chorus, "work work work work work."](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGM1aG1zdGp0MG5uOHZsb2lxdGtqN254NWxlNHk2eWMwMmVhNWdzMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/inVvfuomoD31K/200.gif align="center")

This is the **first approach I understood**.  
It’s slow, but it makes sense.

### 💭 Brute force idea (plain English)

For every element:

* Look at all elements to its right
    
* If **none** of them is bigger → it’s a leader
    

Yes, it’s repetitive.  
Yes, it’s slow.  
But as a beginner, this helps build clarity.

![Ringthebellsoftware work woman office working GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGM1aG1zdGp0MG5uOHZsb2lxdGtqN254NWxlNHk2eWMwMmVhNWdzMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9rJWu5pKI2Gn02ENjd/giphy.gif align="left")

---

## 🧾 Pseudocode (Plain English – No coding)

```plaintext
For each element in the array:
    Assume it is a leader

    For every element to the right of it:
        If any element is greater:
            Mark it as NOT a leader
            Stop checking

    If it is still a leader:
        Add it to the result
```

That’s literally it.

---

## 🧠 Visual (How brute force thinks)

```plaintext
[10, 22, 12, 3, 0, 6]

10 → check 22, 12, 3, 0, 6 ❌
22 → check 12, 3, 0, 6 ✅
12 → check 3, 0, 6 ✅
3  → check 0, 6 ❌
0  → check 6 ❌
6  → nothing on right ✅
```

---

## 🐌 Brute Force Code

```js
function leadersBruteForce(arr) {
  let leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }

    if (isLeader) {
      leaders.push(arr[i]);
    }
  }

  return leaders;
}
```

---

## ⏱ Complexity (in human words)

* Time: **O(n²)** → two loops (slow for big arrays)
    
* Space: **O(n)**
    

This works, but… it feels heavy.

And this is where I got stuck.

---

## 😵 My Real Struggle Moment

![Music Video GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FiMzBkcWQ3ZHE0MWM1M3k3ZWc3eXJ0Y2Z4cnc2ZDRuOXJzbjdrdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l41YoUIRqzcdAQmli/200.gif align="left")

I solved brute force.  
I felt happy.

Then I saw the **optimal solution**, and my reaction was:

> “How did someone even THINK of going from right to left?”

This idea didn’t come to me naturally.  
AI helped here.  
And that’s okay — learning is learning.

---

## 🚀 Approach 2: Optimal Way (Slowly Explained)

### 🔑 Key observation (the turning point)

> **The rightmost element is always a leader**

Why?  
Because there’s nothing on its right.

💡 So instead of checking right side again and again,  
what if we **remember the maximum value seen so far from the right**?

---

## 🧠 Optimal idea (Plain English)

1. Start from the **last element**
    
2. Keep a variable `maxRight`
    
3. Move from right → left
    
4. If current element &gt; `maxRight`
    
    * It’s a leader
        
    * Update `maxRight`
        

That’s it.

---

## 🧾 Pseudocode (Plain English)

```plaintext
Take the last element as maxRight
Add it to leaders list

Move from second last element to the start:
    If current element > maxRight:
        Add it to leaders
        Update maxRight

Reverse the leaders list
```

---

![Youre Great Season 8 GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXgzeXc4aWZ0MnVmdGowcGFidWt3YW1teHZucTBsMnBzanpnbGFkNSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/l46CB30vSKp3DC3jW/200.gif align="center")

## 🧪 Dry Run Table

For:

```plaintext
[10, 22, 12, 3, 0, 6]
```

| Index | Value | maxRight | Leader |
| --- | --- | --- | --- |
| 5 | 6 | 6 | ✅ |
| 4 | 0 | 6 | ❌ |
| 3 | 3 | 6 | ❌ |
| 2 | 12 | 12 | ✅ |
| 1 | 22 | 22 | ✅ |
| 0 | 10 | 22 | ❌ |

---

## ⚡ Optimal Code

```js
function leadersOptimal(arr) {
  let n = arr.length;
  let leaders = [];

  let maxRight = arr[n - 1];
  leaders.push(maxRight);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      maxRight = arr[i];
      leaders.push(arr[i]);
    }
  }

  return leaders.reverse();
}
```

---

## ⏱ Complexity (simple words)

* Time: **O(n)** → only one loop
    
* Space: **O(n)**
    

Much better.  
But yes — **harder to think of at first**.

---

## ⚠️ Edge Cases (Important)

* Empty array → return empty
    
* Single element → that element is the leader
    
* All elements same → only last is leader
    
* Descending array → all are leaders
    

---

## 🌱 Final Honest Thoughts (From Me)

I won’t lie.

* I **understood the problem late**
    
* I **solved brute force first**
    
* I needed **help to understand the optimal approach**
    

But today, I can explain **both**.

And I truly believe that:

> One day, I’ll see a problem like this and say  
> “Oh, this is a right-to-left max problem.”

That’s growth.  
That’s upskilling.  
That’s why I’m doing this daily.

---

![Work From Home Reaction GIF by MOODMAN](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2FiMzBkcWQ3ZHE0MWM1M3k3ZWc3eXJ0Y2Z4cnc2ZDRuOXJzbjdrdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dsKx3fE4LzOXrs1owR/200.gif align="center")

## 🗓 Day 22 Done ✔️

Still learning. Still showing up.

If you’re also learning:

* 👍 Like this post
    
* 💬 Comment if it helped
    
* 🔁 Share with someone who’s struggling
    

See you on **Day 23** 💙