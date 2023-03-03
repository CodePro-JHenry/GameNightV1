var searchInput = document.querySelector('#search');
var APIKey = '1TRKav8sJ5';
var categoryName = 'Aliens'
var ltPrice = '100.99'
var gtPrice = '5.99'

function searchAPI() {
    fetch('https://api.boardgameatlas.com/api/game/categories?client_id=1TRKav8sJ5').then((response) => {return response.json()})
    .then((data)=> {console.log('category list', data)})

    fetch('https://api.boardgameatlas.com/api/search?name=' + searchInput.value + '&categories=' + categoryName + '&lt_price=' + ltPrice +  '&gt_price=' + gtPrice + '&client_id=' + APIKey )
    .then((response) => {return response.json()})
    .then((data)=> {console.log('searched value', data)})
}

searchInput.addEventListener('click', searchAPI);