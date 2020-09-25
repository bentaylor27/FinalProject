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
// var string="num"
// function checkPrime(num) {
//     if (num == 2) {
//         return true;
//     }
//     else if (num > 1) {
//         for (let i = 2; i < num; i++) {
//             if (num % i !== 0) {
//                 return true;
//             }
//             else if (num == i * i) {
//                 return false;
//             }
//             else {
//                 return false;
//             }
//         }
//     }
// }

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
