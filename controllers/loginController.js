const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const loginController = (req, res) => {
  //preuzeti podatke
  let nameFromForm = req.body.name;
  let passFromForm = req.body.password;

  db.users.find(
    { first_name: nameFromForm, password: passFromForm },
    (err, docs) => {
      if (err) {
        console.log("Greska");
        res.redirect("/");
      } else {
        if (docs.length === 1) {
          let user = docs[0];
          if (user.role == "admin") {
            res.redirect("/admin");
          } else {
            res.redirect("/");
          }
        } else {
          res.redirect("/");
        }
      }
    }
  );
};

module.exports = loginController;
