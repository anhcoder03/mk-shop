const phoneNumberElement = document.querySelector('input[name="phoneNumber"]');
const fullNameElement = document.getElementById("fullname");
const emailElement = document.getElementById("email");
const genderElement = document.getElementsByName("gender");
const submitElement = document.querySelector(".form-submit");
const elementPass = document.querySelector("#password");
const elementRePass = document.querySelector("#re-enter-password");
const errors = {};
let booleans = true;

function checkFullName() {
  const errorMessage =
    fullNameElement.parentElement.querySelector(".form-message");
  const fullnameValue = fullNameElement.value;
  errors["fullName"] = booleans;
  if (fullnameValue == "") {
    fullNameElement.parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập tên của bạn";
    booleans = true;
  } else if (String(fullnameValue).length > 40) {
    fullNameElement.parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập tên của bạn không quá 40 kí tự";
    booleans = true;
  } else {
    booleans = false;
  }
}

fullNameElement.addEventListener("blur", () => {
  checkFullName();
});

fullNameElement.addEventListener("input", () => {
  const errorMessage =
    fullNameElement.parentElement.querySelector(".form-message");

  if (fullNameElement.value != "") {
    fullNameElement.parentElement.classList.remove("invalid");
    errorMessage.innerHTML = "";
  }
});

phoneNumberElement.addEventListener("blur", () => {
  checkPhoneNumber();
});

function checkPhoneNumber() {
  const message = phoneNumberElement.nextElementSibling;
  const parentElement = phoneNumberElement.parentElement;

  if (isNaN(phoneNumberElement.value)) {
    message.innerHTML = "Vui lòng nhập đúng số điện thoại";
    parentElement.classList.add("invalid");
    errors["phoneNumber"] = false;
  } else if (phoneNumberElement.value == "") {
    message.innerHTML = "Vui lòng nhập số điện thoại";
    parentElement.classList.add("invalid");
    errors["phoneNumber"] = false;
  } else if (Number(phoneNumberElement.value) > 0) {
    message.innerHTML = "";
    parentElement.classList.remove("invalid");
    errors["phoneNumber"] = true;
  }
}

function checkEmail() {
  const errorMessage =
    emailElement.parentElement.querySelector(".form-message");
  const emailValue = emailElement.value;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailValue)) {
    emailElement.parentElement.classList.remove("invalid");
    errorMessage.innerHTML = "";
    errors["email"] = false;
  } else {
    emailElement.parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập đúng email của bạn";
    errors["email"] = true;
  }
}
emailElement.addEventListener("blur", () => {
  checkEmail();
});
emailElement.addEventListener("input", () => {
  const errorMessage =
    emailElement.parentElement.querySelector(".form-message");
  const emailValue = emailElement.value;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailValue)) {
    emailElement.parentElement.classList.remove("invalid");
    errorMessage.innerHTML = "";
  }
});

function checkPass() {
  const passwordValue = elementPass.value;
  const passwordLength = passwordValue.length;
  const parentElement = elementPass.parentElement;
  const errorMessage = parentElement.querySelector(".form-message");

  if (passwordValue == "") {
    parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập password";
    errors["password"] = true;
  } else if (passwordLength < 8 || passwordLength > 30) {
    parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập password 8 đến 30 ký tự";
    errors["password"] = true;
  } else {
    parentElement.classList.remove("invalid");
    errorMessage.innerHTML = "";
    errors["password"] = false;
  }
}

elementPass.addEventListener("blur", () => {
  checkPass();
});

elementPass.addEventListener("input", () => {
  const parentElement = elementPass.parentElement;
  const errorMessage = parentElement.querySelector(".form-message");
  parentElement.classList.remove("invalid");
  errorMessage.innerHTML = "";
});

function checkRePassword() {
  const errorMessage = elementRePass.nextElementSibling;
  const passwordValue = elementPass.value;
  const valueRePass = elementRePass.value;
  if (passwordValue != valueRePass) {
    elementRePass.parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Password nhập lại không đúng";
    errors["rePassword"] = true;
  } else if (valueRePass == "") {
    elementRePass.parentElement.classList.add("invalid");
    errorMessage.innerHTML = "Vui lòng nhập lại password";
    errors["rePassword"] = true;
  } else {
    elementRePass.parentElement.classList.remove("invalid");
    errorMessage.innerHTML = "";
    errors["rePassword"] = false;
  }
}

elementRePass.addEventListener("blur", () => {
  checkRePassword();
});

submitElement.addEventListener("click", (e) => {
  e.preventDefault();
  checkPhoneNumber();
  checkFullName();
  checkEmail();
  checkPass();
  checkRePassword();

  let arrayErrors = [];
  arrayErrors = Object.values(errors);
  const check = arrayErrors.find((e) => e == true);
  if (check) {
    return;
  } else {
    alert("Bạn đã đăng ký thành công");
  }
});
