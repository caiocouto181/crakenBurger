let body = document.querySelector("body")
let header = document.querySelector("header")
let button = document.querySelector("#toggle")
button.addEventListener("click", darkMode)
function darkMode() 
{
    if(button.checked)
    {
        body.classList.toggle("darkBody")
        header.classList.toggle("darkHeader")
    }
    if(!button.checked)
    {
        body.classList.remove("darkBody")
        header.classList.remove("darkHeader")
    }
}