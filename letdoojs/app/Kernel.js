(function(){

	LetDooJS.App = {};
	LetDooJS.Core = {};
	LetDooJS.Controller = {};
	LetDooJS.Components = {};
	LetDooJS.Behaviors = {};
	LetDooJS.Helpers = {};
	LetDooJS.Utils = {};

	LetDooJS.App.Kernel = function (){

		LetDooJS.System.setEnvironnement("prod");

		LetDooJS.System.load (["Config-App","Profiler"],function(){
			LetDooJS.System.get("Profiler");
			LetDooJS.System.importCss(LetDooJS.Config.css_to_import);
			LetDooJS.System.importCss(LetDooJS.Config.your_css, true);
		});

		LetDooJS.System.loadCore (function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		});
	};

})();