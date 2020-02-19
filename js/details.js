/*
    JavaScript1 - Course Assignment - Level 1
*/

const parameters = new URLSearchParams(document.location.search);

let id;


if (parameters.get("id") !== "" ){
    id = parameters.get("id");
    
} else {
    window.location = "error.html";
}