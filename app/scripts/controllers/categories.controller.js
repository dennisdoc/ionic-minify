/**
 * Categories controller
 */
(function() {
	'use strict';
angular.module('app').controller('CategoriesController',CategoriesController);

	CategoriesController.$inject=['$scope','categoriesService','$ionicFilterBar','$state'];

	function CategoriesController($scope,categoriesSvc,$ionicFilterBar,$state) {
		'use strict';

		var vm = this;
		vm.items=[];

		vm.showFilterBar =showFilterBar;

		$scope.$on('$ionicView.afterEnter',afterEnter);

		$scope.getNumber = getNumber;

		function getNumber(num) {
		    return new Array(num);   
		};

		function afterEnter(){
			categoriesSvc.getCategories().then(setCategories);
		};

		function setCategories(categories) {
			vm.categories = categories;
		};

		function showFilterBar() {
	      var filterBarInstance = $ionicFilterBar.show({
	        items: vm.categories,
	        update: function (filteredItems) {
	          vm.categories = filteredItems;
	        },
	        filterProperties: 'descricao'
	      });
	    };

	};

})();
