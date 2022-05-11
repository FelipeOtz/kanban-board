const addButton = document.querySelectorAll(".add-item");
const column = document.querySelectorAll(".items");
const icon = document.querySelectorAll(".icon");

addButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = document.createElement("input");
    card.classList.add("item-input");
    card.setAttribute("contenteditable", "");
    column[index].appendChild(card);
  });
});

addButton.forEach((btn, index) => {
  btn.addEventListener("dblclick", () => {
    column[index].removeChild;
  });
});

function changeIcons(colIndex, icon) {
  if (colIndex === 1) {
  }
}
