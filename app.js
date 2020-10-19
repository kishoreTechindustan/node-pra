const url =require('url')
const fs = require('fs');

function htmlRender(file,res){
    fs.readFile(file,null,(err,data)=>{
        if(err){
           res.writeHead(404)
           res.write("page not found")
        }else{
           res.write(data)
        }
        res.end()
     })
}

module.exports ={
    httpHandler : (req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        const path = url.parse(req.url).pathname;
        switch(path){
            case '/':
                htmlRender('./index.html',res)
                break;
            case '/login':
                htmlRender('./login.html',res)
                break;
            default :
                  res.writeHead(404)
                  res.write('Route is not define')
                  res.end()
        }
     
     }
}