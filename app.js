'use strict';
console.log("I am in the HTML");
alert (" Welcome to Sky Academy!");
const usersName = prompt ("What is your name?");
console.log (usersName);
if (usersName=="kassie")
{alert("Hi kassie");} 
else { 
    alert("Glad to have you here")}

document.write("Hi " + usersName + "welcome to my page!");

let response = prompt('What is my favorite color?');

while (response !== 'yellow') {
  response = prompt('Wrong! Guess my favorite color again.');
}

// If the user's guess is 'yellow', the loop will exit, and you can add code here for the correct guess.
// For example:
// alert('That\'s correct! Yellow is my favorite color.');





function rateMyPage() {
  let rating = prompt("How many stars would you rate my page? 1-5");

  for (let i = 0; i < rating; i++) {
    document.write('<img src="rates.jpg" alt="cute lil pupper wearing glasses" />');
  }
}
