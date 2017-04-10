var cheep =document.getElementById("cheep-cheeps-amount")
var gombas=document.getElementById("Goombas-amount")
var bombas=document.getElementById("Bob-ombs-amount")
var total=document.getElementById("sum");
var dit=document.querySelector(".dit")

dit.addEventListener("click",function(){
    var cheepresult=document.getElementById("cheep-cheeps-price");
    cheepresult.value=cheep.value*5
    var gombasresult=document.getElementById("Goombas-price")
    gombasresult.value=gombas.value*7
    var bombasresult=document.getElementById("Bob-ombs-price")
    bombasresult.value=bombas.value*11
    total.value=Number(bombasresult.value)+Number(gombasresult.value)+Number(cheepresult.value)
})
