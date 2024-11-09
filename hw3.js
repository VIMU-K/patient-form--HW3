//Author: Vimukthi Habarakada Liyanage Don
//Date created: 10/08/2024
//Date last edited: 11/05/2024
//Version: 1.2

// Date of Birth 

function validateDOB() {
    
    const dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date( maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;    
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

function fnameValidation() {
    // Get the first name input value and trim whitespace
    let fname = document.getElementById("firstname").value.trim();
    let namePattern = /^[A-Za-z'-]+$/;

    // Check if the name is empty
    if (fname === '') {
        document.getElementById("firstname-error").innerHTML = "First name must not be empty";
        return false;
    } 
    // Check if the name matches the pattern (letters, apostrophes, and dashes only)
    else if (!namePattern.test(fname)) {
        document.getElementById("firstname-error").innerHTML = "First name can contain only letters, apostrophes, and dashes";
        return false;
    } 
    // Check if the name is at least 2 characters
    else if (fname.length < 2) {
        document.getElementById("firstname-error").innerHTML = "First name must be at least 2 characters";
        return false;
    } 
    // Check if the name does not exceed 30 characters
    else if (fname.length > 30) {
        document.getElementById("firstname-error").innerHTML = "First name must not exceed 30 characters";
        return false;
    } 
    // If all checks pass, clear any error message
    else {
        document.getElementById("firstname-error").innerHTML = "";
        return true;
    }
}


function lnameValidation() {
    // Get the last name input value and trim whitespace
    let lname = document.getElementById("lastname").value.trim();
    let namePattern = /^[A-Za-z'-]+$/;

    // Check if the name is empty
    if (lname === '') {
        document.getElementById("lastname-error").innerHTML = "Last name must not be empty";
        return false;
    } 
    // Check if the name matches the pattern (letters, apostrophes, and dashes only)
    else if (!namePattern.test(lname)) {
        document.getElementById("lastname-error").innerHTML = "Last name can contain only letters, apostrophes, and dashes";
        return false;
    } 
    // Check if the name is at least 2 characters
    else if (lname.length < 2) {
        document.getElementById("lastname-error").innerHTML = "Last name must be at least 2 characters";
        return false;
    } 
    // Check if the name does not exceed 30 characters
    else if (lname.length > 30) {
        document.getElementById("lastname-error").innerHTML = "Last name must not exceed 30 characters";
        return false;
    } 
    // If all checks pass, clear any error message
    else {
        document.getElementById("lastname-error").innerHTML = "";
        return true;
    }
}


//Email Validation //

function emailValidation(){
    email = document.getElementById("email").value;
    var emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (email == ""){
        document.getElementById("email-error").innerHTML = 
        "Email Address must not be empty"
        return false;
    }else if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML =
        "Please Enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}


// Phone Validation

function validatePhone() {
    const phoneInput = document.getElementById("phonenumber");
    const phone = phoneInput.value.replace(/\D/g, ""); // Removes all non-digit characters

    // Check if phone number has exactly 10 digits
    if (phone.length !== 10) {
        document.getElementById("phone-error").innerHTML = "Invalid Phone Number";
        return false;
    }

    // Format phone number as XXX-XXX-XXXX
    const formattedPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

// Validate SSN //
function validateSSN() {
    // Get the SSN input value and trim whitespace
    const ssn = document.getElementById("ssn").value.trim();

    // Regular expression to validate SSN in the format XXX-XX-XXXX
    const ssnPattern = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;

    // Check if SSN matches the pattern
    if (ssn === '') {
        document.getElementById("ssn-error").innerHTML = "SSN cannot be empty. Please enter a valid Social Security Number (XXX-XX-XXXX).";
        return false;
    } else if (!ssnPattern.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number (XXX-XX-XXXX).";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = ""; // Clear any error messages if validation passes
        return true;
    }
}


// Slider //

let slider = document.getElementById("range");
let output = document.getElementById("range-scale");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


// Function to validate Address Line 1
function validateAddressLine1() {
    const addressLine1 = document.getElementById("addressline1").value;
    const addressLine1Error = document.getElementById("addressline1-error");

    if (addressLine1.length < 2 || addressLine1.length > 30) {
        addressLine1Error.textContent = "Address Line 1 must be between 2 and 30 characters.";
        return false;
    } else {
        addressLine1Error.textContent = ""; 
        return true;
    }
}

// Function to validate Address Line 2 (Optional)
function validateAddressLine2() {
    const addressLine2 = document.getElementById("addressline2").value;
    const addressLine2Error = document.getElementById("addressline2-error");

    if (addressLine2.length < 2 || addressLine2.length > 30) {
        addressLine2Error.textContent = "Address Line 2 must be between 2 and 30 characters.";
        return false;
    } else {
        addressLine2Error.textContent = ""; 
        return true;
    }
}

// Function to validate the city field
function validateCity() {
    const city = document.getElementById("city").value;
    const cityError = document.getElementById("city-error");

    if (city.length < 2 || city.length > 30) {
        cityError.textContent = "City must be between 2 and 30 characters.";
        return false;
    } else {
        cityError.textContent = ""; 
        return true;
    }
}

// Function to validate the zip code
function validateZipcode() {
    const zip = document.getElementById("zip").value;
    const zipError = document.getElementById("zip-error");
    const zipPattern = /^\d{5}(-\d{4})?$/; 

    if (!zipPattern.test(zip)) {
        zipError.textContent = "Invalid Zip Code. Enter a 5-digit zip code or zip+4 format (12345-6789).";
        return false;
    } else {
        zipError.textContent = ""; 
        return true;
    }
}

// Function to validate all address fields before submitting the form
function validateAddress() {
    const isAddressLine1Valid = validateAddressLine1();
    const isAddressLine2Valid = validateAddressLine2();
    const isCityValid = validateCity();
    const isZipValid = validateZipcode();

    // Ensure all address fields are valid
    return isAddressLine1Valid && isAddressLine2Valid && isCityValid && isZipValid;
}

// Attach the validation to the form's submit event
document.getElementById("signup").onsubmit = function() {
    return validateAddress(); // Only submit if all validations pass
};

// user ID validation //

function validateUserId(){
    let userid = document.getElementById("userid").value.toLowerCase();

    // Redisplay UserId in lowercase
    document.getElementById("userid").value = userid;

    if (userid.length === 0) {
        document.getElementById("userid-error").innerHTML = "User ID cannot be empty";
        return false;
    }

    // Check userId does not start with a number
    if (!isNaN(userid.charAt(0))) {
        document.getElementById("userid-error").innerHTML = "User ID cannot start with a number";
        return false;    
    }

    // Check userId only contains letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(userid)) {
        document.getElementById("userid-error").innerHTML = "User ID can only contain letters, numbers, or underscores";
        return false;
    } else if (userid.length < 5) {
        document.getElementById("userid-error").innerHTML = "User ID must be at least 5 characters long";
        return false;
    } else if (userid.length > 30) {
        document.getElementById("userid-error").innerHTML = "User ID must not exceed 30 characters";
        return false;
    } else {
        document.getElementById("userid-error").innerHTML = "";
        return true;
    }
}

// Password

function validatePassword() {
    const pwd = document.getElementById("pwd").value;
    const user = document.getElementById("userid").value;

    let errorFlag = 0;

    // Check for lowercase letters
    if (!pwd.match(/[a-z]/)) {
        document.getElementById("msg1").innerHTML = "Enter at least 1 lowercase letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg1").innerHTML = "";
    }

    // Check for capital letters
    if (!pwd.match(/[A-Z]/)) {
        document.getElementById("msg2").innerHTML = "Enter at least 1 capital letter";
        errorFlag = 1;
    } else {
        document.getElementById("msg2").innerHTML = "";
    }

    // Check for numbers
    if (!pwd.match(/[0-9]/)) {
        document.getElementById("msg3").innerHTML = "Enter at least one number";
        errorFlag = 1;
    } else {
        document.getElementById("msg3").innerHTML = "";
    }

    // Check for special characters
    if (!pwd.match(/[!@#%&*\-_\\.+()]/)) {
        document.getElementById("msg4").innerHTML = "Enter at least 1 special character";
        errorFlag = 1;
    } else {
        document.getElementById("msg4").innerHTML = "";
    }

    // Check for length
    if (pwd.length < 8) {
        document.getElementById("msg5").innerHTML = "Enter a minimum of 8 characters";
        errorFlag = 1;
    } else {
        document.getElementById("msg5").innerHTML = "";
    }

    // Check if password equals the user ID
    if (pwd === user || pwd.includes(user)) {
        document.getElementById("msg6").innerHTML = "Password cannot be equal to or contain the User ID";
        errorFlag = 1;
    } else {
        document.getElementById("msg6").innerHTML = "";
    }

    // Display a valid message if there are no errors
    if (errorFlag === 0) {
        document.getElementById("msg3").innerHTML = "Valid Password";
    }
}


// Confrim password

function confirmPassword() {
    const pwd = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("pwd2").value;

    if (pwd2 !== pwd) {
        document.getElementById("pwd2-error").innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById("pwd2-error").innerHTML = "";
        return true;
    }
}

// Redisplay user input
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan='3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) { 
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>&#x2713;</td></tr>"; 
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) { 
                        formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                        formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>"; 
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput += "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showinput").innerHTML = formoutput;
    }
}

// Remove User Input

function removeReview(){
    document.getElementById("showinput").innerHTML = "";
}

function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeBtn = document.getElementById("close-alert");
    alertBox.style.display = "block";
    closeBtn.onclick = function () {
        alertBox.style.display = "none";
    }
}

function validateAll() {
    let valid = true;
    
    if(!validateDOB()) {
        valid = false;        
    }

    if(!fnameValidation()) {
        valid = false;        
    }

    if(!lnameValidation()) {
        valid = false;        
    }

    if(!emailValidation()) {
        valid = false;        
    }

    if(!validatePhone()) {
        valid = false;        
    }

    if(!validateSSN()) {
        valid = false;        
    }
    
    if(!validateAddressLine1()) {
        valid = false;        
    }

    if(!validateAddressLine2()) {
        valid = false;        
    }

    if(!validateCity()) {
        valid = false;        
    }

    if(!validateZipcode()) {
        valid = false;        
    }

    if(!validateUserId()) {
        valid = false;        
    }

    if(!validatePassword()) {
        valid = false;        
    }

    if(!confirmPassword()) {
        valid = false;        
    }

    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {      
        showAlert();
    }       
}