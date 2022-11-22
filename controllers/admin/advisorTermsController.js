const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const advisorTermsController = (req, res) => {
  let name = req.params.name;
  let user = req.session.user;
  db.terms.find({ advisor: name }, (err, terms) => {
    console.log(terms);
    res.render("admin/advisorTerms", { name: name, terms: terms });
  });
};

module.exports = advisorTermsController;
