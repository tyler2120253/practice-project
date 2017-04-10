function earth(weather,temperature){
    if(weather ==="rainy" && temperature > 15){
      console.log("bring umberella");  
    }else if(weather ==="rainy" && temperature < 15){
        console.log("bring umberlla, jacket")
    }else if(weather ==="sunny" && temperature > 15){
        console.log("wear a tishirt")
    }
}
earth("rainy",16)
earth("sunny",18)
earth('rainy',33)