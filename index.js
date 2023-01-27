const form = document.getElementById("form");
const name = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function checkInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

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
  } else if(!isEmail(emailValue)) {
    setError(email, "Email inválido");
  } else{
    setSuccess(email);
    emailValid = true;
  }

  if (passwordValue === "") {
    setError(password, "Rellene este campo");
  } else {
    if (passwordValue.length > 8) {
      setError(password, "No debe tener más de 8 caracteres");
    } else {
      setSuccess(password);
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

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isNameValid(field) {
  var letters = /^[A-Za-z]+$/;
  return field.value.match(letters);
}

function popupConfirm() {
  if (nameValid && emailValid && passValid && pass2Valid) {
    window.alert("¡Inscripción creada correctamente!");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
  popupConfirm();
});