function product() {
    const url = `https://all-use-heroku.herokuapp.com/cars`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        append(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  product();

  function append(data) {
    document.querySelector("#container").innerHTML = null;
    data?.map(function (el) {

      let main = document.createElement("div");
      main.setAttribute("class", "main");

      let div1=document.createElement("div");
      div1.setAttribute("id", "div1");
      
      let delete1 = document.createElement("img");
    delete1.src =(`data:image/png;base64,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`);
    delete1.addEventListener("click", () => {
        deleteFunction(el.id);
      });
     

    let Edit = document.createElement("img");
        Edit.src =(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEVNtqz///9FtKlDs6k+sqf6/f3h8vDw+fjr9vU6saZVurD0+/qn2NP3/Pur2tXC5ODV7Oq64NxjvrWDysNswbnO6eZpwLic1M7e8O6PzceHy8V6x7/K6OWU0cuy3dlcu7JXGqnpAAALKUlEQVR4nO2d6ZqjKBSGFYhRk4pJNIkpa9r7v8sxbiCgcpTFVOr7NU91T8tbcDgLm+f/dnmuG2Bcf4Tvrz/C99cfoV7tGln9pnnCQ5gnp8czzcrYQ5hEBCMvLrP0+TgleXgw/n2jhMHt9J2VmGCMMPaGqn9GcJl9n26ByUYYIzyfihgRAUxUxYni4nQ21RAThLv8eI9U4AaY0f2Ym7BQ7YT75BlHEDgGM4qfyV53g/QSHpLUI8vwWkjipYne2Ucn4a1Aq/A6SFTcNLZKG2F4jDXgdZDxMdTVME2E5xQ0sShA4lTT7KqF8OeO9PLVjOj+o6NxGggvMdGO14jElw0QJqUpvpqxTBwTJleTfDXjdSXjKsIgM81XM2ar4tYVhPtnhCwAeh6KnisineWEFwPz55gwWj7lLCUMC3t8NWOxNARYSHjUFr8oI5KjRcLQygzDi2SLunEJ4cWz3YGNsLfEGuGEu9RFBzYiKTxHBhMGsZsObIRjsG+EEiYu+WpGaIgDJHy4G6GdyMMg4c6yE5QLFyBjhBDur1sArBCvkCAOQJg7nWNY4Tg3QXh2zTWQeolDmfDmfo5hRZTLcaqEP5FrJk6RahFHkTDZVg++RBQdoxrhz/YAK0S1XlQivG1tiDaKlGxRhfC8xR58iajMqAqEuWuQCSn4xXnCfewaY0LxfHQzS7jbSKgmF77OxqizhJsItseFi7WEj20DVohzydQM4QY9Pa85zz9NGGy9B1/C04WNScLdlqdRqnhytpkkTN+hC6tOTJcSXrZvhI3IVB11gjB03XCAJqrhE4TZe4zRl3C2hPD4LmP0pYllm1HC8J0AK8TRcTpK6Cxaa/agQv+v8ehtjPDiCBDjRxKEtxN4hwcem09HCPd2VugFoT7KTKBLeGgkkRohfDrqQiZpPwDtBD8hhIGbwgwXYRawgRTJ41M5YeZkkGK+7AJDRHKnKCV0kzNhsToIQ5TnUVLCqymIKUWy9qUgxKsqoZMujE7d53ePlLpvUC9KO1FGWBrDmGhcH3bt7hhhWusFIZZqhC6SJvJf//k64EcUETJQZWmUhNBBYo9oDvvdAC1EjFUIHazCMPP8f52bR9R1AAaqZLVGJLyboZjSvf/4g4YazBooILq5CzwC4dm+s6fzyr9I+mNALyJhsUYgdFB96t0YN8fRpaWdsocWq1I8Yegg5C67aiC/V4B2SK4cKGM+FeYJjy6Sij5kPnNfpzOqcqSM+XoGT+iiBszk5zcesevFf8qWyDsMjtDNnhLGePgGdPmG+jo0vw+FI3RUnSG0FzmUrn/36obIVWyGhAe7rgKX3YEpJqi5DdqA2nAuVM/J0fD84pDQalaBr/mXn7eubgQR39t5FhBpcRnGkNCmM0TtAnX7TcRMNz0NyjpHApjjOZc4INzr5xgVbXyLKLFF/E3bCdGg6jYgtDhIUfbFjxx2oNY/iegC9nF5IjwgtFdDRNcv5rtyRJr1+zmoYcO6Iktob8kX3YfLtqItngmTzQbAhg0WhVlC9eBvpagNTvQiHWrgdCdit0qxhLZiUtYGO30LiJQV7KQHsSlLaCn3RXQfU87UKoSB2mrJCQ82D2YJ7QxSZogG7AZK0WnUOi1pVSQntLPJkhmigTdI5EVb9AdlDYDYbZkM4cmGGTKzaFD/gEGU2OJC/4Wpo2EJbeQVjA0G7Y/IhC0CV596sfkFQ2jBG3JDtJHEFpteXLHxM5YRBuYzJyngsPrbMOHsvDucy+WDCgUSQvPpvWSItn8gDlRcrjqDxAx9Smh8ohEmGSpxoK4UM9VQwm/DhAM/yIssW6YYFZt39f+VafiHJ4TuUhvsm7Sohj+uTCQ8mF01HLXBThRRy5RXHgRCs8VudoiOAPS2+KXjd01L3z1hbnIqHXETg78Sd23a6SAkuUBo8pD2jA3Wf6UH1FNLoUe+e0KDzmLCTfQNooB6JgTqLnrCh7GQRmGIDgC1/KrpBrme0FgVCmSD2s6L02pUT2iqGDzrJoY9qOuUFS0L94SGHD7QBvUdiM8EQjMOHzhE9dhgrVIgNJIdKvSgARusFQuE+v5tKgUbRAZssBFPuDPgLCazifavGLHB+l/e8YT6p1IlG+yXiXRfK4IFQu1hKbP4YtsGXyICoe5yMDRU0z2GItN9qGCDDOBe/8UwYh/q/QRrgyNzmMkh6snsUOtc6ihUGzSBJ9TqD526iU4+T6gxpnEXqjESYxp9canDUI2RGJdqyy2AoZqZHpTlFrryQ9gQNWSD0vxQU47vJqMXJcnx9dRpYG7C4BV3kjqNllqb61CN+YxYa9NRL4X5QUNuopGkXqqh5r0VG3xJUvNev27hNKPnJVm3WF1qVhqifcJrzE20kqw9rXX5mwjVqCTrhyvXgLcRqvWSrgGvchfAdMl0D8rX8dfsxQAuvpi/6lW6F2PF4vKW3ET7Odl+muUZ4mZCNSrpnqjFeyCcLb6Ma2Rf28KpZmNuotbI3sRl+0s35iYajewvXbRHeANVNYlG9ggv2ee9iaqaqLF93vC9+m4XX0Y1ulcffN7C8eLLqEbPW0DPzODNZPScRs/MgKtRewigvVv5x889Afdb0dG+qSE6eXYNdv6wLxRsyE00Gj9/CCsLd9Httmxw+gwpcJi2hYKR7rEeqnWaPAcMOsvdrX3I/9SRDXozZ7lB+UUbOMh3ANhYfJFr+jw+JNHvhrv09joXoVqrmTsVAGlwtzIg+6W4G6Kz92IAYlP0r/k/JBdn2c7oB9+eu9tEvfTdXZEn/k5cuYnm43P306i7xC7LFEI9Z27ipfk7htQPTkctB383jksb9FTuiVLOg7s8mpub7C2+SKVw15f6LSLt3x9SOHQTLynd16bqMNobuvYDDOzSBj3FO/cU703sTLpZWcWovsI5zlzaoPK9iWqbh3qHHyGMrsXjX3Jm52n7buIlxbsv1TKMzuGH50C8A8KJDQLuL1W6g3bytUxHLyUq30Gr1IlTr0k5AgTcI6xyw100/tKSGxsE3QWtcp93xMd/vUI3gLD7vBXqipK7qatsOMxvT8/NjfWwO9lV7tUvmbLrIbglx2dRxh62/iR5J+C9+gpvI+DyEga3y+lZxFEUEYKxo9cG2uYA30ZQqtiQDYB1gr9v8QFvlPz+d2Y+4K2gD3jv6fe/2fUB7659wNt5v//9ww94w/ID3iH9gLdkP+A94N//pvMHvMv9AW+rv6q+rlmkim7zTVckdPG6zrwkqzDLCbfo+ec8PZDQ/9naQI3UelCd0NHbHqPi95RoIPTPrqEGUplFoYR+7mQ9SSYcK/jBBYSuFlwE4et8JLOM0N9tIgzHxWwsupiwSqbczzdkLl1aR2j0ikwlTa7M6iD0A6fzDY6nSxY6CP1d6m6kkhRkggsJff8CfVBak7A3VRfVSeiHmYtuJNlEZVsz4WvZxvqmw4nFFxOEfmjZNeJiUQeuIKysEdljxGiJBa4l9PfPyM7yL4qekDBNH2HlG63MOCQD+0BthFWIczXNSK7QIEYvYcVYmmQk5Uo+DYTVlBObYiTx8glGJ6Hv/9wNzKsY3VVLMZPSQuj75xRrvkIWp+qFiklpIqxCgGOsLc7BJD4udfCCtBFWuhVIAyQmqFAupClIJ6HvH5LUWwWJiZcmh/kPAaSXsNI+ecbRwrfEoviZrIhe5NJOWGmXH+8RAU09GJPofszh+e28TBDWOp+KGKlgVnAoLk6aZk5RxghfCm6n76zErx2aAmr9M4LL7Pt0WxV3zskoYa1DmCenxzPNytirD9Zg5MVllj4fpyQP9c4qMpknZLVrZPWbdgld6I/w/fVH+P76I3x//Q/04540KRs7SAAAAABJRU5ErkJggg==`);
        Edit.addEventListener("click", () => {
            EditFunction(el.id);
          });

          let Wishlist = document.createElement("img");
        Wishlist.src =(`https://www.freepnglogos.com/uploads/love-logo-1.jpg`);
        Wishlist.addEventListener("click", () => {
            WishFunction(el.id);
          });

      let imgdiv = document.createElement("div");
      imgdiv.setAttribute("class", "imgdiv");
      let image = document.createElement("img");
      image.src =(`https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg`);
      image.setAttribute("class", "img");

      let Brand = document.createElement("p");
      Brand.textContent = el.brand;

      let year = document.createElement("p");
      year.innerText = el.year;

      let div2=document.createElement("div");
      div2.setAttribute("id", "div2"); 
      div2.append(year,Brand)

      let type = document.createElement("p");
      type.setAttribute("id", "type"); 
      type.textContent = el.type;

      let kms = document.createElement("button");
      kms.setAttribute("id", "kms"); 
      kms.textContent = el.kms+" "+"km";

      let hr = document.createElement("hr");
      hr.setAttribute("id", "hr"); 

      let div3=document.createElement("div");
      div3.setAttribute("id", "div3");
      let Month = document.createElement("h3");
      Month.textContent ="₹"+ (el.Price/12).toFixed(0)+ " "+ "/month";

      let Price = document.createElement("p");
      Price.textContent ="₹"+ el.Price;

      div3.append(Month,Price)
      
      let Description = document.createElement("p");
      Description.setAttribute("class", "Description");
      Description.innerText = el.Description;

      

      imgdiv.append(image);
      div1.append(delete1,Edit,Wishlist)
      main.append(imgdiv,div1, div2,type,kms,hr,div3,Description);
      document.querySelector("#container").append(main);
    });
  }


  function deleteFunction(id) {
    fetch(`https://all-use-heroku.herokuapp.com/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        return setTimeout(() => {
            product();
        }, 100);
      });
  }
  
  function EditFunction(id) {
    localStorage.setItem("Price", JSON.stringify(id));
    window.location.href = "edit.html";
  }

  function handleSortPrice(){
    let sort =document.querySelector("#SortPrice").value;
    console.log(sort)

    fetch(`https://all-use-heroku.herokuapp.com/cars?_sort=Price&_order=${sort}`)
    .then((res)=>res.json())
    .then((res)=>append(res))
  }
  
  function handleSortKilo(){
    let sort1 =document.querySelector("#Sortkilo").value;
    console.log(sort1)

    fetch(`https://all-use-heroku.herokuapp.com/cars?_sort=kms&_order=${sort1}`)
    .then((res)=>res.json())
    .then((res)=>append(res))
  }

  
  //filter part

  function handleFilter(){
 
    let filter=document.getElementById("Brand_car").value;
    console.log(filter);
   
  fetch(`https://all-use-heroku.herokuapp.com/cars?q=${filter}`)
    .then((res)=>res.json())
    .then((res)=>append(res))
  }


  //wishlist Code

  function  WishFunction(id){

    fetch(`https://all-use-heroku.herokuapp.com/cars`)
    .then((res)=>res.json())
    .then((res)=>{
        Wish=res.filter((el)=>el.id == id);
        console.log(Wish[0])


        let payload={
            brand:Wish[0].brand,
            type:Wish[0].type,
            year:Number(Wish[0].year),
            kms:Number(Wish[0].kms),
            Description:Wish[0].Description,
            Price:Number(Wish[0].Price) 
        }

        fetch(`https://all-use-heroku.herokuapp.com/wishlisted_cars`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(payload),
    
        }).then((res)=>res.json())
        .then(()=>{
           alert("Card Added in WishList Page")
        })

    })
  }