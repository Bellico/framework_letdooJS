(function(){


	LetDooJS.Controller.HomeController = {

		indexAction : function ($scope){
			console.log("index");
			$scope.render("nn",{vv : "Frfffnky"});
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			//router.launch("mySecondUrl");
		}
	}




})()