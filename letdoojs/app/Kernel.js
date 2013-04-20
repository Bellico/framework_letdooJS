(function(){

	LetDooJS.App = {};
	LetDooJS.Core = {};
	LetDooJS.Controller = {};
	LetDooJS.Components = {};
	LetDooJS.Behaviors = {};
	LetDooJS.Helpers = {};
	LetDooJS.Utils = {};

	LetDooJS.App.Kernel = function (){
		LetDooJS.System.import (["Config-App","Profiler"],function(){
			LetDooJS.System.get("Profiler");
			LetDooJS.System.setEnvironnement(LetDooJS.Config.env);
			LetDooJS.System.importCss(LetDooJS.Config.css_to_import);
			LetDooJS.System.importCss(LetDooJS.Config.your_css, true);
		})

		LetDooJS.System.loadCore (function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()