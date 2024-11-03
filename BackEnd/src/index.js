const express = require('express');
const routes = require('./routes')
const cors = require('cors')
const app = express();


require('./config/mongodbconfig');


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
