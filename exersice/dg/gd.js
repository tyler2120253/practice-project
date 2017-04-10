var box =document.querySelector(".box-dj");
box.addEventListener("click",function(){
    box.style.backgroundColor="red";
    box.style.borderRadius ="30%"
    
    }
);
box.addEventListener("mouseenter",function(){
    box.style.backgroundColor="yellow"
    box.style.borderRadius ="20%"
});
box.addEventListener("mouseleave",function(){
    box.style.backgroundColor="green"
    box.style.borderRadius ="40%";
});
window.addEventListener("keyup",function(event){
    console.log(event.which);
    if(event.which === 82){
        box.style.backgroundColor ="red"
    }else if(event.which == 65){
        box.style.backgroundColor = "blue"
}});
window.addEventListener("keydown",function(){
    box.style.backgroundColor="hotpink"
});
window.addEventListener("scroll",function(){
   window.style.backgroundColor="yellow"
});