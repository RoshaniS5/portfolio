// With help from:
// https://www.geeksforgeeks.org/how-to-get-the-file-name-from-page-url-using-javascript/

let i = 0;
let speed = 750;
let forward = true;
function typeTitle() {
    let title = document.getElementsByTagName("body")[0].id;
    if (i < title.length && forward) {
        document.getElementById("title").innerHTML += title.charAt(i);
        i++;
    }
    else if (i < title.length && !forward) {
        document.getElementById("title").innerHTML = title.substring(0, title.length - i - 1);
        i++;
    }
    else {
        i = 0;
        if (forward) {
            forward = false;
            speed = 150;
        }
        else {
            forward = true;
            speed = 500;
        }
    }
    setTimeout(typeTitle, speed);
}

function opencloseNav() {
    if (document.getElementsByTagName("span")[0].id === "0") {
        document.getElementById("navbar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementsByTagName("span")[0].innerHTML = "<span id='sidebutton'>&#129190;</span> <h1 style='display: inline;'>unfurled</h1>";
        document.getElementsByTagName("span")[0].id = "1";
        return;
    }
    else {
        document.getElementById("navbar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.getElementsByTagName("span")[0].innerHTML = "<span id='sidebutton'>&#10002;</span> <h1 style='display: inline;'>unfurled</h1>";
        document.getElementsByTagName("span")[0].id = "0";
    }
}

function twoColumns() {
    var elements = document.getElementsByClassName("column");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
        elements[i].style.msFlex = "50%";
    }
}

var elementOn;
var closeButton; 

function onOverlay(input) {
    elementOn = document.getElementById("0");
    elementOn.style.display = "block";
    closeButton = document.getElementById(input.toString());
    closeButton.style.display = "block";
}

function offOverlay() {
    elementOn.style.display = "none";
    closeButton.style.display = "none";
    elementOn = null;
    closeButton = null;
}

function nextImage() {
    var imgs = document.getElementsByClassName("imgrotation");
    var location;
    var result;
    for (i = 0; i < imgs.length; i++) {
        if (imgs[i].style.display == "inline") {
            imgs[i].style.display = "none";
            location = i;
        }
    }
    if (location >= imgs.length - 1) {
        result = 0;
    }
    else {
        result = location + 1;
    }
    imgs[result].style.display = "inline";
}