// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for options
var userAnswer;
// characters {
//   upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//   lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//   numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"],
// }
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

var password = [upperCase, lowerCase, numbers, specialCharacters];

// (password.join());

// (password.join(''));

// (password.join('-'));

var userAnswer;

generateBtn.addEventListener("click", function (){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
//placeholder in html 

function generatePassword() {
var userAnswer = prompt("How many characters would like in your password?");
if (!userAnswer) {
  alert("Try again");
}
else if (userAnswer < 8) {
alert("Password length must be 8 or more characters!");
}
else if (userAnswer > 129) {
alert("Password length must be less than 129 characters!");
}

else {
 var lowerCase = confirm("Please click OK to include lowercase characters in your password.");
 var upperCase = confirm("Please click OK to include uppercase characters in your password.");
 var numbers = confirm("Please click OK to include numbers in your password.");
 var specialCharacters = confirm("Please click OK to include special characters in your password.");

}
if (!confirm(upperCase) && !confirm(lowerCase) && !confirm(numbers) && !confirm(specialCharacters)) {
  alert("you must pick some criterias");
}
}
  function writePassword() {
    // var password = generatePassword(); 
    var passwordText = document.querySelector("#password");

    if (password.upperCase === confirm) {passwordText += upperCase;}
    else {(password.upperCase !== confirm); {passwordText -= upperCase}};
    if (password.lowerCase === confirm) {passwordText += lowerCase;}
    else {(password.lowerCase !== confirm); {passwordText -= lowerCase}};
    if (password.numbers === confirm) {passwordText += numbers;}
    else {(password.numbers !== confirm)} {passwordText -= numbers;}
    if (password.specialCharacters === confirm) {passwordText += specialCharacters;}
    else {(password.specialCharacters !== confirm)} {passwordText -= specialCharacters};

for (let i = 0; i < userAnswer; ++i) {
  let random = Math.floor(Math.random() * Math.floor(passwordText.length));
  password += passwordText[random];
}
  }





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password yes
// THEN I am presented with a series of prompts for password criteria yes
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password yes
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters yes
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters yes
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected !!
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page