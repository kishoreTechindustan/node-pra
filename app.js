const express = require('express');
var bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
//const expresshbs = require('express-handlebars');
const errorController = require('./controllers/error')

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname), 'dirreecfccfc ')

// app.engine('hbs', expresshbs({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }))
// app.set('view engine', 'hbs')
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/admin', adminRoutes)
app.use(shopRoutes)

//if route not exist
app.use(errorController.get404)

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})


// const http = require('http');
//  const express = require('express');
// const app = express();




// const server = http.createServer(app);

// server.listen(3000,() => console.log('listening at port 3000')) 