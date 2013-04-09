define ([] , function(){

	return {

		myFisrtUrl : {
			pattern : "/", controller : "home" , action : "index" , params : {}
		},

		mySecondUrl : {
			pattern : "/autre" , controller : "autre" , action : "test" , params : {}
		},

	}
})