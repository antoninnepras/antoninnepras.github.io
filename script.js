function reveal() {
  var reveals_left = document.querySelectorAll(".reveal-left");
  for (var i = 0; i < reveals_left.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals_left[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals_left[i].classList.add("active");
    } else {
      reveals_left[i].classList.remove("active");
    }
  }

  var reveals_right = document.querySelectorAll(".reveal-right");
  for (var i = 0; i < reveals_right.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals_right[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals_right[i].classList.add("active");
    } else {
      reveals_right[i].classList.remove("active");
    }
  }

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
