(function(){

	LetDooJS.Core.Debugger = function() {

		var start = new Date().getTime();
		var end = new Date().getTime();
		var time = end - start;

		LetDooJS.Core.Debugger.prototype.log = function (msg, type) {
			console.log(msg);
		}

		LetDooJS.Core.Debugger.prototype.profiler = function (msg, type) {
			console.log(msg);
		}
	}

})()