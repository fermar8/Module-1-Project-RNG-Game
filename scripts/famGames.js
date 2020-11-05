"use strict"

//loadDash() {




function getGames () {

    fetch("https://rawg-video-games-database.p.rapidapi.com/games?page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "b8f3d8b159msh27d0065bced469cp15f8fejsn4e0630fb1464"
        }
    })
    .then(response => {
        console.log(response);
        const pr = response.json();
        return pr;
    })
    .then( (data) => {
        const gameList = document.querySelector('.games-list');
        const allData = data.results;
        allData.forEach(games => {
        const createDiv = document.createElement('div')
        createDiv.setAttribute('class','card' )
        createDiv.style.width='90vw';
        createDiv.innerHTML= `
        <img src="${games.background_image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${games.name}</h5>
          <p class="card-text">Rating: ${games.rating}/5</p>
        </div>
      `
      console.log(data.results)
      gameList.appendChild(createDiv);
    })
    
})
}
getGames()

























