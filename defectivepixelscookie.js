var numberOfDiv = 10; // Define number of Defective Pixels
var currentLength = Cookies.get("pixelLength");
var states = ["hot", "stuck"];
var colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"];
var windowH = window.innerHeight;
var windowW = window.innerWidth;

var data = !Cookies.get("data") ? [] : eval(JSON.parse(Cookies.get("data")));

if (data.length > 0) {
  for (var i = 0; i < currentLength; i++) {
    var pixelData = data[i];
    placePixel(pixelData);
  }
}

for (var i = 0; i < numberOfDiv; i++) {
  var pixel = !currentLength ? i : currentLength * 1 + i;
  var pixelData = [
    Math.floor(Math.random() * windowH) + 1,
    Math.floor(Math.random() * windowW) + 1,
    states[Math.floor(Math.random() * states.length)],
    colors[Math.floor(Math.random() * colors.length)]
  ];
  data[pixel] = pixelData;
  placePixel(pixelData);
}

var newLength = !currentLength ? 10 : currentLength * 1 + 10;
Cookies.set("pixelLength", newLength);
Cookies.set("data", JSON.stringify(data));

function placePixel(storedData) {
  if (storedData) {
    var newDiv = document.createElement("div");
    newDiv.classList = "pixel " + storedData[2];
    newDiv.style.top = storedData[0];
    newDiv.style.left = storedData[1];
    if (storedData[2] == "stuck") newDiv.style.background = storedData[3];
    document.body.appendChild(newDiv);
  }
}
