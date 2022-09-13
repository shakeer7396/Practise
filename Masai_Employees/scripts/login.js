//Sending login credentials to Masai API
let loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit", loginUser);

async function loginUser(e) {
    e.preventDefault();

    let user = {
        password: loginForm.password.value,
        username: loginForm.username.value
    }

    try {
        let data = await fetch('https://masai-api-mocker.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        data = await data.json();

        if (data.token) {
            alert('Login Sucessful');
            let obj = {
                username: loginForm.username.value,
                token: data.token
            }

            localStorage.setItem("token", JSON.stringify(obj));
            window.location.href = "./index.html";
        }
    }
    catch (err) {
        alert('Invalid Credentials')
    }
}