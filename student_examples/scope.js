// const addNumbers = (num1, num2) => {
//     let sum = num1 + num2;
//     return sum;
// }

// const addTen = (num) => {
//     let sum = addNumbers(num, ten);
//     return sum;
// }

// let ten = 10;

// let twoPlusTen = addTen(2);
// console.log(twoPlusTen);

// EXERCISE - Write a for loop but use var instead of let.
// for (var i = 0; i <=5; i++) {
//     console.log('this ran')
// }

// Verify: is the variable accessible outside the loop after it has run?
//console.log(i)
// Verify: is the variable accessible outside of the loop with let?

// Verify: What about a let variable defined within the block of the loop?


// for (let i = 0; i < 10; i++) {
//     let loopCount = i + 1;
// 	console.log('Inside the block: ', loopCount);
// }
// console.log('Outside the block: ', loopCount);


// const age = 21;
// let message = '';
// if (age < 21) {
// 	message = 'You cannot buy the beer';
// } else {
// 	message = 'You can buy the beer';
// }
// console.log(message);


//recursion - acts like a loop, but much more flexible
const countdown = (num) => {
    if(num !== 0){
        console.log(num);
        countdown(num - 1);
    } else {
        return
    }
}

countdown(10)