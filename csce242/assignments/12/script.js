/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

async function getHouses() {
  const url = "https://portiaportia.github.io/json/house-plans.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch(error) {
    console.log(error);
  }
}

async function showHouses() {
  let houses = await getHouses();
  let mainSection = document.getElementById("main-content");

  houses.forEach((house) => {
    mainSection.append(makeHouseSection(house))
  })
}

function makeHouseSection (house) {
  let section = document.createElement("section");
  section.classList.add("flex-container-col");
  section.classList.add("active-section");
  section.classList.add("assign-border");

  section.append(createSubSec0(house));
  section.append(makeSubSections(house));

  return section;
}

function makeSubSections (house) {
  let fullSection = document.createElement("section");
  fullSection.classList.add("flex-container-row");

  let subSection1 = createSubSec1(house);
  let subSection2 = createSubSec2(house);
  fullSection.append(subSection1);
  fullSection.append(subSection2);

  return fullSection;
}

function createSubSec0 (house) {
  let section0 = document.createElement("section");
  const h20 = document.createElement("h2");
  h20.textContent = house.name;

  section0.append(h20);
  section0.append(createMainSub(house));
  
  return section0;
}

function createMainSub (house) {
  let mainSub = document.createElement("section");
  mainSub.classList.add("flex-container-row");

  let img0 = document.createElement("img");
  img0.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;


  let ul = document.createElement("ul");
  ul.append(getLi(`Size: ${house.size}`, true));
  ul.append(getLi(`Bedrooms: ${house.bedrooms}`, true));
  ul.append(getLi(`Bathrooms: ${house.bathrooms}`, true));
  ul.append(getLi(` * ${house.features[0]} * ${house.features[1]}`, false));


  mainSub.append(img0);
  mainSub.append(ul);

  return mainSub;
}

function createSubSec1 (house) {
  let section1 = document.createElement("section");
  const h21 = document.createElement("h2");
  h21.textContent = house.floor_plans[0].name;

  let img1 = document.createElement("img");
  img1.src = `https://portiaportia.github.io/json/images/house-plans/${house.floor_plans[0].image}`;

  section1.append(h21);
  section1.append(img1);
  return section1;
}

function createSubSec2 (house) {
  let section2 = document.createElement("section");
  const h22 = document.createElement("h2");
  h22.textContent = house.floor_plans[1].name;

  let img2 = document.createElement("img");
  img2.src = `https://portiaportia.github.io/json/images/house-plans/${house.floor_plans[1].image}`;

  section2.append(h22);
  section2.append(img2);
  return section2;
}

function getLi (data, isBold) {
  const li = document.createElement("li");
  li.textContent = data;
  li.classList.add("links");

  if(isBold) {
    li.classList.add("bold");
  }
  return li;
}


window.onload = () => {
  showHouses();
}