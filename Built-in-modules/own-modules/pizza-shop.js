const EventEmitter = require('node:events')

class PizzaShop extends EventEmitter{

    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, toppings){
        this.orderNumber++;
        this.emit('order-pizza' , size, toppings)
    }

    displayorder(){
        console.log(`Current Order Number is: ${this.orderNumber} `)
    }
}

module.exports =  PizzaShop;