var runTime = 0;

// starts the rain simulation from the Rainy Day library
function run() 
{
  // get image
  var image = document.getElementById('background');
  if (runTime == 0)
  {
    // start the simulation function
    image.onload = function () 
    {
      // create new rainy day with given params from library
      var engine = new RainyDay({
      image: this,
      gravityAngle: Math.PI / 9
      });
      engine.trail = engine.TRAIL_SMUDGE;
      engine.rain([
      [1, 0, 1000],
      [3, 3, 3]
      ], 100);
    };
    image.crossOrigin = 'anonymous';

    // stop rain if toggled
    if (runTime == 1)
    {
      engine.destroy;
    }
    runTime = 1;
    image.src = 'finalBackground.jpg';
  }
}

//gets random ron swanson quote from API
//API found at https://ron-swanson-quotes.herokuapp.com
function getRonQuote()
{
  // get request to API
  $.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes", function(data)
    {
      $("#Swanson").html(data + "<br>" + "-Ron Swanson");
    });
}

//gets random inspirational quote from API with author
//API found at https://api.quotable.io
function getInspirationalQuote()
{
  // get request to API
  $.get("https://api.quotable.io/random", function(data)
  {
    $("#Inspire").html(data.content + "<br>" + "-" + data.author);
  });
}

// changes the background and colors to make everything in 2020 feel less sad
function stop()
{
  document.getElementById("h3").style.color = "blue";
  document.getElementById("h3").innerHTML = "THE RAIN CONTINUES BECAUSE WE ARE STILL IN OREGON. But hey... at least it's pretty!";
  document.getElementById("background").src="sunny.jpg";
  document.getElementById("textArea").style.color = "yellow";
  document.getElementById("Swanson").style.color = "red";
  document.getElementById("Inspire").style.color = "orange";
}


