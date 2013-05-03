(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"
		],

		indexAction : function ($scope){
			console.log("index");



			$scope.render("homeTemplate",{ok : "Ok!"});


		},

		accAction : function ($){
			console.log("acc");
			var a = $.DOM.append({
				style : {
				position : "absolute",
				background : "red" ,
				top : 0,
				left : 0,
				width: "500px",
				height: "500px",
				"z-index":100
			}})


			var op = 1 ;
			function ok (){
				a.style.opacity = op ;
				op =op-0.01;
			}

			//setInterval(ok,50);

		}
	};

})();