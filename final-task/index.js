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

function checkPasswords() {
  const password1 = document.querySelector("#password");
  const password2 = document.querySelector("#password-confirmation");
  const error = document.querySelector(".error-password");
  const fieldset = document.querySelector("#password-confirmation-fieldset");
  let state = false;
  if (password1.value !== password2.value) {
    error.style.visibility = "visible";
    error.textContent = "Passwords don't match";
    fieldset.classList.remove("valid");
    fieldset.classList.add("invalid");
    state = true;
  } else {
    error.style.visibility = "hidden";
    fieldset.classList.remove("invalid");
    fieldset.classList.add("valid");
  }
  return state;
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
      fieldset.classList.add("valid");
      if (index === 2) {
        checkPasswords();
      }
    } else {
      error.style.visibility = "visible";
      fieldset.classList.add("invalid");
      fieldset.classList.remove("valid");
      showError(input, error);
    }
  });
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", (event) => {
  const inputs = document.querySelectorAll("input");
  const arePasswordsMatching = checkPasswords();
  inputs.forEach((input) => {
    if (!input.validity.valid || !arePasswordsMatching) {
      event.preventDefault();
    }
  });
});
