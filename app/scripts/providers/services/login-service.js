/**
 * Login service
 */
(function() {

angular
	.module('app').factory('loginService', function ($resource,routesConfig,$timeout) {

	var _resources = {
		login: $resource(routesConfig.login.novo(), {}, 
			{
				registro: {method: "POST"}
			}),
		logar:$resource(routesConfig.login.logar(), {}, 
			{
				login: {method: "POST"}
			})
	};

	return {
        registrar:function(login){
        	// return _resources.login.registro(JSON.stringify(login)).$promise;
        	return $timeout(function(){
        		console.log('registrado');
        		console.log(login);
        	},3000);
        },
        logar:function(login){
        	// return _resources.logar.login(JSON.stringify(login)).$promise;
        	return $timeout(function(){
        		console.log('logado');
        		console.log(login);
        	},3000);
        }
    };

});

})();