-- for heroku
-- SELECT * FROM yljwjre2tmzcx94z.event_tables;  

-- for your local host
-- SELECT * FROM project3_db.comments;


INSERT INTO events (event_name, location_name, descrption, event_LAT, event_LNG, createdAt, updatedAt)
VALUES( "Yiasou Greek Festival","600 East Blvd", "The next Greek Festival,
 one of Charlotte’s largest cultural events, will be held Sept. 7-10, 2017.
  Experience authentic Greek cuisine and try your first bite of souvlaki on
   a stick, sit back and watch live music and dancing, wander around the Hellenic 
   cultural exhibits and, best of all, shop for belly dancing skirts.",
    35.20746 , -80.85313080000003, NOW(), NOW());

INSERT INTO events (event_name, location_name, descrption, event_LAT, event_LNG, createdAt, updatedAt)
VALUES( "Charlotte Oktoberfest","4400 Sharon Road", "Grab your pretzel necklaces and head to
 Symphony Park Sept. 9, 2017 for The Charlotte Oktoberfest. Enjoy a great
  premium craft beer selection and take advantage of the amazing food and
   fun activities offered at the festival.",
    35.1518496 , -80.8317485, NOW(), NOW());

INSERT INTO events (event_name, location_name, descrption, event_LAT, event_LNG, createdAt, updatedAt)
VALUES( "Festival in the Park", "Freedom Park.", "Charlotte’s oldest (and free)
 arts festival, to be held Sept. 22-24, 2017, features fine and traditional arts 
 and crafts. You can also enjoy live music during your weekend spent this festival
  in Freedom Park.",
   35.1899234 , -80.84478490000004, NOW(), NOW());


-- INSERT INTO `project3_db`.`events`
-- (`id`,
-- `event_name`,
-- `descrption`,
-- `location_name`,
-- `event_LAT`,
-- `event_LNG`,
-- `createdAt`,
-- `updatedAt`)
-- VALUES
-- (2,
-- <{event_name: Charlotte Oktoberfest}>,
-- <{descrption: "Grab your pretzel necklaces and head to
--  Symphony Park Sept. 9, 2017 for The Charlotte Oktoberfest. Enjoy a great
--   premium craft beer selection and take advantage of the amazing food and
--    fun activities offered at the festival."}>,
-- <{location_name: "4400 Sharon Road"}>,
-- <{event_LAT: }>,
-- <{event_LNG: }>,
-- <{createdAt: }>,
-- <{updatedAt: }>);
