//Registering user using Masai API
let registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", registerUser);

//Registering User
async function registerUser(e) {
    e.preventDefault();

    let user = {
        name: registerForm.name.value,
        email: registerForm.email.value,
        password: registerForm.password.value,
        username: registerForm.username.value,
        mobile: registerForm.mobile.value,
        description: registerForm.desc.value,
    }

    let data = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        
    });

    data = await data.json();
    if (data.error)
        alert(data.message);
    else {
        alert(data.message);
        window.location.href = "./login.html"
    }

}