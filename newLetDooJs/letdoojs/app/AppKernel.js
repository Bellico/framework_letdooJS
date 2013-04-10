LetDooJS.App.Kernel = function (){

	LetDooJS.App.System.import (["Router", "Routing","Config", "Functions"] , function () {
			LetDooJS.App.Router = new LetDooJS.Core.Router(LetDooJS.App.Routing) ;
			LetDooJS.App.Router.launch();
	})
}

