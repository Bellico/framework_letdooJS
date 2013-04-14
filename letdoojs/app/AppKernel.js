(function(){

	LetDooJS.App = LetDooJS.App || {};
	LetDooJS.Core = LetDooJS.Core || {};
	LetDooJS.Controller = LetDooJS.Controller || {};
	LetDooJS.Utils = LetDooJS.Utils || {};

	LetDooJS.App.Kernel = function (){
		LetDooJS.System.import (["Debugger"],function(){
			var debug = LetDooJS.System.get("Debugger", "dev");
		})
		LetDooJS.System.import (["Router","Routing","Config","Process","Controller","Render","HandlingDOM", "Mustache"] , function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()