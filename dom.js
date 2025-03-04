const titolo = document.getElementById("titolo")
const btnCambia = document.getElementById("btnCambia")
const inputTesto = document.getElementById("inputTesto")

btnCambia.addEventListener("click", function () {
    console.log("cambia il titolo")
    console.log(inputTesto.value)
    titolo.textContent = inputTesto.value;
})




