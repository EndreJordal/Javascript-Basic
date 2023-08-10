// Variables & Operators
// Conditionals (IF/ELSE/Ternary)
// Functions
// Methods
// LOOPS

const names = [
  "Tom", // "moT"
  "Eric", // "cirE"
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];
// names.length
//DRY - Don't repeat yourself.

// FOR loop

/* for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}`);
} */

// FOR of loop

/* for (let name of names) {
  console.log(`Hi there ${name}`);
} */

// WHILE

// Math.random() generer et tall mellom 0 og 1

const secretNumber = Math.floor(Math.random() * 10) + 1;

/* let guess = 0;
while (guess !== secretNumber) {
  guess++;
  if (guess === secretNumber) {
    console.log(`I guessed your number! It's ${guess}`);
  }
} */

//BREAK / CONTINUE

/* for (let i = 0; i < names.length; i++) {
  if (names[i] === "Benny") {
    break;
  }
  console.log(`Hello ${names[i]}`);
} */

// Skrive en funksjon som tar i mot et array av strings. Funksjonen skal
//returne arrayet med alle stringsene baklengs. Arrayet må være lengre enn 10 og mindre enn 100.

const stringArrayReverser = (arr) => {
  if (arr.length < 10 || arr.length > 100) {
    return "Array too short or too long";
  }
  const reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const reversedValue = arr[i].split("").reverse().join("");
    reversedArray.push(reversedValue);
  }
  return reversedArray;
};
const reversedNames = stringArrayReverser(names);
console.log(reversedNames);
