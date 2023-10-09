const log = console.log;

import InputValidate from "/classes/inputValidater.js";
const InputValidater = new InputValidate();

const form = document.querySelector("#sign-up-form");
const inputs = document.querySelectorAll("input");

const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value === confirmPassword.value) {
    form.submit();
    log("form submitted");
  }
});
