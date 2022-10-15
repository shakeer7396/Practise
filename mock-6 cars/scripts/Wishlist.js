function product() {
    const url = `https://all-use-heroku.herokuapp.com/wishlisted_cars`;
  
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
      main.append(imgdiv, div2,type,kms,hr,div3,Description);
      document.querySelector("#container").append(main);
    });
  }