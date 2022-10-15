document.querySelector("#UserForm"),addEventListener("submit",handleForm);

const url ="https://all-use-heroku.herokuapp.com/cars";

function handleForm(e){
    e.preventDefault();
    // console.log(e)

    let Name = document.getElementById("Brand_car").value;
    let Type = document.getElementById("Type_car").value;
    let Year = document.getElementById("Year_Pur").value;
    let KMS = document.getElementById("KM").value;
    let description = document.getElementById("Description").value;
    let price = document.getElementById("Price").value;
    
    console.log(Name,Type,Year,KMS,description,price);


    const data={
        brand:Name,
        type:Type,
        year:Number(Year),
        kms:Number(KMS),
        Description:description,
        Price:Number(price)
    };


    fetch(url,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(data),

    }).then((res)=>res.json())
    .then(()=>{
        alert("Ad posted successfully")
    })
}