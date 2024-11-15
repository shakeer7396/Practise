 //Accesing the element with using document.get with element ID,ClassName, Name,TagName etc
 document.getElementById("black").addEventListener("click",()=>{
    changeBlack()
    })
    document.getElementById("red").addEventListener("click",()=>{
        changeRed()
    })
    
    // Calling the above created functions using function method
    function changeBlack(){
        document.getElementById("container").style.backgroundColor="black";
    }
    function changeRed(){
        document.getElementById("container").style.backgroundColor="red";
    }