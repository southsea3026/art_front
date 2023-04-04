var icons = ['fa-regular fa-bookmark', 'fa-solid fa-bookmark" style="color: #ff8800;']; // array of Font Awesome classes
var iconIndex = 0; // initial index

function changeicon() {
    var iconDiv = document.getElementById("myicon");
    iconIndex = (iconIndex + 1) % icons.length; // update index
    var newIcon = '<i class=" ' + icons[iconIndex] + '"></i>'; // create new HTML content
    iconDiv.innerHTML = newIcon; // set new HTML content
}