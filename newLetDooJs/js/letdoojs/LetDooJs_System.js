LetDooJS.Core.System = function () {

	var DOMhead = document.getElementsByTagName("head")[0];
	var files_System = {
		Router : "core/Router.js"
	}
	var scripts_imported = {};

	LetDooJS.Core.System.prototype.import = function (scripts, callback) {
		for (var i in scripts){
			scripts_imported[scripts[i]] = false ;
		}

		var is_import = true ;
		for (var i in scripts){
			addScriptToDom (scripts[i], function (){
				for (var i in scripts_imported){
					if (!scripts_imported.scripts[i]) is_import = false;
					if (is_import) callback();
				}
			})
		}

	}

	function addScriptToDom (name, func) {
		if(!name) return false;
		var script = document.createElement("script");
		var src = "http://localhost/JavaScript/LetDooJs/" + files_System.name;
		console.log(src);
		script.src = src; script.async = true;
		script.addEventListener('load', function () {
			scripts_imported.name = true ;
			func();
		},false);
		DOMhead.appendChild(script);
	}
}
