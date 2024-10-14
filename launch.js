$(document).ready(function () {
  // When .wetrospective is clicked
  $(".wetrospective").on("click", function () {
    const modalTemplate = `
            <div class="custom-modal-overlay-two">
              <div class="custom-modal">
                <div class="close-modal-btn">
                  <div class="close-button-line lineOne"></div>
                  <div class="close-button-line lineTwo"></div>
                </div>
                <div class="wet-modal">
                    <img src="./assets/images/launch_evite_edit.jpg">
                </div>
              </div>
            </div>
          `;

    // Append the modal to the body
    $("body").append(modalTemplate);

    // Show the modal by fading it in (optional animation)
    $(".custom-modal-overlay-two").fadeIn();

    // Close the modal when the close button is clicked
    $(".close-modal-btn").on("click", function () {
      $(".custom-modal-overlay-two").fadeOut(function () {
        $(this).remove(); // Remove modal from the DOM after fadeOut
      });
    });

    // Close the modal when clicking outside the modal content
    $(".custom-modal-overlay-two").on("click", function (e) {
      if ($(e.target).is(".custom-modal-overlay-two")) {
        $(this).fadeOut(function () {
          $(this).remove(); // Remove modal from the DOM after fadeOut
        });
      }
    });

    // Start bouncing images
    bounceImages();
  });

  function bounceImages() {
    const $images = $(".bounce-img");
    const speed = 1.2; // Adjust the speed as needed

    $images.each(function () {
      let img = $(this);
      let position = {
        top: Math.random() * 200, // Random starting position for top
        left: Math.random() * 200, // Random starting position for left
        dx: Math.random() < 0.5 ? speed : -speed, // Random horizontal direction
        dy: Math.random() < 0.5 ? speed : -speed, // Random vertical direction
      };

      img.css({ top: position.top, left: position.left, position: "absolute" });

      // Move the image
      function moveImage() {
        let parentWidth = $(".credit-logos").width();
        let parentHeight = $(".credit-logos").height();
        let imgWidth = img.width();
        let imgHeight = img.height();

        position.left += position.dx;
        position.top += position.dy;

        // Bounce off the left and right walls
        if (position.left <= 0 || position.left + imgWidth >= parentWidth) {
          position.dx = -position.dx; // Reverse direction
        }

        // Bounce off the top and bottom walls
        if (position.top <= 0 || position.top + imgHeight >= parentHeight) {
          position.dy = -position.dy; // Reverse direction
        }

        img.css({ top: position.top, left: position.left });

        requestAnimationFrame(moveImage); // Continuously animate
      }

      moveImage();
    });
  }
});
