// Assignment Code
const resultEL = document.getElementById("result");
const lengthEL = document.getElementById("length");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const numbersEL = document.getElementById("numbers");
const symbolsEL = document.getElementById("symbols");
const generateEL = document.getElementById("generate");

document.getElementById("generate").appendChild(node);


const randomFunc = {
  lower: getRandomlower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


generateEL.addEventListener("click"), () => {
  var length =lengthEl.value;
  var hasLower = lowercaseEL.checked;
  var hasUpper = uppercaseEL.checked;
  var hasNumber = numbersEL.checked;
  var hasSymbol = symbolEl.checked;

  resultEL.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
}

         //Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
           // 1. initializepassword variable
           // 2. filter out unchecked types
           // 3. loop over length and  then call generator function for each type
          // 4.  add final password to the password variable and return

}
          generatePassword ="";

          const typesCount = lower + upper + symbol;


          const typesArr = [lower, upper, number, symbol];

          const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
          

          console.log("typesCount: ", typesCount);
           

         //  Generator functions - http://www..net-comber.com/charset.html

         console.log("typesArr: ", typesArr);





var userChoice = prompt("choose between minimum of 8 to maximum of 128 characters?");
var generateBtn = document.querySelector("#generate");
var length = userChoice

function getRandomlower() {
  return String.fromCharCode(97);
}
console.log(Math.floor(Math.random() * 23) + 97);


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 21) + 65);

}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 43);
}
function getRandomSymbol() {
  const symbols = " !~`<>.,/?;:'][=+@#%&^*\/ ";
  return symbols[Math.floor(Math.random() * 10) + 17];
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
addEventListener



 // function generate() {
  
  //for (var i = 0; i <= complexity; i++) {
    //password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//let complexity = document.getElementById("length").value;