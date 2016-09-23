/**
 * Categories service
 */
(function() {

angular
	.module('app')

	.service('categoriesService', [
		'$http',
		'routesConfig',
		function ($http, routesConfig) {
			'use strict';

			function _getCategories() {
				return $http.get(routesConfig.categories.all())
					.then(function(response) {
						return response.data.rows;
					});
			}

			return {
				getCategories: _getCategories
			};
		}
	]);

})();
