var button = document.getElementById("toggleButton");
var isHello = true;
button.textContent = "Hello";

function toggleText()
{
    if (isHello)
    {
        button.textContent = "Goodbye";
    }
    else
    {
        button.textContent = "Hello";
    }
    isHello = !isHello;
}
button.addEventListener("click", toggleText);