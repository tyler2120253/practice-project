
/*var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();
*/
$.get('http://pokeapi.co/api/v1/pokedex/1/', function(data){
   $('#pokemon').append('name: ' + data.name)
   for(var i = 0 ; i < data.pokemon.length ; i++){
    $('#pokemon').append("<li>" + data.pokemon[i].name + "</li>")
   }
   
 })
 

