//------------------ Adding a differnt module in index.js to execute it using require ----------------//
// require('./add')
// require('./batman')
// require('./superman')


// ------------------ Using Module export to load file ----------------------//
// const add = require('./add')
// const sum = add(3,2);
// console.log(sum);

// --------------- Printing name using class in js ------------------//
// const superhero = require('./super-hero')
// console.log(superhero.getName());
// console.log(superhero.setName('Superman'));

// ---------------- New instance (same output on creating a new instance because of caching meaning that js remembers the last instance)---------//
// const newSuperHero  = superhero;
// console.log(newSuperHero.getName());

// ----------------- The solution to the above problem is to export a class directly rather than a module (see in super-hero.js file) ---------------//

// const SuperHero = require('./super-hero');

// const batman = new SuperHero('Batman')
// console.log(batman.getName());
// console.log(batman.setName('Superman'));

// const superman = new SuperHero('Superman')

// -----------------Using Json Data------------------//

const data  = require('./data.json')
console.log(data.address.street);










