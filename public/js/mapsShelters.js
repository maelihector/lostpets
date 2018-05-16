// AJAX call for list of shelters around the address input
function getShelters() {
  var url = 'http://api.petfinder.com/shelter.find';
  var apiKey = 'c8a14c54d21aabcd8288a6f32fc6ba90';
  var zip = $("#zipcode").val();
  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      key: apiKey,
      'location': zip,
      output: 'basic',
      format: 'json',
      count: 25
    },
    success: function (res) {
      console.log(res);
      var shelters = res.petfinder.shelters.shelter;
      console.log(shelters);
      shelters.forEach((value) => {
        // console.log(value.name.$t);
        // console.log(value.address1.$t);
        // console.log(value.city.$t);
        // console.log(value.state.$t);
        // console.log(value.zip.$t);
        // console.log(value.phone.$t);
        // console.log(value.email.$t);
        let name = value.name.$t;
        let address = value.address1.$t;
        let city = value.city.$t;
        let state = value.state.$t;
        let zip = value.zip.$t;
        let phone = value.phone.$t;
        let email = value.email.$t;

        let cardDiv = $("<div>").addClass("col s12 m6")
        let individualCard = ($("<div>").addClass("card blue-grey"));
        let cardContent = $("<div>").addClass("card-content white-text");
        let cardTitle = $("<span>").addClass("card-title").text(name);
        let p = $("<p>").text("Address: " + address + " " +city + " " + state + ", " + zip + " " + 
        "Phone: " + phone + " " + "Email: " + email);

        cardDiv.append(individualCard.append(cardContent.append(cardTitle).append(p)));

        $("#shelters").prepend(cardDiv);

      });
    }
  });
}
$("#submit").on("click", getShelters); 