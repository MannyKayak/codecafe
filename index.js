// function increase(id) {
//   const element = document.getElementById(id);
//   element.textContent = parseInt(element.textContent) + 1;
// }
// function getButtons() {
//   const addEspressoButton = document.getElementById("add-espresso");
//   const addCappuccinoButton = document.getElementById("add-cappuccino");
//   const addColdBrewButton = document.getElementById("add-coldbrew");
//   const addGreenTeaButton = document.getElementById("add-greentea");
//   const addBlackTeaButton = document.getElementById("add-blacktea");
//   const addHerbTeaButton = document.getElementById("add-herbtea");
//   const addCheesecakeButton = document.getElementById("add-cheesecake");
//   const addCroissantButton = document.getElementById("add-croissant");
//   const addMuffinButton = document.getElementById("add-muffin");

//   addEspressoButton.addEventListener("click", increase("espresso-quantity"));
//   addCappuccinoButton.addEventListener(
//     "click",
//     increase("cappuccino-quantity")
//   );
//   addColdBrewButton.addEventListener("click", increase("coldBrew-quantity"));
//   addGreenTeaButton.addEventListener("click", increase("greenTea-quantity"));
//   addBlackTeaButton.addEventListener("click", increase("blackTea-quantity"));
//   addHerbTeaButton.addEventListener("click", increase("herbTea-quantity"));
//   addCheesecakeButton.addEventListener(
//     "click",
//     increase("cheesecake-quantity")
//   );
//   addCroissantButton.addEventListener("click", increase("croissant-quantity"));
//   addMuffinButton.addEventListener("click", increase("muffin-quantity"));
// }

// window.addEventListener("load", function () {
//   getButtons();
// });

function increaseQuantity(id) {
  const element = document.querySelector(id);
  const count = (parseInt(element.innerHTML) + 1).toString();
  element.innerHTML = count;
}

function toggleTheme() {
  const htmlElement = document.querySelector("html");
  const theme = htmlElement.getAttribute("page-theme");
  htmlElement.setAttribute("page-theme", theme === "light" ? "dark" : "light");
}
