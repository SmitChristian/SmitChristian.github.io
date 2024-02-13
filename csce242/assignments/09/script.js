/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
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

function bounceBall () {
    const ball = document.getElementById("ball");
    let is_here = document.getElementById("ball").style.top;

    let current_state = document.getElementById("ball_control").innerHTML;
    if(current_state == "Stop") {
        document.getElementById("ball_control").innerHTML = "Start";
        clearInterval(intervalIterator);
    } else {
        document.getElementById("ball_control").innerHTML = "Stop";
        intervalIterator = setInterval(function(){

            // Checking if Bounced 
            if(parseInt(is_here) == 500) {isBounced = true;}
            if(parseInt(is_here) == 0) {isBounced = false;}

            // Adding or Subtracting Pixels
            if(!isBounced) {
                let tempAdd = parseInt(is_here) + 2;
                is_here = tempAdd + 'px';
                ball.style.top = is_here;
            } else {
                let tempSub = parseInt(is_here) - 2;
                is_here = tempSub + 'px';
                ball.style.top = is_here;
            }

                }, 10)
            }
    }



var smallResize = true; // I'm keeping this global element whether you like it or not!
var intervalIterator = null; // Using this for easy control of iterator
var isBounced = false; // This fixes a bug with the ball rebouncing when using the 'let' variable
window.onload = () => {
    window.onresize = forceShowNav;
    let imgList = document.querySelectorAll("#list_of_images img");
    const desList = ["Breakdance!", "Preparing to Charge!", "Elegant Dance!", "Pulled a Hammy!", "May I Take Your Coat?", "The Check-Me-Out Dance!", "Street Fighter Idle Animation!", "Ice Skating!"];
    for (let i = 0; i < imgList.length; i++) {

        imgList[i].onclick = () => {document.getElementById("yoga_des").textContent = desList[i];}
    }

    document.getElementById("section1").onclick = showSec1;
    document.getElementById("section2").onclick = showSec2;
    document.getElementById("arrow").onclick = showNav;
    
    document.getElementById("ball_control").onclick = bounceBall;


}