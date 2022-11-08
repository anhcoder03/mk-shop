const headerElement = document.querySelector("#header");
const productElement = document.querySelector(".panel__list");
const searchElement = document.querySelector(".search__box");
const searchBox = document.querySelector(".search--box");
const products = [
  {
    id: 1,
    name: "Quần short jean nữ lưng cao phối nút cài 2 bên hông - J02",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/905c2ba722dd8a9ba3b9f82fba90ae50_tn",
      srcImg_2: "https://cf.shopee.vn/file/520ef9a95fbe27f8758d95f9ef86fe60",
      srcImg_3: "https://cf.shopee.vn/file/91706c886d5397a5783776d1c891bc6c",
      srcImg_4: "https://cf.shopee.vn/file/33ec232793566f67aeecf3a4d0017bdc",
      srcImg_5: "https://cf.shopee.vn/file/376114d806f5d80b48cb45d9935826f2",
    },
    price: {
      price_of: "125.000",
      price_new: "75.000",
    },
    percentage: "40%",
    quantitySold: "2k",
  },
  {
    id: 2,
    name: "Dép đi trong nhà [Lù Store ] Dép bánh mì hình chibi dễ thương, 3 màu đen, cam, kem, size từ 36-40",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/fc4863a6a34872f738a90951680fa61d",
      srcImg_2: "https://cf.shopee.vn/file/843cfb7e6d7dd349b49db0e895c74342",
      srcImg_3: "https://cf.shopee.vn/file/56951295c29a63fef5bcdad9884fb993",
      srcImg_4: "https://cf.shopee.vn/file/64a5d56ba55823f3abdee40665b892c7",
      srcImg_5: "https://cf.shopee.vn/file/0b4bc7129d4717eeabaa0f8fd8cf9a6e",
    },
    price: {
      price_of: "90.000",
      price_new: "55.000",
    },
    percentage: "41%",
    quantitySold: "23,8k",
  },
  {
    id: 3,
    name: "Áo trễ vai tay phồng chun ngực chun tay, áo kiểu bánh bèo",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/d05a702cc77514080b1ac274556e1c30_tn",
      srcImg_2: "https://cf.shopee.vn/file/9f144917aa2b640bd37272303a245e06",
      srcImg_3: "https://cf.shopee.vn/file/742811b0427e1befea3255349e5b7ea0",
      srcImg_4: "https://cf.shopee.vn/file/07df4486e139d6b80be87071b1998967",
      srcImg_5: "https://cf.shopee.vn/file/11cc39a5f7a54a76c0b887127906ee00",
    },
    price: {
      price_of: "69.000 - 109.000",
      price_new: "68.000",
    },
    percentage: "37%",
    quantitySold: "691",
  },
  {
    id: 4,
    name: "Áo thun nam nữ unisex YOUTH form rộng cổ tròn tay lỡ vải Cotton Mát Mịn FreeSize(38-65Kg) - Nhiều Mẫu - AP",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/8a6260f36907a27e907fe0dfb2afb076_tn",
      srcImg_2: "https://cf.shopee.vn/file/c2425390ba3ac7de508d4243a1559d28",
      srcImg_3: "https://cf.shopee.vn/file/e66ff8d5dfd5c5e8a47a18d5c1f2d4a2",
      srcImg_4: "https://cf.shopee.vn/file/5412382bace2f6d337dd087cd6aaa16d",
      srcImg_5: "https://cf.shopee.vn/file/00cdb794a66170f3f7cab47a0550474e",
    },
    price: {
      price_of: "98.000",
      price_new: "65.000",
    },
    percentage: "34%",
    quantitySold: "5,6k",
  },
  {
    id: 5,
    name: "Mũ lưỡi trai Nón kết thêu chữ Memorie And Forever phong cách Ulzzang form unisex nam nữ",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/fd7a2f7b6216a9a849399335c613b4a5_tn",
      srcImg_2: "https://cf.shopee.vn/file/673aeb6c2875d27ebbabca8ef0ed3a9f",
      srcImg_3: "https://cf.shopee.vn/file/23bca222377488a27c41cde9177ef215",
      srcImg_4: "https://cf.shopee.vn/file/fd7a2f7b6216a9a849399335c613b4a5",
      srcImg_5: "https://cf.shopee.vn/file/cd00eb7c7e1b9387a4d3a7157234641d",
    },
    price: {
      price_of: "65.000",
      price_new: "27.000",
    },
    percentage: "58%",
    quantitySold: "1,5k",
  },
  {
    id: 6,
    name: "Dép nữ quai ngang BALEN cao cấp êm nhẹ",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/0be9d1aee55bf4baedea9f3967e8e149_tn",
      srcImg_2: "https://cf.shopee.vn/file/f91ac39877b15b8c9764ca0c290f98b2",
      srcImg_3: "https://cf.shopee.vn/file/d56f4e22da7699275afbaa97ffe441e4",
      srcImg_4: "https://cf.shopee.vn/file/e7602c79bb8a9871c57ef2a00107c9ea",
      srcImg_5: "https://cf.shopee.vn/file/d624866812aed527dd40373d09a07933",
    },
    price: {
      price_of: "120.000",
      price_new: "69.000",
    },
    percentage: "43%",
    quantitySold: "2,3k",
  },
  {
    id: 7,
    name: "Áo Polo nam cổ bẻ vải cá sấu Cotton Cao Cấp, thiết kế phong cách basic sang trọng lịch lãm POMANO",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/4c7963a37823bdd3cf1d6272b6622507",
      srcImg_2: "https://cf.shopee.vn/file/c204d83ec2ca5538fb17dc6d9af0e0e7",
      srcImg_3: "https://cf.shopee.vn/file/421a3090b0fc9eb6d300fb2d309250a4",
      srcImg_4: "https://cf.shopee.vn/file/e7602c79bb8a9871c57ef2a00107c9ea",
      srcImg_5: "https://cf.shopee.vn/file/a9ac01c6fc24bf3f05453231467e16ce",
    },
    price: {
      price_of: "320.000",
      price_new: "262.400",
    },
    percentage: "18%",
    quantitySold: "365",
  },
  {
    id: 8,
    name: "Mắt Kính Giả Cận Phong Cách Retro Thời Trang",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/5e1aba516702afd1b4fe05ffa4e15a15_tn",
      srcImg_2: "https://cf.shopee.vn/file/77bb35fcdf15f9359e3ca7059215bc20",
      srcImg_3: "https://cf.shopee.vn/file/002e0b3a55709ad8bb3eed257bffac19",
      srcImg_4: "https://cf.shopee.vn/file/534d053fca2bfc80a7581740d5cca6dc",
      srcImg_5: "https://cf.shopee.vn/file/2769603a770082874a0c72fdf5d26d96",
    },
    price: {
      price_of: "18.000",
      price_new: "13.500",
    },
    percentage: "25%",
    quantitySold: "126",
  },
  {
    id: 9,
    name: "Đèn ngủ LED đổi màu hình hoạt hình Baymax xinh xắn",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/5ab747468537cb25e026fbe028de1a1f_tn",
      srcImg_2: "https://cf.shopee.vn/file/bc3528642e401199e15b781a6ed869b7",
      srcImg_3: "https://cf.shopee.vn/file/f0a98fb126b47802b40c1c148e6c3a2a",
      srcImg_4: "https://cf.shopee.vn/file/afab846913c64c12d0bc1f0a3e08dec1",
      srcImg_5: "https://cf.shopee.vn/file/ff770a3b8c6098e38b4c481e4dad2f6f",
    },
    price: {
      price_of: "22.000",
      price_new: "11.490",
    },
    percentage: "48%",
    quantitySold: "290",
  },
  {
    id: 10,
    name: "VÁY ĐEN TRỄ VAI THIẾT KẾ NƠ KEM NGỰC SIÊU SANG CHẢNH",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/34237aa48b6f53d92423db61ae23e038_tn",
      srcImg_2: "https://cf.shopee.vn/file/74095bcc78d3b669a2ffc1ab3c4c963b",
      srcImg_3: "https://cf.shopee.vn/file/8fdd0a692aac9cd8af06a8d0edef7b6f",
      srcImg_4: "https://cf.shopee.vn/file/8fdd0a692aac9cd8af06a8d0edef7b6f",
      srcImg_5: "https://cf.shopee.vn/file/bb62d62bcb181f7d0d6dcf922770a618",
    },
    price: {
      price_of: "266.000",
      price_new: "149.500",
    },
    percentage: "44%",
    quantitySold: "52",
  },
  {
    id: 11,
    name: "Quần jean nữ ống rộng chất đẹp JS03 Hexany, Quần jeans nữ ống rộng dáng suông phong cách Hàn Quốc",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/a3fa47bc9e2c24dea394162a603d9abd_tn",
      srcImg_2: "https://cf.shopee.vn/file/e6e4cee180ff17d568135b76f7ef3079",
      srcImg_3: "https://cf.shopee.vn/file/8fdd0a692aac9cd8af06a8d0edef7b6f",
      srcImg_4: "https://cf.shopee.vn/file/8fdd0a692aac9cd8af06a8d0edef7b6f",
      srcImg_5: "https://cf.shopee.vn/file/bb62d62bcb181f7d0d6dcf922770a618",
    },
    price: {
      price_of: "43.600 - 218.000",
      price_new: "21.800",
    },
    percentage: "50%",
    quantitySold: "1,2k",
  },
  {
    id: 12,
    name: "Dép nam và nữ đế cao 5cm cực đẹp , chất liệu EVA siêu êm mẫu mới 2021",
    src: {
      srcImg_1: "https://cf.shopee.vn/file/1775040a09509614468b28c116b77b94_tn",
      srcImg_2: "https://cf.shopee.vn/file/72437f5c8d43fd920b47390368925942",
      srcImg_3: "https://cf.shopee.vn/file/5a2d0e70db65ce5decff67ab90d46571",
      srcImg_4: "https://cf.shopee.vn/file/8fe1e77b51ca5e1c02c0b7d1daad9d1e",
      srcImg_5: "https://cf.shopee.vn/file/0e081d9f72981c7c79ce7e7b15d86eba",
    },
    price: {
      price_of: "160.000",
      price_new: "83.000",
    },
    percentage: "48%",
    quantitySold: "5,9",
  },
];
const cart = [];

if (searchElement) {
  searchElement.addEventListener("mouseover", () => {
    searchBox.style.width = "280px";
  });
  searchElement.addEventListener("mouseout", () => {
    searchBox.style.width = "40px";
  });
}

function redering() {
  const html = products.map((product) => {
    return `
      <div class="panel__item col-lg-2">
        <a href="./pages/product_detail.html" class="product__link" data-id="${product.id}">
          <div class="product__wrapper">
            <div class="product-image">
              <img src="${product.src.srcImg_1}" alt="">
            </div>
            <div class="product__content">
              <div class="name-product_wrapper">
                <p class="name-product">${product.name}</p>
              </div>
              <div class="price-product">
                <span class="price">đ${product.price.price_new}</span>
                <p class="quantity-sold">đã bán ${product.quantitySold}</p>
              </div>
            </div>
          </div>
        </a>
      </div>`;
  });

  if (productElement) {
    productElement.innerHTML = html.join("");
  }
}
redering();

const product = document.querySelectorAll(".product__link");
const pageProduct = document.querySelector("#page-product");

for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", () => {
    const idProduct = product[i].dataset.id;
    localStorage.setItem("productDetail", idProduct);
  });
}

const pageProductDetail = document.querySelector("#main-product-detail");
function rederingImgProduct() {
  const idProduct = localStorage.getItem("productDetail");
  const dataProduct = products.find((product) => product.id == idProduct);

  pageProductDetail.innerHTML = `
    <div class="product-briefing">
      <div class="product__image">
        <div class="image__shown">
          <img src="${dataProduct.src.srcImg_1}" alt="">
        </div>
        <div class="image__item-wrapper">
          <div class="image__item">
            <img src="${dataProduct.src.srcImg_1}" alt="">
          </div>
          <div class="image__item">
            <img src="${dataProduct.src.srcImg_2}" alt="">
          </div>
          <div class="image__item">
            <img src="${dataProduct.src.srcImg_3}" alt="">
          </div>
          <div class="image__item">
            <img src="${dataProduct.src.srcImg_4}" alt="">
          </div>
          <div class="image__item">
            <img src="${dataProduct.src.srcImg_5}" alt="">
          </div>
        </div>
      </div>
      <div class="product__information">
        <div class="product__information-wrapper">
          <div>
            <div class="product__name--title">
              <p class="_name--title">${dataProduct.name}</p>
            </div>
            <div class="product--assess-container">
              <div class="product-assess-wrapper">
                <div class="_product--assess">
                  <span class="_assess">4.0</span>
                </div>
                <div class="_product--star">
                  <i class="fa-solid fa-star _star"></i>
                  <i class="fa-solid fa-star _star"></i>
                  <i class="fa-solid fa-star _star"></i>
                  <i class="fa-solid fa-star _star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
              <div class="_product--quantity-sold">
                <span class="_quantity">${dataProduct.quantitySold}</span>
                <span class="_sold">đã bán</span>
              </div>
            </div>
            <div class="product--price">
              <div class="_product-price-of">
                <p class="price-of">đ${dataProduct.price.price_of}</p>
              </div>
              <div class="_product-price-new">
                <p class="price-new">đ${dataProduct.price.price_new}</p>
              </div>
              <div class="_product-percentage-discount">
                <p class="percentage-discount">${dataProduct.percentage} giảm</p>
              </div>
            </div>
            <div class="_product--quantity-wrapper">
              <div class="_product--quantity">
                <p class="__quantity">Số lượng</p>
              </div>
              <div class="_product--selected">
                <button class="btn btn-reduce">-</button>
                <input type="text" name="" class="input__product--selected" value="1">
                <button class="btn btn-increase">+</button>
              </div>
              <div class="_product--total-products">
                <p class="total-products">1566</p>
                <p>sản phẩm</p>
              </div>
            </div>
          </div>
          <div class="_product--cart_buy">
            <a href="./cart".html class="add--cart">
              <i class="fa-solid fa-cart-plus"></i>
              <p>Thêm vào giỏ hàng</p>
            </a>
          </div>
        </div>
      </div>
    </div>`;

  const addToCart = document.querySelector(".add--cart");
  addToCart.addEventListener("click", (e) => {
    let carts = localStorage?.getItem("addToCart")
      ? JSON.parse(localStorage.getItem("addToCart"))
      : [];
    const idProduct = localStorage.getItem("productDetail");
    const idx = carts.findIndex((product) => {
      return product.id === idProduct;
    });
    const quantity = document.querySelector(".input__product--selected");
    const htmlCv = {
      id: idProduct,
      name: dataProduct.name,
      src: dataProduct.src.srcImg_1,
      priceNew: dataProduct.price.price_new,
      priceOf: dataProduct.price.price_of,
      quantity: quantity.value,
    };
    console.log(quantity.value);
    idx !== -1
      ? (carts[idx].quantity = +quantity.value + +carts[idx].quantity)
      : carts.push(htmlCv);
    localStorage?.setItem("addToCart", JSON.stringify(carts));
  });
}

if (pageProductDetail) {
  rederingImgProduct();
}

const cartProduct = document.getElementById("cart-product");

function renderCartProduct() {
  const dbCartJson = localStorage.getItem("addToCart");
  const dbCart = JSON.parse(dbCartJson);
  const html = dbCart.map((e) => {
    const priceNewNumber = Number(e.priceNew.replace(".", ""));
    const price = (priceNewNumber * e.quantity).toLocaleString("en-US");
    return `
      <div class="cart-product--item" data-id="${e.id}">
        <div class="product__checkbox">
          <input type="checkbox" name="select-product">
        </div>
        <div class="product__img-title">
          <div class="__img-title">
            <div class="__img-product">
              <img src="${e.src}" alt="">
            </div>
            <div class="__img-title">
              <p>${e.name}</p>
            </div>
          </div>
        </div>
        <div class="product__unit_price">
            <p class="unit-price-of">đ${e.priceOf}</p>
            <p class="unit-price-new">đ${e.priceNew}</p>
        </div>
        <div class="product__amount">
          <input type="text" name="" class="input__product--selected" value="${e.quantity}">
        </div>
        <div class="product__amount_money">đ<span>${price}</span></div>
        <div class="product__manipulation">
          <p class="__manipulation--delete">Xoá</p>
        </div>
      </div>`;
  });
  cartProduct.innerHTML = html.join(" ");
}

if (cartProduct) {
  renderCartProduct();
}

const deleteBtn = document.querySelectorAll(".__manipulation--delete");
[...deleteBtn].forEach((item) =>
  item.addEventListener("click", function (e) {
    const cartItem = e.target.parentNode.parentNode;
    cartItem.parentNode.removeChild(cartItem);
    const cartId = cartItem.dataset.id;
    const dbCartJson = localStorage.getItem("addToCart");
    const dbCart = JSON.parse(dbCartJson);
    const newCarts = dbCart.filter((item) => item.id !== cartId);
    localStorage.setItem("addToCart", JSON.stringify(newCarts));
  })
);
