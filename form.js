// Toggle password visibility

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggleIcon = document.querySelector('.togglePassword');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; //Show the password
        passwordToggleIcon.textContent = '👀'; //change the icon to closed eye

    } else {
        passwordInput.type = 'password'; // hide the password/
        passwordToggleIcon.innerHTML = '😊'
    }
}

// Get the modal element and close button
const modal = document.getElementById('myModal');
const closeModalButton = document.getElementsByClassName('close')[0];

//get the form element
const form = document.getElementById('');
const modal_content = document.getElementById('modal_content');


// Function to handle Form Submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission (Page Reload).

    // Get Form Data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    //Display the form details inside the modal
    modal_content.innerHTML = `
    <strong>First Name:</Strong> ${firstName}<br>
    <strong>Last Name:</Strong> ${lastName}<br>
    <strong>Email:</Strong> ${email}<br>
    <strong>Phone Number:</Strong> ${phoneNumber}<br>
    <strong>Password:</Strong> ${password}<br>`

    //show the modal
    modal.style.display = 'block';

    //Optionally, you could reset the form after submission
    form.reset();
}

// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function () {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Attach event listener to the form
form.addEventListener('submit', handleFormSubmission);
