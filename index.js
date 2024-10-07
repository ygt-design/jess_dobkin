$(document).ready(function () {
  // Store the original sizes for each project (relative to the grid layout)
  let originalSizes = [];

  // Flag to check if it's a mobile view
  let isMobile = $(window).width() <= 768;

  // Create an array of project image paths for dynamic rendering
  const projectImages = [
    "./assets/images/forWhatItsWorth/forWhatItsWorth_one.jpg",
    "./assets/images/holdingCoburn/holding_colburn.jpeg",
    "./assets/images/dinnerPartySeries/dinnerParty.jpeg",
    "./assets/images/youreInvited/youreInvited.jpg",
    "./assets/images/wetrospective/wetrospectiveOne.jpeg",
    "./assets/images/talixmx/talixmx_one.jpeg",
    "./assets/images/theMagicHour/magicHour_one.jpeg",
    "./assets/images/ourFuture/ourFuture_one.jpeg",
    "./assets/images/acting/acting_one.jpeg",
    "./assets/images/howMany/howMany_one.jpeg",
    "./assets/images/newStand/newStand_one.jpeg",
    "./assets/images/mono/mono_one.jpeg",
    "./assets/images/performaceArtArmy/performanceArtArmy_one.jpeg",
    "./assets/images/dirtyPlotz/dirtyPlotz_one.jpeg",
    "./assets/images/freeChildcare/freeChildcare_one.jpg",
    "./assets/images/performanceArtistForHire/performanceArtistForHire_one.jpeg",
    "./assets/images/powerball/powerBall_one.jpeg",
    "./assets/images/affirmations/affirmations_one.jpeg",
    "./assets/images/flowers/flowers_one.jpeg",
    "./assets/images/soup/soup_one.jpeg",
    "./assets/images/bleedingBall/bleedingBall_one.jpeg",
    "./assets/images/commitment/commitment_one.jpeg",
    "./assets/images/everything/everything_one.jpeg",
    "./assets/images/power/power_one.jpeg",
    "./assets/images/mirror/mirror_one.jpeg",
    "./assets/images/clown/clown_one.jpeg",
    "./assets/images/beingGreen/beingGreen_one.jpeg",
    "./assets/images/feeForService/feeForService_one.jpeg",
    "./assets/images/lactation/lactation_one.jpeg",
    "./assets/images/earPiece/earPiece_one.jpeg",
    "./assets/images/imagined/imagined_one.jpeg",
    "./assets/images/restored/restored_one.jpeg",
    "./assets/images/bookWorm/bookWorm_one.jpeg",
    "./assets/images/confessional/confessional_one.jpeg",
    "./assets/images/emergency/emergency_one.jpeg",
    "./assets/images/attending/attending_one.jpeg",
    "./assets/images/composite/composite_one.jpeg",
    "./assets/images/ontario/ontario_one.jpeg",
    "./assets/images/sixDegrees/sixDegrees_one.jpg",
    "./assets/images/twoBoobs/twoBoobs_one.jpeg",
    "./assets/images/waistUp/waistUp_one.jpg",
    "./assets/images/talk/talk_one.jpeg",
    "./assets/images/oneNight/oneNight_one.jpeg",
    "./assets/images/mad/mad_one.jpeg",
    "./assets/images/utopia/utopia_one.jpeg",
  ];

  // Dynamically append projects to the .projects-container
  projectImages.forEach((imagePath, index) => {
    const project = $("<div>")
      .addClass("project")
      .append(`<img src="${imagePath}" alt="Project ${index + 1}">`);
    $(".projects-container").append(project);
  });

  const projectsContainer = $(".projects-container");
  const projects = $(".project");

  // Function to store the original sizes of the projects
  function storeOriginalSizes() {
    originalSizes = []; // Reset the original sizes array
    projects.each(function () {
      originalSizes.push({
        width: $(this).width(), // Store the width
        height: $(this).height(), // Store the height
      });
    });
  }

  // Tidy Up function: apply CSS Grid layout
  function tidyUpProjects() {
    storeOriginalSizes(); // Store sizes before switching to tidy layout
    projects.each(function () {
      $(this).css({
        position: "relative", // Switch to relative positioning for CSS Grid
        transform: "none", // Remove transform property to align to grid
        opacity: 0, // Hide for smooth transition
        width: "100%", // Allow the width to be determined by the CSS Grid
        height: "auto", // Reset height for responsive layout
        zIndex: 1, // Ensure the z-index is reset
        left: "0", // Reset left property for CSS Grid
        top: "0", // Reset top property for CSS Grid
        margin: "0", // Remove any margins for alignment
        transition: "opacity 500ms ease, transform 500ms ease", // Smooth transition for tidy up
      });
    });
    projectsContainer.css({
      display: "grid", // Switch to grid display
      "grid-template-columns": isMobile ? "1fr" : "1fr 1fr 1fr", // Use 2 columns for mobile, 3 columns for desktop
      gap: "10px", // Apply gap between items
    });

    // Fade in the projects
    setTimeout(() => {
      projects.css({ opacity: 1 });
    }, 100);
  }

  // Scramble function: set up random positions using absolute positioning
  function scrambleProjects() {
    // Disable scrambling on mobile
    if (isMobile) {
      console.log("Scrambling is disabled on mobile view.");
      return;
    }

    const containerWidth = projectsContainer.width();
    const centerY = $(window).height() / 6; // Vertical center of the viewport

    projects.each(function (index) {
      // Check if original sizes have been stored
      if (!originalSizes[index]) {
        console.warn("Original size not found for project index:", index);
        return;
      }

      const randomX = Math.floor(Math.random() * (containerWidth - 200)); // Random X position within container width, leaving space for project width
      const randomY = Math.floor(Math.random() * 300) - 100; // Random Y offset within -100px to +100px of the vertical center
      const randomZ = Math.floor(Math.random() * 10); // Random Z index within a range

      // Apply new random transforms to each project, but keep their original size
      $(this).css({
        position: "absolute", // Use absolute positioning for scrambling
        transform: `translate(${randomX}px, ${centerY + randomY}px)`, // Apply random positions
        width: originalSizes[index].width + "px", // Maintain original width
        height: originalSizes[index].height + "px", // Maintain original height
        zIndex: randomZ, // Set random z-index
        opacity: 0, // Hide initially for smooth transition
        transition: "opacity 500ms ease, transform 500ms ease", // Smooth transition for scramble
      });
    });

    // Apply display:block after the CSS properties are set
    projectsContainer.css({
      display: "block", // Switch to block display for absolute positioning
    });

    // Fade in the scrambled projects
    setTimeout(() => {
      projects.css({ opacity: 1 });
    }, 100);
  }

  // Set the projects in grid view first
  tidyUpProjects();

  // After a delay, scramble the projects if not mobile
  if (!isMobile) {
    setTimeout(function () {
      scrambleProjects();
    }, 1000); // Delay for 1 second before scrambling
  }

  // Hide Scramble button on mobile view
  if (isMobile) {
    $(".scramble").hide(); // Hide the scramble button on mobile
  }

  // Set up the click event for Scramble button
  $(".scramble").on("click", function () {
    scrambleProjects(); // Scramble again when the button is clicked
  });

  // Set up the click event for Tidy Up button
  $(".tidyUp").on("click", function () {
    tidyUpProjects(); // Return projects to the grid layout
  });

  // Make the .wetrospective div draggable
  $(".wetrospective").draggable();

  // Reapply grid positions on window resize to keep responsive layout intact
  $(window).resize(function () {
    isMobile = $(window).width() <= 768; // Update the mobile flag on resize
    tidyUpProjects(); // Re-tidy the projects based on the new number of columns
    if (isMobile) {
      $(".scramble").hide(); // Hide scramble button on mobile
    } else {
      $(".scramble").show(); // Show scramble button on desktop
    }
  });
});
