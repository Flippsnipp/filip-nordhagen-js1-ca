/*
    JavaScript1 - Course Assignment - Level 1
*/

const targetingForm = document.querySelector("#contactForm");

targetingForm.addEventListener("submit", validatingForm);

function validatingForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if(checkInputLength(firstNameValue) === false) {
        firstNameError.style.display = "none";
        } else {
        firstNameError.style.display = "block";
    }
};



function checkInputLength(value) {
    const trimmedValue = value.trim();

    if(trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    } 
};

function validatingEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}