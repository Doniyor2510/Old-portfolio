window.addEventListener("load", function (e) {
  var boxes = document.querySelectorAll(".div");
  var colors = document.querySelectorAll("table tbody td "); // []

  var i = 0;
  while (i <= colors.length - 1) {
    var color = null;

    colors[i].addEventListener("click", function (e) {
      color = this.getAttribute("data-color");

      var j = 0;
      while (j <= boxes.length - 1) {
        boxes[j].addEventListener("click", function (e) {
          this.style.background = color;


        });
        j++;
      }
    });

    i++;
  }
  var i = 0;
  while (i <= colors.length - 1) {
    var divs = null;
    boxes[i].addEventListener("click", function (e) {
      if (color === divs) {
        alert("rang boyalmadi");
        return e.preventDefault("")
      }
    });
    e.preventDefault("")
    i++;


    while (i <= colors.length - 1) {
      var divs = null;
      boxes[i].addEventListener("click", function (e) {
        if (color === divs) {
          alert("rang tanlanmagan");
          return e.preventDefault("")
        }
      });
      e.preventDefault("")
      i++
    }
  }

});