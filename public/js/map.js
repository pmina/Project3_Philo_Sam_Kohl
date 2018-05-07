var marker; // TODO remove me
var infoWindow, messagewindow;

function getComments(eventId, map, callback) {
  // console.log("inside get comments")
  $.get("/api/comments/" + eventId, function(response) {
    // console.log("This is the response callback ");
    console.log(response);
    var comments = response;

    for (var count = 0; count < comments.length; count++) {
      var comment = comments[count];
      var latFloat = parseFloat(comment.user_LAT);
      var lngFloat = parseFloat(comment.user_LNG);

      var location = [
        {
          coords: { lat: latFloat, lng: lngFloat },
          content:
            "<h3>" + comment.location + ": " + comment.comment_data + "</h3>"
        }
      ];

      console.log("location ", location);
      console.log("Coords: ", location[0].coords);

      addMarker(location[0], map);
// ========================================================FIX=================
      // TODO also append these comments as a list
      $("#commentsList").append('<li>' + comment.location + ": " + comment.comment_data + '</li>')
    // =========================================================  
 
      if (callback != undefined) {
        callback();
      }
    }
  });
}

function addMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location.coords,
    map: map
    // icon: props.iconImage
  });

  console.log("Marker: ", marker);
  console.log("Coordinates: ", location.coords);

  //Check content
  if (location.content) {
    var infoWindow = new google.maps.InfoWindow({
      content: location.content
    });

    console.log("Adding location content info window", location.content);
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }
}

function getEvents(calllback) {
  // console.log("inside get comments")
  $.get("/api/events", function(response) {
    // console.log("This is the response callback ");
    console.log(response);
    var events = response;

    for (var count = 0; count < events.length; count++) {
      var event = events[count];
      var latFloat = parseFloat(event.event_LAT);
      var lngFloat = parseFloat(event.event_LNG);

      var location = [
        {
          coords: { lat: latFloat, lng: lngFloat },
          content:
            "<h3>" +
            event.event_name +
            ": " +
            event.description +
            " - " +
            event.location_name +
            "</h3>"
        }
      ];

      console.log("location ", location);
      console.log("Coords: ", location[0].coords);

      if (callback) {
        callback();
      }
    }
  });
}

function initMap() {
  var eventId = localStorage.eventID; // TODO grab the event id from the URL
  console.log(eventId);
  var charlotte = { lat: 35.2271, lng: -80.8431 };

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("form")
  });
  messagewindow = new google.maps.InfoWindow({
    content: document.getElementById("message")
  });

  console.log("CLI Coords", charlotte);

  var eventLoc = [];
  $.get("/api/event/" + eventId, function(response) {
    // console.log("This is the response callback ");
    console.log(response);
    var event = response;

    var latFloat = parseFloat(event.event_LAT);
    var lngFloat = parseFloat(event.event_LNG);

    var location = [
      {
        coords: { lat: latFloat, lng: lngFloat },
        content:
          "<h3>" +
          event.event_name +
          ": " +
          event.description +
          " - " +
          event.location_name +
          "</h3>"
      }
    ];

    console.log("location ", location);
    console.log("Coords: ", location[0].coords);

    eventLoc = location[0].coords;
    console.log("Map Coords", charlotte);

    var map = new google.maps.Map(document.getElementById("map"), {
      center: eventLoc,
      zoom: 14.5
    });
    getComments(eventId, map);

    google.maps.event.addListener(map, "click", function(event) {
      marker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });

      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });

      // setTimeout(function () {
      //     marker.setMap(null);
      //     delete marker;
      // }, 3000);
      // return marker;
    });
  });

  // =========================================================
  //User's geolocation
  /*        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
            */

  // ==================================================
  // console.log("Getting Comments");
}

$().on("click", "#save_marker", function(event) {
  event.preventDefault();

  var newMarker = {
    name: $("#person_name")
      .val()
      .trim(),
    comment: $("#comment_data")
      .val()
      .trim(),
    location: $("#location")
      .val()
      .trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    lat: marker.getPosition().lat(),
    lng: marker.getPosition().lng(),
    events_id: $("#events_id").val()
  };
  console.log(newMarker);

  $.post("/api/new", newMarker);

  $("#person_name").val("");
  $("#comment_data").val("");
  $("#location").val("");
  infoWindow.close();

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newMarker)
    // On success, run the following code
    .then(function() {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p> Name: " + newMarker.name + " </p>");
      row.append("<p> location: " + newMarker.location + " </p>");
      row.append("<p> Comment: " + newMarker.comment + "</p>");
      //   row.append("<p>" + newMarker.body + "</p>");
      //   row.append("<p>At " + moment(newMarker.created_at).format("h:mma on dddd") + "</p>");

      $("#user_comments").prepend(row);
    });
});

// When the page loads, grab all of our commentst
$.get("/api/comments/:commentId", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("allEventComents");

      row.append("<p> Name: " + body + " </p>");
      row.append("<p> location: " + newMarker.location + " </p>");
      row.append("<p> Comment: " + newMarker.comment + "</p>");

      $("#user_comments").prepend(row);
    }
  }
});
