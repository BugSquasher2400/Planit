// const User = require("../model/user");

exports.agree = (req, res) => {
  res.render("agree");
};

exports.isagree = (req, res) => {
  console.log(req.body);
  res.render("singn");
};
