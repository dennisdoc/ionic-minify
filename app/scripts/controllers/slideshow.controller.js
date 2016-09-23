/**
 * Slideshow controller
 */
(function() {
angular.module('app').controller('SlideshowController', SlideshowController);

	SlideshowController.$inject=['$ionicHistory','$window','$state','$scope','$ionicPlatform'];

	function SlideshowController($ionicHistory, $window, $state, $scope, $ionicPlatform) {
		'use strict';

		var vm = this;

		vm.skipIntro = skipIntro;

		function skipIntro() {
			$window.localStorage.setItem('showIntro', false);
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('app.categories', {}, {location: "replace", reload: true});
		}

		$ionicPlatform.ready(function() {
			if ($window.localStorage.getItem('showIntro') !== 'true' && $state.params.forceShow === 'false') {
				skipIntro();
			} else if ($state.params.forceShow === 'false') {
				$scope.$emit('hideMenu', true);
			}
		});
	}

})();
