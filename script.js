const nameField = document.getElementById("name");
const email = document.getElementById("mail");
const submit = document.getElementById("submit");
const input = document.querySelectorAll("input");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const verify = document.getElementById("verify");

function emailValidityCheck() {
  if (email.validity.typeMismatch || !email.value.includes(".")) {
    email.setCustomValidity("Please Enter a Valid Email Address");
  } else {
    email.setCustomValidity("");
  }
}

function nameValidityCheck() {
  if (nameField.value == null || nameField.value.trim() == "") {
    nameField.setCustomValidity("Name cannot be blank");
  } else {
    nameField.setCustomValidity("");
  }
}

function countryValidityCheck() {
  if (country.value === "") {
    country.setCustomValidity("Please select a country");
  } else {
    country.setCustomValidity("");
  }
}

function zipValidityCheck() {
  if (zipcode.validity.patternMismatch || zipcode.value === "") {
    zipcode.setCustomValidity("Please Enter a 5 Digit Zip Code");
  } else {
    zipcode.setCustomValidity("");
  }
}

function passwordValidityCheck() {
  let passwordCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})"
  );
  if (password.value.match(passwordCheck)) {
    password.setCustomValidity("");
  } else {
    password.setCustomValidity(
      "Password must be 12 characters long, include 1 lowercase, 1 uppercase, 1 numeric character and one special character"
    );
  }
}

function verifyPassword() {
  if (verify.value !== password.value) {
    verify.setCustomValidity("Passwords Do Not Match");
  } else {
    verify.setCustomValidity("");
  }
}

verify.addEventListener("input", verifyPassword);
verify.addEventListener("focusin", verifyPassword);

password.addEventListener("input", passwordValidityCheck);
password.addEventListener("focusin", passwordValidityCheck);
password.addEventListener("focusout", passwordValidityCheck);

zipcode.addEventListener("input", zipValidityCheck);
zipcode.addEventListener("focusin", zipValidityCheck);
zipcode.addEventListener("focusout", zipValidityCheck);

email.addEventListener("input", emailValidityCheck);
email.addEventListener("focusin", emailValidityCheck);
email.addEventListener("focusout", emailValidityCheck);

nameField.addEventListener("input", nameValidityCheck);
nameField.addEventListener("focusout", nameValidityCheck);
nameField.addEventListener("focusin", nameValidityCheck);

country.addEventListener("change", countryValidityCheck);
country.addEventListener("focusout", countryValidityCheck);
