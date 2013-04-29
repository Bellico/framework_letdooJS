(function(){

	LetDooJS.App = {};
	LetDooJS.Core = {};
	LetDooJS.Controller = {};
	LetDooJS.Components = {};
	LetDooJS.Behaviors = {};
	LetDooJS.Helpers = {};
	LetDooJS.Utils = {};

	LetDooJS.App.Kernel = function (){

		LetDooJS.System.load (["Config-App","Profiler"],function(){
			LetDooJS.System.get("Profiler");
			LetDooJS.System.importCss(LetDooJS.App.Config.your_css, true);
			LetDooJS.System.importCss(LetDooJS.App.Config.css_to_import);
		});

		LetDooJS.System.loadCore (function () {
			var routing = LetDooJS.System.get("Routing");
			var router = LetDooJS.System.get("Router",routing);
			if(routing["HOME"]){
				router.launch("HOME");
			}
			router.launch();
		});
	};

})();