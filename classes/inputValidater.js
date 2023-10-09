export default class inputValidater {
  constructor();

  inputValid(inputField) {
    inputField.classList.remove("input-invalid");
    inputField.classList.add("input-valid");
  }

  inputInvalid(inputField) {
    inputField.classList.remove("input-valid");
    inputField.classList.add("input-invalid");
  }
}