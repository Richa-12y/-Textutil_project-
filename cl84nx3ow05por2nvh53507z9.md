# Map() and Set() in JavaScript🥷❤️

**In this article, we will go over the Map and Set objects, what makes them similar or different to Objects and Arrays, the properties and methods available to them, and examples of some practical uses.**


![image.gif](https://media3.giphy.com/media/5zf2M4HgjjWszLd4a5/100.webp?cid=ecf05e47jdm57txkwix1ych5liw43qquu1pypovcxwuukoue&rid=100.webp&ct=g)


# Maps🔍
---

**👉A Map is a collection of key/value pairs that can use any [data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) as a key and can maintain the order of its entries. **

---

## Key Points🔥

- A Map holds key-value pairs where the keys can be any datatype.

- A Map remembers the original insertion order of the keys.


### 👉Essential Map Methods:-

Method  |  Description
:-------------- | :--------------------:
new Map()	    |  Creates a new Map  
set()	| Sets the value for a key in a Map
get()	| Gets the value for a key in a Map
delete() |	Removes a Map element specified by the key
has()  |	Returns true if a key exists in a Map
forEach()	| Calls a function for each key/value pair in a Map
entries()	| Returns an iterator with the [key, value] pairs in a Map
**Property**	| **Description**
size |	Returns the number of elements in a Map


### How to Create a Map

*We can create a JavaScript Map by:
*

> Passing an Array to `new Map()`

> Create a Map and use `Map.set()`



![SoLet'SGo!GIF.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1663313653452/9AEXyvpWr.gif align="left")


**Example
**

```

// Create a Map

const koreanDrama=new Map([
     ['Start-up','⭐⭐⭐⭐⭐'],
     ['High-end crush','⭐⭐⭐⭐'],
     ['Boys over the flowers','❤️❤️❤️❤️❤️']
])

console.log(koreanDrama)
```   

**Output:-
**

![Screenshot 2022-09-16 131739.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663314497838/pGdpgbQg6.png align="left")

we can also see how many items are in the Map by default. Maps use the `=>` syntax to signify key/value pairs as `key => value:` If you notice that Map convert `Array` into `Object`.

### The set() Method

*We can add elements to a Map with the `set()` method:
*

**Example
**

```
// Create a Map
const koreanDrama=new Map()

// Set Map Values
console.log(koreanDrama.set('Start-up','⭐⭐⭐⭐⭐'));
console.log(koreanDrama.set('High-end crush','⭐⭐⭐⭐'));
console.log(koreanDrama.set('Boys over the flowers',500));

```

**Output:-
**

![s2.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663316091383/IpywqwDIr.png align="left")


### The get() Method

*The get() method gets the value of a key in a Map:
*

**Example
**

```
// Create a Map
const koreanDrama=new Map()

// Set Map Values
koreanDrama.set('Start-up','⭐⭐⭐⭐⭐')
koreanDrama.set('High-end crush','⭐⭐⭐⭐')
koreanDrama.set('Boys over the flowers',500)
//Get Map Values
console.log(koreanDrama.get('Start-up'))
console.log(koreanDrama.get('Boys over the flowers'))

``` 

**Output:-
**

![s3.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663316478463/QjJQj2ymy.png align="left")

### The size Property

**Example
**

```
// Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200],
     ["pineapple", 200],
   ]);
   //get the size 
   const getSize=fruits.size
   console.log(getSize)
```

**Output:-
**

![s4.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663317091194/YWhd35Pqe.png align="left")

### The delete() Method

*The delete() method removes a Map element:
*

**Example
**

```
// Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200],
     ["pineapple", 200],
   ]);
   //delete the element 
   const deleteKey=fruits.delete('apples')
   console.log(fruits)
``` 

**Output:-
**

![s5.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663319398378/SgWhMlj-q.png align="left")

### The has() Method

*The has() method returns true if a key exists in a Map:
*

**Example**

```
// Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200],
     ["pineapple", 200],
   ]);
   //delete the element 
   const deleteKey=fruits.delete('apples')
   //has return if kyes is avialable true if not then false
   const checkdataafterdeleting=fruits.has("apples");
   console.log(checkdataafterdeleting)
   const  dataavialable=fruits.has("oranges")
   console.log(dataavialable)
```
**Output:-
**

![s6.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663320374380/hUuoRnpX_.png align="left")


---
### JavaScript Objects ⚔️ Maps

> Differences between JavaScript Objects and Maps:

|Object  |  Map
:-------------- | :--------------------:
**Iterable**	|Not directly iterable |Directly iterable  
**Size**	|Do not have a size property	|Have a size property
**Key Types** |	Keys must be Strings (or Symbols)	| Keys can be any datatype
**Key Order** |	Keys are not well ordered	|Keys are ordered by insertion
**Defaults	**|Have default keys	|Do not have default keys

---

### The forEach() Method

*The forEach() method calls a function for each key/value pair in a Map:
*

**Example**

```
// Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200],
     ["pineapple", 200],
   ]);
   //forEach 
   let storeNewData=[]
   const useforeach=fruits.forEach((key,value)=>{
     storeNewData=`${(value)} = ${(key)}`
    console.log(storeNewData)
   }
   )

``` 
**Output:-
**

![s7.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663331266003/Mk5eQDrED.png align="left")

### The entries() Method

*The entries() method returns an iterator object with the [key, values] in a Map:
*

**Example**


```
 // Create a Map
const fruits = new Map([
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200]
   ]);
   let text = "";
   for (const x of fruits.entries()) {
     text = text+x
}
console.log(text)
      
``` 

**Output:-
**


![s8.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663335259354/TPuXWq6gT.png align="left")



![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663335290090/2UChgDOss.png align="left")


## Map Properties and Methods

**👉The following table shows a list of Map properties and methods for quick reference:
**

Properties/Methods	|Description	|Returns
:-------------- | :--------------------:|---------------
set(key, value)	|Appends a key/value pair to a Map|	`Map` Object
delete(key)|	Removes a key/value pair from a Map by |key	Boolean
get(key)	|Returns a value by key	|value
has(key)|	Checks for the presence of an element in a Map by key	|Boolean
clear()|	Removes all items from a Map|	N/A
keys()|	Returns all keys in a Map	| `MapIterator` object
values()|	Returns all values in a Map	| `MapIterator` object
entries()	|Returns all keys and values in a Map as [key, value]	| `MapIterator` object
forEach()|	Iterates through the Map in insertion order|	N/A
size	|Returns the number of items in a Map|	Number

## When to Use Map👀

*Summing up, Maps are similar to Objects in that they hold key/value pairs, but Maps have several advantages over objects:*

**Size -** Maps have a size property, whereas Objects do not have a built-in way to retrieve their size.

**Iteration - **Maps are directly iterable, whereas Objects are not.

**Flexibility - **Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.

**Ordered - **Maps retain their insertion order, whereas objects do not have a guaranteed order.


# Set🔍
---
**A Set is a collection of unique values. Unlike a Map, a Set is conceptually more similar to an Array than an Object, since it is a list of values and not key/value pairs. **
However, Set is not a replacement for Arrays, but rather a supplement for providing additional support for working with duplicated data.

---

## Key Points🔥

- A JavaScript Set is a collection of unique values.

- Each value can only occur once in a Set.


### 👉Essential Set Methods

Methods	|Description	
:-------------- | :--------------------
new Set() |	Creates a new Set
add()	| Adds a new element to the Set
delete()	| Removes an element from a Set
has()	| Returns true if a value exists in the Set
forEach()	| Invokes a callback for each element in the Set
values()	| Returns an iterator with all the values in a Set
**Property	**| **Description**
size	|Returns the number of elements in a Set

### How to Create a Set

**We can create a JavaScript Set by:
**

> Passing an Array to new Set()

> Create a new Set and use add() to add values

> Create a new Set and use add() to add variables


### The new Set() Method

*Pass an Array to the `new Set()` constructor:
*

**Example**

```
const letters = new Set(["Ashu","Shanu","Bhanu"]);
console.log(letters)
const checksize=letters.size
console.log(checksize)
```

**Output:-
**

![s10.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663337490623/bwr4b1VBa.png align="left")

*Create a Set and add values:
*

**Example**


```
//create set
const letters = new Set(["Ashu","Shanu","Bhanu"]);
// Add Values to the Set
letters.add(1);
letters.add(2);
letters.add("last");
console.log(letters)

``` 

**Output:-
**


![s11.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663337820218/9Waq6wBWv.png align="left")


*Create a Set and add variables:
*

**Example**

```
// Create a Set
const letters = new Set();

// Create Variables
const a = "HTML";
const b = "CSS";
const c = "JAVASCRIPT";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters)

``` 


![s12.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663338295656/f3a5QWs3K.png align="left")


### The add() Method

*Note:-If you add equal elements, only the first will be saved
*

**Example
**

```
// Create a Set
const letters = new Set();
// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
console.log(letters)
```

**Output:-
**

![s14.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663338571647/fXU_LRwHg.png align="left")

### The forEach() Method

*The forEach() method invokes (calls) a function for each Set element
*

**Example
**

```
// Create a Set
const set = new Set(['hi', 'hello', 'good day'])

// Iterate a Set with forEach
set.forEach((value) => console.log(value))
```

**Output:-**

![s15.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663339130233/lrwm8u1co.png align="left")


### The values() Method

*The values() method returns a new iterator object containing all the values in a Set
*

**Example
**

```
// Create a Set
const set = new Set(['hi', 'hello', 'good day'])

const value=set.values()

console.log(value)
```

**Output:-**


![s16.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663339915010/SQm5kcWxy.png align="left")

*Now we can use the Iterator object to access the elements
*

**Example:-
**

```
// Initialize a Set from an Array
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])
//Set can be converted into an Array with one line of code:
const arr = [...set]
console.log(arr)
// Delete an item
set.delete('Beethoven') // true

// Check for the existence of an item
set.has('Beethoven') // false

// Clear a Set
set.clear()

// Check the size of a Set
set.size // 0

console.log(set)
```
**Output:-
**

![s17.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663341259592/NuvmvrSHT.png align="left")

*Set has many of the same methods and properties as Map, including `delete()`, `has()`, `clear()`, and `size`.
*

**Note that Set does not have a way to access a value by a key or index, like Map.`get(key)` or `arr[index]`.**


## Set Properties and Methods

**👉The following table shows a list of Set properties and methods for quick reference:
**

Properties/Methods	|Description	|Returns
:-------------- | :--------------------:|---------------
add(value)	|Appends a new item to a Set|	Set Object
delete(value)|	Removes the specified item from a Set|	Boolean
has()	|Checks for the presence of an item in a Set|	Boolean
clear()	|Removes all items from a Set|	N/A
keys()	|Returns all values in a Set (same as values())	|`SetIterator` object
values()	|Returns all values in a Set (same as keys())	|`SetIterator` object
entries()	|Returns all values in a Set as [value, value]	|`SetIterator` object
forEach()|	Iterates through the Set in insertion order|	N/A
size	|Returns the number of items in a Set	|Number


## When to Use Set👀

Set is a useful addition to your JavaScript toolkit, particularly for working with duplicate values in data.

In a single line, we can create a new Array without duplicate values from an Array that has duplicate values.

```
const uniqueArray = [...new Set([1, 1, 2, 2, 2, 3])] // (3) [1, 2, 3]
console.log(uniqueArray)
```

**This will give:
**

![s19.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1663341855541/Umz5beZas.png align="left")
![theend.gif](https://c.tenor.com/wu1KAY10v78AAAAM/the-end-britney.gif)


# Conclusion
---
In this article, you learned that a Map is a collection of ordered key/value pairs, and that a Set is a collection of unique values.If you would like to learn more about JavaScript, check out my others 
[articles](https://richak.hashnode.dev/what-is-the-difference-between-forin-and-forof-in-javascript).

# 👉 Resources
---
Check out some of these resources for a more in-depth:- JS [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  [W3School](https://www.w3schools.com/js/js_maps.asp)

# Wrap up!!😇
---
**Thank you for your time !! Let's connect to learn and grow together. I hope it was helpful to you guys. 
Please share it with your network. Don’t forget to leave your comments below.**

[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)


![image.gif](https://c.tenor.com/g8oBE3pJPjYAAAAM/bye-adios.gif)
