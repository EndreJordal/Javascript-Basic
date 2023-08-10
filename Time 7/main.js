// DOM Manipulation
// Document Object Model

const yellowMaker = (element) => {
  element.style.backgroundColor = "yellow";
};

//const grandParent = document.getElementById("grandparent");
//const parents = document.getElementsByClassName("parent");

//console.log(parents[0]);
//yellowMaker(parents[0]);

/* for (parent of parents) {
  yellowMaker(parent);
} */

const grandParent = document.querySelector("#grandparent");
const parents = document.querySelector(".parent");

yellowMaker(parents);

grandParent.classList.add("child");

const newElement = document.createElement("h1");
newElement.textContent = "Jeg ble laget i Javascript 😃";
grandParent.append(newElement);

const fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

/*
<ul>
    <li>Kiwi</li>
    <li>Kiwi</li>
    <li>Kiwi</li>
    <li>Kiwi</li>
    <li>Kiwi</li>
</ul>
*/

// 3 steg for å lage HTML elementer i Javascript
// 1. Lag elementet (createElement("navnpåtag"))
// 2. Gi elementet innhold/form/farge
// 3. Legg elementet inn i HTML

const fruitList = document.createElement("ul");
for (let i = 0; i < fruits.length; i++) {
  const fruitItem = document.createElement("li");
  fruitItem.textContent = fruits[i];
  fruitItem.style.fontSize = `${Math.floor(Math.random() * 50 + 10)}px`;
  fruitList.append(fruitItem);
}
document.body.prepend(fruitList);
