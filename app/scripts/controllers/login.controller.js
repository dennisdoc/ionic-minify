/**$cordovaToast
 * Login controller
 */
(function() {
	'use strict';
angular.module('app').controller('LoginController', LoginController);

	LoginController.$inject=['$scope','$ionicSideMenuDelegate','$rootScope','$state','$ionicHistory','$localstorage',
	'loginService','$cordovaToast'];

	function LoginController($scope,$ionicSideMenuDelegate,$rootScope, $state, $ionicHistory,
		$localstorage,loginService,$cordovaToast) {
		'use strict';

		$ionicSideMenuDelegate.canDragContent(false);

		$scope.forms={};

		var vm = this;
		vm.isProcessing=false;

		$scope.usuario={
			select:['item1']
		};

		$scope.lista={
			select:['item1','item2','item3']
		};

		vm.doLogin = doLogin;
		vm.register= register;

		function doLogin() {
			if(vm.isProcessing){
				return;
			}
			$scope.forms.loginForm.$setDirty();
			vm.isProcessing=true;
			if($scope.forms.loginForm.$valid){
				loginService.logar($scope.usuario).then(function(result){
					vm.isProcessing=false;
					$rootScope.logado=true;
					$localstorage.set('usuario',JSON.stringify($scope.usuario));
					$ionicHistory.nextViewOptions({
						disableBack: true
					});
					$cordovaToast.show('Bem vindo, ' + $scope.usuario.usuario,2000,'bottom');
					$state.go('app.categories', {}, {location: "replace", reload: true});
				},function(error){
					vm.isProcessing=false;
					$cordovaToast.show('Error -' + error.data.error,4000,'bottom');
				});
			}else{
				vm.isProcessing=false;
				$cordovaToast.show('Campos Não Preenchidos',4000,'bottom');
			}
		};

		function register(){
			if(vm.isProcessing){
				return;
			}
			$scope.forms.registerForm.$setDirty();
			vm.isProcessing=true;
			if($scope.forms.registerForm.$valid){
				if($scope.usuario.senha==$scope.usuario.confirmaSenha){
					loginService.registrar($scope.usuario).then(function(result){
						vm.isProcessing=false;
						$rootScope.logado=true;
						$localstorage.set('usuario',JSON.stringify($scope.usuario));
						$ionicHistory.nextViewOptions({
							disableBack: true
						});
						$cordovaToast.show('Bem vindo ' + $scope.usuario.nomeCompleto,2000,'bottom');
						$state.go('app.categories', {}, {location: "replace", reload: true});
					},function(error){
						vm.isProcessing=false;
						$cordovaToast.show('Error -' + error.data.error,4000,'bottom');
					});
				}else{
					vm.isProcessing=false;
					$cordovaToast.show('Senhas não Batem',4000,'bottom');
				}
			}else{
				vm.isProcessing=false;
				$cordovaToast.show('Campos Não Preenchidos',4000,'bottom');
			}
		};

	};

})();
