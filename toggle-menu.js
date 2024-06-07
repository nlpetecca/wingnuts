document
  .getElementById("menu-categories")
  .addEventListener("change", function () {
    "use strict";
    var vis = document.querySelector(".toggle-on"),
      target = document.getElementById(this.value);
    if (vis !== null) {
      vis.className = "toggle-off";
    }
    if (target !== null) {
      target.className = "toggle-on";
    }
  });
