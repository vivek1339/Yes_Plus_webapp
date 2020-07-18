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
//app.use(express.static(path.join(__dirname+'src/html')));


/*const usersRouter = require('./users');
console.log("Accessing users");
app.use('/users', usersRouter);*/

app.post('/add',(req, res) => {
  
  //function getNewUser() {
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
      });
    
  });
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