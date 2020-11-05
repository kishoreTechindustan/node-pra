const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const amdinData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', 'views')


app.use('/admin', amdinData.routes)
app.use(shopRoutes)

//if route not exist
app.use((req, res, next) => {
    //res.status(404).send("<h1>Page not found</h1>")
    //res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
    res.status(404).render('404', { pageTitle: 'Page not found' })
})
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})


// const http = require('http');
//  const express = require('express');
// const app = express();




// const server = http.createServer(app);

// server.listen(3000,() => console.log('listening at port 3000')) 