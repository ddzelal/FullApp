const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "city", "products"]);

const adminController = (req, res) => {
  let user = req.session.user;
  db.users.find({}, (err, users) => {
    db.products.find({}, (err, products) => {
      db.city.find({}, (err, city) => {
        let operator = users.filter((user) => user.role == "operator");
        let advisors = users.filter((user) => user.role == "advisors");
        res.render("admin/adminDashboard", {
          name: user.first_name,
          city: city,
          products: products,
          operator: operator,
          advisors: advisors,
        });
      });
    });
  });
};

module.exports = adminController;
