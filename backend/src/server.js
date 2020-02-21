const express= require('express');
//var cookieParser = require('cookie-parser')
const routes = require('./routes');
const app= express();
require('./database');


app.use(express.json());
//app.use(cookieParser("ops"));
app.use(routes);



app.listen(3333);

