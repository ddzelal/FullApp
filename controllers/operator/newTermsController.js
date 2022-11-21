const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const newTermsController = (req, res) => {
  let user = req.session.user;
  db.terms.insert(
    {
      client_name: req.body.client_name,
      client_lastname: req.body.client_lastname,
      client_years: req.body.client_years,
      husband_name: req.body.husband_name,
      husband_lastname: req.body.husband_lastname,
      husband_years: req.body.husband_years,
      fix_phone: req.body.fix_phone,
      mobile_phone: req.body.mobile_phone,
      address: req.body.address,
      date_appointments: req.body.date_appointments,
      time_appointments: req.body.time_appointments,
      advisor: req.body.advisor,
      city: req.body.city,
      children: req.body.children,
      operations: req.body.operations,
      therapy: req.body.therapy,
      note: req.body.note,
      active: true,
      contract_value: 0,
      reason: "",
      entrance: false,
      product: "",
      operator: user.first_name + " " + user.last_name,
    },
    (err, docs) => {
      res.redirect("/operator");
    }
  );
};

module.exports = newTermsController;
