const express=require('express');
const server=express();

server.get('/',(req,res)=>{
    res.send('hi');
    console.log('server started');
})
server.listen(8080,()=>{
    console.log('server running');
})