
const http = require('http');

const port = 8080;

const server = http.createServer((req, res)=>{
	res.writeHead(200);
	res.end('Hello World, welcome to WeJapa Internships');
})
server.listen(port, ()=>{
	console.log(`Server is running on http://localhost:${port}`)
});