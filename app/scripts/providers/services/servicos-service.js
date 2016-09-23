/**
 * Servicos service
 */
(function() {
	'use strict';
angular.module('app').factory('ServicoService',ServicoService); 
	
	ServicoService.$inject=['$resource','routesConfig'];

	function ServicoService($resource,routesConfig) {

		var _resources = {
			servicos: $resource(routesConfig.servicos.salvar(), {}, 
				{
					salvar: {method: "POST"}
				}),
			findByCategoria:$resource(routesConfig.servicos.findByCategoria(), {},
				{
					find:{method: "GET",isArray:true}
				})
		};

		return {
			salvar:function($object){
				return _resources.servicos.salvar($object).$promise;
			},
			findByCategoria:function($categoria){
				var object={id:$categoria.id};
				return _resources.findByCategoria.find(object).$promise;
			}
		};

	};

})();