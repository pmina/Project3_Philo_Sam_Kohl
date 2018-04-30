DROP DATABASE IF EXISTS project3_db;
CREATE DATABASE project3_db;

USE project3_db;

CREATE TABLE auctions(

  id INT NOT NULL AUTO_INCREMENT,

  person_name VARCHAR(100) NOT NULL,
  comment VARCHAR(100) NOT NULL,
  location_name VARCHAR(100) NOT NULL,
  
  

  -- event_coordinates1 INT,
  -- event_coordinates2 INT,

  user_LAT FLOAT,
  user_LNG FLOAT,
  

  createdAt TIMESTAMP NOT NULL,
  

  PRIMARY KEY (id)
);
