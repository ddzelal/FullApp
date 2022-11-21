const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const advisorController = (req, res) => {
  let user = req.session.user;
  console.log(user, "USER!!!");
  db.terms.find(
    {
      advisor: user.first_name + " " + user.last_name,
      active: true,
    },
    (err, terms) => {
      res.render("advisor/index", {
        name: user.first_name,
        terms: terms,
      });
    }
  );
};

module.exports = advisorController;
