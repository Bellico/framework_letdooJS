(function(){


	LetDooJS.Controller.HomeController = {

		require : [
			"ContextMenu-Behaviors"

		],

		init : function (_this){
			_this.mdr = "Franck marinou"
		},

		indexAction : function (_this){
			console.log("index");

			console.log(_this.mdr);


			_this.render("homeTemplate",{ok : "Ok!"});


		},

		accAction : function (_this){
			console.log("acc");
		/*


			var op = 1 ;
			function ok (){
				a.style.opacity = op ;
				op =op-0.01;
			}*/



			//setInterval(ok,50);

		}
	};

})();