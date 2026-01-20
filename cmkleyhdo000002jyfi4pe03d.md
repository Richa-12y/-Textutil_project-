---
title: "DAY 14: Rotate array by K elements"
seoTitle: "Rotate Array by K Elements"
seoDescription: "Understand array rotations with right and left examples, using temporary storage and step-by-step processes to ensure accurate logic handling"
datePublished: Mon Jan 19 2026 17:02:49 GMT+0000 (Coordinated Universal Time)
cuid: cmkleyhdo000002jyfi4pe03d
slug: day-14-rotate-array-by-k-elements
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1768840528541/4ea314a0-d17e-4f3e-a44d-eb97d313d3d8.png
tags: javascript, web-development, hashnode, dsa, dsa-series, dsawithricha

---

---

Intro (very important, read this)

Day 14 and today I realized one thing very clearly —  
rotation problems are not hard, they are just confusing at first glance.

Left rotate, right rotate, k steps, index shifting…  
initially your brain goes: “bhai kya ho raha hai?” 😵‍💫

But once you understand the flow, this becomes one of the most satisfying problems.

So in this blog, I’ll explain:  
• Right Rotation  
• Left Rotation  
• Using temporary array  
• Step-by-step walkthrough  
• Loop-by-loop thinking  
Exactly how I understand it as a learner.

![chii sasur panchayat panchayat gif – Trending GIF on GifVif](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnllJpN2Yu0CdBcfoSSeTBQq4DbYEkdUpVSQ&s align="center")

---

Problem in simple words

You are given:  
• An array  
• A number k

You have to rotate the array by k steps.

Two cases:

1. Right Rotation
    
2. Left Rotation
    

Very important rule:  
If k is bigger than array length, we do  
k = k % n

This step saves your logic from breaking.

---

PART 1: RIGHT ROTATION

Example:

Array: \[1, 2, 3, 4, 5, 6, 7\]  
k = 2

Expected Output:  
\[6, 7, 1, 2, 3, 4, 5\]

Meaning:  
Last 2 elements come to the front.

![Confused 3 Idiots GIF by Bombay Softwares](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHRmOXUxdmZqNGJ4YnU5OGQ0OG0zbHF1emgwZTdycG9kMjVyeWV4bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EaSRzJYZabLZ3LuCvQ/giphy.gif align="left")

---

Right Rotation – My Thinking

1. Store last k elements safely
    
2. Shift remaining elements to the right
    
3. Put stored elements at the beginning
    

Temporary array is like a locker —  
we keep important elements safe before shifting.

![Shah Rukh Khan Hello GIF](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHRmOXUxdmZqNGJ4YnU5OGQ0OG0zbHF1emgwZTdycG9kMjVyeWV4bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yYQcJwvuNaUTe/giphy.gif align="center")

---

Right Rotation Code

function rightRotate(nums, k) {  
let n = nums.length;  
k = k % n;

```plaintext
let temp = [];

for (let i = n - k; i < n; i++) {
    temp.push(nums[i]);
}

for (let i = n - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
}

for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
}

return nums;
}
```

---

Right Rotation Walkthrough (Beginner Mode)

Initial:  
nums = \[1,2,3,4,5,6,7\]  
k = 2  
n = 7

After k = k % n  
k = 2

Step 1: Store last k elements

i = 5 → nums\[5\] = 6 → temp = \[6\]  
i = 6 → nums\[6\] = 7 → temp = \[6,7\]

temp = \[6,7\]

![Mission Accomplished Success GIF by THE NEXT STEP](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28wdmJjd3Jzc2UxcWNvcXAxZjI4MGZkcGhienpudzk2bjFlbHk5aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4EpblDY4msVtKAOk/200.gif align="center")

---

Step 2: Shift elements to right

i = 4 → nums\[6\] = nums\[4\] → 5  
i = 3 → nums\[5\] = nums\[3\] → 4  
i = 2 → nums\[4\] = nums\[2\] → 3  
i = 1 → nums\[3\] = nums\[1\] → 2  
i = 0 → nums\[2\] = nums\[0\] → 1

Array now looks like:  
\[1,2,1,2,3,4,5\]

Don’t panic — temp will fix it 😄

![Happy Beautiful Girl GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXgyNDE3MTJ5djh1OGFobXUyZ2Mzb3ZtNjJpdmsxMmNxM2c1bmRudiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kLPE2B7qhW93N4OF1D/giphy.gif align="center")

---

Step 3: Copy temp to front

nums\[0\] = 6  
nums\[1\] = 7

Final Output:  
\[6,7,1,2,3,4,5\]

Boom 💥

---

PART 2: LEFT ROTATION

Example:

Array: \[1,2,3,4,5,6\]  
k = 2

Output:  
\[3,4,5,6,1,2\]

Meaning:  
First 2 elements go to the end.

![Tea Chai GIF by The Viral Fever](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnF3anRuN3RmNnlxeTEzNWd0YW0zZm1rc3VjdzJreHR0eWVheXB5bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jpRygheq7hI94wcZQu/200.gif align="left")

---

Left Rotation – My Thinking

1. Store first k elements
    
2. Shift remaining elements to the left
    
3. Put stored elements at the end
    

Same logic, just opposite direction.

---

```javascript
//Rotate array by K elements

//  Right Rotation
// • Left Rotation
// • Using temporary array
// • Step-by-step walkthrough
// • Loop-by-loop thinking

// Array: [1, 2, 3, 4, 5, 6, 7]
// k = 2

// Expected Output:
// [6, 7, 1, 2, 3, 4, 5]


function rightRotate(nums, k) {

    if (!Array.isArray(nums) || nums.length === 0) {
        return nums;
    }

    let n = nums.length;
    k = k % n;

    if (k === 0) {
        return nums;
    }

    let temp = [];

    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }

    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }

    return nums;
}
// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
console.log(rightRotate(arr, k)); // Output: [6, 7, 1, 2, 3, 4, 5]
```

---

Left Rotation Walkthrough

Initial:  
nums = \[1,2,3,4,5,6\]  
k = 2

Step 1: Store first k elements

i = 0 → temp = \[1\]  
i = 1 → temp = \[1,2\]

---

Step 2: Shift left

i = 2 → nums\[0\] = 3  
i = 3 → nums\[1\] = 4  
i = 4 → nums\[2\] = 5  
i = 5 → nums\[3\] = 6

Array now:  
\[3,4,5,6,5,6\]

---

Step 3: Copy temp to end

nums\[4\] = 1  
nums\[5\] = 2

Final Output:  
\[3,4,5,6,1,2\]

![Happy Drink GIF by Chelsea Handler](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjVsN2JkYXJhd2UwZHRsazQxNzJiN2xhMWp5NW9xOG55ZWpka245bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26n6OLQiKfRd7EUo0/giphy.gif align="left")

---

Final Learnings (Very Important)

• Always handle k using k % n  
• Temporary array avoids data loss  
• Direction of loop matters  
• Rotation problems train index thinking

This problem taught me:  
DSA is not about speed,  
it’s about clarity.

See you on Day 15 🚀  
Same energy, same honesty, better logic 💙