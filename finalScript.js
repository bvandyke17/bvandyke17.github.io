function getRonQuote()
{
  var url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  $.ajax({
    url: url,
    type: "GET",
    format: "json",
    sucess: function(response) {
      console.log(response);
      $("#Swanson").append(response);

    }

  })

}