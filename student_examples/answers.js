//EASY GOING
// for (i = 1; i <= 20; i++)
//     console.log(i)

//GET EVEN
// for (let i = 0; i <= 200; i+=2) {
//     console.log(i)
// }

//FIZZ BUZZ
for (i = 1; i <=100; i++) {
    if ( i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else if (i % 3 && 5 == 0)
        console.log("FizzBuzz");
    else
        console.log(i);
}