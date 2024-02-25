const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const port = 3200

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 app.listen(port, () => {
    console.log(`Server started on port`);
 });
