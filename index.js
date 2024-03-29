const express = require('express');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen( process.env.PORT || 3333, ()=> console.log('server running'));
