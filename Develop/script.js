// Assignment Code
var generateBtn = document.querySelector("#generate");
//I need to add the user input variables
var userAnswer;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpecialCharacters;

//array for options
var characters = {
upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowerCase: "abcdefghijklmnopqrstuvwxyz",
numbers : "0123456789",
specialCharacters: "!@#$%^&*()?",
};

generateBtn.addEventListener("click", writePassword);

//says illegal return on console

// ALERT NEED TO CREDIT https://www.w3schools.com/jsref/met_win_alert.asp
var userAnswer = (prompt("How many characters would like in your password?"));
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
  confirmUpperCase = confirm("Please click OK to include uppercase characters in your password.")
  confirmLowerCase = confirm("Please click OK to include lowercase characters in your password.")
  confirmNumbers = confirm("Please click OK to include numbers in your password.")
  confirmSpecialCharacters = confirm("Please click OK to include Special Characters in your password.")
}
//but what if the user says no to everything?
if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters) {
  alert("you must pick some criterias")
}
if (confirm)
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  if (password.upperCase === true) {
    password = password += upperCase; 
  }
  if (password.lowerCase === true) {
    password = passwordText += lowerCase; 
  }
  if (password.numbers === true) {
    password = passwordText += numbers; 
  }
  if (password.specialCharacters === true) {
    password = passwordText += specialCharacters; 
  }
}
  
  //this is what makes the password generate, some reason array is incorrect
for (var i = 0; i < password.length; i++) {
  password += generatePassword.charAt(Math.floor(Math.random() * characters.length));
};



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