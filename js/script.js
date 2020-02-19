/*
    JavaScript1 - Course Assignment - Level 1
*/

const rickAndMortySeriesInformation = "https://rickandmortyapi.com/api/character/";
const displayedInfo = document.querySelector(".results");
let html = "";

fetch(rickAndMortySeriesInformation)
    .then(response => response.json())
    .then((jsonData) => createdCharacterInformation(jsonData.results))
    .catch(error => window.location = "error.html");

function createdCharacterInformation (data) {
    data.forEach(function(output) {
        if (!output.type){
            output.type = "unknown"
        }
        html += `
                    <div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                    <img class="image" src="${output.image}" alt="${output.name}">
                    <div class="details">
                    <h4 class="name">${output.name}</h4>
                    <p>Type: ${output.type}</p>    
                    <p>Episode count: ${output.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${output.id}">Details</a>
                    </div>
                    </div>
                    </div>
                `
        
    });
    displayedInfo.innerHTML = html;
};

