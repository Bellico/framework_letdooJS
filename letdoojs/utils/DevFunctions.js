function l (data) {
	console.log(data);
}

function LDJ_clear() {
	localStorage.clear();
}

function LDJ_go (name) {
	if (!name) {
		var routes = LetDooJS.System.get("Routing");
		for (var i in routes){
			console.log(i);
		}
		return "Please choose an action.";
	}
	var router = LetDooJS.System.get("Router");
	router.launch(name);
}

function LDJ_Routes (name) {
	var routes = LetDooJS.System.get("Routing");
	return (name) ? routes[name] : routes ;
}