LetDooJS.App.Routing = {

	/*
	uniq_name : {
		pattern : "/", process : "controller::action" , params : {}
	},
	*/

	HOME : {
		process : "home::index"
	},

	myFisrtUrl : {
		pattern : "/", process : "home::index" , params : {}
	},

	mySecondUrl : {
		pattern : "/autre" , process : "autre::index" , params : {}
	},

}
