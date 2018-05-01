var path = require('path');
// var server = require("/server.js");

module.exports = function(app){

    //html links

    //the main areas page

    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "/../../public/index.html"));
    // });
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../../public/login.html"));
    });

}