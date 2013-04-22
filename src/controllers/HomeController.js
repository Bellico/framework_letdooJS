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

			var r = new FileReader();

			 r.onloadend = function(e) {
		          console.log(e);
		          console.log(e.target.result);
		       };

		        r.onerror = function(e) {
		          console.log(e);

		       };

		       r.error = function(e) {
		          console.log(e);

		       };

		       console.log(r);
			r.readAsText("ok");
		}
	}

})()