const color = document.getElementById("color");
const book = document.getElementsByClassName("book");
const myul = document.getElementById("myul");
const removeElement = document.getElementById("removeElement");
const removeLastChild = document.getElementById("removeLastChild");
const lastChild = document.getElementById("lastChild");
const imageSrc = document.getElementById("imageSrc");
const imageClass = document.getElementById("imageClass");
const paraId = document.getElementById("paraId");
const paraButtonId = document.getElementById("paraButtonId");

color.textContent = "IDK";
book[0].style.backgroundColor = "blue";

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";

document.body.appendChild(newDiv);

const newLi = document.createElement("li");
newLi.textContent = "5";
myul.appendChild(newLi);

removeElement.remove();
removeLastChild.removeChild(lastChild);

imageSrc.src =
  "data:image/jpeg;base64,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";

imageSrc.classList.remove("imageClass");

paraButtonId.addEventListener("click", function () {
  paraId.textContent = "para";
});

paraButtonId.addEventListener("mouseenter", (event) => {
  event.target.style.border = "1px solid red";
});