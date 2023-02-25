const mainInput = document.querySelector("#mainInput");
const lengthSlider = document.querySelector(".rangeInput");
const copyIcon = document.querySelector(".copyIcon");
const passwordCount = document.querySelector("span");
const option = document.querySelectorAll(".option input");

const generateButton = document.querySelector("button");

const optionsObj = {
  lowerCase: true,
};

let result = "";

copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(result);
});
generateButton.addEventListener("click", (e) => {
  generatePassword();
});

option.forEach((singleOption) => {
  //console.log(singleOption.id);
  singleOption.addEventListener("change", () => {
    optionsObj[`${singleOption.id}`] = singleOption.checked;
    generatePassword();
  });
});

const charactersData = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  UpperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*{}[]|/()?><:;",
  space: " ",
};

lengthSlider.addEventListener("input", () => {
  passwordCount.textContent = lengthSlider.value;
  generatePassword();
});

function generatePassword() {
  result = "";
  let charSet = "";
  let length = passwordCount.textContent;

  for (const key in optionsObj) {
    if (optionsObj[key]) {
      charSet += charactersData[key];
    }
  }

  for (let index = 0; index <= length; index++) {
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  mainInput.value = result;
}

generatePassword();
