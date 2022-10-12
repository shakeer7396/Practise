// loaders functions

const loaderDiv = document.getElementById("loader");

function showLoader() {
  loaderDiv.classList.add("show");
}

function hideLoader() {
  loaderDiv.classList.remove("show");
}

// ------

// localStorage :-

let reqres_token = localStorage.getItem("reqres_token");
console.log("reqres_token", reqres_token);

// get request:-

showLoader();
fetch("https://mock10api.herokuapp.com/details")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    hideLoader();

    if (reqres_token) {
      display_data(data);
    } else {
      //
      let data_container = document.getElementById("data_container");
      let login_message = document.createElement("h1");
      login_message.setAttribute("id", "login_message");
      login_message.innerText = "Please login with reqres";
      data_container.append(login_message);

      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    }
  });

let filter_by_batch_value = document.getElementById("filter_by_batch");

filter_by_batch_value.addEventListener("change", () => {
  filterByBatch(filter_by_batch_value.value);
});

function filterByBatch(value) {
  //   console.log(value);
  showLoader();
  fetch(
    `https://mock10api.herokuapp.com/details?batch_name_like=${value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      hideLoader();

      if (reqres_token) {
        display_data(data);
      } else {
        //
        let data_container = document.getElementById("data_container");
        let login_message = document.createElement("h1");
        login_message.setAttribute("id", "login_message");
        login_message.innerText = "Please login";
        data_container.append(login_message);

        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      }
    });
}

// search_input
let search_value = document.getElementById("search_input");
search_value.addEventListener("input", () => {
  search_fun(search_value.value);
});

function search_fun(search_value) {
  showLoader();
  fetch(`https://mock10api.herokuapp.com/details?q=${search_value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      hideLoader();

      if (reqres_token) {
        display_data(data);
      } else {
        //
        let data_container = document.getElementById("data_container");
        let login_message = document.createElement("h1");
        login_message.setAttribute("id", "login_message");
        login_message.innerText = "Please login";
        data_container.append(login_message);

        setTimeout(() => {
          window.location.href = "login.html";
        }, 3000);
      }
    });
}

function display_data(data) {
  let data_container = document.getElementById("data_container");
  data_container.innerHTML = null;

  data.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("id", "data_content");
    div.setAttribute("data-id", ele.id);

    let editDelete = document.createElement("div");
    editDelete.setAttribute("id", "editDelete");

    let name = document.createElement("h3");
    name.setAttribute("id", "name");
    name.innerText = `Name-${ele.name}`;

    let age = document.createElement("h3");
    age.setAttribute("id", "age");
    age.innerText = `Age-${ele.age}`;

    let place = document.createElement("h3");
    place.setAttribute("id", "place");
    place.innerText = `Place-${ele.place}`;

    let batch_name = document.createElement("h3");
    batch_name.setAttribute("id", "batch_name");
    batch_name.innerText = `Batch-${ele.batch_name}`;

    let profession = document.createElement("h3");
    profession.setAttribute("id", "user_profession");
    profession.innerText = `Profession:-${ele.profession}`;

    // delete and edit:-

    let edit = document.createElement("button");
    edit.innerText = "🖊";

    edit.addEventListener("click", (e) => {
      //   edit_data(ele.id, e);
    });

    let del = document.createElement("button");
    del.innerText = "❌";
    del.addEventListener("click", () => {
      delete_data(ele.id);
    });

    // editDelete.append(edit, del);

    div.append(name, age, place, batch_name, profession, editDelete, edit, del);
    data_container.append(div);
  });
}

async function delete_data(id) {
  console.log(id);
  await fetch(`https://mock10api.herokuapp.com/details/${id}`, {
    method: "DELETE",
  });

  window.location.reload();
}

// // user form values:-

// let user_name = document.getElementById("name");
// let age = document.getElementById("age");
// let place = document.getElementById("place");
// let batch_name = document.getElementById("batch_name");
// let profession = document.getElementById("profession");

// function edit_data(id, e) {
//   let parent = e.target.parentElement;
//   let name = parent.querySelector("#name").textContent;
//   let age = parent.querySelector("#age").innerText;
//   let place = parent.querySelector("#place").innerText;
//   let batch_name = parent.querySelector("#batch_name").innerText;
//   let profession = parent.querySelector("#profession").innerText;
//   console.log(name, age, place, batch_name, profession);

//   user_name.value = name;
// }