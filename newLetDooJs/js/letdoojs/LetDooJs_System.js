LetDooJS.Core.System = function () {

	var DOMhead = document.getElementsByTagName("head")[0];
	var files_System = {
		Router : "core/Router.js",
		Environnement : "core/Environnement.js",
		Routing : "app/Routing.js",
	}
	var scripts_imported = {};

	LetDooJS.Core.System.prototype.import = function (scripts, callback) {
		var scriptToImport = [];
		for (var name in scripts){
			if(typeof scripts_imported[scripts[name]] == "undefined") {
				scripts_imported[scripts[name]] = false ;
				scriptToImport.push(scripts[name]);
			};
		}
		if(scriptToImport.length >= 1) importRecursive(scriptToImport, 0, callback);
	}

	function addScriptToDom (name, func) {
		//test name

		var script = document.createElement("script");
		var src = "http://localhost/JavaScript/LetDooJs/newLetDooJs/js/letdoojs/" + files_System[name];
		script.src = src;
		script.addEventListener('load', function () {
			scripts_imported[name] = true ;
			func();
		},false);
		DOMhead.appendChild(script);
	}

	function importRecursive (scripts, i, callback){
		addScriptToDom (scripts[i], function () {
			i++;
			if(scripts[i]) importRecursive(scripts,i, callback)
			else callback();
		})
	}
}
