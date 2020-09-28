// const ironMan = {
//     regularName: 'Anthony Edward "Tony" Stark',
//     abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
//     marvelMovieAppearances: {
//         ironMan: true,
//         theHulk: true,
//         ironManTwo: true,
//         thor: false,
//         captainAmerica: false,
//         theAvengers: true,
//         ironManThree: true,
//         thorTwo: false,
//         captainAmericaTwo: false,
//         guardiansOfTheGalaxy: false,
//         avengersTwo: true,
//         antMan: false,
//         captainAmericaThree: true,
//         doctorStrange: false,
//         guardiansOfTheGalaxyTwo: false,
//         spiderManHomecoming: false,
//         thorThree: false,
//         blackPanther: false,
//         avengersThree: true
//     },
//     jarvisAreYouThere: () => {
//        console.log('At your service, sir')
//     }
// }


//console.log(ironMan.abilities[2])


// for (let abilities of ironMan.abilities) {
//     console.log(abilities)
// }

//console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)


// ironMan.marvelMovieAppearances.spiderManHomecoming = true;
// console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)


//ironMan.jarvisAreYouThere();



//ASSEMBLING OTHER AVENGERS
// const createCaptain = {
//     aliases: {
//         superheroName = 'Captain America',
//     abilities: 'peak human strength'
// }

// console.log(createCaptain().aliases.superheroName)


// const blackWidow = {
//     aliases: {
//         realName: 'Natalia Alianovna Romanova',
//         otherNotableAliases: ['Black Widow', 'Natalie Rushman', 'Scarlett Johanssen']
//     }
// }

//console.log(blackWidow.aliases.realName)
//



//AVENGERS NESTED
// const theAvengers = [
//     { name: 'Tony Stark', superheroName: 'Iron Man'},
//     { name: 'Steve Rogers', superheroName: 'Captain America' },
//     { name: 'Bruce Banner', superheroName: 'The Hulk'},
//     { name: 'Thor' },
//     { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
//     { name: 'Clint Barton', superheroName: 'Hawkeye' }
//   ]

// for (let i = 0; i <= theAvengers.length; i++) {
//     console.log(theAvengers[0].name)

//only logs tony stark (7 times)



//MCU MOVIES
const mcuMovies = [
    ['ant-man', 'ant-man and the wasp'],
    ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
    ['black panther'],
    ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
    ['doctor strange'],
    ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
    ['the hulk'],
    ['iron man', 'iron man 2', 'iron man 3'],
    ['spiderman: homecoming'],
    ['thor', 'thor: the dark world', 'thor: ragnarok']
  ]

for mcuMovies = function(arr) {
    if (typeof(arr) == "object")
}