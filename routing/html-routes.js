var path = require("path");
// var server = require("/server.js");

module.exports = function(app) {
  //homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mapTest.html"));
  });
};
