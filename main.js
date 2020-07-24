
const http = require('http');

const port = 8080;

http.createServer((req, res)=>{
	res.writeHead(200);
	res.end('Hello World, welcome to WeJapa Internships');
}).listen(port, 'localhost', ()=>{
	console.log(`Server is running on http://localhost:${port}`)
});