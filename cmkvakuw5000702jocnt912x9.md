---
title: "🇮🇳 Day 21/100: Republic Day Special — 20 Days of Arrays (What Actually Stayed in My Brain)"
seoTitle: "Republic Day Array Challenge Insights"
seoDescription: "Reflecting on 20 days of array challenges: recognizing patterns, using HashMaps, handling edge cases, and understanding when array basics suffice"
datePublished: Mon Jan 26 2026 14:57:57 GMT+0000 (Coordinated Universal Time)
cuid: cmkvakuw5000702jocnt912x9
slug: day-21100-republic-day-special-20-days-of-arrays-what-actually-stayed-in-my-brain
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1769439174427/2b5b21bf-5549-4100-81d1-1f8f5cfd58f9.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1769439451985/738098e2-b536-4b60-b851-ab286dd5d389.png

---

Okay, let me be very honest today.

It’s **Republic Day 🇮🇳**, everyone is celebrating, my brain is tired, and I’m really **not in the mood to solve another DSA problem today**.

And you know what?  
That’s okay.

Instead of forcing myself, I thought — why not **pause**, look back, and write something *actually useful*?

So today’s blog is not a new problem.  
It’s a **reflection of what I learned in the last 20 days of array problems** — the patterns, the confusion, the “ohhh that’s why” moments.

If you’re a beginner or even intermediate, this blog is for *you*.

---

![chai break gif](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif align="left")

---

## 🧠 First Truth I Learned in 20 Days

> DSA is not about memorizing solutions.  
> It’s about recognizing **patterns**.

Once I realized this, arrays stopped feeling scary.

So let me share the **patterns that kept repeating again and again**.

---

## 🧩 When Do I Use a HashMap? (My Mental Checklist)

Initially, I used HashMap everywhere because everyone says:

> “Use HashMap, it’s fast.”

But slowly, I learned **WHEN** to use it.

### ✅ Use HashMap when:

* You need to **remember something you saw before**
    
* You are asked:
    
    * “Does this exist?”
        
    * “Have we seen this already?”
        
    * “Find pair / frequency / count”
        
* You need **fast lookup** (`O(1)`)
    

### Examples from our array journey:

* Two Sum
    
* Frequency count
    
* Duplicate elements
    
* Subarray problems
    
* Prefix sum related problems
    

💡 My brain trigger now is:

> “Do I need to remember past elements?”  
> If yes → **HashMap**

---

![brain thinking gif](https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif align="left")

---

## 🧩 When a Normal Array Is Enough

Not every problem needs a HashMap (this was a big lesson for me).

### ✅ Use array when:

* You are just traversing
    
* You don’t need to store history
    
* Order matters
    
* Simple comparison problems
    

Examples:

* Finding max / min
    
* Checking sorted array
    
* Linear search
    
* Basic traversal
    

Sometimes the simplest solution is the **correct one**.

---

## 🔁 Loop Confusion — `i < n` vs `i <= n-1`

This confused me A LOT in the beginning, so I’m writing this clearly.

Let’s say:

```js
n = arr.length
```

### These two are SAME:

```js
for (let i = 0; i < n; i++)
for (let i = 0; i <= n - 1; i++)
```

But…

### ❌ This is WRONG:

```js
for (let i = 0; i <= n; i++)
```

Because:

* Last index = `n - 1`
    
* `arr[n]` → ❌ out of bounds
    

💡 My rule now:

> If I’m looping an array → `i < arr.length`

No overthinking.

---

## 🧠 Another Big Realization: Edge Cases Matter

Earlier, I used to jump straight into logic.

Now I always ask:

* What if array is empty?
    
* What if array has only one element?
    
* What if target doesn’t exist?
    

This habit saved me **so many bugs**.

---

![bug fixing gif](https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif align="left")

---

## 📌 When Sorting Helps

Sorting is not just for beauty.

### Sorting helps when:

* You want to use **two pointers**
    
* You want to reduce comparisons
    
* Order doesn’t matter in output
    

But sorting also means:

* You are modifying the array
    
* Time complexity increases
    

So now I ask:

> “Do I really need sorting or can I solve it directly?”

---

## 🧠 My Honest Beginner Workflow (20 Days Later)

This is literally how I think now:

1. Can I solve it with **brute force**?
    
2. Is the array **sorted**?
    
3. Do I need to **remember past values**?
    
4. Are **duplicates / pairs / counts** involved?
    
5. What are the **edge cases**?
    

If I answer these, logic starts forming automatically.

---

![light bulb gif](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif align="left")

---

## ❤️ Why I’m Writing This Blog Today

Because learning is not only about grinding.

Sometimes, you need to:

* Pause
    
* Reflect
    
* Feel proud of consistency
    

20 days ago, arrays scared me.  
Today, I may not know *everything*, but I know **how to think**.

And that’s growth.

---

## 🇮🇳 Republic Day Note

Today, we celebrate our Constitution.  
And honestly, discipline + freedom = growth.

Same applies to learning DSA 😉

---

## ✨ Final Words

If this blog helped you:

* Like ❤️
    
* Share 🔁
    
* Comment 💬 what confused you most in arrays
    

Day 22, we’ll again go back to solving problems.  
But today — **rest is also part of progress**.

Happy Republic Day 🇮🇳  
See you tomorrow 🌱