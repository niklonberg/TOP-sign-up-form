const log = console.log;

const form = document.querySelector("#sign-up-form");

const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");

const submitBtn = document.querySelector("#submit-form-btn");

/* form.addEventListener("submit", (event) => {
  event.preventDefault();
}); */

submitBtn.addEventListener("click", (event) => {
  log(event);
});
