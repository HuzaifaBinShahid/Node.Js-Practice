// When we try to modify obj2 it also modifies obj1 due to same refrence and its called module exports

const obj1 = {
    name: 'Huzaifa',
}

let obj2 = obj1;
// obj2.name = 'Junaid'

// Refrence is broken here and its exports rather than module exports
obj2 = {
    name: 'Junaid'
}

console.log(obj1);