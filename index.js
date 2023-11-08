const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./API/routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use('', routes);
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl).then(()=>{
    app.listen(port, ()=>{
        console.log(`Mondongo, puerto ${port}`);
    });
}).catch(err=>{
    console.log('fijate que no se pudo mijo', err);
});