var data = [];
var showlist = function () {
    document.getElementById("output").innerHTML ="";
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        var btn =document.createElement("button")
        btn.setAttribute("id",i)
        btn.innerHTML = "x"
        var txt = document.createTextNode(data[i]);
        li.appendChild(txt);
        li.appendChild(btn)
        btn.addEventListener("click",function(){
            data.splice(this.id,1)
            localStorage.setItem("todoitems",data)
            showlist();
        })
        
        document.getElementById("output").appendChild(li);
    }
}
document.getElementById("submit").addEventListener("click", function () {
    var inputtxt = document.getElementById("todoItem").value;
    document.getElementById("todoItem").value ="";
    data.push(inputtxt);
    localStorage.setItem("todoitems",data)
    showlist();
});
if(localStorage.getItem("todoitems")){
    var data =localStorage.getItem("todoitems").split(",");
    
}else {
    var data= []
}
showlist();
