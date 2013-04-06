define(["Process"] , function(Process){

	var Router = function (routes) {
		var routes = routes;

		var pattern = this.getPattern();
        var routeCalled = this.getRoute(routes , pattern);
        var process = new Process(routeCalled);
	}

	Router.prototype.getPattern = function() {
		var url = location.href ;
		var pattern = url.replace(Environnement.getPath() + "web" ,"");
		return pattern ;
	}

	Router.prototype.getRoute = function (routes , pattern) {
		for (var i in routes) {
			if (routes[i].pattern == pattern) return routes[i];
		}
		return null;
	}

	return Router;

})