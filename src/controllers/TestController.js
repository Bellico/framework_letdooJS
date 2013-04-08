define(["Controller"] , function (Controller){


	Controller.defineController ('test' , {

		testAction : function () {


			console.log("testaction");

			Controller.render("test.html" , {
				test : "ok"
			});

		}

	})


})