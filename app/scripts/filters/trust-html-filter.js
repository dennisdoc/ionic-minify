/**
 * trustHtml filter
 */	
(function() {
angular
	.module('app')

	.filter('trustHtml', [
		'$sce',
		function ($sce) {
			'use strict';

			return function (input) {
				return $sce.trustAsHtml(input);
			};
		}
	]);
})();