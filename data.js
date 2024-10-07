$.getJSON("./full_events_data.json", function (data) {
  data.years.reverse().forEach(function (yearObj) {
    let yearContainer = $("<div>").addClass("year-container");

    let yearTitle = $("<div>").addClass("year-title").text(yearObj.year);
    yearContainer.append(yearTitle);

    let eventsWrapper = $("<div>").addClass("events-wrapper");

    yearObj.events.forEach(function (eventObj) {
      let eventContainer = $("<div>").addClass("event-container");

      let eventTitle = $("<div>").addClass("event-title").text(eventObj.title);
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
