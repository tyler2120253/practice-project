var app =angular.module("mySvr",[]);
app.service("toserve",function($http){
	this.getWebsite = function(){
		return $http.get(" https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e2393062acb7463cbfd1f12c0f10aba8")
	}
})