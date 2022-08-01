// Assignment Code
function generatePassword() {
  var passwordLength = window.prompt("choose a length of your password between 8 to 128 characters");
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert(" Password length must be at least 8 characters but no more than 128");
    return
  }
  else if (!passwordLength) {
    window.alert("password length must be 8 to 128 characters")
    return
  }
  
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
