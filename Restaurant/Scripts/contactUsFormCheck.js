//Name: Andrei Bila
//Date submitted: Feb 4, 2021
//Project: Restaurant Site

// Variables:
var contactUsForm = document.forms["contactUsForm"];
var sendForm = document.getElementById("sendForm");
var newForm = document.getElementById("newForm");
var phone = document.getElementById("Phone");
var email = document.getElementById("Email");
var buttonRow = document.getElementById("buttonRow");

//Functions:
function checkForm(){

  //Checking if email is in a valid format:
  if (email.validity.typeMismatch){
    email.setCustomValidity('Invalid Email')
  }else{
    email.setCustomValidity('')
  }

  //Checking if phone number is in a valid format:
  if (phone.validity.patternMismatch){
    phone.setCustomValidity('Invalid Phone Number')
  }else{
    phone.setCustomValidity('')
  }

  contactUsForm.className = "needs-validation";
  if (!contactUsForm.checkValidity()) {
      contactUsForm.className = "was-validated";
      return false;
  }

  newForm.style.display = "inline-block";
  sendForm.style.display = "none";

  //buttonRow.style.textAlign = "center";
  alert("Your request has been submitted.\nWe will get back to you shortly.");
  return false;
}

function resetView(){
  contactUsForm.className = "needs-validation";
  newForm.style.display = "none";
  sendForm.style.display = "inline-block";
}
