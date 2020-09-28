// let color = "blue";
// let horsepower = 4000;
// let year = 1989;
// let car1 = ['blue', 4000, 1989];
// let car1 = {
// 	color: "blue",
// 	horsepower: 4000,
// 	year: 1989,
// };
// console.log(car1);

// car1.color = 'yellow';
// console.log(car1);

// car1.purchased = true;
// console.log(car1);

// To remove the purchased key from car1:
// delete car1.purchased;
// console.log(car1);

// let color2 = "red";
// let horsepower2 = 4000;
// let year2 = 1989;
// let car2 = {
// 	color: "red",
// 	horsepower: 4000,
// 	year: 1990,
// };

// let cars = [car1, car2];
// console.log(cars);

// console.log('Purchased cars:');
// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];
//     if (car.purchased) {
//         console.log(car);
//     }
// }


// let cat = {
//     name: 'Garfield',
//     favoriteThings: ['Lasagna', 'Sleep', 'Pookie'],
// }

// let petAges = {
//     Garfield: 5,
//     Odie: 2,
// }

// let petName = 'Garfield';
// console.log(petAges[petName]);


// const obj = {};
// for (var i = 0; i < 10; i++) {
//     obj['key'+i] = 'foo'
// }
// console.log(obj);


// const cat = {};
// cat.name = 'Garfield';
// // Throws an error, because we're trying to re-assign to "cat"
// // const cat = {};
// // cat = { name: 'Garfield' };
// console.log(cat);


// Doesn't work, can't have duplicate keys
// let buroughs = {
//     name: 'Brooklyn',
//     name: 'The Bronx',
// }
// console.log(buroughs);


// let numberNamesEnglish = {
//     1: 'One',
//     2: 'Two',
//     3: 'Three',
// }
// console.log(numberNamesEnglish[2]);



//Michael's refrigerator example
// const refrigerator = {
//     contents: [],
//     doorOpen: false,
//     makeIce: (amount) => {
//         for (let i = 0; i <= amount; i++) {
//             console.log('*ice cube*')
//         }
//     },
//     addItem: function(item) {
//         return this.contents.push(item)
//     },
//     removeItem: function(item) {
//         return this.contents.splice(this.contents.indexOf(item), 1)
//     }
// }
// console.log(refrigerator.contents)
// console.log(refrigerator.doorOpen)
// makeIce(amount)
// refrigerator.makeIce(10)
// console.log(refrigerator)
// refrigerator.makeIce(20)
// refrigerator.addItem('lettuce')
// console.log(refrigerator.contents)
// refrigerator.removeItem('lettuce')
// console.log(refrigerator.contents)



//AFTERNOON LAB
//1. Define an object: We use objects in JS to represent key-value pairs, and they store specific data within them.


//ME, ME , ME
// const me = {
//     name: 'Ben',
//     age: '23',
//     email: 'bentaylor11197@gmail.com'
// }

// console.log(me)
// console.log(me.name)
// me.age = 1000   // => changes age from 23 to 1000
// console.log(me)

// me.placeOfResidence = 'Chicago'    // but how to make it 'place of residence' with spaces?
//     console.log(me)    

// console.log(me.placeOfResidence)


//SLIMER
// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  }

//console.log(monster.name)  // access the name
// monster.type = 'creature'    // change the type
//     console.log(monster)
// monster.age = '6'           //add a key to the object called age
//     console.log(monster)



//OGRES
const adventurer = {
    name: 'Lord Farquaad',
    hitpoints: '100',
}

const ogre = {
    name: 'Shrek',
    hitpoints: '200',
}

