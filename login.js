document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    console.log(username);
    var password = document.getElementById('password').value;
    console.log(password);

    if(username === 'pedro' && password === '123'){
        var url = "usuario.html?username=" + username;
        console.log(url)    
        window.location.href = url;
        
    }
    else {
        alert("Usuario o Contrasena invalidos");
    }
});
