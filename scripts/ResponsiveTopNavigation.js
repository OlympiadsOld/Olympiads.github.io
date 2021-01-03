function ChangeNavigation() {
  var x = document.getElementById("ListOfTopNavigation");
  if (x.className === "NormalDisplay") {
    x.className = "NormalDisplayDisabled";
  } else {
    x.className = "NormalDisplay";
  }
}