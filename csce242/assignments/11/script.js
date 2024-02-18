/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

class Mission {
  constructor(title, agency, launch, mass, path, mission) {
    this.title = title;
    this.agency = agency;
    this.launch = launch;
    this.mass = mass;
    this.path = path;
    this.mission = mission;
  }

  get titleImage() {
    return [this.title, this.path];
  }

  get expandedSection() {
    let outputSection = document.createElement("div");
    const iterSection = []
    const additionals = ["Agency: ", "Launch Date: ", "Mass: ", "Mission Statment: "];
    const classAdditionals = [this.agency, this.launch, this.mass, this.mission];
    const agent = document.createElement("p");
    iterSection.push(agent);
    const lau = document.createElement("p");
    iterSection.push(lau);
    const ma = document.createElement("p");
    iterSection.push(ma);
    const miss = document.createElement("p");
    iterSection.push(miss);

    for (let i in additionals) {
      iterSection[i].textContent = additionals[i] + classAdditionals[i];
      outputSection.append(iterSection[i]);
    }

    return outputSection;
  }
}

function toggleData(interation) {
  let descript = document.getElementById("descriptions");
  const desImage = document.getElementById("desImage");
  const head = document.getElementById("sub-header");
  const missionData = spaceData[interation];
  const titleData = missionData.titleImage;

  const head_text = document.createElement("h3");
  head_text.textContent = titleData[0];
  head_text.style.color = "black";
  head.append(head_text)
  desImage.src = titleData[1];
  const expand = missionData.expandedSection;
  descript.append(expand);

}

function emptyModal() {
  const descript = document.getElementById("descriptions");
  const head = document.getElementById("sub-header");

  descript.innerHTML = "";
  head.lastElementChild.remove();
}

var spaceData = [];
window.onload = () => {
  spaceData.push(new Mission("Europa Clipper", "NASA", "10 Oct. 2024", "7,145 lbs", "images/europaclipper2.jpg", "Europa Clippers main science goal is to determine whether there are places below the surface of Jupiters icy moon, Europa, that could support life. The missions three main science objectives are to understand the nature of the ice shell and the ocean beneath it, along with the moons composition and geology."));
  spaceData.push(new Mission("Psyche", "NASA", "13 Oct. 2023", "6,056 lbs", "images/psyche.jpg", "The Psyche mission is a journey to a unique metal-rich asteroid orbiting the Sun between Mars and Jupiter. What makes the asteroid Psyche unique is that it appears to be the exposed nickel-iron core of an early planet, one of the building blocks of our solar system."));
  spaceData.push(new Mission("Swarm", "ESA", "22 Nov. 2013", "1,040 lbs", "images/swarm.jpg", "Swarm is dedicated to creating a highly detailed survey of Earths geomagnetic field and its temporal evolution as well as the electric field in the atmosphere, by using a satellite constellation that carries sophisticated magnetometers and other instruments."));
  spaceData.push(new Mission("Jason 3", "NASA", "17 Jan. 2016", "1,157 lbs", "images/jason.png", "Jason-3 is the fourth mission in U.S.-European series of satellite missions that measure the height of the ocean surface. These measurements provide scientists with critical information about circulation patterns in the ocean and about both global and regional changes in sea level and the climate implications of a warming world."));


    
}