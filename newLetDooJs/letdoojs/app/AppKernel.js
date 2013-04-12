(function(){

	LetDooJS.App = LetDooJS.App || {};

	LetDooJS.App.Kernel = function (){
		_LS.import (["Router", "Routing","Config"] , function () {
			var router = _LS.get("Router",LetDooJS.App.Routing);
			router.launch();
		})
	}

})()