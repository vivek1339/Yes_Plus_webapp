const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 5000;

var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yesplus-webapp.firebaseio.com"
});

const db = admin.firestore();

const app = express();

const path = require("path");

const bodyParser = require('body-parser');
const { Http2ServerResponse } = require("http2");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var cors = require("cors");
var cors_options = {
  origin : '*',

}
app.use(cors(cors_options));

/*const usersRouter = require('./users');
console.log("Accessing users");
app.use('/users', usersRouter);*/

app.post('/add_user',(req, res) => {
    //Call this function when sign up happens
  const user_obj = req.body;
  const user_data = {
    user_name: user_obj.name,
    user_email: user_obj.email,
    user_password: user_obj.password,
    user_branch: user_obj.branch,
    user_phno: user_obj.phno,
    user_join_year: user_obj.joinyear,
  };
  console.log(user_data);
  return db
    .collection("user_data")
    .doc(user_data.user_email)
    .set(user_data)
    .then(() => {
      console.log("new user added");
      res.send("200");
    })
    .catch(()=>{
      console.log("Unable to add user");
      res.send("404");
    });
});


//Make login work
/*
app.post('/data',(req, res) => {
//function getuser(email) {
  //Call this to retrieve user password
  const user_obj = req.body;
  const user_data = {
    user_email: user_obj.email,
    user_password: user_obj.password
  };
  console.log(user_data);

  db.collection("user_data")
    .doc(user_data.user_email)
    .get()
    .then(function (user_data.user_email) {
      console.log("got data");
      console.log(user_data.data().password);
     return user_data.data().password;
    })
    .catch((error) => {
      console.log("Couldn't get data");
    });
});
*/


//Change testimonial accordingly
app.post('/testimonial_add',(req, res) => {
      const user_obj = req.body;
      const user_data = {
        user_email: user_obj.email,
        user_faculty: user_obj.faculty,
        user_experience: user_obj.experience,
        user_date_course:user_obj.date_course,
    
      };
      console.log(user_data);
      return db
        .collection("testimonial_data")
        .doc(user_data.user_email)
        
        .set(user_data)
        .then(() => {
          console.log("new user added");
          res.send("200");
          //res.send("Api is working");
        })
        .catch(()=>{
          console.log("Unable to add user");
          res.send("404");
        });
        
    });

// Write a function to display all the testimonials

app.get('/display_testimonials',function(req,res){
  const user=req.body;
  user.find({},function(err,users){
    if(err){
      res.send('something went wrong');
    }
    res.json(user);
  });

});

app.use((req, res, next) => {
  console.log("got req for " + req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express server</h1></body</html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});