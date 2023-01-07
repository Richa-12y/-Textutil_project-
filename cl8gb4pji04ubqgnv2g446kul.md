# How to Convert a String to Lowercase and Uppercase in JS


**Hey Coder!! 👨‍💻👩‍💻In article I will explains how to convert a string to lowercase and uppercase characters..**


# 👉 How to Convert Uppercase to Lowercase 

### 1 Method to solve this problem 

```
let str='RICHA';
let [firstLetter,...restLetter]=str
console.log(firstLetter);
console.log(restLetter);
```
*Output:-*

![Screenshot 2022-09-24 213907.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664035787845/1-IiCkhgy.png align="left")

> let me explain this What I done in this first I assign string(`RICHA`) to variable that is`str`, then I used spread(...) operator using spread  operator you can spread each alphabet like this`R I C H A` you can check this `console.log(...str)`

```
let str='RICHA';
// console.log(...str)
let [firstLetter,...restLetter]=str
// console.log(firstLetter);
// console.log(restLetter);

let joinRestLetter=restLetter.join('')
console.log(joinRestLetter)

let convertjoinRestLetter=joinRestLetter.toLocaleLowerCase()
console.log(convertjoinRestLetter)

let addAfterChange=`${firstLetter}${convertjoinRestLetter}`
console.log(addAfterChange)
```

*Output:- *


![Screenshot 2022-09-24 215918.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664037014622/PYDOlNml9.png align="left")

> after that I used join() method join what will do it's remove the space then I convert that to lower case and add them together(concatenate) you can see the output above. Hope you will understand that


![imge.gif](https://media.giphy.com/media/Rk8wCrJCrjRJ2MyLrb/giphy.gif)
---

**Let understand this with different example**

### How to capitalize the first letter of every word in JavaScript

```
let str_one='you are beautiful'
let splitstr_one=str_one.split(' ')
// console.log(splitstr_one)


for(let i=0;i<splitstr_one.length;i++){
     
     let [firstLetter,...restLetter]=splitstr_one[i]
//      console.log(firstLetter)
//     console.log(restLetter)
      let str=`${firstLetter.toUpperCase()}${restLetter.join('')}`
      splitstr_one[i]=str
     //  console.log(str)

     
}
console.log(splitstr_one.join(' '))
```

**Output:-**


![Screenshot 2022-09-24 231556.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664041699310/7j8ZEplhQ.png align="left")


![image.gif](https://media.giphy.com/media/Mp4hQy51LjY6A/giphy.gif)


### 2 Method to solve this problem 

```
let myGreeting = 'GOOD MORNING';
console.log(myGreeting.toLowerCase());
```

**Output:-**


![Screenshot 2022-09-24 233016.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664042432702/MulYqXErn.png align="left")


*The string `myGreeting` consists of only one capital letter that gets converted to lowercase.
*

*Any letters that are already lowercase are not affected by the `toLowerCase()` method, only uppercase ones. These letters preserve their original form.
*
The string in the example below consists of all capital letters. They are all then converted to lowercase when the `toLowerCase()` method is applied.


### 👉 How to capitalize only the first letter in a string in JavaScript

You first locate and extract the first letter of that string by using its index. Then you call the `toUpperCase()` method on that specific letter.

As a reminder, indexing in JavaScript (and most programming languages) starts at 0, so the first letter has an index of `0`.

Save this operation in a new variable called `capFirstLetter`.


 ```
let name = 'richa';
let capFirstLetter=name[0].toUpperCase()
console.log(capFirstLetter);
```


![Screenshot 2022-09-24 234111.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664043085103/_GUxCbeLq.png align="left")


Next, you want to isolate and cut off that `first character` and keep the remainder of the string.

One way to do this is by using the `slice()` method. This creates a new string starting from the index specified until the end of the word.

You want to start from the second letter until the end of the value.

In this case, the argument you should pass to `slice()` is an index of `1` since that is the index of the second letter.

This way, the first character is excluded altogether. A new string is returned without it but containing the rest of the characters – minus that first letter.

Then save that operation to a new variable.

```
let name = 'richa';
let capFirstLetter=name[0].toUpperCase()
// console.log(capFirstLetter);

let restOfNameAlb = name.slice(1);

console.log(restOfNameAlb);
```

*Output:-
*

![Screenshot 2022-09-24 234716.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664043449098/KxiEdMt8I.png align="left")

By combining the two new variables with concatenation, you get a new string with only the first letter capitalized.

```
let name = 'richa';
let capFirstLetter=name[0].toUpperCase()
// console.log(capFirstLetter);

let restOfNameAlb = name.slice(1);

// console.log(restOfNameAlb);
let addAfterChange=`${capFirstLetter}${restOfNameAlb}`

console.log(addAfterChange)
```

**Output:-**

![Screenshot 2022-09-24 235010.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664043627188/_2TxMnVNH.png align="left")

![image.gif](https://media.giphy.com/media/RkDX47fpp2nHlaZdjY/giphy.gif)


*Another way is to combine the steps from above and isolate them in a function.
*

*The function gets created just once. The function then returns a new string with the first letter capitalized.
*

*The amount of code you need to write is substantially less while also being able to pass in any string as an argument without writing repetitive code.
*


```
function capFirst(name) {
     return name[0].toUpperCase() + name.slice(1);
 }

console.log(capFirst('richa'));//Output:-Richa
```
### 👉 How to capitalize the first letter of every word in JavaScript

*The first step is to split the sentence into individual words and work with each one separately.
*

*For that, you use the `split()` method and pass a space as an argument. It means that with every space in the sentence provided, an item gets passed into a new array.*

*It splits the sentence based on blank spaces.
*

*Create a new variable and store the new array.
*

```
let dreamBig = 'excuses will turn your dreams into dust';
let splitdreamBig = dreamBig.split(" ");
console.log(splitdreamBig)
```
*Output:-*

![Screenshot 2022-09-25 002631.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664045817564/mDvjpwZEk.png align="left")


*Now from that sentence, there is a new array of words that allows you to manipulate each word on its own, separately.
*
*Since there is now a new array, you can use the `map()` method to iterate over each individual item inside it.
*

*In the `map()` method, you use the same procedure shown in the section above to take each word individually, capitalize the first letter, and return the rest of the word.*

```
let dreamBig = 'excuses will turn your dreams into dust';
let splitdreamBig = dreamBig.split(" ");
// console.log(splitdreamBig)

 let words=splitdreamBig.map((word)=>{
   return word[0].toUpperCase() + word.slice(1);
     
})
  console.log(words.join(' '))
```

*Output:-*

![Screenshot 2022-09-25 004110.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1664046683208/gde66NdeQ.png align="left")

*The first letter of every word is now capitalized.
*

*All that is left now is to combine the words in the array together in a single sentence again.
*

*For that you use the `join()` method and pass a space as the argument.*


> The first letter of every word is now capitalized.
> 
> All that is left now is to combine the words in the array together in a single sentence again.
> 
> For that you use the join() method and pass a space as the argument.

```
function capFirstLetterInSentence(sentence) {
    let words = sentence.split(" ").map(word => {
        return word[0].toUpperCase() + word.slice(1);
    })
    return words.join(" ");
}

console.log(capFirstLetterInSentence("excuses will turn your dreams into dust"));
//Excuses Will Turn Your Dreams Into Dust
```

# Conclusion

*And there you have it! This is how you use the `toLowerCase()` and `toUpperCase()` methods in JavaScript.*

*You learned how to capitalize the first letter of a word and capitalize the first letter of each word in a sentence. 
*

## Wrap up

**So we have discussed two ways to solved the coding challenge .
Thanks for reading 🙂.Please share it with your network. Don’t forget to leave your comments below.**

**Happy Coding!!😇**

![Capture.PNG](https://cdn.hashnode.com/res/hashnode/image/upload/v1662484079013/oYoWkPNA5.PNG align="left")
[<a href="https://www.buymeacoffee.com/kricha000l"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=kricha000l&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>](https://www.buymeacoffee.com/kricha000l)

![image.png](https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif)
