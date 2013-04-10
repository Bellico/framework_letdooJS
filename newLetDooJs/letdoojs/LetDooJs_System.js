LetDooJS.Core.System = function (lib) {

	var DOMhead = LetDooJS.App.Env.getDOMHead();

		files_System = {
			Kernel : "app/AppKernel.js",
			Router : "core/Router.js",
			Process : "core/Process.js",
			Environnement : "core/Environnement.js",
			Routing : "app/Routing.js",
			Config : "app/Config.js",
			Functions : "utils/Functions.js",
			Controller : "core/Controller.js"
		},

		scripts_imported = {},

	LetDooJS.Core.System.prototype.import = function (files, callback) {
		var scriptToImport = [];

		for (var name in files){
			_F = files[name];
			if(typeof scripts_imported[_F] == "undefined") {
				scripts_imported[_F] = false ;
				scriptToImport.push(_F);
			};
		}

		if(scriptToImport.length >= 1) importRecursive(scriptToImport, 0, callback);
	}

	function addScriptToDom (name, func) {
		//test name

		var script = document.createElement("script");
		script.src = getSrc(name);
		script.addEventListener('load', function () {
			scripts_imported[name] = true ;
			func();
		},false);
		console.log(name +" importé");
		DOMhead.appendChild(script);
	}

	function importRecursive (scripts, i, callback){
		addScriptToDom (scripts[i], function () {
			i++;
			if(scripts[i]) importRecursive(scripts,i, callback)
			else callback();
		})
	}

	function getSrc(name){
		var path = LetDooJS.App.Env.getPath();
		if(files_System[name]) return path + "letdoojs/" + files_System[name];
		if(name.substr(-10) == "Controller") return path + "src/controllers/" + name + ".js";
	}

}

window.onload = function(){
	LetDooJS.App.System= new LetDooJS.Core.System();
	LetDooJS.App.System.import (["Kernel"] , function () {
		new LetDooJS.App.Kernel();
	})

}