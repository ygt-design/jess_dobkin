$(document).ready(function () {
  // Define the project data with multiple images for each project
  const projectContent = {
    "./assets/images/forWhatItsWorth/forWhatItsWorth_one.jpg": {
      title: "For What It's Worth",
      description:
        "Installation as part of the exhibition, Milk. Commissioned by Wellcome Collection, London, UK. Curated by Honor Beddard and Marianne Templeton.",
      extraInfo: "Photo Credit: Christa Holk",
      imgSrc: [
        "./assets/images/forWhatItsWorth/forWhatItsWorth_one.jpg",
        "./assets/images/forWhatItsWorth/forWhatItsWorth_two.jpg",
        "./assets/images/forWhatItsWorth/forWhatItsWorth_three.jpg",
      ],
    },
  };

  // Create and append the modal container to the body (initially hidden)
  $("body").append(`
    <div class="custom-modal-overlay" style="display:none;">
      <div class="custom-modal">
        <span class="close-modal-btn">&times;</span>
        <div class="modal-content">
          <img src="" alt="Project Image" class="modal-image" style="width: 100%; height: auto; margin-bottom: 15px;">
          <div class="modal-title"></div>
          <div class="modal-description"></div>
          <div class="modal-extraInfo"></div>
          <div class="image-navigation">
            <button class="prev-image" style="margin-right: 10px;">&#10094; Previous</button>
            <button class="next-image">Next &#10095;</button>
          </div>
        </div>
      </div>
    </div>
  `);

  // Click event for each project div
  $(".projects-container .project").on("click", function () {
    // Get the image source of the clicked project
    let imgSrc = $(this).find("img").attr("src");

    // Check if the project content exists for this image source
    const projectData = projectContent[imgSrc];

    if (!projectData) {
      console.error("No content found for the image source:", imgSrc);
      return;
    }

    // Index to keep track of the currently displayed image in the gallery
    let currentIndex = 0;

    // Set the modal content dynamically, starting with the first image
    $(".modal-image").attr("src", projectData.imgSrc[currentIndex]);
    $(".modal-title").text(projectData.title);
    $(".modal-description").text(projectData.description);
    $(".modal-extraInfo").text(projectData.extraInfo);

    // Show the modal with a fade-in effect
    $(".custom-modal-overlay").fadeIn(300);

    // Event listener for Next button
    $(".next-image")
      .off("click")
      .on("click", function () {
        if (currentIndex < projectData.imgSrc.length - 1) {
          currentIndex++;
          $(".modal-image").attr("src", projectData.imgSrc[currentIndex]);
        }
      });

    // Event listener for Previous button
    $(".prev-image")
      .off("click")
      .on("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          $(".modal-image").attr("src", projectData.imgSrc[currentIndex]);
        }
      });
  });

  // Close button event to hide the modal
  $(".close-modal-btn").on("click", function () {
    $(".custom-modal-overlay").fadeOut(300);
  });

  // Click outside the modal content to close the modal
  $(".custom-modal-overlay").on("click", function (e) {
    if ($(e.target).hasClass("custom-modal-overlay")) {
      $(".custom-modal-overlay").fadeOut(300);
    }
  });
});
