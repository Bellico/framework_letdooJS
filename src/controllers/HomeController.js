(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"
		],

		indexAction : function ($scope){
			console.log("index");



			//$scope.render("nn",{vv : "Ok!"});
			document.contextMenu();
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			var x = LetDooJS.System.get("XMLHttpRequest");
			console.log(x);
			//router.launch("mySecondUrl");
		}
	}

})()