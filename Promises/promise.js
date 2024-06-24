const fs  = require('node:fs/promises');

console.log('first')

fs.readFile('./file.txt' , 'utf-8')
.then(data =>console.log(data))
.catch(err => console.log(err));

console.log('second')

// using async await

async function readFile(){
    try{
        const writeContent = await fs.writeFile('./greet.txt','hello there!',)
        console.log(writeContent); // consoles undefined as it returns the promise and not the content of the file
    }catch(err){
        console.log(err)
    }
}

readFile();
