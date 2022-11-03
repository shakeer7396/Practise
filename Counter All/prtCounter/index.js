
let counter=document.querySelector(".count");
let count=0;

function changeCount(check){
    if(check==inc){
        count+=1;
    }
    else if(check==dec){
        count-=1;
    }
    else if(check==reset){
        count=0;
    }
    counter.innerText=count
}