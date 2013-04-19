(function(){

	LetDooJS.Core.Controller = function(){

		self.prototype.bindController = function (name, func) {
			if(!self.prototype[name]) self.prototype[name] = func;
		}

		self.prototype.render = function (nameView, params){
			var render = LetDooJS.System.get("Render");
			render.displayView(nameView, params)
		}

	}

	var self = LetDooJS.Core.Controller;

})()