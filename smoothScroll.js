$(document).ready(function () {
  // Smooth scroll to the project container on click of the .projects-scroll-click element
  $(".projects-scroll-click").on("click", function (e) {
    e.preventDefault(); // Prevent any default behavior (not necessary without anchor but good practice)

    // Get the target element's position
    const target = $("#projects-container"); // Replace this with the actual target element's ID or class
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800 // Duration of smooth scroll in milliseconds
      );
    }
  });
});
