const selectedColor = document.querySelectorAll(".__color-item");
const reduceBtn = document.querySelector(".btn-reduce");
const increaseBtn = document.querySelector(".btn-increase");
const inputSelected = document.querySelector(".input__product--selected");
const nameProduct = document.querySelector("._name--title");
document.title = nameProduct.innerHTML;
const imageItem = document.querySelectorAll(".image__item");
const imageShow = document.querySelector(".image__shown");
const imageItemShow = document.querySelector(".image__shown img").src;
const addToCart = document.querySelector(".cart-link");

for (let i = 0; i < imageItem.length; i++) {
  imageItem[i].addEventListener("mousemove", () => {
    imageShow.childNodes[1].setAttribute("src", imageItem[i].childNodes[1].src);
  });

  imageItem[i].addEventListener("mouseout", () => {
    imageShow.childNodes[1].setAttribute("src", imageItemShow);
  });
}

for (let i = 0; i < selectedColor.length; i++) {
  selectedColor[i].addEventListener("click", () => {
    removeActiveColor();
    selectedColor[i].classList.toggle("active-color");
  });
}

function removeActiveColor() {
  for (let i = 0; i < selectedColor.length; i++) {
    if (selectedColor[i].classList.contains("active-color")) {
      selectedColor[i].classList.remove("active-color");
    }
  }
}

reduceBtn.addEventListener("click", () => {
  if (inputSelected.value == 1) {
    inputSelected.value = 1;
  } else {
    inputSelected.value = inputSelected.value - 1;
  }
});
increaseBtn.addEventListener("click", () => {
  inputSelected.value = Number(inputSelected.value) + 1;
});
