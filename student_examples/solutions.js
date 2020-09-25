//1. A parameter is a named variable passed intor a function. These are used to import arguments into functions. In other words, parameters are the names listed in the functions definition, while arguments are the real values.
//2. Return is a statement that allows a function to output a value back to where it was called, while console.log lets us inspect values for debugging purposes.


//PALINDROME
// var string="Racecar"
// function checkPalindrome(string) {
//     string=string.toLowerCase();
//     for (let i=0; i<string.length; i++) {
//         if (string[i] == string[string.length-1-i]) {
//             console.log("it checks out")
//         }
//         else{
//             return false
//         }
//     } //for loop bracket
//     return true
// }

// console.log(checkPalindrome(string));


//SUM ARRAY
// var array=[1,2,3,4,5,6]

// function sumArray(array) {
//     let sum=0;
//     for (let i=0; i<array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }

// console.log(sumArray(array));


//PRIME NUMBERS
// function checkPrime(num) {
//     for (let i = 2; i <= num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkPrime(8))

// console.log(checkPrime(7))

// var countPrime = 
// const countPrime(num) {
//     if(num > 1) {
//         console.log(num);
//         countPrime(num + 1);
//     } else {
//         return
//     }
// }





// const countdown = (num) => {
//     if(num != 0){
//         console.log(num);
//         countdown(num - 1 );
//     } else {
//         return
//     }
// }


// ROCK PAPER SCISSORS
const userChoice = prompt("Rock, paper or scissors?");
const computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins";
        }
        else{
            return "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper wins";
        }
        else{
            return "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";
        }
        else{
            return "scissors wins";
        }
    }
};
compare(userChoice,computerChoice);