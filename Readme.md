# Higher Order Functions

## Learning Goals

- [ ] **Recall the benefits of higher-order functions.**
- [ ] **Write a callback and higher-order function.**
- [ ] **Pass a higher-order function a callback.**
- [ ] **Use the built-in higher-order function `map` to “transform” items in an array and return a new array.**
- [ ] **Use the built-in higher-order function `filter` to “filter” values from an array and return a new array.**

## Higher-Order Functions in JavaScript

Higher-order functions are a huge part of developing with JavaScript. In this lab, you will be implementing a higher-order function and using built-in JavaScript higher-order functions.

### Functions as Values

In JavaScript, functions are values that can be assigned to variables. Because of this, we can pass functions as parameters to other functions.

- Callback Function: A function passed as an argument to another function is called a callback function.
- Higher-Order Function: A function that receives a function as an argument and/or returns a function is called a higher-order function.

```
const foo = function() {
  console.log("I’m a function!");
};

const boo = function(callback) {
  console.log("Higher Order");
  return callback();
};

boo(foo);
```

## Arrow Functions

In this lab we’ll work with arrow functions, a shorter, more compact way to write functions.
They’re especially useful as callbacks because they keep the code concise and also handle the surrounding object context for you.
(The details of how context works are more advanced, but for now just know that arrow functions make it easier to pass objects into callbacks.)

```
// Arrow functions make it easy to write concise, one-line functions.
// A one-line arrow function can omit { } and will automatically return the value.
const foo = () => 'hi';

// If there is only one parameter, you can omit the parentheses.
const boo = data => console.log(data);

// Arrow functions can also work like regular functions with multiple lines.
const goo = (a, b) => {
  return a + b;
};

```

If you'd like to know more about arrow functions, you can learn more by checking out the following resources:

- [Arrow Functions Documentation on W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)
- [Arrow Functions Video Tutorial](https://www.youtube.com/watch?v=fRRRkognpOs)

## Built in higher order functions

JavaScript have a verity of helpful higher order functions, but there are a few very specific ones that are helpful with arrays.

```
// forEach: Iterates over each element and returns undefined. It simply acts like a loop.
const names = ['ix', 'rose', 'eric', 'tran'];
names.forEach(name => console.log(name)); // 'ix', 'rose', 'eric', 'tran'

// map: Returns a new array with each element transformed.
// Note: This creates a shallow copy and won’t fully copy nested objects (we’ll revisit this later).
const nums = [1, 2, 3, 4];
nums.map(num => num * num); // [1, 4, 9, 16]

// filter: Returns a new array of elements that satisfy the given condition.
// Note: This is also a shallow copy (we’ll discuss more about this later).
const moreNums = [10, 11, 12, 13, 14, 15];
moreNums.filter(num => num % 2 === 0); // [10, 12, 14]

// reduce: Performs a calculation by applying a reducer function to each element.
// It can also start with an initial value.
// In the example below, 'a' is the running total (starting at 0), and 'b' is the current element.
const evenMoreNums = [20, 30, 40, 50];
evenMoreNums.reduce((a, b) => a + b, 0); // 140




```

## Lab Deliverables

1. Build a higher order function

- Create a function called `callback` that `console.log`s the message "Callback Function".
- Create a function called `higherOrder` that takes a parameter called `foo`. Inside the `higherOrder` function, `console.log` the message "Higher Order Function", and then invoke `foo()` by returning it.

<details>
  <summary>Click Here to view solution</summary>

```

// 1. Introduction to Higher Order Functions
// Callback function definition
const callback = () => {
  console.log("Callback Function");
};

// Higher Order Function definition
const higherOrder = (foo) => {
console.log("Higher Order Function");
return foo(); // Execute the callback function
};
```

</details>

2. Use JavaScript Built in Higher Order Function Map

- Review the following docs [Array Map()](https://www.w3schools.com/jsref/jsref_map.asp)
- Create a variable called `uppercaseMenu` and set it to `brunchMenu.map`.
- Inside the parentheses `()`, write an anonymous arrow function that takes a parameter `menuItem` and returns `menuItem.toUpperCase()`.

- Log `uppercaseMenu` to the console and view it to confirm that a new array was created where the brunch menu items are transformed to uppercase.

<details>
  <summary>Click Here to view solution</summary>

```
// Map - "Transforms" each item in the array and returns a new array

const uppercaseMenu = brunchMenu.map((menuItem) => menuItem.toUpperCase());
console.log(uppercaseMenu);

// ["EGGS BENEDICT", "HUEVOS RANCHEROS", "FRIED CHICKEN & WAFFLE", "FRIED EGG SANDWICH"]


```

</details>

3. Use JavaScript Built in Higher Order Function Filter

- Review the following docs [Array filter](https://www.w3schools.com/jsref/jsref_filter.asp)
- Create a variable called `cheaperMenuPrices` and set it to `brunchPrices.filter`.

- Inside the parentheses `()`, write an anonymous arrow function that takes a parameter `price` and returns `true` if the `price` is under 17.

- Log `cheaperMenuPrices` to the console and view it to confirm that a new array was created with every price under 17.

<details>
  <summary>Click Here to view solution</summary>

```
// Filter - Returns a new array with items that pass the condition in the callback

const cheaperMenuPrices = brunchPrices.filter((price) => price < 17);
console.log(cheaperMenuPrices);

// [15.0, 16.0, 12.0]


```

</details>

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
