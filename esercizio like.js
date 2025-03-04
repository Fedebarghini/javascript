const pigia=document.getElementById("pigia")
function changeButtonText() {
    pigia.textContent="Loading..."

    setTimeout(() => {
        pigia.textContent="like"
        
    },3000);

}
pigia.addEventListener("click",changeButtonText)