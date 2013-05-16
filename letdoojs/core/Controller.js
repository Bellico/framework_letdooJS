(function(){

	LetDooJS.Core.Controller = function(){

		self.renderApplied = false;

		self.prototype.bindController = function (name, func) {
			if(!self.prototype[name]) self.prototype[name] = func;
		};

		self.prototype.render = function (nameView, params){
			self.renderApplied = true;
			var render = LetDooJS.System.get("Render");
			var process = LetDooJS.System.getObject("Process");

			render.displayView(nameView, params, function(){
				process.callbackRender();
			});
		};

		self.prototype.createDomObject= function (s) {
			return LetDooJS.System.get("HandlingDOM");
		};

		//RenderPage

	};

	var self = LetDooJS.Core.Controller;

})();