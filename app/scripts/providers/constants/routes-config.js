/**
 * Routes Configuration
 */
angular
	.module('app')

	.constant('routesConfig', (function () {
		'use strict';

		var host='http://localhost';

		var rootRoutesConfig = {
			categorias: 'feeds/categorias.json',
			login:{
				novo:'',
				logar:''
			}
		};

		var routesConfig = {
			categories: {
				all: function () {
					return rootRoutesConfig.categorias;
				}
			},
			login:{
				novo:function(){
					return rootRoutesConfig.login.novo;
				},
				logar:function(){
					return rootRoutesConfig.login.logar;
				}
			}
		}

		return routesConfig;
	})());
