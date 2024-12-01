const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/files"));

// Multer 객체 업로드 환경 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "files/"); // 어디에 저장될지 경로 설정!
      //  uploads 라는 폴더가 미리 만들어져있어야 함
    },
    filename: function (req, file, done) {
      // file.originalname >> 26139_img.png
      // path.extname(파일이름.확장자) >> 확장자만 반환 // .png
      const extension = path.extname(file.originalname);

      // path.basename(파일이름.확장자, 확장자) >> 파일이름만 반환 //26139_img
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );

      console.log("path.basename", path.basename(file.originalname, extension));
      console.log("path.extname", path.extname(file.originalname));
    },
  }),

  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB
});

// Index 라우터 설정
const indexRouter = require("./router/index");
app.use("/", indexRouter);

//
const agreeRouter = require("./router/agree");
app.use("/", agreeRouter);

app.listen(PORT, () => {
  console.log("서버시작");
});
