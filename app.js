function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");

   
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var showPasswordCheckbox = document.getElementById('showPassword');

    showPasswordCheckbox.addEventListener('change', togglePasswordVisibility);
});