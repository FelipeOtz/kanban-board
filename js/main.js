const addButton = document.querySelectorAll(".add-item");
const columns = document.querySelectorAll(".items");
const icons = document.querySelectorAll(".icon");

const board = document.querySelector(".board");
const cardIcon = document.querySelectorAll("card-icon");
let tasks = [];

function addCard(index) {
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
  columns[index].appendChild(card);
  handlecard();
}

addButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    addCard(index);
  });
});

function handlecard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("card-icon")) {
        card.remove();
      }
    });

    card.addEventListener("dragstart", (e) => {
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", (e) => {
      card.classList.remove("dragging");
    });

    card.addEventListener("mouseover", (e) => {
      const icon = card.querySelector(".card-icon");
      icon.classList.add("active");
      setTimeout(() => {
        icon.classList.remove("active");
      }, 2000);
    });
  });
}

columns.forEach((column, index) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingElement = document.querySelector(".dragging");
    column.appendChild(draggingElement);
  });

  column.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("card-input")) {
      const input = e.target;
      updateItems();
      console.log(input);
    }
  });
});

function updateItems() {
  const items = document.querySelectorAll(".card-input");
  items.forEach((item) => {
    console.log(items);
  });

  /* tasks.push({
      column: 3,
      content: 4,
    }); */
}

handlecard();
