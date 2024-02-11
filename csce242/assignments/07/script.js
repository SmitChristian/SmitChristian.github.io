/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

window.onload = () => {

    // Image Swapping
    document.getElementById("image-click").onclick = () => {
        if (document.getElementById("image-click").src == "https://smitchristian.github.io/csce242/assignments/07/images/radiation.jpg"){
            document.getElementById("image-click").src = "https://smitchristian.github.io/csce242/assignments/07/images/no-air.jpg";
            document.getElementById("words-click").innerHTML = "The most immediate threat in the cosmic vacuum is oxygen deprivation. Assuming that you dont hold your breath during decompression, it will take about 15 seconds for your O2 deprived blood to get to your brain. When this happens, youll pass out…and then youll die.";
            document.getElementById("image-click-header").innerHTML = "Asphyxiation!"
        } else if (document.getElementById("image-click").src == "https://smitchristian.github.io/csce242/assignments/07/images/no-air.jpg"){
            document.getElementById("image-click").src = "https://smitchristian.github.io/csce242/assignments/07/images/evap.jpg";
            document.getElementById("words-click").innerHTML = "After about 10 seconds, the moisture in your body will start to evaporate. This is known as ebullism and it happens because the reduction in pressure causes the boiling point of your bodily fluids to decrease. And if evaporating body fluids doesnt sound terribly pleasant, well, its because its not.";
            document.getElementById("image-click-header").innerHTML = "Evaporation!"
        }
        else {
            document.getElementById("image-click").src = "https://smitchristian.github.io/csce242/assignments/07/images/radiation.jpg";
            document.getElementById("words-click").innerHTML = "Radiation can alter the cardiovascular system, damaging the heart, harden and narrow arteries, and/or eliminate some of the cells in linings of the blood vessels, leading to cardiovascular disease.";
            document.getElementById("image-click-header").innerHTML = "Radiation!"
        }
    }   

    // Image Rotation
    document.getElementById("image-rotater").oninput = () => {
        document.getElementById("image-rotate").style.transform = 'rotate(' + document.getElementById("image-rotater").value + 'deg)';
    }

    // Add Some Stars
    var oldHeight = document.getElementById("main-content").style.height;
    let starKeep = +0;
    document.getElementById("add-star").onclick = () => {
        let img = document.createElement("img");
        img.src = "https://smitchristian.github.io/csce242/assignments/07/images/star-image.jpg";
        document.getElementById("star-contain").appendChild(img);
        starKeep += 1;
        let newHeight = oldHeight + 695;
        if (starKeep >= 12) {
            document.getElementById("main-content").style.height = newHeight + 'px';
            oldHeight = +oldHeight + 50;
        }
        
    }
}




