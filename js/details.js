/*
    JavaScript1 - Course Assignment - Level 1
*/

const parameters = new URLSearchParams(document.location.search);
const targetingDetailContainer = document.querySelector(".detail-container");

let id;
if (parameters.get("id") !== "" ){
    id = parameters.get("id");
    
} else {
    window.location = "error.html";
};

const rickAndMortySeriesInformationId = `https://rickandmortyapi.com/api/character/${id}`;

let html = "";

fetch(rickAndMortySeriesInformationId)
    .then(response => response.json())
    .then((jsonData) => {
        document.title = jsonData.name;
        createdCharacterInformationDetails(jsonData)
    })
    .catch(error => {
        console.dir(error);
    });

function createdCharacterInformationDetails(details) {
    
    html += `<div class="detail-container">
            <img class="details-image" src="${details.image}" alt="${details.name}"/>
            <div class="detail-details">
            <h1>${details.name}</h1>
            <p>Status: <span class="value" id="status">"${details.status}"</span></p>
            <p>Species: <span class="value" id="species">"${details.species}"</span></p>
            <p>Origin: <span class="value" id="origin">"${details.origin.name}"</span></p>
            <p>Location: <span class="value" id="location">"${details.location.name}"</span></p>                   
            </div>
            </div>`;
    targetingDetailContainer.innerHTML = html;
};
