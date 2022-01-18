$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".header-area").toggleClass("toggle");
    $(this).toggleClass("fa-times");
  });

  $(window).on("scroll load", function () {
    $(".menu-icon").removeClass("fa-times");
    $(".header-area").removeClass("toggle");

    if ($(window).scrollTop() > 300) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
