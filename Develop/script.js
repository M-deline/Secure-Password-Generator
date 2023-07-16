// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// so right now the app appears (css) and all the html is correct. but the questions for each category do not show up and the button doesnt generate a password

// must make a variable to store the person using the website's answers
// must make the questions that pop up 
// 



