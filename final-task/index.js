const form = document.querySelector("form");
const fieldsets = document.querySelectorAll("fieldset");
fieldsets.forEach((fieldset, index) => {
  const input = fieldset.querySelector("input");
  const error = document.querySelectorAll(".error")[index];
  input.addEventListener("input", () => {
    if (input.validity.valid) {
      error.textContent = "";
      fieldset.classList.remove("invalid");
    } else {
      fieldset.classList.add("invalid");
      showError(input, error);
    }
  });
});

function showError(input, error) {
  if (input.validity.valueMissing) {
    error.textContent = "This field is required";
  }
  if (input.validity.tooShort) {
    error.textContent = `${input.name} must be at least ${input.minLength} characters long`;
  }
  if (input.validity.patternMismatch) {
    error.textContent =
      "Password must contain minimun 1 uppercase letter, one lowercase letter and one number";
  }
}
