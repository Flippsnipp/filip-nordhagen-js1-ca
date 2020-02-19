/*
    JavaScript1 - Course Assignment - Level 1
*/

setTimeout(replacingLowercaseTheAndUppercaseTheWords, 4000);

function replacingLowercaseTheAndUppercaseTheWords() {
    let text = document.querySelector(".content")
    text.innerHTML = text.innerHTML.replace(/ the /g, " replaced ");
    text.innerHTML = text.innerHTML.replace(/The /g, " Replaced ");
}