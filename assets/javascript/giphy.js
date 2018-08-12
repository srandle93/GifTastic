var apiKey = "n2fE3A0uBv8aIisa327WnRcPgiCy1Ajw";
// var topics = ["double dutch", "spades", "four square", "dominos","tic tac toe", "dodge ball", "go fish"];



$("#create-button").on("click", function(event) {
    event.preventDefault();
    console.log('button works');
    var input = $('#gaming-input').val();
    var button = $('<button>');
    button.attr('data-game', input );
    button.text(input);
    button.addClass('game');
    
    $('#gamingButtons').append(button);

    $('#gaming-input').val('');
    
   
    //$("#gamingButtons").append(topics);

});

$('.game').on('click', function( event ) {
    var topics = $(this).attr("data-game");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topics + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var results = response.data;

        
        for (var i = 0; i < results.length; i++) {

           
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            
            var gifDiv = $("<div class='item'>");

            
            var rating = results[i].rating;

           
            var p = $("<p>").text("Rating: " + rating);

            var gameImage = $("<img>");

            gameImage.attr("src", results[i].images.fixed_height.url);

    
            gifDiv.append(p);
            gifDiv.append(gameImage);

           
            $("#games").prepend(gifDiv);
          }



        // var imageUrl = response.data.image_original_url;
        // var gameImage = $("<img>");
        // gameImage.attr("src", queryURL);
        // // gameImage.attr("alt", "game image");
        // console.log(response.data);
        
        // for (var i=0; i<response.data.length; i++){
        //     $("#games").append(gameImage[i])
        }
      });
   
    

});