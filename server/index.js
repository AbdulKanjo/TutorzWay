require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
// const path = require("path");
const session = require("express-session");
const strategy = require("./strategy");
const { logout, login, getUser } = require("./auth_controller");

//----------------controller Functions-----------------

const {
  getAllStudents,
  deleteStudent,
  newStudent,
  newTutor,
  getAllTutors,
  deleteTutor,
  getCoordinates,
  getTutorClass,
  getCoordinatesTutor,
  newRating,
  getRating,
  getAllTutorsByAge,
  getAllTutorsBySubject,
  newReview,
  getReviews,
  deleteReview,
  getNumOfReviews,
  getAllTutorsByPrice,
  updateReview
} = require("./controller");

const app = express();
app.use(bodyParser.json());
console.log();

app.use(express.static(`${__dirname}/../build`));
//--------------Socket--------------------

const socket = require("socket.io");

//---------------Strip--------------------
const SERVER_CONFIGS = require("./constants/server");

const configureServer = require("./server");
const configureRoutes = require("./routes");

configureServer(app);
configureRoutes(app);
//----------------Massive-----------------

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(e => console.log(e));

//----------------Session-----------------

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //2 weeks
    }
  })
);

//----------------Passport-----------------

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.get_user_by_authid(user.id)
    .then(response => {
      if (!response[0]) {
        console.log("loooooog", user.displayName, user.id);
        db.add_user_by_authid([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(err => done(err, null));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => done(err, null));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//------------NODEMAILER------------------------

console.log(process.env.USER_EMAIL);

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS
  }
});
app.post("/send", (req, res, next) => {
  console.log(req.body.messsage);

  var name = req.body.name;
  var email = req.body.email;
  var messsage = req.body.messsage;
  var content = `name: ${name} \n email: ${email} \n message: ${messsage} `;

  var mail = {
    from: name,
    to: email,
    subject: "New Message from Contact Form",
    html: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("NODEMAILER ERROR YO: ", err);
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

//------------STUDENTS ENDPOINTS----------------

app.get("/api/students", getAllStudents);
app.delete("/api/student/:id", deleteStudent);
app.post("/api/newstudent", newStudent);
app.get("/api/studentmarker", getCoordinates);

//------------TUTORS ENDPOINTS----------------

app.get("/api/tutors", getAllTutors);
app.get("/api/getclasses", getTutorClass);
app.get("/api/tutormarker", getCoordinatesTutor);
app.get("/api/getrating/:id", getRating);
app.get("/api/getreviews/:id", getReviews);
app.get("/api/gettutorsbyage", getAllTutorsByAge);
app.get("/api/gettutorsbysubject", getAllTutorsBySubject);
app.get("/api/gettutorsbyprice", getAllTutorsByPrice);
app.get("/api/getnumofreviews/:id", getNumOfReviews);
app.delete("/api/tutors/:id", deleteTutor);
app.delete("/api/deletetutorreview/:id", deleteReview);
app.post("/api/newtutor", newTutor);
app.post("/api/newtutorrating", newRating);
app.post("/api/newtutorreview", newReview);
app.put("/api/updatetutorreview", updateReview);
//--------------LOGIN ENDPOINTS---------------

app.get("/login", login);
app.post("/api/logout", logout);
app.get("/api/me", getUser);

//-----------port------------------------------

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

server = app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log(`server is listening ${SERVER_CONFIGS.PORT}`);
});

//--------------Socket--------------------
io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
