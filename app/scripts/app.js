/**
 * SurfIT app
 */
angular.module('app', ['ionic', 'ngCordova','ngStorage',
	'ionic.rating','jett.ionic.filter.bar','ngResource','ionic-native-transitions',
	'ionicProcessSpinner','ionic-timepicker'])

.run([
	'$ionicPlatform',
	'$window',
	'$cordovaStatusbar',
	function($ionicPlatform, $window,$cordovaStatusbar) {
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
				$cordovaStatusbar.overlaysWebView(true);
				$cordovaStatusbar.styleHex('#244367');
			}

			window.localStorage.setItem('showIntro', true);

			var notificationOpenedCallback = function() {};
			// Update with your OneSignal AppId and googleProjectNumber before running.
			if (window.plugins && window.plugins.OneSignal) {
				window.plugins.OneSignal.init('bff790de-6c7b-4550-9202-0acebb924b28', {googleProjectNumber: '295165547597'}, notificationOpenedCallback);
			}
		});
	}
])

.config(function($ionicNativeTransitionsProvider){
    $ionicNativeTransitionsProvider.setDefaultOptions({
        duration: 200, // in milliseconds (ms), default 400,
        slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
        iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
        androiddelay: -1, // same as above but for Android, default -1
        winphonedelay: -1, // same as above but for Windows Phone, default -1,
        fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
        triggerTransitionEvent: '$ionicView.afterEnter', // internal ionic-native-transitions option
        backInOppositeDirection: false // Takes over default back transition and state back transition to use the opposite direction transition to go back
    });
    $ionicNativeTransitionsProvider.setDefaultTransition({
        type: 'slide',
        direction: 'left'
    });
    $ionicNativeTransitionsProvider.setDefaultBackTransition({
        type: 'slide',
        direction: 'right'
    });
})

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.run(['$rootScope','$localstorage',function($rootScope,$localstorage){
	$rootScope.logado=$localstorage.get('usuario')!=null;
}])

.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$ionicConfigProvider',
	function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.tabs.position('top');
		$ionicConfigProvider.tabs.style('standard');

		$stateProvider
			.state('app', {
				url: '/app',
				abstract: true,
				templateUrl: 'templates/menu.html',
				controller: 'ApplicationController as appCtrl'
			})
			.state('app.categories', {
				url: '/categories',
				views: {
					'menuContent': {
						templateUrl: 'templates/categories.html',
						controller: 'CategoriesController as categoriesCtrl'
					}
				}
			})
			.state('app.login', {
				url: '/login',
				nativeTransitions: {
			        "type": "flip",
			        "direction": "up"
			    },
				views: {
					'menuContent': {
						controller: 'LoginController as loginCtrl',
						templateUrl: 'templates/login.html'
					}
				}
			})
			.state('app.terms', {
				url: '/terms',
				views: {
					'menuContent': {
						templateUrl: 'templates/terms.html'
					}
				}
			})
			.state('app.help', {
				url: '/help',
				views: {
					'menuContent': {
						templateUrl: 'templates/help.html'
					}
				}
			})
			.state('app.slideshow', {
				url: '/slideshow/:forceShow',
				views: {
					'menuContent': {
						templateUrl: 'templates/slideshow.html',
						controller: 'SlideshowController as slideshowCtrl'
					}
				}
			})
			.state('app.register', {
				url: '/register',
				nativeTransitions: {
			        "type": "flip",
			        "direction": "up"
			    },
				views: {
					'menuContent': {
						controller: 'LoginController as loginCtrl',
						templateUrl: 'templates/register.html'
					}
				}
			});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise(function($injector, $location,$rootScope) {
			var state = $injector.get('$state');
			var rootScope = $injector.get('$rootScope');
			if(rootScope.logado){
				state.go('app.categories');
			}else{
				state.go('app.register', {'forceShow': false});
			}
			return $location.path();
		});
	}
]);
