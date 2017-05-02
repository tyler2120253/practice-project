function palindromefinder(maz){
    var phrase =maz.split("");
    var change =phrase.reverse();
    var ph1=change.join("");
    console.log(ph1)
    if(ph1 == maz){
      console.log(true)
    }else if(ph1 != maz){
        console.log(false)
    }
}
palindromefinder("noon")
// higher order function
// 