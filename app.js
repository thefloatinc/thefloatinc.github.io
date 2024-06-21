// Disable right-click on the entire document
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}