const express= require('express');
//var cookieParser = require('cookie-parser')
const routes = require('./routes');
const app= express();
const cors=require('cors');
require('./database');

//app.use(cors({origin:'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
//app.use(cookieParser("ops"));
app.use(routes);

//app.use(cors({origin:'https://localhost:3000/'}));

app.listen(3333);

