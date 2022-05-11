const addButton = document.querySelectorAll(".add-item");
const column = document.querySelectorAll(".items");
const icons = document.querySelectorAll(".icon");
let cards = document.querySelectorAll(".card");
const board = document.querySelector(".board");

addButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = document.createElement("div");
    const cardInput = document.createElement("input");
    cardInput.classList.add("card-input");
    cardInput.setAttribute("Type", "text");
    card.classList.add("card");
    card.setAttribute("draggable", "true");
    card.appendChild(cardInput);
    column[index].appendChild(card);
    cards = document.querySelectorAll(".card");
  });
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    cards = document.querySelectorAll(".card");
    console.log(index);
    column[0].removeChild(column[0].children[index]);
  });
});

cards.forEach((card, index) => {
  dragndrop(card);
});

function dragndrop(card) {
  card.addEventListener("dragstart", () => {
    console.log("oi");
  });
}
