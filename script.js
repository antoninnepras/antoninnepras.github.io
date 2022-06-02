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

  var reveals_bottom = document.querySelectorAll(".reveal-bottom");
  for (var i = 0; i < reveals_bottom.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals_bottom[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals_bottom[i].classList.add("active");
    } else {
      reveals_bottom[i].classList.remove("active");
    }
  }

  var reveals_top = document.querySelectorAll(".reveal-top");
  for (var i = 0; i < reveals_top.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals_top[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals_top[i].classList.add("active");
    } else {
      reveals_top[i].classList.remove("active");
    }
  }

  var reveals_spin = document.querySelectorAll(".reveal-spin");
  for (var i = 0; i < reveals_spin.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals_spin[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals_spin[i].classList.add("active");
    } else {
      reveals_spin[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
