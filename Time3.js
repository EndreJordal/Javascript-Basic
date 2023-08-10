// Functions

// Function keyword. Arrow function.

function myFunction() {
  console.log("Function has ran");
}

//myFunction();

const myArrowFunction = () => {
  console.log("Hello from the arrow function!");
  return "Ingen mer undefined!";
};

//myArrowFunction();

// Return statement.
let lives = 2;

function myReturnFunction() {
  const myText = "Dette er min tekst.";
  if (lives === 3) {
    return;
  } else {
    return "Hei";
  }
  console.log("Hello!!");
}

//myReturnFunction();

// Scope

//console.log(myText);

//const myVariable = myArrowFunction();

//console.log(myVariable);

// Parameters / Arguments / Args

const userName = "Killer981";
const userKills = 87;

const greeter = (name, kills) => {
  return `Velkommen ${name}, du har ${kills} kills, bra jobba!`;
};

const greeting = greeter(userName, userKills);

//console.log(greeting);

const multiplier = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplier(2, 3));
