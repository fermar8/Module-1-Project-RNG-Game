"use strict"

const gameList = document.querySelector('.games-list');


fetch("https://rawg-video-games-database.p.rapidapi.com/games?page=2", {
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

console.log(data)
console.log('name', data.results[0].name);
console.log('name', data.results[0].background_image);

const apiImages = data.results.map (results =>
results.background_image)
    
 console.log(apiImages)

const apiNames = data.results.map (results =>
results.name);

console.log(apiNames)

const displayedImages = document.createElement('img');
displayedImages.setAttribute('src', apiImages);
displayedImages.style.width = "200px";

gameList.appendChild(displayedImages)


})





/*data.results.forEach( (results) =>{
    const newImg = document.createElement('img');
    newImg.setAttribute('src', results.background_image);
    newImg.style.width = "200px"

    gameList.appendChild(newImg);

    const newName = document.createElement('p');
    newName.setAttribute('name', results.name);
    
    gameList.appendChild(newName);

}) 

*/