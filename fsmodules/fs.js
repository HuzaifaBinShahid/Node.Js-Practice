const fs = require('node:fs')

console.log('first')
// Synchronus way of reading the file
const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent);

console.log('second')

// Asynchronus way of reading file (executes a function)

fs.readFile('./file.txt','utf-8' , (err,data) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log('third') // Third will print before the upper function as the function being asynchronus does not stop the execution of later code

// Write content to a file

const write = fs.writeFileSync('./greet.txt','Hey There');

fs.writeFile('./greet.txt' ,' Hello Huzaifa' , {flag: 'a'}, (err)=>{
    if(err){
        console.log('file exists!')
    }else{
        console.log('file written')
    }
})
