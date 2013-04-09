define(["Application", "jquery"] , function(App, $){

	var Listenner = {

		listen : function (element) {

				$("[data-route]").click(function(){

					var nameRoute = $(this).attr("data-route");
					App.router.launch(nameRoute);
				})


		}
	}

	return Listenner;
})