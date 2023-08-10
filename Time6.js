// Objects

// String, number, boolean, array, OBJECT

const user = {
  firstName: "Yngve", // KEY-VALUE PAIRS
  lastName: "Olsen",
  age: 32,
  hobbies: ["Coding", "Jogging", "Movies"],
  address: { streetName: "Solgata", streetNumber: 12, postCode: 4013 },
  /* fullName: function () {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  },
  addMiddleName: function (name) {
    this.middleName = name;
  }, */
};

user.middleName = "Trond";
//console.log(user);

// Object array.

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
    //summary: "(NAME) is a X year old man/woman who likes Y among other things."
  },
];

for (let i = 0; i < people.length; i++) {
  const randomHobby = people[i].hobbies[Math.floor(Math.random() * 3)];
  people[i].summary = `${people[i].name} is a ${people[i].age} year old ${
    people[i].male ? "man" : "woman"
  } who likes ${randomHobby} among other things.`;
  console.log(people[i].summary);
}

// legg til title key, og sett til enten "Mr." eller "Ms."
for (let person of people) {
  person.title = person.male ? "Mr." : "Ms.";
}
console.log(people);
