## About the project

This repository contains the playground functions project developed while studying at Trybe. This project consists of several functions that were created using JavaScript.

## Skills

- Write JavaScript code that uses variables and primitive types;
- Use language concepts such as dynamic typing and logical/arithmetic/assignment operators in your code;
- Conditional structures, such as if/else ;
- Manipulate arrays (lists);
- Use the command for;
- Breaking big problems into small ones;
- Use programming logic to solve problems;
- Manipulate objects;
- Use the command for/in ;
- Use functions to organize and structure your code;

## Mandatory requirements

### 1 - Create a function using the && operator

JavaScript has a logical operator `&&`, which takes two values ​​and returns `true` if both values ​​are true, and returns `false` if either value is not.

Considering this, implement in the `compareTrue` function, a code that when receiving two boolean parameters should:

- Return `true` if both values ​​are true;
- Return `false` if one or both parameters are false.

Make the function only using the `&&` operator.

**What will be verified:**

- Return false when calling the compareTrue function with a parameter of value false and another of value true

- Return false when calling the compareTrue function with two parameters of false value

- Return true when calling the compareTrue function with two parameters of true value

### 2 - Create a function that calculates the area of ​​a triangle

Write a function named `calcArea` that takes a base value (called `base`) and a height value (called `height`) of a triangle and returns the calculation of its area.

Remember that the area of ​​a triangle is calculated using the following formula: (base * height) / 2.

**What will be verified:**

- Return the value 250 when the calcArea function is called with the base parameter set to 10 and the height parameter set to 50

- Return the value 5 when the calcArea function is called with the base parameter with the value 5 and the height parameter with the value 2 is expected to result in 5

- Return the value 25.5 when the calcArea function is called with the base parameter with the value 51 and the height parameter with the value 1 is expected as a result 25.5

### 3 - Create a function that splits the sentence

Write a function named `splitSentence`, which will take a string and return an array of strings separated by each space in the original string.

Example: if the function receives the string `"go Trybe"`, the return should be `['go', 'Trybe']`.

**What will be verified:**

- Return the value ['go', 'Trybe'] if the function receives the string 'go Trybe'

- Return the value ['vamo', 'que', 'vamo']. if the function receives the string 'vamo que vamo'

- Return the value ['rocket'] if the function receives the string 'rocket'

### 4 - Create a function that uses string concatenation

Write a function with the name `concatName` that, when receiving an array of strings, returns a string with the format `'LAST ITEM, FIRST ITEM'`, regardless of the size of the array.

This means that if the parameter passed to `concatName` is Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], the function should return `Paolillo, Lucas`.

**What will be verified:**

- Return 'Paolillo, Lucas' when the parameter passed in the concatName function is ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

- Return 're, rocket' when the parameter passed in the concatName function is ['rocket', 'not', 'has', 're']

- Return 'captain, captain' when the parameter passed in the concatName function is ['captain', 'my', 'captain']

### 5 - Create a function that calculates the amount of points in football

Write a function with the name `footballPoints` that receives the number of victories (this parameter must be called `wins`) and the number of ties (this parameter must be called `ties`) and returns the number of points that the team scored in a championship.

For that, consider that each victory is worth 3 points and each tie is worth 1 point.

**What will be verified:**

- Return 50 points when the team has 14 wins and 8 draws

- Return 5 points when the team has 1 win and 2 draws

- Return 0 points when the team has 0 wins and 0 draws

### 6 - Create a function that calculates the repetition of the largest number

Write a function called `highestCount` that, upon receiving an array of numbers, returns the number of times the highest of them is repeated.

Example: if the parameter of `highestCount` is an array with values ​​`[9, 1, 2, 3, 9, 5, 7]`, the function should return `2`, which is the number of times the number ` 9` (largest number in the array) is repeated.

**What will be verified:**

- Return 2 when the parameter passed in the highestCount function is [9, 1, 2, 3, 9, 5, 7]

- Return 1 when the parameter passed in the highestCount function is [0, 4, 4, 4, 9, 2, 1]

- Return 3 when the parameter passed in the highestCount function is [0, 0, 0]

### 7 - Create a Mouse Hunt function

Imagine that there are two cats, which we will call `cat1` and `cat2`, and that they are both chasing the same mouse called `mouse`. Imagine that the animals are on a line, each in a position represented by a number.

Knowing this, create a function called `catAndMouse` that, upon receiving the position of `mouse`, `cat1` and `cat2`, **in that order**, calculates the distances between the mouse and each of the cats, then , return which of the cats will reach the mouse first (the one closest to the mouse).

Example: if the cat `cat2` is 2 units away from the mouse, and `cat1` is 3 units away, your function should return `"cat2"`.

If the cats are at the same distance from the mouse, the function should return the string `"the cats bump and the mouse runs away"`.

**What will be verified:**

- Return the string 'cat2' if the catAndMouse function receives the parameters where cat cat2 is 2 units away from the mouse and cat1 is 3 units away from the mouse

- Return the string 'cat1' if the catAndMouse function receives the parameters where cat cat1 is 6 units away from the mouse and cat2 is 12 units away from the mouse

- Return the string 'cats bump and mouse runs' if the catAndMouse function receives the parameters where the cats are at the same distance from the mouse

### 8 - Create a FizzBuzz function

Create a function called `fizzBuzz` that takes an array of numbers and returns an array like this:

- For each number in the Array that is divisible only by 3, enter a string `"fizz"`;
- For each number in the Array that is divisible only by 5, enter a string `"buzz"`;
- If the number is divisible by 3 and 5, return the string `"fizzBuzz"`;
- If the number cannot be divided by 3 or 5, return the string `"bug!"`;

Example: if the parameter is [2, 15, 7, 9, 45], your function should return `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

**What will be verified:**

- Return the strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] when passing parameters [2, 15, 7, 9, 45] to the fizzBuzz function

- Return the strings ['bug!', 'fizz'] when passing parameters [7, 9] to the fizzBuzz function

- Return the strings ['fizz', 'buzz'] when passing parameters [9, 25] to the fizzBuzz function


### 9 - Create a function that Encode and Decode

Create two functions: the first must be called `encode` and, when receiving a string as a parameter, it must change all lowercase vowels to numbers, according to the following format:

a -> 1 \
and -> 2 \
i -> 3 \
the -> 4 \
u -> 5

That is, if the `encode` parameter is `"hi there!"`, the return should be `"h3 th2r2!"`.

The second function should be called `decode` and does the opposite of `encode` - that is, it takes a string containing numbers instead of lowercase letters and will return a string with lowercase vowels instead of numbers (so if the parameter of ` decode` is `"h3 th2r2!"`, the return should be `"hi there!"`).

**What will be verified:**

- Return an encoded string when the encode function is used

- Return a decoded string when the decode function is used

### 10 - Create a Technology List function

Create a function that takes an array of names of technologies you want to learn. This function must also take a second parameter called `name` with a name.

For each technology in the array, create an object with the following structure:

```
{
  tech: "NameTech",
  name: name
}
```

These objects must be inserted into a new list in alphabetical order from the `tech` field in the object.

The output of your function should be a list of objects sorted by the `tech` field of objects with the above format.

Example:
```
Function entries:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Exit:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

If the array is empty, your function should return 'Empty!'

**What will be verified:**

- Return a list of sorted objects when passed a list with 5 technologies

- Return the error message 'Empty!' when the list has no technologies

## Bonus requirements

### 11 - Create a function that generates a Phone Number

Create a function called `generatePhoneNumber` that takes an array with 11 numbers and returns a phone number, respecting parentheses, dashes and spaces.

Example: if the function parameter is [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` should return `(12) 34567-8901`.

- If the function receives an array with a size other than 11, it should return `"Array with incorrect size."`.

- If any of the numbers in the array is less than 0, greater than 9 or is repeated 3 times or more, `generatePhoneNumber` should return the string `"cannot generate a phone number with these values"`.

**What will be verified:**

- Return the string "Incorrectly sized array." if the array has a size other than 11

- Return the string "cannot generate a phone number with these values" if any of the numbers in the array is less than 0

- Return the string "cannot generate a phone number with these values" if any number in the array is greater than 9

- Return the string "não é possível gerar um número de telefone com esses valores"

- Return a phone number, respecting parentheses, dashes and spaces if the numbers in the array meet the specifications

### 12 - Create a function with the condition of existence of a triangle

A triangle is made up of three lines: `lineA`, `lineB` and `lineC`. Create a function called `triangleCheck` that should receive the three lines as a parameter and return if it is possible to form a triangle with the values ​​shown in each line.

To do so, keep in mind a few considerations:

- In order to form a triangle, it is necessary that the measure of any of the sides is smaller than the sum of the measures of the other two and greater than the absolute value of the difference between these measures.

- To get the absolute value of a number in JavaScript, search for the `Math.abs` function.

- The return of your function must be a boolean.

Example: the return of `triangleCheck(10, 14, 8)` should be `true`.

**What will be verified:**

- Return false when the measure of either side is greater than the sum of the measures of the other two.

- Return false when the measure of either side is less than the absolute value of the difference between these measures.

- Return true when the measure of either side is less than the sum of the measures of the other two and greater than the absolute value of the difference between these measures.

### 13 - Create a welcome function to the Trybe Bar!

According to the rules of this bar, with each drink you should drink a glass of water so you don't have a hangover.

Create the `hydrate` function that takes a string, and returns the suggestion of how many glasses of water you should drink. Examples:
```
String received:
  "1 beer"
String returned:
  "1 glass of water"
```

```
String received:
  "1 cachaça, 5 beers and 1 glass of wine"
String returned:
  "7 glasses of water"
```

```
String received:
  "1 cachaça, 5 beers and 1 glass of wine"
String returned:
  "7 glasses of water"
```

**Grades**

- For simplicity, we will assume that anything with a number in front of it is a drink **and that its string will always come in the form quantity (in number) + type of drink**.

- The number on the front of each drink is in the range between 1 and 9.

**Hint:** search for something similar to `get all integers inside a string js`.

**What will be verified:**

- Return the suggestion of how many glasses of water to drink when given a string
