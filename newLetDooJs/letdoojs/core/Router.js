LetDooJS.Core.Router = function (routes) {

	var routes = routes;

    window.onpopstate = function (event) {
        var _R = event.state;
	    new LetDooJS.Core.Process(_R);
	}

	function getPattern () {
		var url = location.href ;
		var pattern = url.replace(LetDooJS.App.Env.getWebPath() ,"");
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

		if(!routeCalled ){
			alert("no route");
		}
		LetDooJS.App.System.import(["Process"], function(){
			new LetDooJS.Core.Process(routeCalled);
		});
	}

}