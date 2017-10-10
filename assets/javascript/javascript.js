$(document).ready(function() {

function renderbuttons() {
	var giphy = ["The Office", "Avengers", "Batman", "Star Strek"];

		for (var i = 0; i < giphy.length; i++) {
			var giphybtn = $("<button>");
			
			giphybtn.addClass("giphybtn");

			giphybtn.attr("data-btn", giphy[i]);

			giphybtn.text(giphy[i])

			$("#buttons").append(giphybtn);
	};
}
renderbuttons();


});
