// Assignment Code
var special = ["@", "%","+","\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCases = ["Q", "W", "E", "R", "T", "Y", "U","I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerCases = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var generateBtn = document.querySelector("#generate");
//   NAPRAVILI SMO ARRAY SA SLOVIMA,BROJEVIMA I SPEC ZNAKOVIMA , ZATIM SMO SPREMILI U VAR GENERATEBTN VIRJEDNOST HTML ID #GENERATE KOJI PRIPADA GUMBU
// Write password to the #password input
  function getRandom(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    var randElement = array[randIndex];

    return randElement
  }

function writePassword() {
  document.querySelector("#password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("passwordText", passwordText);
  console.log("passwordText", password);
  passwordText.value = password;

};
// NAPRAVILI SMO FUNKCIJU WRITEPASSWORD I U NJOJ POHRANILI HTML DOKUMENT CLASE CARD-FOOTER U KOJOJ JE SPREMLJEN I GUMB
//NAPRAVILI SMO VARIJABLU PASSWORD I DALI JOJ VRIJEDNOST GENERATE PASSWORD FUNKCIJE, ZATIM SMO NAPRAVILI JOS JEDNU VARIJABLU PASSWORDTEXT 
//  I DODJELILI JOJ VRIJEDNOST HTML DOKUMENTA ID #PASSWORD STO OZNACAVA DISPLAY(TEXTAREA) GDJE PI SE NOVO IZRADENA SIFRA TREBALA POKAZATI

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePasswordOptions() {

  //var length = Number(prompt("How many characters would you like your password to be?"));
  var length = parseInt(prompt("How many characters would you like your password to be?"));
  console.log("length", length);
  //var randomPasswordGenerated = "";

  if (length < 8 || length > 128) {
    alert("Chose a number between 8 and 128.");
    return generatePasswordOptions();

  } else if(length !== NaN) {
    alert("Chose a number between 8 and 128.");
    return generatePasswordOptions();

  } else {
    console.log("here");
    
    var numbers = confirm("Do you want numbers in your password");
  
    var lowerCases = confirm("Do you want lowercases in your password?");
  
  
    var upperCases = confirm("Do you want uppercases in your password?");
  
  
    var special = confirm("Do you want special characters in your password?");

  };


  if(
    numbers === false &&
    upperCases === false &&
    lowerCases === false &&
    special === false
  ){
    alert("Must select at least one char type.");
    return;
  };

  var passwordOptions = {
    number: numbers,
    upper: upperCases,
    lower: lowerCases,
    special: special,
    length: length
  };



  //   GENERATPASSWORD FUNKCIJA KOJU SMO POVEZALI TAKO DA NA PRITISKOM NA GUMB ISKACE NAM POPUP PROZOR KOJI NAS PITA KOLIKO I KOJE ZNAKOVE ZELIMO KORISTITI I KOLIKO CE NAM DUGA SIFRA BITI

 return passwordOptions;
}

function generatePassword(){
  var options = generatePasswordOptions();
  console.log("options", options);
  // create var that is gonna store our password as being created
  var finalPassword = [];
  // create another array that is gonna store types o char that we are gonna use
  var possibleChar = [];
  // create another array that is gonna hold char type that we choose
  var usedChar = [];
  // first if statement checking if  options.special
  
 if(options.special) {
   possibleChar = possibleChar.concat(special);
   usedChar.push(getRandom(special));
 }

 if (options.upper) {
   possibleChar = possibleChar.concat(upperCases);
   usedChar.push(getRandom(upperCases));
 }

 if (options.lower) {
   possibleChar = possibleChar.concat(lowerCases);
   usedChar.push(getRandom(lowerCases));
 }
 
 if (options.number) {
   possibleChar = possibleChar.concat(numbers);
   usedChar.push(getRandom(numbers));
 }

 for (var i = 0; i < options.length; i++) {
   var possibleChars = getRandom(possibleChar);
  console.log("possibleChars", possibleChars)
   finalPassword.push(possibleChars);
 }
 for(var i =0; i < usedChar.length; i++){
  console.log("usedChar", usedChar)
   finalPassword[i] = usedChar[i];
 }
 console.log("finalPassword.join()", finalPassword.join(""), usedChar, possibleChar)
 return finalPassword.join("");
 
 
};


