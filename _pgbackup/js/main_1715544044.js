document.addEventListener("DOMContentLoaded", function() {
const list = ["red-glasses", "white-glasses"];
const visibles = [true, false,];
const setVisible = (button, entities, visible) => {
  if (visible) {
    button.classList.add("selected");
  } else {
    button.classList.remove("selected");
  }
  entities.forEach((entity) => {
    entity.setAttribute("visible", visible);
  });
}
list.forEach((item, index) => {
  const button = document.querySelector("#" + item);
  const entities = document.querySelectorAll("." + item + "-entity");
  setVisible(button, entities, visibles[index]);
  button.addEventListener('click', () => {
    visibles[index] = !visibles[index];
    setVisible(button, entities, visibles[index]);
  });
});
})

