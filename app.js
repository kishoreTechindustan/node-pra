const express = require('express');
var bodyParser = require('body-parser');
const amdinData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const expresshbs = require('express-handlebars');

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


// app.engine('hbs', expresshbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }))
// app.set('view engine', 'hbs')
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/admin', amdinData.routes)
app.use(shopRoutes)

//if route not exist
app.use((req, res, next) => {
    //res.status(404).send("<h1>Page not found</h1>")
    //res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
    res.status(404).render('404', { pageTitle: 'Page not found', path: null, })
})
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})


// const http = require('http');
//  const express = require('express');
// const app = express();




// const server = http.createServer(app);

// server.listen(3000,() => console.log('listening at port 3000')) 