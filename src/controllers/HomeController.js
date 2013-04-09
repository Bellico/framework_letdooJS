define(["Controller"] , function (Controller){


	Controller.defineController ('HomeController' , {

		indexAction : function () {




			Controller.render("index.html" , {
				ok : "ok"
			});

		}

	})


})