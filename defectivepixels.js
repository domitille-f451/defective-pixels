var numberOfDiv = 2000; // Define number of Defective Pixels

for (var i = 0; i < numberOfDiv; i++) {
  var newDiv = document.createElement("div");
  var states = ["hot"]; // define the type of defective pixels "hot" "dead" "stuck"
  var colors = ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)"];
  var windowH = window.innerHeight;
  var windowW = window.innerWidth;

  var data = {
    top: Math.floor(Math.random() * windowH) + 1,
    left: Math.floor(Math.random() * windowW) + 1,
    state: states[Math.floor(Math.random() * states.length)],
    color: colors[Math.floor(Math.random() * colors.length)]
  };

  if (localStorage.getItem("pixel" + i) == null) {
    localStorage.setItem("pixel" + i, JSON.stringify(data));
    var storedData = data;
  } else {
    var storedData = JSON.parse(localStorage.getItem("pixel" + i));
  }

  newDiv.classList = "pixel " + storedData.state;
  newDiv.style.top = storedData.top;
  newDiv.style.left = storedData.left;
  if (storedData.state == "stuck") newDiv.style.background = storedData.color;

  document.body.appendChild(newDiv);
}
