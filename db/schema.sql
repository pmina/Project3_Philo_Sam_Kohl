DROP DATABASE IF EXISTS project3_db;
CREATE DATABASE project3_db;

USE project3_db;


CREATE TABLE comment_table(

  id INT NOT NULL AUTO_INCREMENT,
  person_name VARCHAR(100) NOT NULL,
  comment_data VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  user_LAT FLOAT,
  user_LNG FLOAT,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

-- (log in)
CREATE TABLE person_table(

  id INT NOT NULL AUTO_INCREMENT,
  is_user BOOLEAN DEFAULT true, 
  person_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  -- look at https://developers.facebook.com/docs/facebook-login/web for password
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE event_table(

  id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(100) NOT NULL,
  descrption VARCHAR(100) NOT NULL,
  location_name VARCHAR(100) NOT NULL,
  event_LAT FLOAT,
  event_LNG FLOAT,
  PRIMARY KEY (id)
);