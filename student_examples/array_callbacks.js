// Array Callback Methods

// Every
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));


const numArray = [1, 30, 39, 29, 10, 13];
let isLessThan = (numArray.every((value)=> value < 40))

console.log(isLessThan)


const numberArray = [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0]
const isGreaterThan100 = numberArray.every((num) => {
    return num > 100;
});

//console.log(isGreaterThan100)
// Filter
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// Find
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);

// Find index
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

// For Each
// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
// const updatedIceCreams = []
//iceCreams.forEach((flavor) => updatedIceCreams.push(flavor + ' Ice Cream'))

//example of how to cut out each word 
// iceCreams.forEach((flavor, index) => console.log(flavor))

// for (let i = 0; i <iceCreams.length; i++) {
//     console.log(iceCreams[i])
// }

// Map
// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];

// const updatedIceCreams = iceCreams.map((flavor)=>{
//     return flavor + " Ice Cream";
// });

//console.log(updatedIceCreams);

//new array method (student question before lesson started)
// Array.prototype.count = function() {
//     let dupes = []
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this.length; j++) {
//             if (this[i] === this[j]) {
//                 dupes.push(this[i])
//             }
//         }
//     }
//     return dupes.length
// }

// [1, 2, 3, 4, 4, 5, 5]

// Reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// Some

// Sort
// const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];
// console.log(numberArray.sort((a, b) => a -b))


// const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];


