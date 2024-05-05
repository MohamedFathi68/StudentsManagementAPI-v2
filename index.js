const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

//============================ database files ================================
const students = fs.readFileSync("./students.json", "utf8");
const courses = fs.readFileSync("./courses.json", "utf8");
const departments = fs.readFileSync("./departments.json", "utf8");
//============================================================================

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let response = (statusCode, msg)=>{
    res.statusCode = statusCode;
    res.end(JSON.stringify(msg));
  }
  const {url , method} = req
//============================  Get All Students  ============================

if (url === '/students' && method === 'GET') {
  response = (200, students)
} 
//============================================================================


//============================  Get All Students  ============================
else if (url === '/students' && method === 'GET'){
  
}
//============================================================================

//============================  Get All Students  ============================
else {
  response(404 , "Routes Not Found");
}
//============================  Get All Students  ============================
//============================  Get All Students  ============================
//============================  Get All Students  ============================






});

server.listen(port, '127.0.0.1',() => {
  console.log(`Server is running on port ${port}`);
});
