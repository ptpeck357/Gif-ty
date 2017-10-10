$(document).ready(function() {

//Global array
var giphy = ["The Office", "Avengers", "Batman", "Star Strek", "Parks and Recreation", "Arrow", "The Flash", "Napoleon Dynamite", 
			"Red", "Star Wars", "The Walking Dead", "Brave Heart", "Gladitor", "Minions", "Friends", "24", "lost", "Supernatural", "NCIS",
			"Rush Hour"];

//Calls data from the API from GIPHY
function alertgif() {
	$("#display").html("");

	var value = $(this).attr("data-btn");

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + value + "&api_key=dc6zaTOxFJmzC&limit=10"

	var xhr = $.get(queryURL);
		xhr.done(function(data){console.log(data) 
			for (var i = 0; i < data.data.length; i++) {
					$("#display").append(data.data[i].rating + "<br>" + "<img src=" + data.data[i].images.original.url + "</img>" + "<br>");
			}
		});
}

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





$("#find-giphy").on("click", function(event){

	event.preventDefault();

	var gifvalue = $("#giphy-input").val();

	giphy.push(gifvalue);

	renderbuttons();
});

$(document).on("click", ".giphybtn", alertgif);

renderbuttons();


});
