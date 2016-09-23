/**
 * Categories controller
 */
(function() {
angular
	.module('app')

	.controller('CategoriesController', [
		'$scope',
		'categoriesService',
		'$ionicFilterBar',
		'$state',
		function ($scope,categoriesSvc,$ionicFilterBar,$state) {
			'use strict';

			var vm = this;
			vm.items=[];

			vm.showFilterBar =showFilterBar;

			$scope.$on('$ionicView.afterEnter',afterEnter);

			$scope.getNumber = getNumber;

			function getNumber(num) {
			    return new Array(num);   
			}

			function afterEnter(){
				categoriesSvc.getCategories().then(setCategories);
			};

			function setCategories(categories) {
				vm.categories = categories;
			}

			function showFilterBar() {
		      var filterBarInstance = $ionicFilterBar.show({
		        items: vm.categories,
		        update: function (filteredItems) {
		          vm.categories = filteredItems;
		        },
		        filterProperties: 'descricao'
		      });
		    };

		}
	]);

})();
