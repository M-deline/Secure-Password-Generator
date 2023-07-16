// Assignment Code
var generateBtn = document.querySelector("#generate");

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
// next part needs arrays for each section and each section is a variable?
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// so right now the app appears (css) and all the html is correct. but the questions for each category do not show up and the button doesnt generate a password

// must make a variable to store the person using the website's answers
// must make the questions that pop up 
// MINI PROJECT EX var index = Math.floor(Math.random() * options.length);
// var computerChoice = options[index];



