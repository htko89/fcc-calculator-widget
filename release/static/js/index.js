// final draft
$(document).ready(function() {

  $('.button').click(function() {
      event = {
        "type": $(this).attr("type"),
        "value": $(this).attr("value")
      };
      console.log("Button event", event);

      switch (event.type) {
        case "function":
          break;
        case "operator":
          break;
        case "number":
          break;
      }

    }

  });

}); // end doc ready function
