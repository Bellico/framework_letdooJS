define(["Process"] , function(Process){

	var Router = function (routes) {

		var routes = routes;

        window.onpopstate = function (event) {
        	var _R = event.state;
	        var process = new Process( _R);
		}

		function getPattern () {
			var url = location.href ;
			var pattern = url.replace(Environnement.getWebPath() ,"");
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

		Router.prototype.launch = function (nameRoute){
			var routeCalled = (!nameRoute ) ?
				getRouteByPattern(getPattern()) :
				routeCalled = getRouteByName(nameRoute);

			if(!routeCalled ){
				alert("no route");
			}
			new Process(routeCalled);
		}

	}

	return Router;

})