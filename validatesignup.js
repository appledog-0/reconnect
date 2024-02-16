function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.querySelector('input[name="Gender"]:checked');
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (!firstName || !lastName || !gender || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long, including one uppercase letter, one lowercase letter, one numeric digit, and one special character (@$!%*?&)");
        return false;
    }

    // Add more validation rules as needed

   
    alert("Form submitted successfully!");
     document.getElementById("signupForm").submit();
}