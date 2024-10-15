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
                <iframe src="./assets/images/launch_evite.pdf#toolbar=0" id="iframeTou" style="width: 100%; height: 600px;">
                    <p>It appears your web browser doesn't support iframes.</p>
                </iframe>
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
});
