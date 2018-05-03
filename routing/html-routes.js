var path = require("path");
// var server = require("/server.js");

module.exports = function(app) {
  // homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // homepage
  app.get("/map", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });
};
