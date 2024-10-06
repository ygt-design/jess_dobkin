$(document).ready(function () {
  $.getJSON("./full_events_data.json", function (data) {
    data.years.reverse().forEach(function (yearObj) {
      let yearContainer = $("<div>").addClass("year-container");

      let yearTitle = $("<div>").addClass("year-title").text(yearObj.year);
      yearContainer.append(yearTitle);

      let eventsWrapper = $("<div>").addClass("events-wrapper");

      yearObj.events.forEach(function (eventObj) {
        let eventContainer = $("<div>").addClass("event-container");

        let eventTitle = $("<div>")
          .addClass("event-title")
          .text(eventObj.title);
        eventContainer.append(eventTitle);

        let eventDescription = $("<div>")
          .addClass("event-description")
          .text(eventObj.description);
        eventContainer.append(eventDescription);

        eventsWrapper.append(eventContainer);
      });
      yearContainer.append(eventsWrapper);

      $(".previously-container").append(yearContainer);
    });
  });

  const projectsContainer = $(".projects-container");
  const projects = $(".project");

  // Store the original positions for each project (relative to the grid layout)
  let originalPositions = [];

  // Set up random initial positions for each project
  projects.each(function (index) {
    // Get random offsets for initial placement
    const randomX = Math.floor(Math.random() * 500); // Random X offset within a range
    const randomY = Math.floor(Math.random() * 500); // Random Y offset within a range
    //get random zindex
    const randomZ = Math.floor(Math.random() * 10); // Random Z index within a range

    // Save original positions for animation back to grid
    originalPositions.push({
      transform: `translate(0, 0)`,
      transition: "all 0.5s ease",
    });

    // Apply random transforms to each project initially
    $(this).css({
      transform: `translate(${randomX}px, ${randomY}px)`, // Random initial position
      zIndex: randomZ, // Random z-index
      width: "200px", // Set fixed width
      height: "auto", // Set fixed height
    });
  });

  // Variable to track if the animation to grid has already happened
  let animationTriggered = false;

  // Event listener for hover over the .projects-container
  projectsContainer.on("mouseenter", function () {
    if (!animationTriggered) {
      // Move each project back to its original position in the grid layout
      projects.each(function (index) {
        $(this).css({
          transform: originalPositions[index].transform, // Back to original position
          opacity: 1, // Full opacity
          position: "static", // Ensure position is static to align to grid
          transition: "all 0.5s ease", // Smooth transition
        });
      });

      // Set flag to true to prevent further animations
      animationTriggered = true;
    }
  });

  //make wetrospective div draggable
  $(".wetrospective").draggable();
});
