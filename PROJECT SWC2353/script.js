/* Login and Register Process */
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

/* Join Process */
// Open the Join Form Modal
function openJoinForm(eventName) {
  // Set the event name in the modal
  document.getElementById('eventName').innerText = eventName;
  document.getElementById('joinModal').style.display = "block";
}

// Close the Join Form Modal
function closeJoinForm() {
  document.getElementById('joinModal').style.display = "none";
}

// Handle the form submission
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Simple validation
  if (name && email && phone) {
    document.getElementById('formResponse').innerHTML = 'Thank you for joining! We will contact you soon.';
    document.getElementById('joinForm').reset();
    setTimeout(() => closeJoinForm(), 2000); // Close modal after 2 seconds
  } else {
    document.getElementById('formResponse').innerHTML = 'Please fill in all the fields.';
    document.getElementById('formResponse').style.color = 'red';
  }
}


/* Donation Process */
function processDonation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !amount) {
    alert("Please fill in all required fields.");
    return;
  }

  // Display a confirmation message
  alert(`Thank you, ${name}, for your generous donation of RM${amount}!`);

  // Log the donation details (for development purposes)
  console.log("Donation Details:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Amount: RM${amount}`);
  if (message) {
    console.log(`Message: ${message}`);
  }

  // Reset the form
  document.getElementById("donationForm").reset();
}

/*Contact Form Process*/
document.querySelector('.contact-form form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you for reaching out! Your message has been sent.");
    document.querySelector('.contact-form form').reset();
  }
});

