LetDooJS.Core.Process = function (_R) {

	var nameController = _R.controller[0].toUpperCase() + _R.controller.substring(1) + "Controller";

	LetDooJS.App.System.import(["Controller", nameController] , function () {
		var controllerCalled = LetDooJS.Core.Controller.getController(nameController);
		var actionCalled = _R.action +"Action" ;
		history.pushState( _R , _R.controller + "-" + actionCalled, LetDooJS.App.Env.getWebPath() + _R.pattern);
		controllerCalled[actionCalled]();
	})

}