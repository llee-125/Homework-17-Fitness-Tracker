const User = require("../models/workout");

module.exports = {
  getUser: (req, res) => {
    !req.query.id
      ? User.find()
          .then((allUsers) => res.send(allUsers))
          .catch((err) => res.send(err))
      : User.findById(req.query.id)
          .then((user) => res.send(user))
          .catch((err) => res.send(err));
  },
};
