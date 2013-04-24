(function(){

	LetDooJS.Core.Router = function (routing) {

		var routes = routing;
		var process = LetDooJS.System.get("Process");

		if(routes["HOME"]){
			process.runAction(splitRoute(routes["HOME"]));
		}

	    window.onpopstate= function (event) {
	        var _R = event.state;
	        if(_R) process.runAction(_R);
		};

		function getPattern () {
			var url = location.href ;
			var pattern = url.replace(LetDooJS.System.getWebPath() ,"");
			return pattern ;
		}

		function getRouteByPattern (pattern) {
			for (var i in routes) {
				if (routes[i].pattern == pattern) return splitRoute(routes[i]);
			}
			return null;
		}

		function getRouteByName (name) {
			return splitRoute(routes[name]);
		}

		function splitRoute(R){
			CtrlAct = R.process.split("::");
			R.controller = CtrlAct[0];
			R.action = CtrlAct[1];
			return R;
		}

		LetDooJS.Core.Router.prototype.launch = function (nameRoute){
			var routeCalled = (!nameRoute ) ?
				getRouteByPattern(getPattern()) :
				routeCalled = getRouteByName(nameRoute);
			if(routeCalled ){
				process.runAction(routeCalled);
			}else{
				throw "Route Not Found !";
			}
		};

	};
})();