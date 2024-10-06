$(document).ready(function () {
  // Select the info div and animated arrow
  const infoDiv = $(".info");
  const arrow = $(".animated-arrow");

  infoDiv.on("scroll", function () {
    // Check if scrolled a certain amount (e.g., 100px)
    if (infoDiv.scrollTop() > 100) {
      arrow.css("opacity", "0"); // Hide the arrow
    } else {
      arrow.css("opacity", "1"); // Show the arrow
    }
  });
});
