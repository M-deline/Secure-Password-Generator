var generateBtn = document.querySelector("#generate");

//array for options
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

var password = "";


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


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
if (upperCase === confirm) {
  password + upperCase[Math.floor(Math.random() * upperCase.length)];
}
if (lowerCase === confirm) {
  password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
if (numbers === confirm) {
  password + numbers[Math.floor(Math.random() * numbers/length)];
}
if (specialCharacters === confirm) {
  password + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

if (!confirm(upperCase) && !confirm(lowerCase) && !confirm(numbers) && !confirm(specialCharacters)) {
  alert("you must pick some criterias");
}

  generateBtn.addEventListener("click", writePassword);{
   generatePassword();}

   function writePassword() {
   password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    return password
   }
  }
// }
// for (var i = 0; i < userAnswer; ++i) {
//   var random = Math.floor(Math.random() * Math.floor(passwordText.length));
//   password += passwordText[random];
//   console.log(password);
//   }