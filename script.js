// To create a new, secure password
// When I click the button to generate a password

var generateBtn = document.querySelector("#generate");

// 

// Input Variables

// https://owasp.org/www-community/password-special-characters
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar ="!@#$%^&*()_-+=|}{[]:;'?><.,~`";
var uppercaseVal;
var lowercaseVal;
var numberVal;
var specialVal;
var passwordLength;

// The series of prompts for password criteria

// The prompt for length criteria

function confirmLength(){

  // ask the user how many characters they want for the password
 

  passwordLength = Number(window.prompt("How many characters do you want for your password? Please enter as a number between 8 - 128"));
  
  // check if the user entered the password length from 8 to 128
  // if the user entered something outside of this range
  // tell the user the password length is incorrect
  // if correct, the next message will ask the user to confirm the types of characters to be included in the password

    if (passwordLength<8){
      alert("Incorrect! Reminder !  Length must be a number between 8 - 128!");
      confirmLength();
    }else if (passwordLength>128){
      alert("Incorrect! Reminder ! Length must be a number between 8 -128");
      confirmLength();
    }else if (isNaN(passwordLength)){
      alert("Incorrect! Reminder ! Length must be a number between 8 - 128");
      confirmLength();
    }else{
    alert("This will bring you to confirm the character types  to be included in your password. If you enter 'No' to all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

// ask user to confirm whether or not to include in the password the Uppercase Characters

function confirmUppercase(){
  
  uppercaseVal = prompt("Password include Uppercase Letter? (Yes or No)");
    uppercaseVal = uppercaseVal.toLowerCase();

    if (uppercaseVal === null || uppercaseVal === ""){
      alert("Please answer Yes or No");
      confirmUppercase();
    
    }else if (uppercaseVal === "yes" || uppercaseVal ==="y"){
      uppercaseVal = true;
      return uppercaseVal;

    }else if (uppercaseVal === "no" || uppercaseVal ==="n"){
      uppercaseVal = false;
      return uppercaseVal;
    
    }else {
      alert("Please answer Yes or No");
      confirmUppercase();
    }
    return uppercaseVal;
}

// ask the user to confirm whether or not to include in the password the number characters

function confirmNumbers(){

  numberVal = prompt("Password include Numbers? (Yes or No)");
    numberVal = numberVal.toLowerCase();

    if (numberVal === null || numberVal === ""){
      alert("Please answer Yes or No");
      confirmNumbers();

    }else if (numberVal === "yes" || numberVal ==="y"){
      numberVal = true;
      return numberVal;

    }else if (numberVal === "no" || numberVal ==="n"){
      numberVal = false;
      return numberVal;
    
    }else {
      alert("Please answer Yes or No");
      confirmNumbers();
    }
    return numberVal;
}

// ask the user to confirm whether or not to include in the password the special characters

function confirmSpecial(){
 
  specialVal = prompt("Password include Special Characters? (Yes or No)");
    specialVal = specialVal.toLowerCase();

    if (specialVal === null || specialVal === ""){
      alert("Please answer Yes or No");
      confirmSpecial();

    }else if (specialVal === "yes" || specialVal ==="y"){
      specialVal = true;
      return specialVal;

    }else if (specialVal === "no" || specialVal ==="n"){
      specialVal = false;
      return specialVal;
    
    }else {
      alert("Please answer Yes or No");
      confirmSpecial();
    }
    return specialVal;
}

 // combining all inputs from previous functions to generate the password after the password satisfied all the criteris
 // -  the CharAt() - String Method - Character - Returns char at the specified position
//  https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property#:~:text=String%20Methods%20%20%20%20Method%20%20,occurrence%20of%20...%20%2015%20more%20rows%20


 function generatePassword(){
  confirmLength();
  console.log(passwordLength);
  confirmUppercase();
  console.log(uppercaseVal);
  confirmNumbers();
  console.log(numberVal);
  confirmSpecial();
  console.log(specialVal);

var characters = lowercaseChar;
var password = "";
if (uppercaseVal && numberVal && specialVal){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseVal && numberVal){
  characters += uppercaseChar + numberChar;

}else if (numberVal && specialVal){
  characters += numberChar + specialChar;

}else if (uppercaseVal && specialVal){
  characters += uppercaseChar + specialChar;

}else if (uppercaseVal){
  characters += uppercaseChar;

}else if(numberVal){
  characters += numberChar;

}else if (specialVal){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

// The loop in javascript is used to iterate over the elements of an array, an iterable object like array, strings, NodeList, arguments, etc.
// https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property#:~:text=String%20Methods%20%20%20%20Method%20%20,occurrence%20of%20...%20%2015%20more%20rows%20
 
for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);