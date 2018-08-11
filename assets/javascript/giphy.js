// var apiKey = "n2fE3A0uBv8aIisa327WnRcPgiCy1Ajw";
var topics = ["double dutch", "spades", "four square", "dominos","jax", "dodge ball", "hockey"];
var newGame = ""
topics = $(this).attr("data-game");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10";

$("#create-button").on("click", function() {
    
$("#gamingButtons").append(topics);

});