// Assignment Code
var values = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", ">", "<", ];
var generateBtn = document.querySelector("#generate");
//   NAPRAVILI SMO ARRAY SA SLOVIMA,BROJEVIMA I SPEC ZNAKOVIMA , ZATIM SMO SPREMILI U VAR GENERATEBTN VIRJEDNOST HTML ID #GENERATE KOJI PRIPADA GUMBU
// Write password to the #password input
function writePassword() {
  document.querySelector("card-footer")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// NAPRAVILI SMO FUNKCIJU WRITEPASSWORD I U NJOJ POHRANILI HTML DOKUMENT CLASE CARD-FOOTER U KOJOJ JE SPREMLJEN I GUMB
//NAPRAVILI SMO VARIJABLU PASSWORD I DALI JOJ VRIJEDNOST GENERATE PASSWORD FUNKCIJE, ZATIM SMO NAPRAVILI JOS JEDNU VARIJABLU PASSWORDTEXT 
//  I DODJELILI JOJ VRIJEDNOST HTML DOKUMENTA ID #PASSWORD STO OZNACAVA DISPLAY(TEXTAREA) GDJE PI SE NOVO IZRADENA SIFRA TREBALA POKAZATI

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var length = Number(prompt("How many characters would you like your password to be?"));

  var numbers = confirm("Do you want numbers in your password");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var minimumCount = 0;

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";



  var randomPasswordGenerated = "";
  //

  // loop getting random characters  FOR LOOP KOJIM NASUMICNO IZABIREMO ZNAKOVE
  for (let i = 0; i < (parseInt(length) - minimumCount); i++) {
    var randomnumber = Math.floor(Math.random() * values.length);

    randomPasswordGenerated += values[randomnumber];

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

  //   GENERATPASSWORD FUNKCIJA KOJU SMO POVEZALI TAKO DA NA PRITISKOM NA GUMP ISKACE NAM POPUP PROZOR KOJI NAS PITA KOLIKO I KOJE ZNAKOVE ZELIMO KORISTITI I KOLIKO CE NAM DUGA SIFRA BITI

}
