const loaderDiv = document.getElementById("loader");

function showLoader() {
  loaderDiv.classList.add("show");
}

function hideLoader() {
  loaderDiv.classList.remove("show");
}

showLoader();
// -----------------

// localStorage:-

let reqres_token = localStorage.getItem("reqres_token");
console.log("reqres_token", reqres_token);

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
      let report_container = document.getElementById("report_container");
      let login_message = document.createElement("h1");
      login_message.setAttribute("id", "login_message");
      login_message.innerText = "Please login with reqres";
      report_container.append(login_message);

      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);
    }
  });

let display_data = (data) => {
  let report_container = document.getElementById("report_container");

  let content_div = document.createElement("div");
  content_div.setAttribute("id", "content");

  let total = document.createElement("h2");
  total.innerText = `Total Users:- ${data.length}`;

  //   content_div.innerText = data.length;

  let students = data.filter((ele) => {
    if (ele.profession == "Student") {
      return ele;
    }
  });

  let working_professionals = data.filter((ele) => {
    if (ele.profession != "Student") {
      return ele;
    }
  });

  //   console.log(working_professionals);

  let total_professionals = document.createElement("h2");
  total_professionals.innerText = `Professionals:- ${working_professionals.length}`;

  let total_students = document.createElement("h2");
  total_students.innerText = ` Students:- ${students.length}`;

  content_div.append(total, total_professionals, total_students);

  report_container.append(content_div);
};