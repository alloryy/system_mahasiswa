const bodyParser = require('body-parser');
const express = require('express');
const app = express()
const port = 3200


// parse aplication json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// calling routes
var routes = require('./routes');
routes(app);

 app.listen(port, () => {
    console.log(`Server started on port`);
 });
 