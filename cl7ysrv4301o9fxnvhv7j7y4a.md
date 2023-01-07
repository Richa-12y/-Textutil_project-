# The difference between Rest and spread operator in JavaScript

**The Rest and Spread operator are two features of JavaScript introduced in [ES6](http://es6-features.org/#Constants). They work entirely different but their similar syntax (triple dots ...) brings some misconceptions when working with them.
**

*In this Blog, we will learn the difference between `rest` and `spread`operator in JavaScript.
*

### 🗝🗝 Important key points to remember:-

- The `rest` operator, is used to group remaining arguments in, usually in functions.
- The `spread` operator, on the other hand, is used to split a group of values in JavaScript.
- Key takeaway: `rest`groups, spread `splits`.

*Now in detail,
*


## 👉 The Rest Operator

*This operator is used to get all or remaining arguments in a function as an array. 
*
> Rest Operator(...) help us to pass an infinite number of function arguments.

For example:-

```
const sum = (num1, num2, ...restnumber) => {
  console.log(num1);//num1-> 1
  console.log(num2);//num2->2
  console.log(restnumber);//restnumber-> [ 3, 4, 5 ]

};
sum(1, 2, 3, 4, 5);
```
**Output:-
**

![rest.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662975822114/W7EEmHLer.PNG align="left")

*Explanation:-
*

- Line1:-The sum function accepts three arguments `num1`, `num2`and`restnumber`.where the first two arguments values are `1`, `2`everything we passed after is represented as an array `[3,4,5]`.

- Line 2: We will print the received arguments.

- Line 3: We will make a function call.

> Note: The syntax for spread and rest is the same (`...`), but use-cases differ.

*Let's understand this with another example*

```
const sum = (num1, num2, ...restnumber) => {
  console.log(num1);//num1-> 1
  console.log(num2);//num2->2
  console.log(restnumber);//restnumber-> [ 3, 4, 5 ]

  let sumOfRestNumber =
    restnumber.length === 0
      ? 0
      : restnumber.reduce((fist, last) => fist + last);
  return sumOfRestNumber;
};
console.log(sum(1, 2, 3, 4, 5));//sum-> 12
```

**Output:-
**

![sum.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662977550677/NP_l7wjaa.PNG align="left")

*Explanation:-
*

- Line1:-The sum function accepts three arguments `num1`, `num2`and`restnumber`.where the first two arguments values are `1`, `2`everything we passed after is represented as an array `[3,4,5]`.

- Line 2: We will print the received arguments.

- Line 3:-After that we used ternary operator for check the `restnumber` length if it is `0`   
  we assign `sumOfRestNumber` is equal to `0` or length is not equal to `0` we find sum of array element with the help of `array.reduce`and assign result to `sumOfRestNumber`.

- Line 4: We will make a function call and print the output.

> Note:-Hence, the name rest, i.e., “the rest of the elements”.


![tony.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662980452045/gOvsAAkXX.PNG align="left")
```
const sum = (num1, num2, ...restnumber) => {
  console.log(num1);//num1-> 1
  console.log(num2);//num1-> 2
  console.log(restnumber);//restnumber-> [ 3, 4, 5 ]

  let sumOfRestNumber =
    restnumber.length === 0
      ? 0
      : restnumber.reduce((fist, last) => fist + last);
  console.log(sumOfRestNumber);//sumOfRestNumber->12
  let sumOfTotalNumber = sumOfRestNumber + num1 + num2;
  return sumOfTotalNumber;
};
console.log(sum(1, 2, 3, 4, 5));//sum->15

```
**Output:-
**

![srm2.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662979325531/skumGNN4B.PNG align="left")

## 👉The Spread Operator

*This operator is used to `split` a group of values. The group could be a `string`, `array`, or `object`.
*

For `strings` and `arrays`, the result of the spread operator is an array because they are iterable based on their index nature. By index nature

*Let understand this with Example
*

```
const str = "Richa";
const arr = ["Richa"];
console.log(str[0]);//str->R
console.log(arr[0]);//arr->Richa
```
For `objects`, the result of the spread operator is an object because objects are based on their `key-value` nature.

**Output:-
**

![sp.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662981639731/sRE_rNsZd.PNG align="left")

## 👩‍💻 Uses

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662988900439/oJ2GfudvU.png align="left")


**The spread operator can be used in four contexts. They are:
**

- String expressions
- Array expressions
- Function expressions
- Object expressions

**Splitting the strings
**

```
let myname = "RichaSingh";

let arrayOfStrings = [...myname];

console.log(arrayOfStrings);//arrayOfString->[  'R', 'i', 'c', 'h', 'a', 'S', 'i', 'n', 'g', 'h']
```

**Output:-**

![shh.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662982852186/2V6oaWOZZ.PNG align="left")

*Explanation:-
*
- Line 1: We will initiate the `myname` string .
- Line 2: We create a new array `arrayOfStrings` using the spread operator.
> we are using ... spread operator to split the single string into an array of strings.
- Line 3: We will print the new arrays to the console.


**Merging arrays
**

```
const group_one = [1, 2, 3];
const group_two = [4, 5, 6];

const allGroups = [...group_one, ...group_two];

console.log(allGroups);//allGroups->[ 1, 2, 3, 4, 5, 6 ]

```

**Output:-**

![arra.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662983664875/HEs9fWBkM.PNG align="left")

*Explanation:-
*

- Line 1,2: We will initiate the `group_one`,`group_two` array.
- Line 3: We create a new array `allGroups` using the spread operator,we combined `group_one`and `group_two` by using the spread operator
- Line 4: We will print the `allGroups` to the console.

*It is interesting let's explore more*🤩

![wonder.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662985140475/RdyHIn1Pa.PNG align="left")

**Using Spread operator in Function calls
**

```
const multiply = (a, b, c) => {
  return (a * b) / 2;
};
const nums = [5, 6, 2];
//function calling

console.log(multiply(...nums));//multiply->15
```
**Output:-**

![mul.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662985334590/ep7VwNIdj.PNG align="left")

*Explanation:-
*

- Line:-You'd observe that we didn't place the `nums` in an `array` when using it as an `argument`. What the above does is to spread the values for multiply. It translates to multiply(5,6,2).

- Line:2:-In return we multiply the value `a`  `b` and div them with `2`

- Line 3: We will print the `multiply` to the console.


**Merging Objects
**

```
const obj_one = {
  a: 1,
  b: 2,
};

const obj_two = {
  c: "Richa",
  d: "Singh",
};

const merge = { ...obj_one, ...obj_two };

console.log(merge); // merge->15{a:1, b:2, c:3, d:4}
```

**Output:-**

![last.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662986802120/6Whlk0sHY.PNG align="left")

*Explanation:-
*

- Line 1-2: We will initiate `obj_one` `obj_two`the  object.
- Line 3: We create a new object `merge` using the spread operator.
- Line4:We will print the output.

## 🕸Summary

- If you see (…) dots on the function call then it is a spread operator.
- If you see (…) dots on the function parameter then it is a rest parameter.
- Spread operator helps us to merge Arrays or Objects.

## Wrap up

**`rest` and `spread` are two special features that make development easier. They also have cool benefits when using array and object  [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
Thanks for reading 🙂.Please share it with your network. Don’t forget to leave your comments below.**


[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)



![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1662988929966/tdlqyfRmY.png align="left")

