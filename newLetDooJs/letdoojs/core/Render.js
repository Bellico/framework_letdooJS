LetDooJS.Core.Render = {

	compileView : function (view,func) {
		require (["text!src/views/" + view ] , function (_V) {
			func(Mustache.compile(_V));
		})
	},

	generateView : function (template, params){
		var v = template(params);
		alert(v);
		//$("body").html(v);
		//Listenner.listen("body");
	}

}
