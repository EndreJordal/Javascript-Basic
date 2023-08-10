// Functions

// Methods - innebygde verktøy i Javascript.

// Strings, numbers, arrays, booleans

// String methods.

const text = "Dette er tekst.com";
const text2 = "Mer tekst.";

//console.log(text.toLowerCase());
//console.log(text.toUpperCase());
// Property
//console.log(text.length);
//console.log(text.slice(0, -4));
//console.log(text.substring())
//console.log(text.replace("Dette", "Her er"));
//console.log(text.concat(text2));
//console.log(text.trim());
//console.log(text.charAt());
//console.log(text.charCodeAt(0));
//console.log(text.split(" "));

// Numbers

const number = 247.1926;

//console.log(number.toFixed(2))
//console.log(number.toPrecision(5));

// Arrays

const fruits = [
  "Apples",
  "Pears",
  "Mangos",
  "Melons",
  "Bananas",
  "Grapes",
  "Peaches",
  "Cherries",
];

//console.log(fruits.length);
//console.log(fruits.join("-"));
//console.log(fruits);
//fruits.pop();
//console.log(fruits);
//console.log(fruits.push("Lemons"));
//console.log(fruits);
//fruits.shift();
//fruits.unshift("Lemons");
//console.log(fruits);
//console.log(fruits.concat(["Lemons", "Limes"]));
fruits.splice(3, 0, "Lemons", "Limes");
console.log(fruits);
//https://www.w3schools.com/js/js_array_methods.asp
//https://www.w3schools.com/js/js_string_methods.asp
