let togglebtn=document.querySelector(".togglebtn");
let crossbtn=document.querySelector(".crossbtn");
let sidebar=document.querySelector(".sidebar");
togglebtn.addEventListener("click",()=>{
  sidebar.classList.toggle("active");
  togglebtn.classList.toggle("active");
  crossbtn.classList.toggle("active");
}
);
crossbtn.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
    togglebtn.classList.remove("active");
    crossbtn.classList.remove("active");
}
)