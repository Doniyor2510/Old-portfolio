window.addEventListener("load", function (e) {
  var prev = document.querySelector(".gallery-1 .prev");
  var next = document.querySelector(".gallery-1 .next");
  var imgs = document.querySelectorAll(".gallery-1 img");
  var body = document.querySelector("body");
  var dark = document.querySelector(".dark");
  var light = document.querySelector(".light");
  var i = 0;

  function SliderOption(btnPrev, btnNext, img) {
    this.btnNext = btnNext;
    this.btnPrev = btnPrev;
    this.img = img;

    var comf = this;

    this.next = function (e) {
      comf.img[i].classList.remove("active");
      // console.log(i);
      i++;
      if (i === comf.img.length) {
        i = 0;
      }
      comf.img[i].classList.add("active");
    };

    this.prev = function (e) {
      comf.img[i].classList.remove("active");
      if (i === 0) {
        i = comf.img.length;
      }
      i--;
      comf.img[i].classList.add("active");
    };
  }

  var slider1 = new SliderOption(prev, next, imgs);

  slider1.btnNext.addEventListener("click", slider1.next);
  slider1.btnPrev.addEventListener("click", slider1.prev);

  var links = document.querySelectorAll(".top");

  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function (e) {
      e.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  dark.addEventListener("click", function (e) {
    body.style.background = "black";
  });

  light.addEventListener("click", function (e) {
    body.style.background = "#831c76";
  });


  
});
