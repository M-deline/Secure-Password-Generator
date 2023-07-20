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

let characters = [];
// let password = "";

var userAnswer;
// var confirmUpperCase;
// var confirmLowerCase;
// var confirmNumbers;
// var confirmSpecialCharacters;

generateBtn.addEventListener("click", function (){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
//placeholder in html 

// ALERT NEED TO CREDIT https://www.w3schools.com/jsref/met_win_alert.asp

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
  // confirmUpperCase = confirm("Please click OK to include uppercase characters in your password.");
  // confirmLowerCase = confirm("Please click OK to include lowercase characters in your password.");
  // confirmNumbers = confirm("Please click OK to include numbers in your password.");
  // confirmSpecialCharacters = confirm("Please click OK to include Special Characters in your password.");
// };
// if (upperCase !== confirm) (lowerCase !== confirm) (specialCharacters !== confirm) (numbers !== confirm); {
//   alert("you must pick some criterias")
}
if (!confirm(upperCase) && !confirm(lowerCase) && !confirm(numbers) && !confirm(specialCharacters)) {
  alert("you must pick some criterias");
}
//but what if the user says no to everything?
// //trying to fix options for the 4 different categories 
// if (upperCase === confirm) {characters += upperCase;}
// else {(upperCase !== confirm); {characters -= upperCase}};
// if (lowerCase === confirm) {characters += lowerCase;}
// else {(lowerCase !== confirm); {characters -= lowerCase}};
// if (numbers === confirm) {characters += numbers;}
// else {(numbers !== confirm)} {characters -= numbers;}
// if (specialCharacters === confirm) {characters += specialCharacters;}
// else {(specialCharacters !== confirm)} {characters -= specialCharacters};

// if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters) {
//   alert("you must pick some criterias")
// }
// }
}
// //this is if they choose lowercase and uppercase
// else if (confirmLowerCase && confirmUpperCase && !confirmNumbers && !confirmNumbers)
// {characters = characters.concat(lowerCase, upperCase);}
// //if they choose uppercase & numbers 
// else if (confirmUpperCase && confirmNumbers && !confirmLowerCase && !confirmSpecialCharacters)
// {characters = characters.concat(upperCase, numbers);}
// //if they choose confirm uppercase and symbols
// else if (confirmUpperCase && confirmSpecialCharacters && !confirmLowerCase && !confirmNumbers)
// {characters = characters.concat(upperCase, specialCharacters);}
// // if they choose lowercase and numbers
// else if (confirmLowerCase && confirmNumbers && !confirmSpecialCharacters && !confirmUpperCase)
// {characters = characters.concat(lowerCase, numbers);}
// // if they choose lowercase and symbols
// else if (confirmLowerCase && confirmSpecialCharacters && !confirmNumbers && !confirmUpperCase)
// {characters = characters.concat(lowerCase, specialCharacters);}
// //if they choose everything 
// else if (confirmLowerCase && confirmLowerCase && confirmSpecialCharacters && confirmNumbers)
// {characters = characters.concat(confirmUpperCase, confirmLowerCase, confirmNumbers, confirmSpecialCharacters);}
// }
// Write password to the #password input

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
  }
//   if (password.upperCase === true) {
//     password = password += upperCase; 
//   }
//   if (password.lowerCase === true) {
//     password = passwordText += lowerCase; 
//   }
//   if (password.numbers === true) {
//     password = passwordText += numbers; 
//   }
//   if (password.specialCharacters === true) {
//     password = passwordText += specialCharacters; 
//   }
//   var password = password.join("");
//   userAnswer(ps); 
//   return ps;
// }

for (let i = 0; i < userAnswer; ++i) {
  let random = Math.floor(Math.random() * Math.floor(passwordText.length));
  password += passwordText[random];
}


// // return password;
//    var password = [];
//  for (var i =0; i <= userAnswer; i++) {
//    var chooseCharacter = choices [Math.floor(Math.random() * characters.length)];
//    password.push(chooseCharacter, chooseCharacter +1);
//  }
// return password;

// function writePassword (){
//   return Math.floor(Math.random() * characters.length);
// }


//used this to help me with above: https://dev.to/code_mystery/random-password-generator-using-javascript-6a

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// function document.getElementById("password).value") = password;("password");




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