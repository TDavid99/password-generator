// Assignment Code
var lettersNumbers = {
  lowercase: "a,b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
  uppercase: "A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  numeric: "1,2,3,4,5,6,7,8,9,0",
  specialCharacters: "`!@#$%^&*()_+?/.{}",

}
var joinedCharacters = ""
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
  var upperConfirm = window.confirm("would you like uppercase?");
  var numberConfirm = window.confirm("would you like numbers?");
  var specialConfirm = window.confirm("would you like special characters?");
  if (upperConfirm, numberConfirm, specialConfirm) {
    joinedCharacters += lettersNumbers
  }
  console.log(joinedCharacters)

  var lastpassPhrase = "" 
  for (i=0; i < passwordLength;i++) {
    lastpassPhrase += joinedCharacters.charAt(Math.floor(Math.random() * joinedCharacters.length)); 

    
  }
    return lastpassPhrase;

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
