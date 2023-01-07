# What is the Difference Between ‘for…in’ and ‘for…of’ in JavaScript?

**Hey Developers🤓😎‼ In this part of the series, we discuss there are two very similar statements in JavaScript: `for...in` and `for...of`. And while they can be easily confused, they're actually quite different. we'll cover the usage of both statements with multiple examples of each.
**



# 👉 for...in😇


The  `for...in` loop is used to loop through an object's properties. It can be a great debugging tool if we want to show the contents of an object. 

[The MDN Definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

> The `for...in` statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

**I know that's not the explanation you came here for, So let me explain.😁
**


**Explanation:
**


So, `for...of` does not work with objects (non iterables), Then how do we loop over `keys` and `values` of an object? And the answer is `for...in` loop.

**for...in** works with those properties whose enumerable flag is set to true.

** 👉 Enumerable flag for properties created via simple assignment or property initializer are by default true.
**

**👉 Enumerable flag for properties created via Object.defineProperty are by default false.
**

## Syntax🎯
---

```
for (key in object) {
  // code block to be executed
}
```
---

```
const myDetails = {
  fistName: "Richa",
  lastName: "Singh",
  age: 24,
  hobby: "coding",
};

for (keys in myDetails) {
  console.log(keys);
}
```
**Output:-**

![forin.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663150308707/i3K3kQH5_.PNG align="left")

> In above code if you check `in` is used for display the `keys` in given object.

>So what is `keys` in object (`const myDetails` ),In the given object keys is `fistName`
`lastName` `age` and `hobby`

---

```
const myDetails = {
  fistName: "Richa",
  lastName: "Singh",
  age: 24,
  hobby: "coding",
};

for (keys in myDetails) {
  console.log(keys, myDetails[keys]);
}
```
**Output:-**

![for2.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663150985592/JuuBonMj_.PNG align="left")

---
Now let's add a new property *(marks)* to `myDetails` object and set it's enumerable flag to false. With enumerable flag set to `false`, marks key won't appear in result of `for...in` loop. add another property *(blog)* to `myDetails`object and set it's enumerable flag to `true`. With enumerable flag set to `true`, blog key appear in result of `for...in`. Let's see
the output


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663153873474/ONd1Mtz6C.png align="left")

```
const myDetails = {
  registration: "123456",
  firstName: "Richa",
  lastName: "Singh",
  age: 24,
};

Object.defineProperty(myDetails, "marks", {
  value: 98,
  enumerable: false,
});

Object.defineProperty(myDetails, "blog", {
  value: 10,
  enumerable: true,
});

console.log(myDetails.blog);

// console.log(myDetails.marks);
// 98
// marks key does not show up in the for...in loop result.

for (key in myDetails) {
  console.log(key, myDetails[key]);
}
```
**Output:-**

![for3.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663154001869/Ow5vAcxQw.PNG align="left")

*`for...in` also works with strings and arrays, because enumerable flag for string and array properties are also by default true.*


> In simple words use for...in to loop over objects. Although for...in works with strings and arrays, but it is not suggested to use that way.

----
# 👉 for...of😇

The JavaScript `for of` statement loops through the values of an `iterable` object.

It lets you loop over `iterable` data structures such as `Arrays`, `Strings`, `Maps`, `NodeLists`, and more.

[The MDN Definition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

> The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

### Let me explain this😇


**👉`for...of loop` works only with iterable objects. In JavaScript, iterables are objects which can be looped over.
**

**
👉String, Array, TypedArray, Map, and Set are all built-in iterables, because each of their prototype objects implements an @@iterator method. So, for...of loop works on the mentioned object types.
**

**
👉Object in JavaScript is not iterable by default. So, for...of loop does not work on objects.
**

> In simple words, `for...of` works with strings and arrays but not with `objects`.

---

## Syntax🎯
---

```
for (variable of iterable) {
  // code block to be executed
}
```
---

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663155767560/kZXSD_DrV.png align="left")
**Example:-**

```
const iterable = [10, 20, 30, 40, 50];

for (values of iterable) {
  values = values * 2;
  console.log(values);
}
```

**Output:-**

![forof.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663155730761/XH-KAyNFU.PNG align="left")

> Note: Each iteration creates a new variable. Reassigning the variable inside the loop body does not affect the original value in the iterable (an array, in this case).

**Iterating over an Array**

```
const iterable = [10, 20, 30, 40, 50];

for (values of iterable) {
  console.log(values);
}
```

**Output:-**

![forof1.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663156270620/NDnRX5ubJ.PNG align="left")

**Iterating over a string
**
Strings are [iterated by Unicode code points.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)

```
const iterable = "Yuvarj";

for (values of iterable) {
  console.log(values);
}
```
**Output:-**

![forof2.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663156638053/J6MMYIuBg.PNG align="left")

**Iterating over a TypedArray**

```
const iterable = new Uint8Array([0x11, 0x07]);

for (values of iterable) {
  console.log(values);
}
```

**Output:-**

![forof3.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663156884222/bSVHz4Va8.PNG align="left")

**Iterating over a Map
**

```
const iterable = new Map([
  ["first_value", 1],
  ["second_value", 2],
  ["third_value", 3],
  ["fourth_value", 4],
]);

for (checkdetails of iterable) {
  console.log(checkdetails);
}
// [ 'first_value', 1 ]
// [ 'second_value', 2 ]
// [ 'third_value', 3 ]
// [ 'fourth_value', 4 ]

for ([keys, values] of iterable) {
  console.log(values);
}

// 1;
// 2;
// 3;
// 4;
```
**Output:-**

![forof4.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663157685387/-RARWMk43.PNG align="left")

**Iterating over a Set**

```
const iterable = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

for (const value of iterable) {
  console.log(value);
}
```
**Output:-**

![for5.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663158617696/7gSGohKXW.PNG align="left")

**Iterating over the arguments object
**

*You can iterate over the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object to examine all parameters passed into a function.
*

```
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(3, 2, 1, "yuvraj singh");
```

**Output:-**

![for6.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1663158931604/XOHLmvcyc.PNG align="left")


![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663159008713/ZJZ6at_rL.png align="left")

## Conclusion

**for...of Use to loop over strings and arrays.
**

**for...in Use to loop over objects.**

## Wrap up!!

**Thank you for your time !! Let's connect to learn and grow together.**
[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)