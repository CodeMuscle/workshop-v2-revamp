// function change_link(link){
//     walink=document.getElementById("walink")
//         console.log(walink)
//         walink.setAttribute("href", link);
// }
   
var form=document.getElementById('submit')


     
   

form.addEventListener("submit",function(event){
    event.preventDefault();
    let key=document.getElementById("password")
        let link=document.getElementById("link").value
        if(key.value="mmtrainity28@")
        { 
            localStorage.setItem("walink", link);
        }
    })
    
