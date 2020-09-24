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
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 50001
//     console.log(plantee)

// wolfy[3] = 'Gotham City'
//     console.log(wolfy)

// dart.push("Hawkins")
//     console.log(dart)

// wolfy.splice(0, 1, "Gameboy")
//     console.log(wolfy)


//NINJA TURTLES
// const ninjaTurtles = ["donatello", "leonardo", "raphael", "michaelangelo"]

// for (const toUpperCase of ninjaTurtles) {
//     console.log(toUpperCase);
// }


//METHODS, REVISITED
//const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// let pos = favMovies.indexOf('Titanic')
//     console.log(pos)

// favMovies.sort();
//     console.log(favMovies);
//.sort sorted the array in alphabetical order, starting with Black Panther to Volver

// favMovies.pop();
//     console.log(favMovies);

// const count = favMovies.push('Guardians of the Galaxy');
//     console.log(favMovies);

// const reversed = favMovies.reverse();
//     console.log(reversed);

// const firstElement = favMovies.shift();
//     console.log(favMovies);

//console.log(favMovies.unshift);
//returns [Function: unshift] in terminal

// favMovies.splice(4, 'Avatar')
//     console.log(favMovies);

//console.log(favMovies.length);
    // => 19 objects in the array
//console.log(favMovies.slice(10));
// let someMovies = favMovies.slice(10);
//     console.log(someMovies);
//     console.log(favMovies);
//slice did not alter the original array


//WHERE IS WALDO
//const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

// let removed = whereIsWaldo.splice(1, 1)
//     console.log(whereIsWaldo);

// whereIsWaldo[2[2]] = "No One"
//     console.log(whereIsWaldo);


//EXCITED KITTEN
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (i = 1; i <= 20; i++) {
   // console.log one of these phrases for every even number
   //use a math method and console log the string from that position in the array
   let arrayPosition = Math.floor(Math.random() * kittyTalk.length) //generate a randomized position for the array
   // console.log(phrase)
   if (i % 2 == 0) { // check whether i is even 
      console.log(kittyTalk[arrayPosition]) // return the value at the random position
   }
}

//created basic for loop that runs 20 times.

//FIND THE MEDIAN
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//console.log(nums.length);
// function median(nums)