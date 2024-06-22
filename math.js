// --------- Practice different kind of input/output practices (Coomon Js) ------------//

module.exports  = (a,b) =>{
    return a+b;
}

// ---------- For multiple modules to be exported ------------//

const add = (a,b) =>{
    return a+b;
}

const subtract = (a,b) =>{
    return a-b;
}

module.exports = {add,subtract}

// --------------- modeule exports 4th type ------------//

module.exports.add = (a,b) =>{
    return a+b;
}

// ----------------- 5th type (usable due to iife coz it has simlpe exports keyword in its parameters) ---------------//

exports.subtract = (a,b) =>{
    return a-b;
}

