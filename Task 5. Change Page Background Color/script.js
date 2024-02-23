var buttons = document.querySelectorAll(".colorButton");

function changeBackgroundColor(event) {
    var color = event.target.getAttribute("data-color");
    document.body.style.backgroundColor = color;
}
buttons.forEach(function(button) {
    button.addEventListener("click", changeBackgroundColor);
});