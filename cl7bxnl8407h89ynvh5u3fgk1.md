# JavaScript Array methods Cheatsheet


# Introduction
**In this Article I will cover all important Array methods. We’ll go through a small theory 👩‍💻 intro and will jump next to a more hands-on 👋 exercise to practice what we learned.**


![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661595108876/9_qx5SNkc.PNG align="left")

## What is Array 🤔?

> An Array is special variables, which can hold more than one value  at a time. In other words Array is used to store multiple elements in a single variable. It is often used when we want to store a list of elements and access them by a single variable.

For Example 

```
const cars = ["Saab", "Volvo", "BMW"];

```

## length
> it is return total count of elements in array

```
let listemoji=['😍','😂','😎','🤣', '😆'];

let length = listemoji.length;

console.log(length);
```


![len.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661597316174/NP3iypN84.PNG align="left")


## Concat
> Create a new array by concatenating existing arrays:

```
let listemoji=['😍','😂','😎','🤣', '😆'];

let listemojitwo=['🙄','😏','🥱','😥', '😑'];

let concatArr = listemoji.concat(listemojitwo)


console.log(concatArr);
```


![conca.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661597915846/0OJtY24YzG.PNG align="left")


## Join

> Joins all elements of an array into a string.

```
let list = [1, 2, 3, 4, 5];

let result=list.join(','); 

console.log(result)
```


![join.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661598877470/1zm3UcK7k.PNG align="left")

## Slice

> Return copy of array from `start` and `end` from arguments


```
let listemoji=['😍','😂','😎','🤣', '😆'];

let sliceArray=listemoji.slice(0,1)

console.log(sliceArray)
```

![slice.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661599316678/eO-K2keWa.PNG align="left")

## IndexOf

> Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```
let listemoji=['😍','😂','😎','🤣', '😆'];

let indexOfArray1=listemoji.indexOf('😍')
let indexOfArray2=listemoji.indexOf('😴')


console.log(indexOfArray1)
console.log(indexOfArray2)
```


![indexof.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661599699662/4zDmWY4kD.PNG align="left")


## LastIndexOf

> Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```
let listemoji=['😍','😂','😎','🤣', '😆'];

let indexOfLastArray1=listemoji.lastIndexOf('😆')


console.log(indexOfLastArray1)
```


![lastindex.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661599999502/dcZqBqMU3.PNG align="left")


## Includes
> Returns true if the given element is present in the array.


```
let listemoji=['😍','😴','😁','😡', '😆'];

let result=listemoji.includes('😆')


console.log(result)
```


![include.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661600466232/od6HIsRGJ.PNG align="left")


## Pop
> Removes the last element from an array and returns that element.

```
let listemoji=['😍','😴','😁','😡', '😆'];

let result=listemoji.pop('😆')


console.log(result)
console.log(listemoji)
```


![pop.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661600712348/KplqeYkmr.PNG align="left")

## Push
> The method adds one or more elements to the end of an array

```
let listemoji=['😍','😴','😁','😡', '😆'];

let result=listemoji.push('💂‍♀️')


console.log(result)
console.log(listemoji)
```

![push.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661601065234/BH0992BW9.PNG align="left")

## Shift
> Removes the first element from an array

```
let listemoji=['🍕','🍔','🍟', '🥂','🍻'];

let result=listemoji.shift()


console.log(result)
console.log(listemoji)
```

![shift.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661601394548/SvGvx_syq.PNG align="left")

## Unshift
> Adds new elements to the beginning of an array, and returns the new length.

```
let listemoji=['🍕','🍔','🍟', '🥂','🍻'];

let result=listemoji.unshift('🍺')


console.log(result)
console.log(listemoji)
```


![unshift.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661601691467/kHQLpEbuM.PNG align="left")


## Splice

> The method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


```
let listemoji=['🍕','🍔','🍟', '🥂','🍻'];

let result=listemoji.splice(3,4)


console.log(result)
console.log(listemoji)
```

![splice.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661601896136/P8c2GBM7_.PNG align="left")

## Reverse
> Reverses the order of the elements in an array.

```
let listemoji=['🍕','🍔','🍟', '🥂','🍻'];

let result=listemoji.reverse()


console.log(result)
```

![reverse.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661602178097/JtbGKyQ4B.PNG align="left")

**I know you guys are wondering when this will end. Don't worry I'm trying to finish😝.
**

![Carry.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661602496968/E9YLTs1GL.PNG align="left")

## Sort
> Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.


```
let listemoji=['😂','🍔','🥱', '🥂','😂','🥱'];

 let result=listemoji.sort()

// Another Example
console.log(result)
let array =[ 2,1,10,4,15];
 const resultOne = array.sort((a,b) => (a-b))

 let arrayTwo =[ 8,1,10,7,45];

const resultTwo= arrayTwo.sort((a,b) => -(a-b))

console.log(resultOne);
console.log(array)
console.log(resultTwo);
// OR

let alphaArray=['shanu','apple','zer','ball']
let newresult = alphaArray.sort((a,b) => (a-b))//let results = alphaArray.sort() both are same
console.log(newresult)
```


![sort.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661604493488/m4cDuKwL0.PNG align="left")

## Map

> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```
let listemoji=['😂','🍔','🥱', '🥂','😂','🥱'];

 let result=listemoji.map((el) => ('🎊'))
 console.log(result)

// Another Example
let listNumber=[1,4,5,6,7]

let newResult=listNumber.map(el=>el*4)

console.log(newResult)
```

![map.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661605076912/JBRvocdkm.PNG align="left")

## Filter

> Returns a new array with all elements that pass the test implemented by the provided function.

```
let listemoji=['😂','🍔','🥱', '🥂','😂','🥱'];

 let result=listemoji.filter((el) => el === '😂')
 console.log(result)

// Another Example
let listNumber=[1,4,5,6,7,,9,10,12,10]

let newResult=listNumber.filter(el=>el==10)

console.log(newResult)
```

![filter.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661605523780/A-1HAysAu.PNG align="left")


# 👉 Resources

Check out some of these resources for a more in-depth:- [JS Cheetsheet](https://dev.to/sakhnyuk/js-array-cheatsheet-31h0)[geeksforgeeks](https://www.geeksforgeeks.org/javascript-array-complete-reference/)
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

# In closing

I hope that you've found this Blog helpful..! If you have any question or feedback, feel free to leave a comment below.

I write web development articles on my blog @richak.hashnode.dev and post development-related content.

![bus kar.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661606281865/2_Vtl70KB.PNG align="left")

*That's all for today!😊
*


![cong.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1661606371357/hBTSvOXoO.PNG align="left")
