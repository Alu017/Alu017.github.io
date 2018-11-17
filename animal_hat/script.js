var temp = document.getElementById("location");
var animal = document.getElementById("animal");
var onClick = function(event) {
    var hat = document.getElementById("hat");
    hat.style.top = event.clientY - 50 + "px";
    hat.style.left = event.clientX - 100 + "px";
};

animal.addEventListener("click", onClick);