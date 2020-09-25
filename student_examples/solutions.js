//1. A parameter is a named variable passed intor a function. These are used to import arguments into functions. In other words, parameters are the names listed in the functions definition, while arguments are the real values.
//2. Return is a statement that allows a function to output a value back to where it was called, while console.log lets us inspect values for debugging purposes.


//PALINDROME
var string="Racecar"
function checkPalindrome(string){
    string=string.toLowerCase();
    for (let i=0; i<string.length; i++){
        if (string[i] == string[string.length-1-i]){
            console.log("it checks out")
        }
        else{
            return false
        }
    } //for loop bracket
    return true
}


