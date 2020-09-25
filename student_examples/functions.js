// const printBoo = () => {   //could also do function printBoo() { ==> both are syntactically correct
// 	console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// };

// printBoo();

//hoisting - more complex way to to do, try to work with above syntax
// function printBoo = () {   
// 	console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// };

// const printSum = () => {
//     let sum = 10 + 10
//     console.log(sum)
// }

// printSum()


//printTriangle
//advanced implementation
// const printTriangle = () => {
//     let hash = '#'
//     for (let i = 0; i <=4; i++) {
//         console.log(hash)
//         hash += '#'
//     }
// }

// printTriangle()

// const sayName = (name, age) => {
//     console.log("Hi my name is " + name + " and my age is " + age)
// }

// sayName("Ben", 23)


//minusOne
// const minusOne = (num) => {
//     console.log(num - '1')
// }

// minusOne(0)

//below function does not work...
// const makeSentence = (string1, string2, string3) => {
//     console.log('${string1} ${string2} ${string3}')
// }

// makeSentence("I", "want", "chimichangas")


// const ten = () => {
//     return 10
// }

// console.log( 8 + ten())



//MORNING LAB
// const pringGreeting = (name) => {
//     return (`Hello there,  + ${name}`)
// }

// console.log(printGreeting("Slimer"));


// const reverseWordOrder = (Str) => {
//     let arr = string.split(' ')
//     arr.reverse()
// }

// console.log(reverseWordOrder("Ishmael me Call"));



//const string1 = 'add'
// const string2 = 'sub'
// let operation = (string1 || string2)
// const calculate = ('num1', 'num2', 'operation') => {
//     calculate.mathRandom( )
// }



//AFTERNOON LAB
//1
// const calculateCube = (Number) => {
//     return Number = Number ** 3;
// }

// console.log(calculateCube(5))


//2
// function isAVowel(letter) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     return vowels.includes(letter.toLowerCase())
// }

// console.log(isAVowel('a'))


//3
// function getTwoLengths(string1, string2) {
//     return [string1.length, string2.length]
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));


//4
// const getMultipleLengths = (words) => {
// 	let array = [];
// 	for (let i = 0; i < words.length; i++) {
// 		array.push(words[i].length);
// 	} return array;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//5
// const maxOfThree = (num1, num2, num3) => {

// }


//Palindrome - racecar -->  
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

console.log(checkPalindrome(string));

//sum array 
var array=[1,2,3,4,5,6]

function sumArray(array){
    let sum=0;
    for (let i=0; i<array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(sumArray(array));