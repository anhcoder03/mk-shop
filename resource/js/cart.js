const selectProductBtn = document.querySelector(".cf_stardust-checkbox__box");
const selectProduct = document.querySelectorAll('input[name="select-product"]');
const selectLength = selectProduct.length;
const checkboxProductBtn = document.getElementById("select-all-products");
const checkboxProduct = document.getElementsByClassName("product__checkbox");
const totalPriceInner = document.querySelector(
  "#total-payments span"
).innerHTML;

for (let i = 0; i < checkboxProduct.length; i++) {
  checkboxProduct[i].addEventListener("click", () => {
    const selectProduct = document.querySelector(
      'input[name="select-product"]'
    );
    console.log(selectProduct.checked);
    const parentElement = checkboxProduct[i].parentElement;
    const price = parentElement.querySelector(
      ".product__amount_money span"
    ).innerHTML;
    const totalPrice = document.querySelector("#total-payments span");
    const totalPriceSelectProduct = (
      Number(price.replace(",", "")) + Number(totalPrice.innerHTML)
    ).toLocaleString("en-US");
    selectProduct.checked
      ? (totalPrice.innerHTML = totalPriceSelectProduct)
      : (totalPrice.innerHTML = totalPriceInner);
  });
}

selectProductBtn.addEventListener("click", () => {
  selectCheckbox(!checkboxProductBtn.checked);
});

function selectCheckbox(value) {
  const selectProduct = document.querySelectorAll(
    'input[name="select-product"]'
  );
  const selectLength = selectProduct.length;

  for (let i = 0; i < selectLength; i++) {
    const parentElement = selectProduct[i].parentElement.parentElement;
    const price = parentElement.querySelector(
      ".product__amount_money span"
    ).innerHTML;
    const totalPrice = document.querySelector("#total-payments span");

    value ? (totalPrice.innerHTML = price) : (totalPrice.innerHTML = 0);
    selectProduct[i].checked = value;
  }
}

// function handleDelete() {
//   const deleteBtn = document.getElementsByClassName("__manipulation--delete");

//   for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener("click", () => {
//       const productItem = deleteBtn[i].parentElement.parentElement;
//       const indexProduct = Number(productItem.dataset.id) - 1;
//       const html = "";
//       localStorage.setItem("addToCart", html);
//       cart.splice(indexProduct, 1);
//       renderCartProduct();
//     });
//   }
// }
// handleDelete();

// const deleteBtn = document.querySelectorAll(".__manipulation--delete");
// [...deleteBtn].forEach((item) =>
//   item.addEventListener("click", function (e) {
//     const cartItem = e.target.parentNode.parentNode;
//     cartItem.parentNode.removeChild(cartItem);

//   })
// );
