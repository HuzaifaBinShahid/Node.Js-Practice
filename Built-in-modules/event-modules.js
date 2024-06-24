const EventEmitter = require('node:events'); // This will invoke the events module handler


const emitter = new EventEmitter() // Instance of that class

emitter.on('order-pizza', (size ,toppings) => { 
    console.log(`Baking a ${size} pizza with ${toppings}`)
}) // This event will happen on ordering pizza (handles the event)

emitter.on('order-pizza' ,(size)=>{
    if(size === 'large'){
        console.log('Complementary Drink added');
    }
}) // we can have two handlers with different purposes

console.log('Do work before ordering a pizza')
emitter.emit('order-pizza' ,'large', 'mushrooms'); // This is the event to happen (emits the event)

// Main thing to notice is that emitter.on is written before .emit yet still it executes after .emit as it blocks the execution of code (asynchronus)

