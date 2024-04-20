const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const side_form = document.getElementById('side_form')

let menuOpen = false

function openMenu() {
  menuOpen = true
  overlay.style.display = 'block'
  sidebar.style.width = '50%'
  sidebar.style.whiteSpace = 'nowrap';
  setTimeout(function () { sidebar.style.whiteSpace = ""; }, 500)
}

function closeMenu() {
  menuOpen = false
  overlay.style.display = 'none'
  sidebar.style.width = '0px'
  sidebar.style.whiteSpace = 'nowrap';
  setTimeout(function() { sidebar.style.whiteSpace = ""; document.getElementById("dataTitle").innerText = "Add data to this page"; side_form.reset(); }, 500)
  
  
}

hamburger.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu()
  }
})

overlay.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu()
  }
})

async function addNewData(data) {

    const mainAddress = document.getElementById('add-Ables');
    const newSection = document.createElement('section');
    newSection.classList.add("top-bottom-border")
    const newTitle = document.createElement('h2');
    newTitle.innerText = data.get('side_name');
    newSection.append(newTitle);

    const newInfor1 = document.createElement('p');
    newInfor1.innerHTML = data.get('side_data1');
    newSection.append(newInfor1);

    let newImage1 = document.createElement('img');
    const fileInput1 = document.querySelector("#side_image1_id");
    if (fileInput1.value != "") {
        newImage1 = fileInput1.value;
        newSection.append(newImage1);
    }
    

    if (data.get('side_data2') != "") {
        const newInfor2 = document.createElement('p');
        newInfor2.innerHTML = data.get('side_data2');
        newSection.append(newInfor2);
    }

    let newImage2 = document.createElement('img');
    const fileInput2 = document.querySelector("#side_image2_id");
    if (fileInput2.value != "") {
        newImage2 = fileInput2.value;
        newSection.append(newImage2);
    }

    const dateData = document.createElement('p');
    dateData.innerHTML = "Date Added: " + data.get('side_date');
    newSection.append(dateData);
    

    mainAddress.append(newSection);
}
/*
side_form.addEventListener('submit', function(e){
    e.preventDefault();
    result = document.getElementById('side_result');

    try {
      const side_formData = new FormData(side_form);
      addNewData(side_formData);
      result.innerHTML = "Success!";

    } catch(error) {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    }
    
    result.classList.add("fade-out-image");
    setTimeout(function() {
      result.innerHTML = "";
      result.classList.remove("fade-out-image");
    }, 2000);
    side_form.reset();
});
*/