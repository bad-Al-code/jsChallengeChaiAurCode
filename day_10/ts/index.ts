// TypeScript Version

const addItemButton = document.getElementById(
  "addItemButton",
) as HTMLButtonElement;
const myList = document.getElementById("myList") as HTMLUListElement;
const hrSelect = document.getElementById("hr-select") as HTMLSelectElement;
const dropdownText = document.getElementById(
  "dropdownText",
) as HTMLParagraphElement;
const form = document.querySelector("form") as HTMLFormElement;
const inputText = document.getElementById("inputText") as HTMLInputElement;
const log = document.getElementById("log") as HTMLParagraphElement;
const buttonText = document.getElementById("textButton") as HTMLButtonElement;
const imageSrc = document.getElementById("imageSrc") as HTMLImageElement;

buttonText.addEventListener("click", () => {
  buttonText.textContent = "Text";
});

imageSrc.addEventListener("dblclick", () => {
  imageSrc.style.opacity = imageSrc.style.opacity === "0" ? "1" : "0";
});

buttonText.addEventListener("mouseover", () => {
  buttonText.style.background = "red";
});

buttonText.addEventListener("mouseout", () => {
  buttonText.style.background = "none";
});

inputText.addEventListener("keydown", (e: KeyboardEvent) => {
  console.log(e.code);
});

inputText.addEventListener("keyup", (e: KeyboardEvent) => {
  log.textContent += `${e.code}`;
});

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  console.log((target[0] as HTMLInputElement).value);
});

hrSelect.addEventListener("change", (e: Event) => {
  const target = e.target as HTMLSelectElement;
  dropdownText.textContent = `Your favorite food is: ${target.value}`;
});

myList.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement;
  if (target && target.nodeName === "LI") {
    console.log(target.textContent);
  }
});

addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${myList.children.length + 1}`;
  myList.appendChild(newItem);
});
