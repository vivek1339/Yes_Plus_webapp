const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const app = express();

const path = require("path");
const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

getNewUser().then((result) => {
  console.log(result.body);
  const user_obj = JSON.parse(result.body);
  const user_data = {
    user_name: user_obj.name,
    user_email: user_obj.email,
    user_password: user_obj.password,
    user_type: user_obj.type,
    user_phno: user_obj.phno,
    user_join_year: user_obj.join_year,
  };
  return db
    .collection("AppData")
    .doc("user_data")
    .set(user_data)
    .then(() => {
      console.log("new user added");
    });
});

function getNewUser() {
  //Call this function when sign up happens
}

function getuser(email) {
  //Call this to retrieve user password
  db.collection("AppData")
    .doc("user_data")
    .where("user_email", "==", email)
    .get()
    .then(function (user_data) {
      console.log("got data");
      return user_data.data().password;
    })
    .catch((error) => {
      console.log("Couldn't get data");
    });
}

app.use(express.static(path.join(__dirname, "src/css")));
app.use(express.static(path.join(__dirname, "src/js")));
app.use(express.static(path.join(__dirname, "src/animations")));
app.use(express.static(path.join(__dirname, "res/")));

//app.use(express.static(path.join(__dirname+'src/html')));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/html/home.html"));
  console.log("got req form(get) " + req.url);
});
app.get("/register.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/html/register.html"));
});

app.get("/about_us.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/html/about_us.html"));
});
app.get("/home.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/html/home.html"));
  console.log("got req form(get) " + req.url);
});
app.get("/login.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/src/html/login.html"));
  console.log("got req form(get) " + req.url);
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
