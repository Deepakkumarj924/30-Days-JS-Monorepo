const input = document.getElementById("password");
const copy = document.getElementById("i-img");
const btn = document.getElementById("btn");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={}[]|\\:;\"'<,>.?/~`";
const length = 12;
const allChars = uppercase + lowercase + number + symbol;

const generatePassword = (event) => {
  event.preventDefault();
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  input.value = password;
  console.log(password);
};
const copyItem = () => {
  navigator.clipboard
    .writeText(input.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
};
btn.addEventListener("click", generatePassword);
copy.addEventListener("click", copyItem);
