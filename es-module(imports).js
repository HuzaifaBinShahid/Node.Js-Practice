//----------- Importing Conventions in Node.js ----------------//

// -----------  1st method -------------- //

import add from './es-module'
console.log (add(3,2));

// --------- 2nd method -----------//

import math from './es-module'

console.log(math.subtract(3,2));

// ---------- 3rd method ------------//

// const {add ,subtract} = math; (destructuring)
console.log(add(5,5));

// ----------- 4th method -----------//

import {add ,subtract} from './es-module'
console.log(add(3,5));