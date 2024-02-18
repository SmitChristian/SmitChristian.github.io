/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function switch_banner() {
    const bannerWords = ["Fix your little problem and light this candle - Alan Shepard", "That's one small step for man, one giant leap for mankind - Neil Armstrong", "Houston, we've had a problem here - John 'Jack' Swigert & James 'Jim' Lovell", "The dream is alive - John Young", "The stars don't look bigger, but they do look brighter - Sally Ride", "Congratulations, SpaceX, you got the flag - Doug Hurley"];
    const bannerShown = document.getElementById("banner-words");
    bannerShown.textContent = bannerWords[0];
    let i = 1;
    setInterval(
        function() {
            bannerShown.textContent = bannerWords[i];
            if (i == 5) { i = -1;}
            i++;
        }, 2000
    )
}

function add_images() {
    const imageSrc = ["images/buildtower.jpg", "images/cooltower.jpg", "images/launch.jpg", "images/midlaunch.jpg", "images/Inspace.jpg"];
    const imageLink = ["https://images.nasa.gov/details/MAF_20240201_CS3_LOX_VACtoCellD-03", "https://images.nasa.gov/details/KSC-20240201-PH-RNS01_0001", "https://images.nasa.gov/details/KSC-20240215-PH-KLS01_0089", "https://images.nasa.gov/details/KSC-20240215-PH-KLS01_0127", "https://images.nasa.gov/details/iss070e034016"];
    const imageAtt = "Image by NASA";
    const imageAddon = "on images.nasa.gov";
    const section = document.getElementById("image-section");
    
    for(i in imageSrc) {
        const imgElem = document.createElement("img");
        const attSec = document.createElement("div");
        const attElm1 = document.createElement("a");
        const attElm2 = document.createElement("p");

        // Setting up Images
        imgElem.src = imageSrc[i];
        section.append(imgElem);

        // Setting up Attributions
        attElm1.innerHTML = imageAtt;
        attElm1.href = imageLink[i];
        attElm1.classList.add("links")
        attElm1.style.padding = "5px";

        attElm2.textContent = imageAddon;
        attElm2.classList.add("words");
        attElm2.style.padding = "5px";

        attSec.classList.add("flex-container-row");
        attSec.style.alignItems = "center";
        attSec.append(attElm1, attElm2);
        section.append(attSec);
    }
}


window.onload = () => {
    switch_banner();
    add_images();
}