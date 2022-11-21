const monogojs = require("monogojs");
const db = monogojs("fullapp", ["terms"]);

const adminController = (req, res) => {
  let user = req.session.user;
};
