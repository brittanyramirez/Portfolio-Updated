const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  }

  if (!validatePhone(phone.value)) {
    showError(phone, "Please enter a valid phone number");
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  }

  if (isValid) {
    alert("YAY! Thank you for wanting to connect! I can't wait to connect with you. Make sure to add my LinkedIn down at the bottom located in the footer of the page!");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(err => err.textContent = "");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone.replace(/\D/g, ""));
}
//back to the top button//
window.addEventListener('scroll', ()=>{
    const button = document.getElementById('backToTop');
    if(window.scrollY > 200){
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', () =>{
    window.scrollTo({ top: 0, behavior: 'smooth'});
});