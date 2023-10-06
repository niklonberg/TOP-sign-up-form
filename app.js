const log = console.log;

const form = document.querySelector("#sign-up-form");

const inputs = document.querySelectorAll("input");

/* const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");

const submitBtn = document.querySelector("#submit-form-btn"); */

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    const input = event.target;
    const inputValid = input.checkValidity();
    const siblingSpan = input.nextElementSibling;

    siblingSpan.classList.remove("display-none");

    if (inputValid) {
      input.classList.remove("input-invalid");
      input.classList.add("input-valid");
    } else {
      input.classList.remove("input-valid");
      input.classList.add("input-invalid");
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value === confirmPassword.value) {
    form.submit();
    log("form submitted");
  } /* else {
    log("error");
  } */
});
