const slideListImg = document.getElementById("slide-list-img");
const slideItems = document.getElementsByClassName("list-item");
const dotBtn = document.getElementById("order-item");
const dotItems = document.querySelectorAll(".slider-dot-item");
const slideItemsW = slideItems[0].offsetWidth;
const slideLength = slideItems.length;
let positionX = 0;
let order = 1;
let index = 0;

dotItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    dotItems.forEach((element) => element.classList.remove("select-dot"));
    item.classList.add("select-dot");
    const slideIndex = e.target.dataset.index;
    index = slideIndex;
    positionX = -1 * index * slideItemsW;
    slideListImg.style = `transform: translateX(${positionX}px)`;
  });
});

let number = 2;
setInterval(() => {
  if (number < index || number > index) {
    dotItems.forEach((element) => element.classList.remove("select-dot"));
    number++;
  }

  if (index > slideLength - 1) {
    positionX = 0;
    index = 0;
    slideListImg.style = `transform: translateX(${0}px); transition: all 0ms ease .25s;`;
    return;
  }

  if (index < slideLength - 1) {
    if (index == 0) {
      index = 1;
    }
    const getDotItems = dotItems.item(index);
    getDotItems.classList.add("select-dot");
  }

  positionX = -1 * index * slideItemsW;
  index++;
  if (index <= slideLength || index >= 0) {
    slideListImg.style = `transform: translateX(${positionX}px); transition: all 500ms ease 0s;`;
  }
}, 2000);
