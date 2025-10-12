let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let msgError = document.getElementById("msg-error");
let submitError = document.getElementById("submit-error");
let sBtn = document.getElementById("s-btn");

function nameValidation() {
  let name = document.getElementById("fullName").value;
  if (name === "") {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter full name";
    return false;
  }
  nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green"></i>`;
  return true;
}

function phoneValidation() {
  let phone = document.getElementById("phoneNo").value;
  if (phone === "") {
    phoneError.innerHTML = "Phone is required";
    return false;
  }
  if (!phone.match(/^[0-9]*$/)) {
    phoneError.innerHTML = "Enter number";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "Must be 10 digit";
    return false;
  }
  phoneError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green"></i>`;
  return true;
}

function emailValidation() {
  let email = document.getElementById("email").value;
  if (email === "") {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }
  emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green"></i>`;
  return true;
}

function msgValidation() {
  let msg = document.getElementById("message").value;
  if (msg === "") {
    msgError.innerHTML = "Message is required";
    return false;
  }
  if (msg.slice().toString().length < 30) {
    msgError.innerHTML = "At least 30 character is required";
    return false;
  }
  msgError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green"></i>`;
  return true;
}

function submitValidation(event) {
  event.preventDefault();
  if (
    nameValidation() &&
    phoneValidation() &&
    emailValidation() &&
    msgValidation()
  ) {
    submitError.innerHTML = `Form Submitted Sucessfully!`;
    submitError.style.color = "green";
  } else {
    submitError.innerHTML = `Invalid Submit`;
    submitError.style.color = "red";
  }
}
