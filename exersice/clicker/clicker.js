var btn = document.querySelector("#clickme");
var output = document.querySelector(".doit")
var counter = 0;

var handleClickMe = function (fewClicks, toManyClicks) {
    if (counter < 10) {
        fewClicks();

    } else {
        toManyClicks();
    }
}

function askForMoreClicks() {
    output.innerHTML="click me more"+ counter;
}
function stopClickingMe(){
    output.innerHTML="tomanyclicks"+ counter;
    
}
btn.addEventListener("click",function(){
    counter++;
    handleClickMe(askForMoreClicks,stopClickingMe);
});