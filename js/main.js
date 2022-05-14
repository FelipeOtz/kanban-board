const addButton = document.querySelectorAll(".add-item");
const columns = document.querySelectorAll(".items");
const icons = document.querySelectorAll(".icon");

const board = document.querySelector(".board");
const cardIcon = document.querySelectorAll("card-icon");
let tasks = localStorage ? JSON.parse(localStorage.getItem("cards")) : [];

if (tasks != null) {
  tasks.forEach((task) => {
    addCard(task.column, task.content);
  });
}

function addCard(index, content) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("draggable", "true");
  card.innerHTML = `
            <input type="text" class="card-input" value="${content}"/>
            <div class="card-icon"><img src="icons/trash.png" alt="" /></div>
          `;
  columns[index].appendChild(card);
  handlecard();
}

addButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    addCard(index, "");
    updateItems();
  });
});

function handlecard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("card-icon")) {
        card.remove();
        updateItems();
      }
    });

    card.addEventListener("dragstart", (e) => {
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", (e) => {
      card.classList.remove("dragging");
      updateItems();
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
    updateItems();
  });

  column.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("card-input")) {
      updateItems();
    }
  });
});

function updateItems() {
  tasks = [];
  const items = document.querySelectorAll(".card-input");
  let columnIndex = 0;
  items.forEach((item) => {
    switch (item.parentElement.parentElement.id) {
      case "nao-iniciadas":
        columnIndex = 0;
        break;
      case "em-andamento":
        columnIndex = 1;
        break;
      case "concluidas":
        columnIndex = 2;
        break;
    }
    tasks.push({
      column: columnIndex,
      content: item.value,
    });
  });

  localStorage.setItem("cards", JSON.stringify(tasks));
}
updateItems();
handlecard();
