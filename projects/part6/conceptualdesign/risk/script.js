/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  async function getData() {
    const url = "https://SmitChristian.github.io/projects/part5/conceptualdesign/risk/riskdata.json";
  
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch(error) {
      console.log(error);
    }
  }
  
  async function showData() {
    let data = await getData();
    let toAddTo = document.getElementById("sec-main");
  
    data.forEach((dataPoint) => {
      toAddTo.append(processData(dataPoint));
    })
  }
  
  function processData(point) {
    let output = document.createElement("section");
  
    const dataName = document.createElement("h2");
    dataName.innerText = point.name;
    output.append(dataName);
  
    let riskMap = document.createElement("img");
    riskMap.src = point.map;
    output.append(riskMap);
  
    let riskTab = document.createElement("img");
    riskTab.src = point.tab;
    output.append(riskTab);
  
    let listData = document.createElement("ul");
    listData.append(getLi(`CPU: ${point.config_info[0].cpu}`));
    listData.append(getLi(`POWER: ${point.config_info[0].power}`));
    listData.append(getLi(`CONTROL: ${point.config_info[0].control}`));
    output.append(listData);
  
    let dataPage1 = document.createElement('p');
    dataPage1.innerHTML = point.config_info[1].data_page1;
    output.append(dataPage1);
  
    let dataPage2 = document.createElement('p');
    dataPage2.innerHTML = point.config_info[1].data_page2;
    output.append(dataPage2);
  
    
    return output;
  }
  
  function getLi (data) {
    const li = document.createElement("li");
    li.textContent = data;
    li.classList.add("links");
  
    return li;
  }
  
  
  window.onload = () => {
    showData();
  }