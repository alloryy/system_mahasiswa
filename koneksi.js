var mysql = require("mysql")
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mahasiswa',
})
conn.connect((err)=>{
    if(err) throw err;
    console.log("koneksi bersasil");
})

module.exports(conn)