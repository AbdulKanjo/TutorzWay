const passport = require("passport");
const logout = (req, res) => {
  console.log(req.session);
  req.session.destroy(() => {
    res.redirect("http://localhost:3000");
  });
  console.log("hello", req.session);
};
const getUser = (req, res) => {
  const db = req.app.get("db");
  if (!req.user) {
    res.status(500).send({ message: "Not Logged In" });
  } else {
    db.get_user_by_authid(req.user.auth_id).then(results => {
      console.log("resssssssss", results);
      res.status(200).send(results[0]);
    });
  }
};
const login = passport.authenticate("auth0", {
  successRedirect: "http://localhost:3000/#/",
  failureRedirect: "http://localhost:3000/#/login"
});
module.exports = {
  logout,
  login,
  getUser
};
