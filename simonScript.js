var simonArray = [];
  var playerArray = [];
  var continuePlay = 1;
  var totalToPlay = 1;
  var playTimeout = 325;

function setUp() 
{
  console.log("started");

  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";
  document.getElementById("header").style.color = "white";
  document.getElementById("header").innerText = "SIMON SAYS";  
  simonArray = [];
  playerArray = [];
  continuePlay = 1;
  totalToPlay = 1;
  playTimeout = 325;
}

function startGame() 
{
  setUp();

  alert("Repeat after simon! When you close this window, the game will begin. HINT: you are going to lose the farther you go along.");

  playValues();
}

function playValues() 
{
  var simonNumber = Math.floor(Math.random()*4);
  simonArray.push(simonNumber);
  playColor(simonArray[simonArray.length - 1]);
}

function playColor(color) 
{
  if (simonArray.length % 3 == 0)
  {
    playTimeout -= 25;

    if (playTimeout <= 0)
    {
      alert("Simon is whispering... Listen closely..");
      playTimeout = 0;
    }
  }

  if (color == 0)
  {
    $("#green").addClass("dissapear");

    setTimeout(function()
    {
      $("#green").removeClass("dissapear");
    },playTimeout)
  }

  else if (color == 1)
  {
    $("#red").addClass("dissapear");
    setTimeout(function () 
    {
      $("#red").removeClass("dissapear");
    }, playTimeout)
  }

  else if (color == 2)
  {
    $("#yellow").addClass("dissapear");
    setTimeout(function () 
    {
      $("#yellow").removeClass("dissapear");
    }, playTimeout)
  }

  else
  {
    $("#blue").addClass("dissapear");
    setTimeout(function () 
    {
      $("#blue").removeClass("dissapear");
    }, playTimeout)
  }

}

function greenPlay() 
{
  playerArray.push(0);
  playColor(0);
  validatePlay(playerArray.length - 1);
}

function redPlay() 
{
  playerArray.push(1);
  playColor(1);
  validatePlay(playerArray.length - 1);
}

function yellowPlay() 
{
  playerArray.push(2);
  playColor(2);
  validatePlay(playerArray.length - 1);
}

function bluePlay() 
{
  playerArray.push(3);
  playColor(3);
  validatePlay(playerArray.length - 1);
}

function validatePlay(index) 
{
  if (simonArray[index] == playerArray[index] &&simonArray.length == playerArray.length)
  {
    setTimeout(function () 
    {
      playValues();
      }, 800);
  }

  else
  {
    failedState();  
  }
}

function failedState() 
{
  document.body.style.backgroundColor = "red";
  document.body.style.backgroundImage = "url('https://memegenerator.net/img/instances/60486674/you-lose.jpg')";
  document.getElementById("header").style.color = "black";
  document.getElementById("header").innerText = "SIMON SAYS....YOU LOSE!";
}