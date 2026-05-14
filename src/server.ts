import  { IncomingMessage, Server,createServer } from "http";
const server:Server=createServer((req:IncomingMessage,res)=>{
// console.log(req) /user, /products
// console.log(req.method) GET, Post,Delete
const url= req.url
const method= req.method

if(url==='/' && method === 'GET'){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"This is root Router"}))

}
else if(url?.startsWith("/products")){
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"This is Product Router"}))
}
else{
     res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({message:"Route not Found"}))
}

})
server.listen(5000,()=>{
    console.log("server is running on the port 5000")
})