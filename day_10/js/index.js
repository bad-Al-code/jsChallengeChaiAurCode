const addItemButton = document.getElementById("addItemButton");
const myList = document.getElementById("myList");
const hrSelect = document.getElementById("hr-select");
const dropdownText = document.getElementById("dropdownText");
const form = document.querySelector("form");
const inputText = document.getElementById("inputText");
const log = document.getElementById("log");
const buttonText = document.getElementById("textButton");
const imageSrc = document.getElementById("imageSrc");

buttonText.addEventListener("click", () => {
  buttonText.textContent = "Text";
});

imageSrc.addEventListener("dblclick", () => {
  if (imageSrc.style.opacity === "0") {
    imageSrc.style.opacity = "1";
  } else {
    imageSrc.style.opacity = "0";
  }
});

buttonText.addEventListener("mouseover", (e) => {
  buttonText.style.background = "red";
});

buttonText.addEventListener("mouseout", (e) => {
  buttonText.style.background = "none";
});

inputText.addEventListener("keydown", (e) => {
  console.log(e.code);
});

inputText.addEventListener("keyup", (e) => {
  log.textContent += `${e.code}`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target[0].value);
});

hrSelect.addEventListener("change", (e) => {
  dropdownText.textContent = ` Your favorite food is: ${e.target.value}`;
});

myList.addEventListener("click", (event) => {
  // https://www.freecodecamp.org/news/event-delegation-javascript/
  if (event.target && event.target.nodeName === "LI") {
    console.log(event.target.textContent);
  }
});

addItemButton.addEventListener("click", () => {
  // https://forum.freecodecamp.org/t/adding-an-event-listener-to-dynamically-created-elements/185906/3
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${myList.children.length + 1}`;
  myList.appendChild(newItem);
});
