(function(){

	LetDooJS.Core.Process = function (_R) {


		LetDooJS.Core.Process.prototype.runAction = function (_R) {
			var nameController = _R.controller[0].toUpperCase() + _R.controller.substring(1) + "Controller";

			LetDooJS.System.import([nameController] , function () {
				var controllerCalled = LetDooJS.System.getController(nameController);
				controllerCalled.bindController(nameController, LetDooJS.Controller[nameController]);

				var actionCalled = _R.action +"Action" ;
				history.pushState( _R , _R.controller + "-" + actionCalled, LetDooJS.System.getWebPath() + _R.pattern);

				if(controllerCalled[nameController]["init"])
					controllerCalled[nameController]["init"](controllerCalled);

				controllerCalled[nameController][actionCalled](controllerCalled);

				LetDooJS.System.get("Debugger").display();
			})
		}

	}

})()