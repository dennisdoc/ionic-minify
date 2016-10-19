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
				openModal($scope.modal);
			};

			function openModal(modal){
				modal.show();
			};

			function openModal() {
				if($scope.modal==undefined){
					$ionicModal.fromTemplateUrl('templates/modal.html', {
						scope: $scope
					}).then(showModal);
				}else{
					openModal($scope.modal);
				}
			};

			function closeModal() {
				$scope.modal.hide();
			};

		};

})();
