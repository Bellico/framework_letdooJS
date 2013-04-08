define(["Mustache"] , function (Mustache) {

	var Render = {

		generateView : function (_V) {
			return Mustache.compile(_V);
		}

	}

	return Render;

})