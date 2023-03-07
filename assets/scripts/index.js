function callFunnyQuoteAPI() {
  // Call the API with 'funny' as category:
  var category = "funny";
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
    headers: { "X-Api-Key": "kC3zl9bRAA3YeuYLG6Q0Ug==bP3Nv7SjKwKZ06mB" },
    contentType: "application/json",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Need to console log the data returned so we
      // can figure out what to do with it.
      console.log(data);
    });
  // EXAMPLE JQUERY if we go that route:
  //   $.ajax({
  //     method: "GET",
  //     url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
  //     headers: { "X-Api-Key": "YOUR_API_KEY" },
  //     contentType: "application/json",
  //     success: function (result) {
  //       console.log(result);
  //     },
  //     error: function ajaxError(jqXHR) {
  //       console.error("Error: ", jqXHR.responseText);
  //     },
  //   });
}

callFunnyQuoteAPI();
