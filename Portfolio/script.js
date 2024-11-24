const btn = document.querySelector(".up");
btn.addEventListener("click",() =>{
     document.documentElement.scrollTo({
        top:0,
        behavior:"smooth",
     });
});