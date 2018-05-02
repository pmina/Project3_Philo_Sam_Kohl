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
    app.get("/all", function(req, res){
        db.Comment.findAll({}).then(function(dbComment) {
            res.json(dbComment);
        })
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
            createdAt: req.body.created_at
        }).then(function(dbComment) {
            res.json(dbComment)
        });
     });
};