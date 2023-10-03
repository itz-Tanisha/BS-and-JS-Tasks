/** 
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;
    var nameError = document.getElementById("nError");
    var emailError = document.getElementById("eError");
    var websiteError = document.getElementById("webError");
    var messageError = document.getElementById("msgError");

    // Reset previous error messages
    nameError.style.display = "none";
    emailError.style.display = "none";
    websiteError.style.display = "none";
    messageError.style.display = "none";

    // Validate Name
    if (name === "") {
        nameError.style.display = "block";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        emailError.style.display = "block";
        return false;
    }

    // Validate Website
    var urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (website !== "" && !website.match(urlPattern)) {
        websiteError.style.display = "block";
        return false;
    }

    // Validate Message
    if (message === "") {
        messageError.style.display = "block";
        return false;
    }

    // If all validations pass, the form is valid
    return true;
}

// Add a click event listener to the submit button
document.getElementById("submitbtn").addEventListener("click", function () {
    if (validateForm()) {
        alert("Form submitted successfully!");
        // You can add code here to submit the form to the server if needed.
    }
});
**/
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;
    var nameError = document.getElementById("nError");
    var emailError = document.getElementById("eError");
    var websiteError = document.getElementById("webError");
    var messageError = document.getElementById("msgError");

    // Reset previous error messages
    nameError.textContent = ""; // Clear error message
    emailError.textContent = "";
    websiteError.textContent = "";
    messageError.textContent = "";

    // Validate Name
    if (name === "") {
        nameError.textContent = "This field is required";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "A valid email address is required";
        return false;
    }

    // Validate Website
    var urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (website !== "" && !website.match(urlPattern)) {
        websiteError.textContent = "A valid URL is required";
        return false;
    }

    // Validate Message
    if (message === "") {
        messageError.textContent = "This field is required";
        return false;
    }

    // If all validations pass, the form is valid
    return true;
}

// Add a click event listener to the submit button
document.getElementById("submitbtn").addEventListener("click", function () {
    if (validateForm()) {
        alert("Form submitted successfully!");
        // You can add code here to submit the form to the server if needed.
    }
});