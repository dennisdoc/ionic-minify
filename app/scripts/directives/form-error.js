(function() {
angular
  	.module('app')
  	.directive('form-validation', function() {
	    return {
	        restrict: 'A',
	        require: 'ngModel', // require the ngModel controller so you can plug into validation
			link: function (scope, element, attrs, ctrl) 
			{
	            //ctrl will be the ngModel instance
	            
	            function validate(value) {
	                // validate the value here, return true or false
	                return value == 'test' || value == null;
	            }
	            // validate when value is going from DOM to model
	            ctrl.$parsers.unshift(function(value) {
	                var valid = validate(value);
	                
	                ctrl.$setValidity('form-validation', valid);
	             
	                return valid ? value : undefined;
	            });
	            
	            // validate when value is going from model to DOM
	            ctrl.$formatters.unshift(function(value) {
	                
	                ctrl.$setValidity('form-validation', validate(value));
	                return value;
	            });
	        }
	    };
  	});
})();