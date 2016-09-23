/**
 * Categories service
 */
(function() {
	'use strict';
angular.module('app').service('categoriesService',categoriesService); 

	categoriesService.$inject=['$http','routesConfig'];
		
	function categoriesService($http, routesConfig) {
		'use strict';

		function _getCategories() {
			return $http.get(routesConfig.categories.all())
				.then(function(response) {
					return response.data.rows;
				});
		};

		return {
			getCategories: _getCategories
		};
	};

})();
