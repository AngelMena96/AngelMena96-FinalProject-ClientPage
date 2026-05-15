let projectForm = document.getElementById("CantactSubmission");
projectForm.addEventListener('submit', checkForm);

function checkForm(event) {
   let validText = true;
   if (projectForm.first_name.value == "") {
      projectForm.first_name.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if (projectForm.last_name.value == "") {
      projectForm.last_name.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if (projectForm.user_email.value == "") {
      projectForm.user_email.style.backgroundColor = "lightpink";
      validText = false;
      event.preventDefault();
   }

   if(validText){
        event.preventDefault();
        alert("Contact info submitted successfully!");
        projectForm.first_name.style.backgroundColor = "white";
        projectForm.last_name.style.backgroundColor = "white";
        projectForm.user_project.style.backgroundColor = "white";
        projectForm.first_name.value = "";
        projectForm.last_name.value = "";
        projectForm.user_project.value = "";
   }
   else if(!validText){
        event.preventDefault();
        alert("There is an error with your information, please corrrect the highlighted values.");
   }
}

function showSolar() {
  document.getElementById("showSolar").classList.toggle("show");
}

function showThermo() {
  document.getElementById("showThermo").classList.toggle("show");
}

function showConsulting() {
  document.getElementById("showConsulting").classList.toggle("show");
}

function showRecycling() {
  document.getElementById("showRecycling").classList.toggle("show");
}

function showCharging() {
  document.getElementById("showCharging").classList.toggle("show");
}

function showPacking() {
  document.getElementById("showPacking").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}