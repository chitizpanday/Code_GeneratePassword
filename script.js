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
   var passwordLen = prompt("how many char would u like your password to contain?");
  
    while (passwordLen<8){
      alert("password length should contain at least 8 character");
      passwordLen = prompt("please enter number more than or equal to 8");
    }
   
    result =confirm("Do you want to include special character?");
      
    if(result == true){
      result = confirm("Do you want to include uppercase letters?");
    }

    if(result == true){
      result = confirm("Do you want to include lowercase letters?");
    }

    if(result ==true){
      pasword = "I am here , this is me password"
    }

   document.getElementById ("aria-label");
    

  
  return password;

}//end of function

