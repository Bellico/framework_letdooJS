var LetDooJS = {
	App : {} ,
	Core : {} ,
	Utils : {}
};

window.onload = function(){

	LetDooJS.App.System= new LetDooJS.Core.System("dev");

	LetDooJS.App.System.import (["Environnement"],function(){
		LetDooJS.App.Env = new LetDooJS.Core.Environnement({
			nameApp : "newLetDooJs"
		});
	})

	LetDooJS.App.System.import (["Router", "Routing"] , function () {

		console.log(LetDooJS.App.Env);
		//LetDooJS.App.Router = new Router(Routing) ;
	})
	console.log(LetDooJS.App.Env);

}