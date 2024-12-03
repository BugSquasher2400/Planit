const User = require("../model/login_auth");

exports.index = (req, res) => {
  res.render("index", { noload: false });
};

exports.login = (req, res) => {
  // 받은 값 DB조회 후 검증
  User.userInfo(req.body.id, req.body.pw)
    .then((user) => {
      if (user) {
        // 로그인성공
        res.render("todo", user);
      } else {
        // 로그인 실패
        res.render("index", {
          noload: true,
          msg: "아이디 및 비밀번호를 확인하세요",
          auth: false,
        });
      }
    })
    .catch((error) => {
      console.error("쿼리 오류:", error);
      res.status(500).send("Internal Server Error");
    });

  // res.render("index");
};
