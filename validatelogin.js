

function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Both email and password are required");
        return false;
    }

    // Add more validation rules as needed

    // If all validation passes, you can submit the form or perform other actions
    alert("Login successful!");
    // document.getElementById("loginForm").submit(); // Uncomment this line if you want to submit the form
}