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

// Pass the Higher Order Function the Callback function as an argument
higherOrder(callback);

// Example data for 2 and 3
const brunchMenu = [
  "eggs benedict",
  "huevos rancheros",
  "fried chicken & waffle",
  "fried egg sandwich",
];
const brunchPrices = [15.0, 16.0, 18.0, 12.0];

// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array
const uppercaseMenu = brunchMenu.map((menuItem) => menuItem.toUpperCase());
console.log(uppercaseMenu); // ["EGGS BENEDICT", "HUEVOS RANCHEROS", "FRIED CHICKEN & WAFFLE", "FRIED EGG SANDWICH"]

// Filter - Returns a new array with items that pass the condition in the callback
const cheaperMenuPrices = brunchPrices.filter((price) => price < 17);
console.log(cheaperMenuPrices); // [15.0, 16.0, 12.0]
