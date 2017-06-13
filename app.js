
var appInfoTech = angular.module('app',[]);

appInfoTech.controller('appController',function($scope,$http){
	// obtenemos de la url http los datos
	$http.get('https://jsonplaceholder.typicode.com/users').success(function (data){
		// almacenamos los datos para mostrarlos en la página index.html
		$scope.datos = data;
	});

	
})


// EDINSON HUAYNA
