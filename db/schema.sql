DROP DATABASE IF EXISTS project3_db;
CREATE DATABASE project3_db;

USE project3_db;


CREATE TABLE comments (

  id INT NOT NULL AUTO_INCREMENT,
  person_name VARCHAR(100) NOT NULL,
  comment_data VARCHAR(1000) NOT NULL,
  location VARCHAR(100) NOT NULL,
  user_LAT FLOAT,
  user_LNG FLOAT,
  createdAt TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP NOT NULL,
  events_id VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- -- (log in)
-- CREATE TABLE person_table(
-- -- server knows both ids
--   id INT NOT NULL AUTO_INCREMENT,
--   -- user 
--   firebase_id 
--   person_name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   password VARCHAR(100) NOT NULL,
--   is_user BOOLEAN DEFAULT true, 
--   -- look at https://developers.facebook.com/docs/facebook-login/web for password
--   PRIMARY KEY (id)
-- );


CREATE TABLE events(

  event_id INT NOT NULL AUTO_INCREMENT,
  event_name VARCHAR(100) NOT NULL,
  -- descrption VARCHAR(100) NOT NULL,
  -- location_name VARCHAR(100) NOT NULL,
  event_LAT FLOAT,
  event_LNG FLOAT,
  PRIMARY KEY (id)
);