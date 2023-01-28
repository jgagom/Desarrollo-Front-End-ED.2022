const form1 = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("password2");


function checkInputs() {
	
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password1.value.trim();
  const password2Value = password2.value.trim();
  
  nameValid=false;
  emailValid=false;
  passValid=false;
  pass2Valid=false;
  

  if (nameValue === "") {
    setError(name, "Rellene este campo");
  } else if(!isNameValid(name)) {
    setError(name, "Nombre inválido"); 
  } else {
    setSuccess(name);
    nameValid = true;
  }

  if (emailValue === "") {
    setError(email, "Rellene este campo");
  } else if(!isEmailValid(email)) {
    setError(email, "Email inválido");
  } else{
    setSuccess(email);
    emailValid = true;
  }

  if (passwordValue === "") {
    setError(password1, "Rellene este campo");
  } else {
    if (passwordValue.length > 8) {
      setError(password1, "No debe tener menos de 8 caracteres");
    } else {
      setSuccess(password1);
      passValid = true;
    }
  }
 

  if(password2Value === "") {
    setError(password2, "Rellene este campo");
  } else if (passwordValue !== password2Value) {
    setError(password2, "Las contraseñas no coinciden"); 
  } else {
    setSuccess(password2);
    pass2Valid = true;
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmailValid(input) {
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function isNameValid(field) {
  var letters = /^[A-Za-z]+$/;
  return field.value.match(letters);
}

function popupConfirm() {
  if (nameValid && emailValid && passValid && pass2Valid) {
    alert("¡Inscripción creada correctamente!");
  }
}

form1.addEventListener("submit",(e) => {
  e.preventDefault();
  checkInputs();
  popupConfirm();
});