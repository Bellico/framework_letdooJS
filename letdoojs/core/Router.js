(function(){

	LetDooJS.Core.Router = function (routes) {

		var routes = routes;
		var process = LetDooJS.System.get("Process");

	    window.onpopstate = function (event) {
	        var _R = event.state;
	        if( _R) process.runAction(_R);
		}

		function getPattern () {
			var url = location.href ;
			var pattern = url.replace(LetDooJS.System.getWebPath() ,"");
			return pattern ;
		}

		function getRouteByPattern (pattern) {
			for (var i in routes) {
				if (routes[i].pattern == pattern) return routes[i];
			}
			return null;
		}

		function getRouteByName (name) {
			return routes[name];
		}

		LetDooJS.Core.Router.prototype.launch = function (nameRoute){
			var routeCalled = (!nameRoute ) ?
				getRouteByPattern(getPattern()) :
				routeCalled = getRouteByName(nameRoute);
			if(routeCalled ){
				process.runAction(routeCalled);
			}
		}

	}
})()