const getStarted = document.getElementById("get-started");
const enterEmailInput = document.getElementById("top-mail-input");
const mailCheck = document.getElementById("check-mail");
const mailEnter = document.getElementById("enter-email");
const form = document.getElementById("form");

const secondButton = document.getElementById("get-free-button");
const secondInput = document.getElementById("input-example");
const secondCheck = document.getElementById("second-check");
const secondEnter = document.getElementById("second-enter");
const secondForm = document.getElementById("second-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
secondForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

function showError() {
  mailEnter.classList.remove("hidden");
  enterEmailInput.style.borderColor = "#EF4877";
  mailCheck.classList.add("hidden");
}
function showCheck() {
  mailCheck.classList.remove("hidden");
  enterEmailInput.style.borderColor = "green";
  mailEnter.classList.add("hidden");
}

getStarted.addEventListener("click", () => {
  if (enterEmailInput.value == "") {
    showError();
  } else {
    showCheck();
  }
});

secondButton.addEventListener("click", () => {
  if (secondInput.value == "") {
    secondEnter.classList.remove("hidden");
    secondInput.style.borderColor = "#EF4877";
    secondCheck.classList.add("hidden");
  } else {
    secondCheck.classList.remove("hidden");
    secondInput.style.borderColor = "white";
    secondEnter.classList.add("hidden");
  }
});
