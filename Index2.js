function changeColor (){
    var button = document.querySelector("#bottom-button")
    console.log(button.classList)
    button.classList.remove("text-bg-success")
    button.classList.add("text-bg-primary")
    console.log(button.innerHTML)
    button.innerHTML = "You are welcome!"
}