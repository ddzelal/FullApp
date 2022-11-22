const mongojs = require("mongojs");
const db = mongojs("fullapp", ["terms"]);

const noticeController = (req, res) => {
  let id = req.params.id;

  db.terms.update(
    { _id: mongojs.ObjectID(id) },
    {
      $set: {
        active: false,
      },
    },
    (err, docs) => {
      res.redirect("/advisor");
    }
  );
};

module.exports = noticeController;
