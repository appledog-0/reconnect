

function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Both email and password are required");
        return false;
    }

    // Add more validation rules as needed

  
    alert("Login successful!");
    document.getElementById("loginForm").submit(); 
}