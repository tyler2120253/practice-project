function paperThick(distance) {
    var fold = 0;
    var newThick = 0.0001;
    for (var i = 0; newThick < distance; i++) {
        newThick = newThick * 2;
        fold++;
    }
    if (distance <= 0) {
        return null
    } else {
        return fold
    }
}

console.log(paperThick(-1886684))
