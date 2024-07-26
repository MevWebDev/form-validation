function showError(input, error) {
  if (input.validity.valueMissing) {
    error.textContent = "This field is required";
  }
  if (input.validity.typeMismatch) {
    error.textContent = "It's no email";
  }
  if (input.validity.tooShort) {
    error.textContent = `Too short`;
  }
  if (input.validity.patternMismatch) {
    error.textContent =
      "Password needs 1 uppercase, 1 lowercase, and 1 number.";
  }
}
const fieldsets = document.querySelectorAll("fieldset");
fieldsets.forEach((fieldset, index) => {
  const input = fieldset.querySelector("input");
  const error = document.querySelectorAll(".error")[index];
  input.addEventListener("input", () => {
    if (input.validity.valid) {
      error.textContent = "";
      fieldset.classList.remove("invalid");
      error.style.visibility = "hidden";
    } else {
      error.style.visibility = "visible";
      fieldset.classList.add("invalid");
      showError(input, error);
    }
  });
});
