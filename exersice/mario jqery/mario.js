$(".dit").on("click",function(){
    var cautobj = $("#cheep-cheeps-price").val();
    var pricobg =  cautobj * 5;
    $("#cheep-cheeps-amount").val(pricobg);
    var n1 = $("#Bob-ombs-price").val();
    var n2 =  n1 * 11;
    $("#Bob-ombs-amount").val(n2);
     var n3 = $("#Goombas-price").val();
    var n4 =  n3 * 7;
    $("#Goombas-amount").val(n4);
    
    $("#sum").val(pricobg+n2+n4)
        
    
});
var coinSound = new Audio("Mario-coin-sound.mp3")

$(document).on("click",function(){
    $("body").toggleClass("box3")
    coinSound.play();
})


    

    