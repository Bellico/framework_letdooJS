(function(){

	LetDooJS.Core.Controller = function(){

		self.renderApplied = false;

		self.prototype.bindController = function (name, func) {
			if(!self.prototype[name]) self.prototype[name] = func;
		};

		self.prototype.render = function (nameView, params){
			self.renderApplied = true;
			var render = LetDooJS.System.get("Render");
			render.displayView(nameView, params, function(){
				self.callbackRender();
			});
		};

	};

	var self = LetDooJS.Core.Controller;

})();