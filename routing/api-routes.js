// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Profile = require("../models/profiles.js");
var connection = require("../config/connection.js");
var db = require("../models");
// Routes

module.exports = function(app) {
    //Get all markers
    app.get("/all", function(req, res){
        var dbQuery = "SELECT * FROM comment_table";

        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    //Add a marker
    app.post("/api/new", function(req, res) {
        console.log("Marker data:");
        console.log(req.body);

        var dbQuery = "INSERT INTO comment_table (person_name, comment_data, location, user_LAT, user_LNG, createdAt) VALUES(?,?,?,?,?,?)";

        connection.query(dbQuery, [req.body.name, req.body.comment, req.body.location, req.body.lat, req.body.lng, req.body.created_at], function(err, result) {
            if (err) throw err;
            console.log("Marker Successfully Saved!");
            res.end();
        });
    });
};