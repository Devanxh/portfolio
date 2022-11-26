$(document).ready(function () {
  $(window).scroll(function () {

    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });


  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });

    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {

    $("html").css("scrollBehavior", "smooth");
  });


  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     $("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https:/typinganimation/animate.com", true);
  xhttp.send();
}

  var typed = new Typed(".typing", {
    strings: ["a Programmer.", "a Software Developer.", "a Thinker."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["a Programmer.", "a Software Developer.", "a Thinker."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,

  });

});
