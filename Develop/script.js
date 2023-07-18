// Assignment Code
var generateBtn = document.querySelector("#generate");
//list of options
// next part needs arrays for each section and each section is a variable?

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
//If the user presses cancel at the beginning, it will end function
//If statement for password length
var userAnswer = prompt("How many characters would like in your password?")
if (!userAnswer) {
  return
}
else if (userAnswer < 8) {
  console.log("Password length must be 8 or more characters!")
  return
}
else if (userAnswer > 129) {
  console.log("Password length must be less than 129 characters!")
  return
}

//OK button on pop-up
var upperCase = confirm("Please click OK to include uppercase characters in your password.")
//trying to make it where if the user does/doesn't hit ok or cancel it still continues
function upperCase () {
  if (upperCase === true) {
    //so if it is true need to store answer and add to password eventually
  }
}



var lowerCase = confirm("Please click OK to include lowercase characters in your password.")
var numbers = confirm("Please click OK to include numbers in your password.")
var specialCharacters = confirm("Please click OK to include Special Characters in your password.")


  passwordText.value = password;

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// so right now the app appears (css) and all the html is correct. but the questions for each category do not show up and the button doesnt generate a password

// must make a variable to store the person using the website's answers
// must make the questions that pop up 
// MINI PROJECT EX var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index];



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page