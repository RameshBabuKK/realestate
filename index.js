var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var port = 5000;

var app = express();

// Cors
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "ejs");
//app.engine("html", require("ejs").renderFile);
//app.use(express.static(path.join(__dirname, "client")));

// Routing
var apiRouter = require('./routes/projects');
app.use('/api', apiRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Mongo Database connection
mongoose.connect('mongodb://localhost:27017/realestate');
const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
 //   Console.log('Connected to Database');
});



app.listen(port, function() {
    console.log('App listening to port : ' + port);
});


module.exports = app;


