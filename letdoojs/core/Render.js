(function(){

	LetDooJS.Core.Render = function () {

		const PREFIX = "LDS_VIEW_";
		var viewCompiled = [];

		LetDooJS.Core.Render.prototype.compileView = function (nameView,callback) {
			var template = localStorage[PREFIX + nameView]
			if (template){
				viewCompiled[nameView] = Mustache.compile(template);
				callback (viewCompiled[nameView]);
			} else{
				var request = LetDooJS.System.get("XMLHttpRequest");
				request.getTemplate(nameView, null, function (template){
					localStorage[PREFIX + nameView] = template;
					viewCompiled[nameView] = Mustache.compile(template);
					callback (viewCompiled[nameView]);
				});
			}
		}

		LetDooJS.Core.Render.prototype.displayView = function (nameView, params, callback){
			if(!params) params = {};
			var DOM = LetDooJS.System.get("HandlingDOM");
			if(viewCompiled[nameView]) {
				var view = viewCompiled[nameView](params);
				DOM.append(view, null, nameView);
				if (callback) callback();
			} else {
				this.compileView(nameView, function (compile){
					var view = viewCompiled[nameView](params);
					DOM.append(view, null, nameView);
					if (callback) callback();
				})
			}
		}
	}

})()