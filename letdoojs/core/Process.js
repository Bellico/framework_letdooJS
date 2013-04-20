(function(){

	LetDooJS.Core.Process = function (_R) {

		var firstAction = false ;
		var call = [];

		LetDooJS.Core.Process.prototype.runAction = function (_R) {

			if (!firstAction) loadBase();

			var nameController = _R.controller[0].toUpperCase() + _R.controller.substring(1) + "Controller";

			if(!call[nameController]){

				LetDooJS.System.import([nameController+"-Controller"] , function () {

					var controllerCalled = LetDooJS.System.getController(nameController);
					controllerCalled.bindController(nameController, LetDooJS.Controller[nameController]);

					require = ( controllerCalled[nameController]["require"] ) ? controllerCalled[nameController]["require"] : [] ;
					LetDooJS.System.import(require, function () {
						if(controllerCalled[nameController]["init"]) controllerCalled[nameController]["init"](controllerCalled);
						callAction(controllerCalled[nameController], _R);
					})
				})
				call[nameController] = true;
			}else{
				var controllerCalled = LetDooJS.System.getController(nameController);
				callAction(controllerCalled[nameController], _R);
			}
		}

		function callAction(controller, _R) {
			var actionCalled = _R.action +"Action" ;
			history.pushState( _R , _R.controller + "-" + actionCalled, LetDooJS.System.getWebPath() + _R.pattern);
			controller[actionCalled](controller);
		}

		function loadBase() {
			var render = LetDooJS.System.get("Render");
			render.displayView("layout.html", null, function() {
				LetDooJS.System.get("Profiler").display();
			});
			firstAction = true ;
		}

	}

})()