
var deleteData;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function clearPage() {
  document.getElementById("add-Ables").innerHTML = "";
}

async function getCubeData() {
  try {
      return (await fetch("api/cubedata")).json();
  } catch (error) {
      console.log(error);
  }
}
async function showCubeData() {
  let dataJSON = await getCubeData();
  const mainAddress = document.getElementById('add-Ables');
  clearPage();
  const form = document.getElementById("side_form");
  if(!dataJSON){
    console.log("Nothing There!");
    return;
  }

  dataJSON.forEach((dataEntry) => {
    if (dataEntry.phase == form.phase.value && dataEntry.page == form.page.value){
      const newSection = document.createElement('section');
      newSection.classList.add("top-bottom-border")

      let edit = document.createElement("span");
      edit.innerHTML = "&#10000;";
      edit.classList.add("edit");
      edit.onclick = function(){
        openMenu();
        populateForm(dataEntry);
      }
      newSection.append(edit);

      let del = document.createElement("span");
      del.innerHTML = "&times;";
      del.classList.add("delete");
      del.onclick = function() {
        openDelModal(dataEntry);
      }
      newSection.append(del);


      const newTitle = document.createElement('h2');
      newTitle.innerText = dataEntry.title;
      newSection.append(newTitle);
  
      const newInfor1 = document.createElement('p');
      newInfor1.innerHTML = dataEntry.firstP;
      newSection.append(newInfor1);
  
      if (dataEntry.secondP != "") {
          const newInfor2 = document.createElement('p');
          newInfor2.innerHTML = dataEntry.secondP;
          newSection.append(newInfor2);
      }
  
      const dateData = document.createElement('p');
      dateData.innerHTML = "Date Added: " + dataEntry.date;
      newSection.append(dateData);
      
  
      mainAddress.append(newSection);
      closeMenu();
    }
    else {
      console.log("Skipped");
      console.log(dataEntry);
    }
    
    
    
  })
}

async function addCubeData (e) {
  e.preventDefault();

  const form = document.getElementById("side_form");
  const formData = new FormData(form);
  console.log("FormData");
  console.log(...formData);
  let response;

  if(form._id.value == -1) {
    formData.delete("_id");
    console.log(...formData);
    console.log("Running Post");
    response = await fetch("/api/cubedata", {
      method: "POST",
      body: formData
    });
  }
  else {
    console.log("Editing");
    response = await fetch(`/api/cubedata/${form._id.value}`, {
      method: "PUT",
      body:formData
  
    })
  }
  


  if(response.status != 200){
    console.log("Error contacting server!");
    return;
  }
  response = await response.json();
  showCubeData();
}

async function delData() {
  console.log("Deleting");
  const dataEntry = deleteData;
  let response = await fetch(`/api/cubedata/${dataEntry._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })

  if(response.status != 200){
    console.log("Error Deleting Data");
    return;
  }

  let result = await response.json();
  closeDelModal();
  showCubeData();
}


function populateForm(dataEntry) {
  const form = document.getElementById("side_form");
  document.getElementById("dataTitle").innerText = "Edit your comment";
  form._id.value = dataEntry._id;
  form.title.value = dataEntry.title;
  form.firstP.value = dataEntry.firstP;
  form.secondP.value = dataEntry.secondP;
  form.date.value = dataEntry.date;
}

function openDelModal (dataEntry) {
  const delModal = document.getElementById("del-modal");
  delModal.style.display = "block";
  deleteData = dataEntry;
}

function closeDelModal () {
  const delModal = document.getElementById("del-modal");
  delModal.style.display = "none";
}




window.onload = () => {
  showCubeData();
  document.getElementById("side_form").onsubmit = addCubeData;

  /* Contact Me Page Code */
  const form = document.getElementById('form');
    const result = document.getElementById('result');
    result.style.color = "white";
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });
}