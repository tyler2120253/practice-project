var formobj = document.getElementById("formobj")
document.getElementById("click").addEventListener("click", function () {
    var arr = [];

    for (var i = 0; i < formobj.diet.length; i++) {
        if (formobj.diet[i].checked === true) {
            arr.push(formobj.diet[i].value)
        }
    }
    


    alert("first name: " + formobj.firstname.value + "\n last name: " + formobj.lastname.value + "\n age:" + formobj.number.value + "\n location:" + formobj.location.value +"\n diet"+arr)
})
