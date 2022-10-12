document.querySelector("#form").addEventListener("submit", postData);
// post request:-

function postData(e) {
  e.preventDefault();
  let userObj = {
    name: document.getElementById("name").value,
    age: Number(document.getElementById("age").value),
    place: document.getElementById("place").value,
    batch_name: document.getElementById("batch_name").value,
    profession: document.getElementById("profession").value,
  };

  fetch("https://mock10api.herokuapp.com/details", {
    method: "POST",

    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
  alert("User Added");

  window.location.reload();
}