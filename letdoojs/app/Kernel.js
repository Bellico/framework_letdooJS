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

	/*	LetDooJS.System.import(["ContextMenu-Behaviors"],function(){
			var f = LetDooJS.System.get("ContextMenu");
			Node.prototype.contextMenu = function (){console.log("ok");}
		});*/

		LetDooJS.System.import (["Router","Routing-App","Process","Controller","Render","HandlingDOM", "Mustache-Lib"] , function () {
			var router = LetDooJS.System.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()