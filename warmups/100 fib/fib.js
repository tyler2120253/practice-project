var sumFibs = function sumFibs(x) {
    var n = [0, 1];
    for(var i= 0 ;i< x; i++){
       var num = n[i]+n[i+1];
        n.push(num)
    }
    return n;
    
}
console.log(sumFibs(5));
   