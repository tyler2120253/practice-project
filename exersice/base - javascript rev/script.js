


























/*var data =[];
var showList =function(){
    document.getElementById("output").innerHTML ="";
    for (var i=0;i<data.length;i++){
        var li =document.createElement("li");
        var btn=document.createElement("button")
        btn.setAttribute("id",i)
        btn.innerHTML ="likes";
        var txt =document.createTextNode(data[i].text);
        var likelist=document.createTextNode("likes: " + data[i].likes);
        li.appendChild(likelist);
        li.appendChild(txt);
        li.appendChild(btn);
        btn.addEventListener("click",function(){
            data[this.id].likes+=1;
            showList();
        })
        document.getElementById("output").appendChild(li)
    }
    
}


document.getElementById("submit").addEventListener("click", function () {
    var btn =document.getElementById("submit").value;
    var newcommet ={
        text: btn,
        likes: 0
    }
    
    data.push(newcommet);
    showList();



})
*/