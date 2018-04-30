DROP DATABASE IF EXISTS project3_db;
CREATE DATABASE project3_db;

USE project3_db;

CREATE TABLE auctions(

  id INT NOT NULL AUTO_INCREMENT,

  person_name VARCHAR(100) NOT NULL,

  event_coordinates1 INT,
  event_coordinates2 INT,

  user_coordinates1 INT,
  user_coordinates2 INT,
  
--   category VARCHAR(45) NOT NULL,
--   starting_bid INT default 0,
--   highest_bid INT default 0,
  PRIMARY KEY (id)
);
