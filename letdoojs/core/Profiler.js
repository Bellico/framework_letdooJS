(function(){

	LetDooJS.Core.Profiler = function() {

		var script = [];
		var startApp = new Date().getTime();
		var endApp = new Date().getTime();

		if(LetDooJS.Config.env == "dev") ModeDEV();

		LetDooJS.Core.Profiler.prototype.log = function (msg, type) {
			console.log(msg);
		}

		LetDooJS.Core.Profiler.prototype.profiler = function (name, type) {
			if(!script[name]){
				script[name] = [] ;
				script[name]["start"] = new Date().getTime();
				script[name]["end"] = 0;
			}else{
				script[name]["end"] = new Date().getTime();
			}
		}

		LetDooJS.Core.Profiler.prototype.display = function (){
			var DOM = LetDooJS.System.get("HandlingDOM");
			for (var i in script) {
				var time = (script[i]["end"] - script[i]["start"] > 0 ) ? script[i]["end"] - script[i]["start"] : 0 ;
				DOM.write(i + " Chargé en " + time  + " ms.");
			}
		}


		function ModeDEV(){
			localStorage.clear();
			LetDooJS.System.import (["DevFunctions-Utils"]);
		}
	}

})()