$(document).ready(function () {
  // Function to create glitter particles
  function createGlitterParticle(x, y) {
    const glitter = $('<div class="cursor-glitter"></div>');
    glitter.css({
      top: y + "px",
      left: x + "px",
    });

    $("body").append(glitter);

    setTimeout(() => {
      glitter.remove();
    }, 500);
  }

  // Track the mousemove event
  $(document).on("mousemove", function (e) {
    createGlitterParticle(e.clientX, e.clientY);
  });
});
