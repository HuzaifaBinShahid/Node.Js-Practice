const PizzaShop = require("./pizza-shop");
const Drink = require('./drink')

const pizzashop = new PizzaShop()
const drink  = new Drink();

pizzashop.on('order-pizza' , (size, toppings)=>{
    console.log(`Baking a ${size} pizza with ${toppings}`);
    drink.serveDrink(size);
})



pizzashop.order("large" , "mushrooms")
pizzashop.displayorder();