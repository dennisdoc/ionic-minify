/**
 * Application controller
 */
(function() {
angular
	.module('app')

	.controller('ApplicationController', [
		'$scope',
		'$ionicModal',
		'$state',
		function ($scope, $ionicModal, $state) {
			'use strict';

			var vm = this;

			vm.showMenu = true;
			$scope.$on('hideMenu', function() {
				vm.showMenu = false;
			});

			$scope.$on('$stateChangeStart', function () {
				vm.showMenu = true;
			});

			function showModal(modal) {
				$scope.modal = modal;
				// Open the intro modal
				$scope.modal.show();
			}

			// Triggered in the intro modal to open it
			vm.openModal = openModal;

			// Triggered in the intro modal to close it
			vm.closeModal = closeModal;

			function openModal() {
				// Create the intro modal that we will use later
				$ionicModal.fromTemplateUrl('templates/modal.html', {
					scope: $scope
				}).then(showModal);
			}

			function closeModal() {
				$scope.modal.hide();
			}

		}
	]);

})();
