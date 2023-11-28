var input;
var userNumber;
var userCharacter;
var userUppercase;
var userLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

array2 = array.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    writePassword = createPassword();
    document.getElementById("password").placeholder = writePassword;
});
function createPassword() {
    input = parseInt(prompt("Please pick the length of your password. Choose between 8 and 128"));
  
    if (!input) {
        alert("error, you must input a number");
    } else if (input < 8 || input > 128) {
      
        input = parseInt(prompt("Error must be between 8 and 128"));
       

    } else {
        userNumber = confirm("Do you want to inlcude numbers?");
        userCharacter = confirm("Do you want to inlcude special characters?");
        userUppercase = confirm("Do you want to inlcude uppercase letters?");
        userLowercase = confirm("Do you want to inlcude lowercase letters?");
    };

    if (!userCharacter && !userNumber && !userUppercase && !userLowercase) {
        choices = alert("You must choose at least one criteria!");

    }
    else if (userCharacter && userNumber && userUppercase && userLowercase) {

        choices = character.concat(number, array, array2);
    }
    else if (userCharacter && userNumber && userUppercase) {
        choices = character.concat(number, array2);
    }
    else if (userCharacter && userNumber && userLowercase) {
        choices = character.concat(number, array);
    }
    else if (userCharacter && userLowercase && userUppercase) {
        choices = character.concat(array, array2);
    }
    else if (userNumber && userLowercase && userUppercase) {
        choices = number.concat(array, array2);
    }
    
    else if (userCharacter && userNumber) {
        choices = character.concat(number);

    } else if (userCharacter && userLowercase) {
        choices = character.concat(array);

    } else if (userCharacter && userUppercase) {
        choices = character.concat(array2);
    }
    else if (userLowercase && userNumber) {
        choices = array.concat(number);

    } else if (userLowercase && userUppercase) {
        choices = array.concat(array2);

    } else if (userNumber && userUppercase) {
        choices = number.concat(array2);
    }
   
    else if (userCharacter) {
        choices = character;
    }
    else if (userNumber) {
        choices = number;
    }
    else if (userLowercase) {
        choices = array;
    }
   
    else if (userUppercase) {
        choices = space.concat(array2);
    };

    var password = [];

    for (var i = 0; i < input; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var writePassword = password.join("");
    UserInput(writePassword);
    return writePassword;
}

function UserInput(writePassword) {
    document.getElementById("password").textContent = writePassword;
console.log("generated password");
}
