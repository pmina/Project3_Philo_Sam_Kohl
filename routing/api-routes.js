// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Profile = require("../models/profiles.js");
var db = require("../models");
// Routes

module.exports = function(app) {
  //Get all markers
  app.get("/all", function(req, res) {
    db.Comment.findAll({}).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  //Add a marker
  app.post("/api/new", function(req, res) {
    console.log("Marker data:");
    console.log(req.body);

    db.Comment.create({
      person_name: req.body.name,
      comment_data: req.body.comment,
      location: req.body.location,
      user_LAT: req.body.lat,
      user_LNG: req.body.lng,
      createdAt: req.body.created_at,
      EventId: Number.parseInt(req.body.events_id, 10)
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // GET route for getting all of the comments
  app.get("/api/comments/", function(req, res) {
    db.Comment.findAll({}).then(function(dbComment) {
      console.log("api comments called ", dbComment);
      res.json(dbComment);
    });
  });

  // GET route for getting the comments for the specified event
  app.get("/api/comments/:commentId", function(req, res) {
    db.Comment.findAll({
      where: {
        EventId: req.params.commentId
      }
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  //GET route for getting all the events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbevents) {
      console.log("api events called ", dbevents);
      res.json(dbevents);
    });
  });

    // Get route for retrieving a single post
    app.get("/api/event/:id", function(req, res) {
      db.Event.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbEvent) {
          res.json(dbEvent);
        });
    });

    // Get route for retrieving event comments by event id
    // app.get("/api/event/:id/comments", function(req, res) {
    //   db.Event.findAll({
    //     where: {
    //       id: req.params.id
    //     }
    //   })
    //     .then(function(dbEvent) {
    //       res.json(dbEvent);
    //     });
    // });
};
