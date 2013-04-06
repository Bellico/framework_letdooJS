define(["Controller"] , function(Controller){

	var Process = function (P) {

		var nameController = P.controller[0].toUpperCase() + P.controller.substring(1) + "Controller";

		require (["src/controllers/" + nameController] , function () {

			var controllerCalled = Controller.getController(P.controller);
			var actionCalled = P.action +"Action" ;
			controllerCalled[actionCalled]();
			//history.pushState({} , P.controller + "-" + actionCalled, P.pattern);
		});
	}

	return Process;
})