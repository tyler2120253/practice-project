var names = ["mazen", "wael", "maher", "dana", "methaq", "layal", "raaed", "tabarak", "dalal", "lady gaga"]
var atempetcall = function (name, dontcall, call, sendtext) {
    name = name.toLocaleLowerCase();
    if (name.split("a").length > 2) {
        sendtext(name)
    } else if (name.length % 2 !== 0) {
        dontcall(name);
    } else {
        call(name);

    }
}

var dancing = function (name) {
    console.log("did not call " + name)
}
var callForCoffe = function (name) {
    console.log("hey " + name + " iwent on")
}
var sendText = function (name) {
    console.log("hey ;)" + name + "you like to play some game")
}

for (var i = 0; i < names.length; i++) {
    atempetcall(names[i], dancing, callForCoffe, sendText)
}
