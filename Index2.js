function changeColor (){
    var button = document.querySelector("#bottom-button")
    console.log(button.classList)
    button.classList.remove("background-lightgreen")
    button.classList.add("background-lightblue")
}