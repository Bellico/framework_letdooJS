(function(){

	LetDooJS.App = {};
	LetDooJS.Core = {};
	LetDooJS.Controller = {};
	LetDooJS.Behaviors = {};
	LetDooJS.Helpers = {};
	LetDooJS.Utils = {};

	LetDooJS.App.Kernel = function (){
		LetDooJS.System.import (["Config-App","Debugger"],function(){
			var debug = LetDooJS.System.get("Debugger", "dev");
			LetDooJS.System.importCss(LetDooJS.Config.css_to_import);
		})

		LetDooJS.System.import (["Router","Routing-App","Process","Controller","Render","HandlingDOM","XMLHttpRequest", "Mustache-Lib"] , function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()