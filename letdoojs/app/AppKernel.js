(function(){

	LetDooJS.App = {};
	LetDooJS.Core = {};
	LetDooJS.Controller = {};
	LetDooJS.Behaviors = {};
	LetDooJS.Helpers = {};
	LetDooJS.Utils = {};

	LetDooJS.App.Kernel = function (){
		LetDooJS.System.import (["Debugger"],function(){
			var debug = LetDooJS.System.get("Debugger", "dev");
		})

		LetDooJS.System.importCss(["helpers"]);
		LetDooJS.System.import(["GlobalBehaviors","ContextMenu"],function(){
			LetDooJS.System.get("GlobalBehaviors");
		});

		LetDooJS.System.import (["Router","Routing","Config","Process","Controller","Render","HandlingDOM", "Mustache"] , function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()