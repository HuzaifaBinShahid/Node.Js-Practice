const http = require('node:http');
const fs = require('node:fs')

// const server = http.createServer((req,res) =>{
//     res.writeHead(200 ,{
//         "Content-Type": "text/plain"
//     });
//     res.end('Hello Server');
// }); This was for plain text as response


// ----------- Json Data --------------// 

// const server = http.createServer((req, res) => {

//     const superHero = {
//         firstName: "Huzaifa",
//         lastName: "Bin Shahid"
//     }

//     res.writeHead(200, { 'Content-Type': "application/json" });
//     res.end(JSON.stringify(superHero))
// })


// ------------- HTML Data or File -------------//

const server = http.createServer((req, res) => {

    const name = 'Huzaifa';

    res.writeHead(200, { 'Content-Type': "text/html" });
    // fs.createReadStream('./index.html').pipe(res); with streams
    let html = fs.readFileSync('./index.html');
    html.replace("{{name}}" , name);
    res.end(html);

})

server.listen(3000, () => {
    console.log('Server is listening at port 3000')
});

