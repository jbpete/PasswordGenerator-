// Assignment code here
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"





function generatePassword() {
 

  var passLength = prompt("Choose a length for your password");

  var passSpecialChar = confirm("Click OK to include special characters");

  var passNumChar = confirm("Click OK to include numeric characters");

  var passLowerChar = confirm("Click OK to include lowercase characters");

  var passUpperChar = confirm("Click OK to include uppercase characters");

  var password = "";
  var criteria = "";

  passLength = parseInt(passLength);

  if (passLength <= 128 && passLength >= 8 && passSpecialChar === true ) {
    criteria += specialChar;

  } if (passLength <= 128 && passLength >= 8 && passNumChar === true ) {
    criteria += numberChar;

  } if (passLength <= 128 && passLength >= 8 && passLowerChar === true ) {
    criteria += lowercaseChar;

  } if (passLength <= 128 && passLength >= 8 && passUpperChar === true ) {
    criteria += uppercaseChar;

  } else {
    alert("Password must be between 8 and 128 characters and you must select at least one of the criteria")

  }

  console.log(criteria)

  for(var i = 0; i < passLength; i++){
    password += criteria[Math.floor(Math.random() * criteria.length)];
  }
  return password;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = ""
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
