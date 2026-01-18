---
title: "📘 Day 13 — Move All Zeros to the End (DSA Journey)"
seoTitle: "Move Zeros to End in Arrays"
seoDescription: "Learn how to move all zeros to the end of an array in an efficient, in-place manner without using extra space"
datePublished: Sun Jan 18 2026 16:10:03 GMT+0000 (Coordinated Universal Time)
cuid: cmkjxmria000302l2ec0o2kpy
slug: day-13-move-all-zeros-to-the-end-dsa-journey
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768751685379/d488a3ff-d5df-4a45-9b7b-548cced59f48.png
tags: js, javascript, web-development, dsa, dsa-series, dsawithricha

---

## 👋 Intro (read this before jumping to the problem)

Day 13 of my DSA journey and honestly…  
this is one of those problems that **looks easy**, but **teaches you how to think better**.

I already solved this problem in my own way (using extra arrays).  
It works ✅  
But deep inside I knew — *“hmm… this can be done better”* 😅

So today:

* I’ll show **my thinking**
    
* Then I’ll show **a better approach**
    
* And I’ll break it **loop by loop**, **step by step**, like I wish someone did for me when I was a beginner
    

![a netflix ad shows a woman looking out a window](https://media1.tenor.com/m/1qdXgtkZMQYAAAAd/what-surprised.gif align="left")

---

## 🧩 Problem Statement

**Move all zeros to the end of the array**  
Order of non-zero elements **must stay the same**

### Example

```plaintext
Input:  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
```

---

## 🤔 My First Thought (honest one)

👉 Separate numbers  
👉 Separate zeros  
👉 Join them

```javascript
let arr = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]

const sendAllZeroToLast =(arr)=>{
    let store =[]
    let zero =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            store.push(arr[i])
        }else{
            zero.push(arr[i])
        }
    }
    return [...store,...zero]
    
}
const result =sendAllZeroToLast(arr)
console.log(result)
```

It works, but:

* Extra space ❌
    
* Not optimal ❌
    

So let’s do it **better**.

![a man with a beard says " control " in yellow](https://media.tenor.com/_74Sg8exvuUAAAAM/control-controlll-akhandanand-tripathi.gif align="center")

---

![a man with a beard is sitting at a table and says kyun paka rahe ho bey](https://media.tenor.com/5CkpTkPOJpAAAAAM/kyun-paka-rahe-ho-bey-guddu-pandit.gif align="center")

## 🚀 Optimized Approach (In-Place, No Extra Array)

### Idea (simple)

* Keep one pointer `index`
    
* Whenever non-zero comes → put it at `index`
    
* Increase `index`
    
* After loop → fill rest with `0`
    

---

![a man sitting in a chair with the words free mein kabhi kuch nahi milta on the bottom right](https://media.tenor.com/q0pWXv2B4f0AAAAM/free-mein-kabhi-kuch-nahi-milta-guddu-pandit.gif align="center")

## ✅ Code (Clean & Optimized)

```js
let arr = [1, 0, 2, 3, 0, 4, 0, 1];

const moveZeroToEnd = (arr) => {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }

  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }

  return arr;
};

console.log(moveZeroToEnd(arr));
```

---

## 🔍 Walkthrough

![a man wearing sunglasses is smiling and says irshaad in yellow](https://media.tenor.com/UIidd5Qg7NgAAAAM/irshaad-munna-bhaiya.gif align="center")

### Initial State

```plaintext
arr   = [1,0,2,3,0,4,0,1]
index = 0
```

---

### 🔁 Loop Walkthrough (NO English inside 👇)

```plaintext
i = 0 → 0 < 8 → true
arr[0] = 1
1 !== 0 → true
arr[index] = 1 → arr[0] = 1
index = 1
```

```plaintext
i = 1 → 1 < 8 → true
arr[1] = 0
0 !== 0 → false
index = 1
```

```plaintext
i = 2 → 2 < 8 → true
arr[2] = 2
2 !== 0 → true
arr[index] = 2 → arr[1] = 2
index = 2
```

```plaintext
i = 3 → 3 < 8 → true
arr[3] = 3
3 !== 0 → true
arr[index] = 3 → arr[2] = 3
index = 3
```

```plaintext
i = 4 → 4 < 8 → true
arr[4] = 0
0 !== 0 → false
index = 3
```

```plaintext
i = 5 → 5 < 8 → true
arr[5] = 4
4 !== 0 → true
arr[index] = 4 → arr[3] = 4
index = 4
```

```plaintext
i = 6 → 6 < 8 → true
arr[6] = 0
0 !== 0 → false
index = 4
```

```plaintext
i = 7 → 7 < 8 → true
arr[7] = 1
1 !== 0 → true
arr[index] = 1 → arr[4] = 1
index = 5
```

---

### 🧹 After Loop (Fill Zeros)

```plaintext
index = 5 → 5 < 8 → true
arr[5] = 0
index = 6

index = 6 → 6 < 8 → true
arr[6] = 0
index = 7

index = 7 → 7 < 8 → true
arr[7] = 0
index = 8
```

---

## 🎯 Final Output

```plaintext
[1, 2, 3, 4, 1, 0, 0, 0]
```

---

## 🧠 Why This Approach Is Better

![an amazon prime video ad with a woman talking](https://media.tenor.com/zuSIhkpVacgAAAAM/ho-gaya-aapka-golu-gupta.gif align="center")

✔ No extra array  
✔ Order preserved  
✔ One loop + one fill  
✔ Interview-friendly  
✔ Beginner-friendly

---

## 😂 Ending Note (Human Truth)

![a man wearing sunglasses says " hindi film ke hero hain hum " in front of a crowd](https://media.tenor.com/cEZYPT7a6GgAAAAM/hindi-film-ke-hero-hain-hum-munna-bhaiya.gif align="center")

I solved it one way.  
Then I learned a **cleaner way**.  
And that’s exactly how DSA works.

You don’t need to be perfect on Day 1.  
You just need to be **better than yesterday** 💙

![a man with a beard says samjho hogaya in front of an amazon prime video sign](https://media1.tenor.com/m/cqcXk7giTusAAAAd/samjho-hogaya-akhanda-tripathi.gif align="left")

---