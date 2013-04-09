define(["Controller"] , function (Controller){

	Controller.defineController ('AutreController' , {
		testAction : function () {
			Controller.render("test.html" , {
				ok : "test"
			});

		}
	})


})