const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const saveController = (req, res) => {
  //get date
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let password = req.body.password;
  let role = req.body.role;
  db.users.insert(
    {
      first_name: first_name,
      last_name: last_name,
      password: password,
      role: role,
    },
    (err, docs) => {
      if (err) {
        //display error page
      } else {
        res.redirect("/admin");
      }
    }
  );
};

module.exports = saveController;
