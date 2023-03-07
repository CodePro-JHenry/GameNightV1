var searchInput = document.querySelector("#search");
var APIKey = "1TRKav8sJ5";
var categoryId = "tJxatX2ZbW";
var lowerThanPrice = "100.99";
var greaterThanPrice = "5.99";

//BoardGameAtlas API Call
function searchAPI(category, name, ltPrice, gtPrice) {
  // Category List: https://www.boardgameatlas.com/api/docs/game/categories
  // fetch('https://api.boardgameatlas.com/api/game/categories?client_id=1TRKav8sJ5').then((response) => {return response.json()})
  // .then((data)=> {console.log('Category API return', data)})

  // Search API: https://www.boardgameatlas.com/api/docs/search
  fetch(
    "https://api.boardgameatlas.com/api/search?name=" +
      name +
      "&categories=" +
      category +
      "&lt_price=" +
      ltPrice +
      "&gt_price=" +
      gtPrice +
      "&client_id=" +
      APIKey
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Search API return", data);
    });
}

// searchAPI(categoryName, searchInput.value, lowerThanPrice, greaterThanPrice)
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

// Search Button
document.querySelector("#searchButton").addEventListener("click", function () {
  searchAPI(categoryId, searchInput.value, lowerThanPrice, greaterThanPrice);
});
