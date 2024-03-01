
'use strict';

const { json } = require('body-parser');

module.exports= function(app){
    var jsonku = require('./controler')

    app.route('/')
        .get(jsonku.index);
}