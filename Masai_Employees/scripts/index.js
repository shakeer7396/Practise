let user = JSON.parse(localStorage.getItem("token"));
console.log(user);
getProfile(user);

//Getting user using username and token
async function getProfile({ token, username }) {
    console.log(token, username);
    let data = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });

    data = await data.json();
    renderUser(data);
}


//Rendering user
function renderUser(data) {

    let root = document.getElementById("user");
    root.innerHTML = null;

    let user = document.createElement("div");
    user.setAttribute("class", "user");

    let name = document.createElement("p");
    name.innerText = `Name : ${data.name}`;

    let username = document.createElement("p");
    username.innerText = `Username : ${data.username}`;

    let email = document.createElement("p");
    email.innerText = `Email : ${data.email}`;

    let mobile = document.createElement("p");
    mobile.innerText = `Phone : ${data.mobile}`;

    let desc = document.createElement("p");
    desc.innerText = `Desc : ${data.description}`;

    user.append(name, username, email, mobile, desc);
    root.append(user);

}


