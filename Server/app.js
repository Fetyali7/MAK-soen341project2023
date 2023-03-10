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

/**FOR LOGIN**/
app.get("/users", (req, res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/insertUsers", (req,res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    const sqlInsert = "INSERT INTO users (email, pass) VALUES (?,?)";
    db.query(sqlInsert, [email, pass], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
});

/**FOR SIGNUP**/
app.get("/userSu", (req, res) => {
    const sqlSelect = "SELECT * FROM userSu";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/insertUserSu", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO userSu (username, password, email) VALUES (?,?,?)";
    db.query(sqlInsert, [username, password, email], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    });
});


/**FOR JobPostings**/
app.delete("/deleteJobPostings/:idJobPostings", (req, res) => {
    const id = req.params.idJobPostings;
    const sqlDelete = "DELETE from jobpostings WHERE idJobPostings = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    })

}) 

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

app.put("/update", (req, res) => {
    const companyName = req.body.companyName;
    const phoneNumber = req.body.phoneNumber;
    const employerName = req.body.employerName;
    const jobDescription = req.body.jobDescription;
    const location = req.body.location;
    const id = req.body.id;
    
    const sqlEdit =  "UPDATE jobpostings SET companyName = ?, phoneNumber = ?, employerName = ?, jobDescription = ?, location = ? WHERE idJobPostings = ?";

    db.query(sqlEdit, [companyName, phoneNumber, employerName, jobDescription, location, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.delete("/deleteJobPostings/:idJobPostings", (req, res) => {
    const id = req.params.idJobPostings;
    const sqlDelete = "DELETE from jobpostings WHERE idJobPostings = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) console.log(err);
    })
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})