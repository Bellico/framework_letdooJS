define(["Controller"] , function(Controller){

	var Process = function (_R) {

		var nameController = _R.controller[0].toUpperCase() + _R.controller.substring(1) + "Controller";

		require (["src/controllers/" + nameController] , function () {

			var controllerCalled = Controller.getController(_R.controller);
			var actionCalled = _R.action +"Action" ;
			history.pushState( _R , _R.controller + "-" + actionCalled, Environnement.getWebPath() + _R.pattern);
			controllerCalled[actionCalled]();

		});
	}

	return Process;
})