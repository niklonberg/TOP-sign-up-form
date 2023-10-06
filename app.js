const log = console.log;

const form = document.querySelector("#sign-up-form");

const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");

const submitBtn = document.querySelector("#submit-form-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value === confirmPassword.value) {
    form.submit();
    log("form submitted");
  } else {
    password.classList.add("input-invalid");
    confirmPassword.classList.add("input-invalid");
    log("error");
  }
});

/* some kind of loop to add valid/invalid classes to inputs, when user is
  finished with an input (blur?)
  check if they have an isValid property or something,
  can then apply valid/invalid-input class to show checkmark/error and 
  hide / unhide descriptive labels telling how to fix the issue.
*/

/* submitBtn.addEventListener("click", (event) => {}); */
