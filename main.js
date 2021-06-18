const myBtn=document.querySelector(".back-btn"),
myContainer=document.querySelector(".container")
myBtn.onclick=function(){
myContainer.scrollIntoView({
behavior: "smooth",
block: "center"
});
};
/*const click = document.querySelector(".back-btn");
const scrollBox = document.querySelector(".container");
click.addEventListener("click", function() {
scrollBox.scrollIntoView
({
behavior: "smooth",
block: "start"
});

});*/
const myNavbar=document.getElementById("nav");
const mainNavbar=document.querySelector("ul");
const myLi=document.querySelector("  li");
const myBody=document.querySelector("body")
const e = window.matchMedia("(max-width: 768px)")


function myFunction(){
         myNavbar.classList.toggle("show");
      
        
        
        
        
};


function myFunction2(){
          
        
   if(myNavbar.className=="show") {
       myBody.style.overflow = "hidden"; 
      
    }else{
        myBody.style.overflow="visible";
   }
        
    
    
};
 if(window.innerWidth >= 768){
    myBody.style.overflow="visible";

   };







 

  
    
