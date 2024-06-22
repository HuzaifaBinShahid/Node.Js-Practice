// ------------- Exporting Methods Of Es Modules ---------------//

// 1st method
const add = (a,b) =>{
    return a+b;
}
// export default add;


//------------- 2nd method --------------//

// export default (a,b) =>{
//     return a-b;
// }


// ------------ 3rd method ------------------//

const multiply = (a,b) =>{
    return a*b;
}

export default {
    multiply,
}

//--------------- 4th method ---------------//

export const divide = (a,b) =>{
    return a/b;
}


