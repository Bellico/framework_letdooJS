define(["Controller","jquery"] , function (Controller,$){

	Controller.defineController ('autre' , {
		testAction : function () {
			$("body").html("coucou");
		}
	})


})