$(document).ready(function () {
  let originalSizes = [];

  let isMobile = $(window).width() <= 768;

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

  projectImages.forEach((imagePath, index) => {
    const project = $("<div>")
      .addClass("project")
      .append(`<img src="${imagePath}" alt="Project ${index + 1}">`);
    $(".projects-container").append(project);
  });

  const projectsContainer = $(".projects-container");
  const projects = $(".project");

  function storeOriginalSizes() {
    originalSizes = [];
    projects.each(function () {
      originalSizes.push({
        width: $(this).width(),
        height: $(this).height(),
      });
    });
  }

  function tidyUpProjects() {
    storeOriginalSizes();
    projects.each(function () {
      $(this).css({
        position: "relative",
        transform: "none",
        opacity: 0,
        width: "100%",
        height: "auto",
        zIndex: 1,
        left: "0",
        top: "0",
        margin: "0",
        transition: "opacity 500ms ease, transform 500ms ease",
      });
    });
    projectsContainer.css({
      display: "grid",
      "grid-template-columns": isMobile ? "1fr 1fr" : "1fr 1fr 1fr",
      gap: "10px",
    });

    setTimeout(() => {
      projects.css({ opacity: 1 });
    }, 100);
  }

  function scrambleProjects() {
    if (isMobile) {
      console.log("Scrambling is disabled on mobile view.");
      return;
    }

    const containerWidth = projectsContainer.width();
    const centerY = $(window).height() / 6;

    projects.each(function (index) {
      if (!originalSizes[index]) {
        console.warn("Original size not found for project index:", index);
        return;
      }

      const randomX = Math.floor(Math.random() * (containerWidth - 200));
      const randomY = Math.floor(Math.random() * 300) - 100;
      const randomZ = Math.floor(Math.random() * 10);

      $(this).css({
        position: "absolute",
        transform: `translate(${randomX}px, ${centerY + randomY}px)`,
        width: originalSizes[index].width + "px",
        height: originalSizes[index].height + "px",
        zIndex: randomZ,
        opacity: 0,
        transition: "opacity 500ms ease, transform 500ms ease",
      });
    });

    projectsContainer.css({
      display: "block",
    });

    setTimeout(() => {
      projects.css({ opacity: 1 });
    }, 100);
  }

  tidyUpProjects();

  if (!isMobile) {
    setTimeout(function () {
      scrambleProjects();
    }, 1000);
  }

  if (isMobile) {
    $(".scramble").hide();
  }

  $(".scramble").on("click", function () {
    scrambleProjects();
  });

  $(".tidyUp").on("click", function () {
    tidyUpProjects();
  });

  $(".wetrospective").draggable();

  $(window).resize(function () {
    isMobile = $(window).width() <= 768;
    tidyUpProjects();
    if (isMobile) {
      $(".scramble").hide();
    } else {
      $(".scramble").show();
    }
  });
});
