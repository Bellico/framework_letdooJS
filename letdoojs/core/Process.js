(function(){

	LetDooJS.Core.Process = function (_R) {

		var call = [];
		//var system de queue d'action

		LetDooJS.Core.Process.prototype.runAction = function (_R) {

			var nameController = _R.controller[0].toUpperCase() + _R.controller.substring(1) + "Controller";

			if(!call[nameController]){
				LetDooJS.System.import([nameController+"-Controller"] , function () {

					var controllerCalled = LetDooJS.System.getController(nameController);
					controllerCalled.bindController(nameController, LetDooJS.Controller[nameController]);

					require = ( controllerCalled[nameController]["require"] ) ? controllerCalled[nameController]["require"] : [] ;
					LetDooJS.System.import(require, function () {
						if(controllerCalled[nameController]["init"]) controllerCalled[nameController]["init"](controllerCalled);
						callAction(controllerCalled, nameController, _R);
					})
				})
				call[nameController] = true;
			}else{
				var controllerCalled = LetDooJS.System.getController(nameController);
				callAction(controllerCalled, nameController, _R);
			}
		}

		function callAction(controller, nameController, _R) {
			var actionCalled = _R.action +"Action" ;
			history.pushState( _R , _R.controller + "-" + actionCalled, LetDooJS.System.getWebPath() + _R.pattern);
			controller[nameController][actionCalled](controller);
		}

	}

})()