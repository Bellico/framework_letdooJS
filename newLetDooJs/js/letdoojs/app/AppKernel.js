var LetDooJS = {
	App : {} ,
	Core : {} ,
	Utils : {}
};

window.onload = function(){

	LetDooJS.App.System= new LetDooJS.Core.System("dev");
	LetDooJS.App.System.import (["Config", "Environnement", "Router", "Routing"] , function () {
		LetDooJS.App.Env = new Environnement({
			nameApp : "newLetDooJs"
		});
		LetDooJS.App.Router = new Router(Routing) ;
	})

}