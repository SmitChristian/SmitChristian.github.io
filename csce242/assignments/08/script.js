/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
const getSection1 = () => {return document.getElementById("e-command");}
const getSection2 = () => {return document.getElementById("yo-slide");}
const getArrow = () => {return document.getElementById("arrow");}
const getNav1 = () => {return document.getElementById("section1");}
const getNav2 = () => {return document.getElementById("section2");}


function showSec1 () {
    document.getElementById("yo-slide").style.display = "none";
    document.getElementById("e-command").style.display = "flex";
}

function showSec2 () {
    document.getElementById("e-command").style.display = "none";
    document.getElementById("yo-slide").style.display = "flex";
}

function showNav () {
    if(document.getElementById("section1").style.display == "none") {
        document.getElementById("section1").style.display = "flex";
        document.getElementById("section2").style.display = "flex";
        document.getElementById("arrow").innerHTML = "&#8690;";
    }
    else {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "none";
        document.getElementById("arrow").innerHTML = "&#8689;";
    }
} 

function forceShowNav () {
    if (window.innerWidth >= 900 && smallResize == true){
        document.getElementById("section1").style.display = "flex";
        document.getElementById("section2").style.display = "flex";
        document.getElementById("arrow").innerHTML = "&#8689;";
        smallResize = false;
    }
    if (window.innerWidth < 900 && smallResize == false) {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "none";
        document.getElementById("arrow").innerHTML = "&#8689;";
        smallResize = true;
    }
}

function comImage () {
    const input = document.getElementById("text-input").value;
    const image = document.getElementById("com-img");
    if (input.charAt(input.length-1) == 'b') {image.src = "images/read.jpg";}
    else if (input.charAt(input.length-1) == 'c') {image.src = "images/clown.jpg";}
    else if (input.charAt(input.length-1) == 'p') {image.src = "images/birthday.jpg";}
    else if (input.charAt(input.length-1) == 'r') {image.src = "images/rain.jpg";}
    else if (input.charAt(input.length-1) == 's') {image.src = "images/shovel.jpg";}
    else if (input.charAt(input.length-1) == 'w') {image.src = "images/work.jpg";}
    else {image.src = "images/original.jpg";}
}   

function sliImage () {
    const input = document.getElementById("slider").value;
    const image = document.getElementById("sli-img");
    if (input == 0) {image.src = "images/yoga1.jpg";}
    else if (input == 1) {image.src = "images/yoga2.jpg";}
    else if (input == 2) {image.src = "images/yoga3.jpg";}
    else if (input == 3) {image.src = "images/yoga4.jpg";}
    else if (input == 4) {image.src = "images/yoga5.jpg";}
    else if (input == 5) {image.src = "images/yoga6.jpg";}
    else if (input == 6) {image.src = "images/yoga7.jpg";}
    else if (input == 7) {image.src = "images/yoga8.jpg";}
}


var smallResize = true;
window.onload = () => {
    window.onresize = forceShowNav;

    document.getElementById("section1").onclick = showSec1;
    document.getElementById("section2").onclick = showSec2;
    document.getElementById("arrow").onclick = showNav;
    document.getElementById("text-input").oninput = comImage;
    document.getElementById("slider").oninput = sliImage;


}