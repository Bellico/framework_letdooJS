(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"
		],

		indexAction : function ($scope){
			console.log("index");



			$scope.render("index.html",{vv : "Ok!"});
			//document.contextMenu();
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);



			//router.launch("mySecondUrl");
		}
	}

})()