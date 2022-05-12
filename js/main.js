const addButton = document.querySelectorAll(".add-item");
const column = document.querySelectorAll(".items");
const icons = document.querySelectorAll(".icon");
let cards = document.querySelectorAll(".card");

const board = document.querySelector(".board");

const cardIcon = document.querySelectorAll("card-icon");

addButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = document.createElement("div");
    const cardInput = document.createElement("input");
    const cardIcon = document.createElement("div");
    const imgIcon = document.createElement("img");

    cardInput.classList.add("card-input");
    cardInput.setAttribute("Type", "text");
    cardIcon.classList.add("card-icon");
    imgIcon.src = "icons/trash.png";
    cardIcon.appendChild(imgIcon);
    card.classList.add("card");
    card.setAttribute("draggable", "true");
    card.appendChild(cardInput);
    card.appendChild(cardIcon);
    column[index].appendChild(card);

    cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      card.addEventListener("click", (e) => {
        if (e.target.classList.contains("card-icon")) {
          card.remove();
        }
      });
    });
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
