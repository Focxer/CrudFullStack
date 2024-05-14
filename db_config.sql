DROP DATABASE IF EXISTS FullStackLogin;
CREATE DATABASE FullStackLogin DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE FullStackLogin;

DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE IF NOT EXISTS `tb_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `birth_date` DATE NOT NULL,
  PRIMARY KEY(`id`)
);