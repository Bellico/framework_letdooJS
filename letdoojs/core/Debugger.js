(function(){

	LetDooJS.Core.Debugger = function(env) {

		LetDooJS.System.setEnvironnement(env);

		var script = [];

		var startApp = new Date().getTime();
		var endApp = new Date().getTime();
		//var time = end - start;

		LetDooJS.Core.Debugger.prototype.log = function (msg, type) {
			console.log(msg);
		}

		LetDooJS.Core.Debugger.prototype.profiler = function (name, type) {
			if(!script[name]){
				script[name] = [] ;
				script[name]["start"] = new Date().getTime();
				script[name]["end"] = 0;
			}else{
				script[name]["end"] = new Date().getTime();
			}
		}

		LetDooJS.Core.Debugger.prototype.display = function (){
			for (var i in script) {
				var time = (script[i]["end"] - script[i]["start"] > 0 ) ? script[i]["end"] - script[i]["start"] : 0 ;
				//document.write(i + " Chargé en " + time  + " ms. <br />")
			}
		}
	}

})()