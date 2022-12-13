

let counter=document.querySelector(".count")
let count=0;

function changeCount(val){
    if(val==inc){
        count+=1
    }
    else if(val==dec){
        if(count>0){
            count-=1
        }
    }
    else if(val==reset){
        count=0
    }
    counter.innerText=count;
}

