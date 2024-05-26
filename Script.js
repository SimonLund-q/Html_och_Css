function getColor(){
    element = document.getElementById("center");
    button = document.getElementById("button");

    element.style.color="red";
    element.style.width = "95%";
    button.innerHTML = "fuck html, shits stupid";
}
function invertColors(){
    element = document.getElementById("button");
    color = element.style.color;
    console.log(-color);
}