var string = "helO world";
var vowel = ["a", "e", "i", "o", "u"];

var remove = function name() {
    string = string.toLowerCase();
    for ( var i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;           
                secondLoop--;  
            }

        }
    }
}

remove();
console.log(string)