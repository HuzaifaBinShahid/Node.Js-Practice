const http = require('node:http');
const fs = require('node:fs');


const server = http.createServer((req,res) =>{

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page')

    }else if(req.url === '/about'){
        res.writeHead(200 , {'Content-Type': "text/plain"})
        res.end('Hello Huzaifa');
    }
    else if(req.url === '/api'){
        const name = {
            firstName: "Huzaifa",
            lastName:"Bin Shahid"
        }

        res.writeHead(200, {'Content-Type': "application/json"})
        res.end(JSON.stringify(name))
    }else{
        res.writeHead(404);
        res.end('Page not found')
    }
})

server.listen(3000 ,()=>{
 console.log('Server is listening at port 3000');
})