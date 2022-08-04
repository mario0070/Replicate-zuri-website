var home=document.getElementById("home")
var imp=document.getElementById("imp")
var why=document.getElementById("why")
home.addEventListener("click",()=>{
    home.classList.add("valid")
    imp.classList.remove("valid")
    why.classList.remove("valid")
})

imp.addEventListener("click",()=>{
    imp.classList.add("valid")
    home.classList.remove("valid")
    why.classList.remove("valid")
})

why.addEventListener("click",()=>{
    why.classList.add("valid")
    home.classList.remove("valid")
    imp.classList.remove("valid")
})



