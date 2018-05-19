  // Make a get request to our api route that will return every pet
  $.get("/api/found", function (data) {
    console.log(data);

    // For each pet that our server sends us back
    data.forEach(value => {
      console.log(value.name);
      let name = value.name;
      let type = value.animal;
      let zip = value.zip;
      // Create Card for each shelter listing 
      let cardDiv = $("<div>").addClass("col s12 m6");
      let individualCard = ($("<div>").addClass("card blue-grey"));
      let cardContent = $("<div>").addClass("card-content white-text");
      let cardTitle = $("<span>").addClass("card-title").text(name);
      let p = $("<p>").text("Animal Type: " + type + " Status: " + "Zip Code: " + zip);
      // Dump the card with the data onto the html
      cardDiv.append(individualCard.append(cardContent.append(cardTitle).append(p)));
      // Prepend to 'shelters' id DIV
      $("#pets").append(cardDiv);
    });
  });

// Triggers the sideNav when on smFound screens
$(document).ready(function(){
  $('.sidenav').sidenav();
});