document.getElementById('submitBtn').onclick = function() {
    var popup = document.getElementById('popup');
    popup.style.display = "block";
}

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = "none";
    }
}