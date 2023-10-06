const log = console.log;

const form = document.querySelector("#sign-up-form");

const inputs = document.querySelectorAll("input");

/* const password = document.querySelector("#user-pass");
const confirmPassword = document.querySelector("#confirm-pass");

const submitBtn = document.querySelector("#submit-form-btn"); */

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    log(event.target);
    const inputValid = event.target.checkValidity();
    log(inputValid);
    const siblingSpan = event.target.nextElementSibling;
    log(siblingSpan);
    if (inputValid) {
      /* siblingSpan.classlist.add('inputValid') */
    } else {
      /* siblignSPan.classList.add('inputInvalid) */
    }
  });
});

/* some kind of loop to add valid/invalid classes to inputs, when user is
  finished with an input (blur?)
  check if they have an isValid property or something,
  can then apply valid/invalid-input class to show checkmark/error and 
  hide / unhide descriptive labels telling how to fix the issue.
*/

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value === confirmPassword.value) {
    form.submit();
    log("form submitted");
  } /* else {
    log("error");
  } */
});
