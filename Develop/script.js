var generateBtn = document.querySelector("#generate");

console.log(Math.random());
// var confirmLowerCase;
// var confirmUpperCase;
// var confirmNumbers;
// var confirmSpecialCharacters;
//array for options
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];
var all = upperCase + lowerCase + numbers + specialCharacters;
var passwordLengthMin = 7;
var passwordLengthMax = 129;
var password = "";

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  // var userAnswer = prompt("How many characters would like in your password?");
  // if (!userAnswer) {
  var userLength = prompt("How many characters would you like to include in the password? Must be 8-128 characters.")
  if (userLength > passwordLengthMax) {
    alert("Alert! Password must be between 8-129 characters!")
    return
  }
  else if (userLength < passwordLengthMin) {
    alert("Alert! Password must be between 8-129 characters!")
    return
  }
//so now they need to input what they want
var confirmUpperCase = window.confirm("Please click OK to include uppercase characters in your password.")
var confirmLowerCase = window.confirm("Please click OK to include lowercase characters in your password.")
var confirmNumbers = window.confirm("Please click OK to include uppercase characters in your password.")
var confirmSpecialCharacters = window.confirm("Please click OK to include uppercase characters in your password.")

if (confirmUpperCase === false && confirmLowerCase && confirmNumbers && confirmSpecialCharacters) {
  alert("Please select a valid criteria");
}
// //confirm all 4 
//   if (!confirm(upperCase) && !confirm(lowerCase) && !confirm(numbers) && !confirm(specialCharacters)) {
//     alert("you must pick some criterias");}

else if (confirmUpperCase) {
  all = all.concat(upperCase);
}
else if (confirmLowercase) {
  all = all.concat(lowerCase);
}
else if (confirmNumbers) {
  all = all.concat(numbers);
}
else if (confirmSpecialCharacters) {
  all = all.concat(specialCharacters);
}
// so here we're attaching the confirm to the previous variables so that when they click ok it actually takes and stores the input
if (confirmUpperCase === true) {
  password += upperCase[Math.floor(Math.random() * upperCase.length)]
}
if (confirmLowerCase === true) {
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
}
if (confirmNumbers === true) {
  password += numbers[Math.floor(Math.random() * numbers.length)]
}
if (confirmSpecialCharacters === true) {
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
}
return password
}


function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword); {
  generatePassword();
}