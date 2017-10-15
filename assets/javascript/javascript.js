$(document).ready(function() {

//Global array
var giphy = ["Avengers", "Batman", "BraveHeart", "The Flash", "Friends", "Gladiator", "Green Arrow", "Groundhog Day", "John Wick", "Lost",  
			"Minions", "Napoleon Dynamite", "NCIS", "The Office", "Parks and Recreation", "Paul Blart: Mall Cop", "Red Dawn", "Rush Hour", 
			"Star Strek", "Star Wars", "Supernatural", "The Walking Dead",];

//Calls data from the API from GIPHY
function alertgif() {

	//Empty the previous gifs that were on the screen
	$("#display").html("");

	//Grabs current value from the button
   var value = $(this).attr("data-btn");

	//Calls data from the API for the current value of the button
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg"

	//Calls API from Giphy
	var xhr = $.get(queryURL);
	
	xhr.done(function(data){console.log(data) 

		//Grabs data from the object and define them into reasonable variables using a for-loop
		for (var i = 0; i < data.data.length; i++) {

			var showdiv = $("<div class='moviegif'>");

			var rating = data.data[i].rating;

			var animatedgif = data.data[i].images.fixed_height.url;

			var static = data.data[i].images.fixed_height_still.url;

			var showimage = $("<img>");

			var p = $("<p>").text("Rating: " + rating);

			showimage.attr("src", static);

    		showimage.addClass("moviegif");

    		showimage.attr("data-state", "still");

    		showimage.attr("data-still", static);

    		showimage.attr("data-animate", animatedgif);

    		showdiv.append(p);

    		showdiv.append(showimage);

    		//We put all 10 gifs that we called into the HTML
    		$("#display").prepend(showdiv);

		};
	});
};

//Going through the array and building buttons for each element and adding a button and an attribute to each element
function renderbuttons() {

	// Delete the content inside the buttons div prior to adding new giphy
	$("#buttons").html("");

	for (var i = 0; i < giphy.length; i++) {

		var giphybtn = $("<button>");
		
		giphybtn.addClass("giphybtn");

		giphybtn.attr("data-btn", giphy[i]);

		giphybtn.text(giphy[i])

		$("#buttons").append(giphybtn);
	};
};




//When user inputs a text into the submit box, it pushes the data into an array and makes a button for it
$("#find-giphy").on("click", function(event){

	event.preventDefault();

	var gifvalue = $("#giphy-input").val().trim();

	giphy.push(gifvalue);

	renderbuttons();
});

//When any of the buttons are clicked, it calls the "alertgif" function
$(document).on("click", ".giphybtn", alertgif);


//If any of the gif's are clicked, it calls the function "pausePlayGif" 
$(document).on("click", ".moviegif", pausePlayGifs);

//Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
function pausePlayGifs() {
  	var state = $(this).attr("data-state");

    	if(state === "still") {

	        $(this).attr("src", $(this).attr("data-animate"));

	        $(this).attr("data-state", "animate");

      } else {

	        $(this).attr("src", $(this).attr("data-still"));

	        $(this).attr("data-state", "still");
  }
}

//Start of the page
renderbuttons();

});
