//THE MILKY WAY GALAXY
// const milkyWay = {
//     type: 'barred spiral',
//     age: 13600000000,
//     containsEarth: false,
// }

// milkyWay.containsEarth = true

// milkyWay["number of stars"] = "100-400 billion";

// console.log(milkyWay)


//SOLAR SYSTEM PART 1
const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];


//1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
//console.log(solarSystem[4].moons)

//2. Print the name of Neptune's moon "Nereid" to the console.
//console.log(solarSystem[7].moons[1])

//3. Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons = "Endor";

//console.log(solarSystem[1])

//4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").
solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon']})

//console.log(solarSystem)

//5. Add a new key value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.
Object.assign(solarSystem[2], {diameter: "7917.5 miles"})

//console.log(solarSystem[2]);

//6. Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;

console.log(solarSystem[0])