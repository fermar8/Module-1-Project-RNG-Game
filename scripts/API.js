"use strict"

const gameList = document.querySelector('.games-list');


fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
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
console.log('data', data);

const article = document.createElement('article');
article.innerHTML =`
<img src="${data.results[0].background_image}" />
      <h3>${data.results[0].name}</h3>
`

gameList.appendChild(article);


})

