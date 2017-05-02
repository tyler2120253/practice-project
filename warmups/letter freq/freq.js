
function fre(str) {
    var str = str.toLowerCase();
    var arry = {};
    for (var i = 0; i < str.length; i++) {
        var temp = str.charAt(i)
        if (arry[temp] == undefined) {
            arry[temp] = 1
        }else {
            arry[temp]++;
        }

    }
    console.log(arry);
    


}
fre("mAzazen")
