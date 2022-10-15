let id = JSON.parse(localStorage.getItem("Price"));

  document.querySelector("#submit").addEventListener("click", EditFunction);

  function EditFunction() {
    let price = document.querySelector("#Price").value;

    let Editdata = {
        Price: price,
    };

    fetch(`https://all-use-heroku.herokuapp.com/cars/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Editdata),
    })
      .then((res) => res.json())
      .then((res) => {
        return setTimeout(() => {
            window.location.href = 'Cars_Page.html'
        },500)
      });
  }