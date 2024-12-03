const mysql = require("mysql2");

// 로그인값 유저데이터조회
exports.userInfo = (id, pw) => {
  return new Promise((res, rej) => {
    const query = `SELECT code, id, nick FROM User WHERE id = ? AND pw = ?;`;
    // 받은 정보값
    const params = [id, pw];
    // DB연결
    const conn = mysql.createConnection({
      host: "127.0.0.1",
      user: "planit",
      password: "xzrjs1589!@",
      database: "Planit",
    });

    // 연결 테스트
    conn.connect((err) => {
      if (err) {
        console.error("데이터베이스 연결 실패:", err);
        // 서버 연결 실패시 콜백 실패전달
        rej(err);
      }
      console.log("데이터베이스에 성공적으로 연결되었습니다.");
    });

    // 쿼리문 전송
    conn.query(query, params, (error, results) => {
      if (error) {
        rej(error);
      }

      // 정보가 있는지 없는지
      if (results.length > 0) {
        results[0].auth = true;
        console.log("로그인 성공:", results[0]);
        res(results[0]); // 유저 정보를 반환
      } else {
        console.log("로그인 실패: 사용자 정보를 찾을 수 없습니다.");
        res(null); // 로그인 실패
      }
    });
    // 연결 종료
    conn.end();
  });
};
