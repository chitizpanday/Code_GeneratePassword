// Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function noOfChar () {
   let result=false;
   let password = "";
   const element = document.getElementById("password");
   
   var passwordLen = prompt("how many characters would u like your password to contain?");
  
    while (passwordLen<8){
      alert("password length should contain at least 8 characters");
      passwordLen = prompt("please enter eight or more characters");
    }
   
    result =confirm("Do you want to include special characters?");
      
    if(result == true){
      result = confirm("Do you want to include uppercase letters?");
    }

    if(result == true){
      result = confirm("Do you want to include lowercase letters?");
    }

    if(result ==true){
      password = generatePassword(passwordLen);
      //element.innerHTML= "this is mypassword";
      element.innerHTML= password;
    }
  

}//end of function
function generateRandomLowerCase() {
  const alphabetLOWER = "abcdefghijklmnopqrstuvwxyz"

  return alphabetLOWER[Math.floor(Math.random() * alphabetLOWER.length)]
}
function generateRandomNumber() {
   return Math.floor(Math.random() * 10);
}
function generateUpperRandomCase() {
  const alphabetUPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  return alphabetUPPER[Math.floor(Math.random() * alphabetUPPER.length)]
}
function generateRandomSpecialChar() {
  const specialCharactersString = "!@#$%&*()'+,-./:;<=>?[]^_`{|}"

  return specialCharactersString[Math.floor(Math.random() * specialCharactersString.length)]
}

function generatePassword(passwordLen) {
  let count=1;
  var password="";
 while(count<=passwordLen){
  if (count<=passwordLen){password += generateRandomLowerCase();count++; } 
  if (count<=passwordLen){password += generateUpperRandomCase();count++; } 
  if (count<=passwordLen){password += generateRandomSpecialChar();count++; } 
  if (count<=passwordLen){password += generateRandomNumber();count++; } 
 }
 return password;
}
