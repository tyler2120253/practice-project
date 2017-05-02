function sqaureroot(arr){
    var sum = 0
    for(var i = 0; i<arr.length;i++){
        
        sum += arr[i]*arr[i]
    }
    return sum
}
console.log(sqaureroot([1,2,3]));