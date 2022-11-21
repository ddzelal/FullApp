const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "city", "products"]);

const operatorController = (req, res) => {
  let user = req.session.user;
  db.city.find({}, (err, city) => {
    db.users.find({ role: "advisors" }, (err, advisor) => {
      db.terms.find(
        { operator: user.first_name + " " + user.last_name },
        (err, terms) => {
          res.render("operator/index", {
            name: user.first_name,
            advisor: advisor,
            city: city,
            numberTerms: terms.length,
          });
        }
      );
    });
  });
};

module.exports = operatorController;
