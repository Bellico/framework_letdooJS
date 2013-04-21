(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"
		],

		indexAction : function ($scope){
			console.log("index");



			$scope.render("homeTemplate.html",{ok : "Ok!"});


		}
	}

})()