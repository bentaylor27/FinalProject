//EASY GOING
// for (i = 1; i <= 20; i++)
//     console.log(i)

//GET EVEN
// for (let i = 0; i <= 200; i+=2) {
//     console.log(i)
// }

//FIZZ BUZZ
// for (i = 1; i <=100; i++) {
//     if ( i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else if (i % 3 && 5 == 0)
//         console.log("FizzBuzz");
//     else
//         console.log(i);
// }

//WILD WILD LIFE
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 50001
//     console.log(plantee)

// wolfy[3] = 'Gotham City'
//     console.log(wolfy)

// dart.push("Hawkins")
//     console.log(dart)

wolfy.splice(0, 1, "Gameboy")
    console.log(wolfy)