$(document).ready(function () {
  const infoDiv = $(".info");
  const arrow = $(".animated-arrow");

  infoDiv.on("scroll", function () {
    if (infoDiv.scrollTop() > 100) {
      arrow.css("opacity", "0");
    } else {
      arrow.css("opacity", "1");
    }
  });
});
