const http = require('http')

const server = http.createServer((req,res)=>{
   res.setHeader('Content-Type','text/html')
   res.write('<html>')
   res.write('<title><head>Node js</head></title>')
   res.write('<Body> <h1>hi</h1></Body>')
   res.write('</html>')
   res.end()
})

server.listen(8000)
