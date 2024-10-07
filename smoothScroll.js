$(document).ready(function () {
  $(".projects-scroll-click").on("click", function (e) {
    e.preventDefault();

    const target = $("#projects-container");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });
});
