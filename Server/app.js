const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mak_database'
});

app.use(cors());
app.use(express.json());

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get("/JobPostings", (req, res) => {
    const sqlSelect = "SELECT * FROM jobpostings";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/insertJobPosting", (req,res) => {
    const companyName = req.body.companyName;
    const phoneNumber = req.body.phoneNumber;
    const employerName = req.body.employerName;
    const jobDescription = req.body.jobDescription;
    const location = req.body.location;

    const sqlInsert = "INSERT INTO jobpostings (companyName, phoneNumber, employerName, jobDescription, location) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [companyName, phoneNumber, employerName, jobDescription, location], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})