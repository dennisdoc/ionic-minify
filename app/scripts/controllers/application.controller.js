/**
 * Application controller
 */
(function() {
angular.module('app').controller('ApplicationController',ApplicationController); 

	ApplicationController.$inject=['$scope','$ionicModal','$state'];

	function ApplicationController($scope, $ionicModal, $state) {
			'use strict';

			var vm = this;

			vm.showMenu = true;
			vm.openModal = openModal;
			vm.closeModal = closeModal;

			$scope.$on('hideMenu',hideMenu);
			$scope.$on('$stateChangeStart',stateChangeStart);
			
			function hideMenu() {
				vm.showMenu = false;
			};

			function stateChangeStart() {
				vm.showMenu = true;
			};

			function showModal(modal) {
				$scope.modal = modal;
				// Open the intro modal
				$scope.modal.show();
			};

			function openModal() {
				// Create the intro modal that we will use later
				$ionicModal.fromTemplateUrl('templates/modal.html', {
					scope: $scope
				}).then(showModal);
			};

			function closeModal() {
				$scope.modal.hide();
			};

		};

})();
