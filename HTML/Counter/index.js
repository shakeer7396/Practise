//button and counter text
const counter=document.getElementById("counter");
const btns=document.getElementsByClassName("btn");

let count=0;
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const styles=e.currentTarget.classList

        if(styles.contains('increase')){
            count++
        }
        counter.textContent=count;
    })
})