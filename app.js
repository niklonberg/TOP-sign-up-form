const log = console.log;

import InputValidate from "./classes/inputValidater.js";
const InputValidater = new InputValidate();

const form = document.querySelector("#sign-up-form");
const inputs = document.querySelectorAll("input");

const phone = document.querySelector("#user-phone");

const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");
const showPassword = document.querySelector("#showPassword");
const passwordFieldState = document.querySelector("#passwordFieldState");

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    const input = event.target;
    const inputIsValid = input.checkValidity();
    const siblingSpan = input.nextElementSibling;

    siblingSpan.classList.remove("display-none");

    if (input.id === confirmPassword.id && input.value !== password.value) {
      InputValidater.inputInvalid(input);
    } else if (inputIsValid) {
      InputValidater.inputValid(input);
    } else {
      InputValidater.inputInvalid(input);
    }
  });
});

phone.addEventListener("input", () => {
  phone.value = phone.value.replace(/[^0-9-]/g, "");
});

showPassword.addEventListener("click", () => {
  let passwordType = "text";
  let passwordBtnState = "hide";
  let passwordFieldStateVisibility = "visible";

  if (password.type === "text") {
    passwordType = "password";
    passwordBtnState = "show";
    passwordFieldStateVisibility = "hidden";
  }

  password.type = passwordType;
  confirmPassword.type = passwordType;
  showPassword.textContent = `${passwordBtnState} password`;
  passwordFieldState.textContent = `Your password is ${passwordFieldStateVisibility}`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value === confirmPassword.value) {
    form.submit();
    log("form submitted");
  }
});
