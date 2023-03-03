var searchInput = document.querySelector('#search');
var APIKey = '1TRKav8sJ5';
var categoryName = 'Aliens'
var lowerThanPrice = '100.99'
var greaterThanPrice = '5.99'

//BoardGameAtlas API Call
function searchAPI(category, name, ltPrice, gtPrice) {
    // Category List: https://www.boardgameatlas.com/api/docs/game/categories
    // fetch('https://api.boardgameatlas.com/api/game/categories?client_id=1TRKav8sJ5').then((response) => {return response.json()})
    // .then((data)=> {console.log('Category API return', data)})

    // Search API: https://www.boardgameatlas.com/api/docs/search
    fetch('https://api.boardgameatlas.com/api/search?name=' + name + '&categories=' + category + '&lt_price=' + ltPrice +  '&gt_price=' + gtPrice + '&client_id=' + APIKey )
    .then((response) => {return response.json()})
    .then((data)=> {console.log('Search API return', data)})
}

searchAPI(categoryName, searchInput.value, lowerThanPrice, greaterThanPrice)

// Search Button
// searchInput.addEventListener('click', searchAPI);

