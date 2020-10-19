const http = require('http')
const module1 = require('./module1')
const module2 = require('./module2')
const app = require('./app')
http.createServer(app.httpHandler).listen(3000,()=>console.log(`listening on port 3000`))




// ===========  basic steup

// const server = http.createServer((req,res)=>{
//    const url =req.url;
//    const method =req.method;
//    if(url ==="/"){
//       res.setHeader('Content-Type','text/html')
//       res.write('<html>')
//       res.write('<title><head>Node js</head></title>')
//       res.write('<Body> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></from> </Body>')
//       res.write( module2.myVariable)
//       res.write('</html>')
//        module2.myFunction()
//       return res.end()
//    }
//    if(url ==="/message" && method ==="POST"){
//       const body =[]
//       req.on("data",(chunk)=> body.push(chunk));

//       req.on('end',()=>{
//          const parseBody = Buffer.concat(body);
//          console.log(parseBody,'parseBody')
//          const message = parseBody
//          fs.writeFileSync('message.txt',message);
//       })
//       res.statusCode =302;
//       res.setHeader('Location','/');
//       return res.end();
//    }

//    res.setHeader('Content-Type','text/html')
//    res.write('<html>')
//    res.write('<title><head>Node js</head></title>')
//    res.write('<Body> Hi </Body>')
//    res.write('</html>')
//    res.end()
// })

// server.listen(8000)
