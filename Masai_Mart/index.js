// Global Variables
 let globalDataArray = [];
 let wishlistData=JSON.parse(localStorage.getItem("wishlist")) || [];

globalData();

async function globalData(){
    globalDataArray=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=55&limit=55&orderBy=desc`);
    globalDataArray =await globalDataArray.json();
    globalDataArray=globalDataArray.data;
    console.log(globalDataArray)
}

//Pagination variables and functanality
let pages = 4; //try to get this form of api itself
let per_page =12;
renderPagination(pages);

function renderPagination(pages,orderBy){
    let pagination_root=document.getElementById("pagination-container");
    pagination_root.innerHTML=null;
    apiCall(1,orderBy)
    for(let page=1;page<=pages; page++){
        let button = document.createElement("button");
        button.setAttribute("class","pagination-btn");
        button.innerText=page;
        button.addEventListener("click",function(){
            apiCall(page,orderBy);
        })
        pagination_root.append(button)
    }
}

//Api Call
async function apiCall(page,orderBy){
    if(orderBy!=undefined){
        data = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&orderBy=${orderBy}`);
    }
    else{
        data=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&orderBy=desc`);

        data=await data.json();
        Pages=data.totalPages;
        data=data.data;
        renderDom(data)
    }
}

// Rendering products to Dom

function renderDom(data){
    let root =document.getElementById("product-container");
    root.innerHTML=null;
    window.location.href="#";
    data.map((el)=>{
        let product=document.createElement("div");
        product.setAttribute("class","product")

        let image=document.createElement("img")
        image.setAttribute("src",el.image);
        image.setAttribute("class","product-image");

        let product_desc=document.createElement("div");
        product_desc.setAttribute("class","product-desc");

        let left_container = document.createElement("div");
        left_container.setAttribute("class","left-container");

        let brand = document.createElement("p")
        brand.setAttribute("class","brand");
        brand.innerText=el.brand;

        let title = document.createElement("p")
        title.setAttribute("class","title");
        title.innerText=el.title;

        let price = document.createElement("p")
        price.setAttribute("class","price");
        price.innerText=`₹ ${el.price} /-`;

        left_container.append(brand,title,price);

        let wishlist =document.createElement('img');
        wishlist.setAttribute("src","https://cdn-icons-png.flaticon.com/512/3287/3287041.png");
        wishlist.setAttribute("class","wishlist-icon");
        wishlist.addEventListener("click",function(){
            wishlistData.push(el);
            alert("Added to wishlist");
            localStorage.setItem("wishlist",JSON.stringify(wishlistData));
        })
        product_desc.append(left_container,wishlist);
        product.append(image,product_desc);
        root.append(product);
    })
}
