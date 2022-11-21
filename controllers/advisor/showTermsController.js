const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const showTermsController = (req, res) => {
  let user = req.session.user;
  let id = req.params.id;

  db.terms.find({ _id: mongojs.ObjectID(id) }, (err, terms) => {
    res.render("advisor/showTerms", {
      name: user.first_name,
      terms: terms[0],
    });
  });
};

module.exports = showTermsController;
