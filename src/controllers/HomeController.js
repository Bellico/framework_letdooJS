(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"
		],

		indexAction : function ($scope){
			console.log("index");



			$scope.render("homeTemplate",{ok : "Ok!"});


		},

		accAction : function (){
			console.log("acc");

		}
	};

})();