form = document.getElementById("form");
username = document.getElementById("username");
email = document.getElementById("email");
password = document.getElementById("password");
password2 = document.getElementById("password2");

// All Funtions
// Function to show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Function to show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Function to check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim() )  ){
      showSuccess(input);
    } else{
      showError(input, `Please provide a valid email`);
    }
}

// Function to check if both password are same
function checkPassword(input1, input2) {
  if (input1.value !== input2.value){
    showError(input2, "Password don't match");
  }
}

// Function to check if required fields have data
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getFieldId(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Function to check length of input field
function checkLength(input, min, max) {
    if ( input.value.length < min ){
        showError(input, `${getFieldId(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
      showError(input, `${getFieldId(input)} needs to be less than ${max} characters`);
    } else {
      showSuccess(input);
    }
  }
// Function to get the id of the input field
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// This is an event listener for the form on submit.
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, Email, Password, Password2]);
  checkLength (username,3,10);
  checkLength (Password,6,20);
  checkEmail (Email);
  checkPassword (Password, Password2 );
}); 