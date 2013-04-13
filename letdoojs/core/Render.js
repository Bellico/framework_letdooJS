(function(){

	LetDooJS.Core.Render = function () {

		var viewCompiled = [];

		LetDooJS.Core.Render.prototype.compileView = function (nameView,callback) {
			var template = "<h1> {{vv}} <h1>";
			if (!viewCompiled[nameView]){
				viewCompiled[nameView] = Mustache.compile(template);
				callback();
			}else
				callback();
		}

		LetDooJS.Core.Render.prototype.generateView = function (nameView, params, callback){
			this.compileView(nameView, function(){
				var v = viewCompiled[nameView](params);
				callback(v);
			})

		}

		LetDooJS.Core.Render.prototype.displayView = function (nameView, params, callback){
			this.generateView(nameView, params, function(v){
				document.body.innerHTML = v;
				//listen
				if(callback) callback();
			})

		}
	}

})()