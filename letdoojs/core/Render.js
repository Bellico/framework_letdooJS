(function(){

	LetDooJS.Core.Render = function () {

		var viewCompiled = [];

		LetDooJS.Core.Render.prototype.compileView = function (nameView,callback) {
			var template = localStorage["LDS_VIEW_" + nameView]
			if (template){
				viewCompiled[nameView] = Mustache.compile(template);
				callback (viewCompiled[nameView]);
			} else{
				var request = LetDooJS.System.get("XMLHttpRequest");
				request.getTemplate(nameView, null, function (template){
					localStorage["LDS_VIEW_" + nameView] = template;
					viewCompiled[nameView] = Mustache.compile(template);
					callback (viewCompiled[nameView]);
				});
			}
		}

		LetDooJS.Core.Render.prototype.displayView = function (nameView, params, callback){
			if(viewCompiled[nameView]) {
				var view = viewCompiled[nameView](params);
				document.body.innerHTML = view;
			} else {
				this.compileView(nameView, function (compile){
					var view = viewCompiled[nameView](params);
					document.body.innerHTML = view;
				})
			}
		}
	}

})()