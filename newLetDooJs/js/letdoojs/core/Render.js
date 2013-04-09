define(["Mustache","jquery","Listenner"] , function (Mustache, $, Listenner) {

	var Render = {

		compileView : function (view,func) {
			require (["text!src/views/" + view ] , function (_V) {
				func(Mustache.compile(_V));
			})
		},

		generateView : function (template, params){
			var v = template(params);
			$("body").html(v);
			Listenner.listen("body");
		}

	}

	return Render;

})