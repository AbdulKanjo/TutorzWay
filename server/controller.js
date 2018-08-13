//------------Coordinates------------------

const getCoordinates = (req, res, next) => {
  const db = req.app.get("db");
  db.get_studentMarker()
    .then(coordinates => res.status(200).send(coordinates))
    .catch(e => res.status(500).send("Something is wrong"));
};
const getCoordinatesTutor = (req, res, next) => {
  const db = req.app.get("db");
  db.get_tutorMarker()
    .then(coordinates => res.status(200).send(coordinates))
    .catch(e => res.status(500).send("Something is wrong"));
};

//------------get tutors/students------------------

const getAllTutors = (req, res, next) => {
  const db = req.app.get("db");
  db.get_tutors()
    .then(tutor => res.status(200).send(tutor))
    .catch(e => res.status(500).send("somethingiswrong"));
};
const getAllTutorsByAge = (req, res, next) => {
  const db = req.app.get("db");
  db.get_tutor_by_age()
    .then(tutor => res.status(200).send(tutor))
    .catch(e => res.status(500).send("somethingiswrong"));
};
const getAllTutorsBySubject = (req, res, next) => {
  const db = req.app.get("db");
  db.get_tutor_by_subject()
    .then(tutor => res.status(200).send(tutor))
    .catch(e => res.status(500).send("somethingiswrong"));
};
const getAllTutorsByPrice = (req, res, next) => {
  const db = req.app.get("db");
  db.get_tutor_by_price()
    .then(tutor => res.status(200).send(tutor))
    .catch(e => res.status(500).send("somethingiswrong"));
};
const getAllStudents = (req, res, next) => {
  const db = req.app.get("db");
  db.get_students()
    .then(students => res.status(200).send(students))
    .catch(e => res.status(500).send("Something is wrong"));
};
const getTutorClass = (req, res, next) => {
  const db = req.app.get("db");
  db.get_classes_tutor()
    .then(classes => res.status(200).send(classes))
    .catch(e => res.status(500).send("Something is wrong"));
};
const getRating = (req, res, next) => {
  console.log(req.params.id);
  const db = res.app.get("db");
  db.get_rate_average([req.params.id])
    .then(response => res.status(200).send(response[0].avg))
    .catch(e => res.status(500).send("Something is wrong"));
};
const getReviews = (req, res, next) => {
  console.log(req.params.id);
  const db = res.app.get("db");
  db.get_reviews([req.params.id])
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send("Something is wrong"));
};

const getNumOfReviews = (req, res, next) => {
  console.log(req.params.id);
  const db = res.app.get("db");
  db.get_num_reviews([req.params.id])
    .then(response => res.status(200).send(response))
    .catch(e => res.status(500).send("Something is wrong"));
};

//------------delete------------------

const deleteStudent = (req, res, next) => {
  const db = res.app.get("db");
  db.delete_student([req.params.id])
    .then(() => res.status(200).send("User successfully deleted"))
    .catch(e => res.status(500).send("Something is wrong"));
};
const deleteTutor = (req, res, next) => {
  const db = res.app.get("db");
  // db.delete_user
  db.delete_tutor_rating([req.params.id]).then(() => {
    db.delete_tutor([req.params.id])
      .then(() => res.status(200).send("User successfully deleted"))
      .catch(e => {
        console.log(e);
        res.status(500).send("Something is wrong");
      });
  });
};
const deleteReview = (req, res, next) => {
  const db = res.app.get("db");
  db.delete_review([req.params.id])
    .then(() => res.status(200).send("User successfully deleted"))
    .catch(e => res.status(500).send("Something is wrong"));
};

//------------create students/tutors------------------

const newStudent = (req, res, next) => {
  console.log(req.body);
  const db = req.app.get("db");
  const {
    first_name,
    last_name,
    location,
    age,
    grade,
    picture,
    favorite_subjects,
    coordinates,
    auth_id
  } = req.body;
  db.create_student([
    first_name,
    last_name,
    location,
    age,
    grade,
    picture,
    favorite_subjects,
    coordinates,
    auth_id
  ])
    .then(() => {
      console.log("the authcoming in", auth_id);
      db.change_user_toTrue([auth_id]);
    })
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};

const newTutor = (req, res, next) => {
  console.log(req.body);
  const db = req.app.get("db");
  const {
    first_name,
    last_name,
    location,
    age,
    years_experience,
    class_subject,
    picture,
    coordinates,
    auth_id,
    pricehour
  } = req.body;
  db.create_tutor([
    first_name,
    last_name,
    location,
    age,
    years_experience,
    class_subject,
    picture,
    coordinates,
    auth_id,
    pricehour
  ])
    .then(() => {
      console.log("the authcoming in", auth_id);
      db.change_user_toTrue([auth_id]);
    })
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};
const newRating = (req, res, next) => {
  console.log("req.body=>>", req.body);
  const db = req.app.get("db");
  const { rating, tutor_id } = req.body;
  db.create_tutor_rating([rating, tutor_id])
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};
const newReview = (req, res, next) => {
  console.log("req.body=>>", req.body);
  const db = req.app.get("db");
  const { review, tutor_id, username } = req.body;
  db.create_tutor_review([review, tutor_id, username])
    .then(() => res.status(200).send("all good"))
    .catch(e => res.status(500).send("Something is wrong"));
};
module.exports = {
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
  getAllTutorsByPrice
};
