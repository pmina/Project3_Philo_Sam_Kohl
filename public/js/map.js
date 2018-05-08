var infoWindow, messagewindow;
var isUserEditingForm = false;
var formMarker;

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

      var location = {
        coords: { lat: latFloat, lng: lngFloat },
        content:
          "<h3>" + comment.location + ": " + comment.comment_data + "</h3>"
      };

      addMarker(location, map);
      // ========================================================FIX=================
      // TODO also append these comments as a list
      $("#commentsList").append('<p class="commentlistclass">' + "<b>Location: </b>" + comment.location + "  <b></br>  Comment:    </b>" + comment.comment_data +  "  <b><br>  Time:    </b>" + moment(comment.createdAt).format(' h:mm a, MMM Do YY') + '</p>' )
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
  });

  //Check content
  if (location.content) {
    marker.addListener("click", function() {
      infoWindow.setContent(location.content);
      infoWindow.open(map, marker);

      removeFormMarker();
    });
  }
}

function getEvents(calllback) {
  $.get("/api/events", function(response) {
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

      if (callback) {
        callback();
      }
    }
    // $("#eventTitle").append('<h2>' + event + '</h2>')
    
  });
}

function moveFormToInfoWindow() {
  var newForm = document.getElementById("form").cloneNode(true);
  infoWindow.setContent(newForm);
}

function removeFormMarker() {
  isUserEditingForm = false;
  if (formMarker) {
    formMarker.setMap(null);
    formMarker = undefined;
  }
}

function initMap() {
  var eventId = localStorage.eventID; 
  console.log(eventId);

  infoWindow = new google.maps.InfoWindow({});
  messagewindow = new google.maps.InfoWindow({
    content: document.getElementById("message")
  });

  var eventLoc = [];
  $.get("/api/event/" + eventId, function(response) {
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

    $("#eventTitle").prepend('<h1>' + event.event_name + '</h1>');
    // console.log("location ", location);
    // console.log("Coords: ", location[0].coords);

    eventLoc = location[0].coords;
    // console.log("Map Coords", charlotte);

    var map = new google.maps.Map(document.getElementById("map"), {
      center: location[0].coords,
      zoom: 17
    });
    getComments(eventId, map);

    google.maps.event.addListener(infoWindow, "closeclick", function() {
      removeFormMarker();
    });

    google.maps.event.addListener(map, "click", function(event) {
      if (isUserEditingForm) {
        // just move the marker
        formMarker.setPosition(event.latLng);
        return false;
      }

      isUserEditingForm = true;

      formMarker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });

      infoWindow.open(map, formMarker);
      moveFormToInfoWindow();
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

$(document).on("click", "#save_marker", function(event) {
  event.preventDefault();

  var id = window.location.pathname.split('/')[2]

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
    lat: formMarker.getPosition().lat(),
    lng: formMarker.getPosition().lng(),
    events_id: id
  };

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
      row.append("<p> Time: " + newMarker.createdAt + "</p>")
      //   row.append("<p>" + newMarker.body + "</p>");
      //   row.append("<p>At " + moment(newMarker.created_at).format("h:mma on dddd") + "</p>");

      $("#user_comments").prepend(row);
    });
    location.reload();
});

// When the page loads, grab all of our comments
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
