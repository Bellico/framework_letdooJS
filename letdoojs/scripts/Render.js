define(["Mustache"] , function (Mustache) {

	var Render = {

		compileView : function (view,func) {
			require (["text!src/views/" + view ] , function (_V) {
				func(Mustache.compile(_V));
			})
		},

		generateView : function (template, params){
			return template(params);
		}

	}

	return Render;

})