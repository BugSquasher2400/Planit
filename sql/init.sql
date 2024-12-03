-- Active: 1732716060692@@127.0.0.1@3306@planit

INSERT INTO User (code,id,pw,nick) VALUES (NULL,'admin','xzrjs1589!@','관리자');

SELECT * FROM User WHERE id = 'admin' && pw = 'xzrjs1589!@';