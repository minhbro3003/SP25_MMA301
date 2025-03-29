const express = require('express');//import thu vien
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({ //khai bao ket noi csdl
    host: "localhost",
    user: "root",
    password: "",
    database: "a0"
});
db.connect(err => err);//ket noi
//doc du lieu
app.get('/data', (req, res) => {
    db.query('select * from mytable', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
app.listen(3002, () => {
    console.log("api dang chay o cong 3000");
});
