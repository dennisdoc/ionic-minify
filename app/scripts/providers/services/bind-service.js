/**
 * Servicos service
 */
(function() {
	'use strict';
angular.module('app').service('BindService',BindService); 
	
	BindService.$inject=[];

	function BindService() {
	'use strict';

		var vm=this;
		vm.servicoSelecionado={};
		vm.itens=[];
	};

})();