'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok('rest api is runing',res)
 }

exports.tampilDataMahasiswa = function(req,res){
    connection.query('SELECT *FROM mhs', function(error,rows, failed){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

exports.tampilDataMK = function (req, res) {
    connection.query('SELECT mhs.nim, mhs.namamhs FROM mhs, ambilmk WHERE mhs.nim = ambilmk.nim AND ambilmk.kodemk = "MK01";', function (error, rows, failed) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}
