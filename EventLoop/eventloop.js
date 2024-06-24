const fs = require('node:fs')
// Will be put inside Timer Queue

setTimeout(() => { console.log(1) }, 0)

setTimeout(() => { console.log(2) }, 0)

setTimeout(() => { console.log(3) }, 0)

// Inside Microtask Queue

process.nextTick(() => { console.log('First Micro task') })
process.nextTick(() => {
    console.log('Second Micro task')
    process.nextTick(() => { console.log('Third Micro Task')})
})
process.nextTick(() => { console.log('Fourth Micro task') })


// Promises inside Microtask Queue

Promise.resolve().then(()=>{
    console.log('First Promise')
})

Promise.resolve().then(()=>{
    console.log('Second Promise')
    Promise.resolve().then(()=>{
        console.log('third Promise')
    })
})

Promise.resolve().then(()=>{
    console.log('Fourth Promise')
})

// Inside Cheque queue

setImmediate(()=>{console.log('will be put inside cheque queue')});

// Close Queue

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on('close', ()=>{
    console.log('File is read and now being closed by close queue');
})