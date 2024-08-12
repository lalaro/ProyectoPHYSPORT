function registerUser(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    var user = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Usuario registrado correctamente.");

    window.location.href = "/login";
}
