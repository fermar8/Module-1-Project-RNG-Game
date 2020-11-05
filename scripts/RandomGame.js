"use strict"

function getRandomGame () {

    const newLocal = Math.round(Math.floor((Math.random() * 10)));
    let randomGamePage = newLocal;
    randomGamePage = randomGamePage.toString()

    

    console.log(randomGamePage)


    fetch(`https://rawg-video-games-database.p.rapidapi.com/games?page=${randomGamePage}`, {
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
        console.log(allData);
        const randomIndex = Math.round(Math.floor((Math.random() * 20)));
        const name = allData[randomIndex].name;
        const image = allData[randomIndex].background_image;
        const rating = allData[randomIndex].rating;
        const genre =allData [randomIndex].genres[0].name;
        console.log(genre);
        const createDiv = document.createElement('div')

        createDiv.setAttribute('class','card' )
        createDiv.style.width='18rem';
        createDiv.innerHTML= `
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Genre: ${genre}</p>
          <p class="card-text">Rating: ${rating}/5  &#11088</p>
        </div>
      `
      console.log(data.results)
      gameList.appendChild(createDiv);
    })
    .catch((error)=>{})
}


        
        
        ///*allData.forEach(games => {
        //const createDiv = document.createElement('div')
        ////

getRandomGame()


//document.getElementById("demo").innerHTML = ages.find(checkAdult);