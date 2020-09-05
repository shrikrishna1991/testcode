const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var fs = require('fs'); 
var path = require('path'); 
var multer = require('multer');
const { mongoose } = require('./db.js');
var userController = require('./controllers/userController.js');

var app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));
  
var storage = multer.diskStorage({ 
    destination: (req, file, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (req, file, cb) => { 
        cb(null, file.fieldname + '-' + Date.now()) 
    } 
}); 
  
var upload = multer({ storage: storage }); 
app.use('/users', userController);