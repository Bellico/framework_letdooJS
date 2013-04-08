define(["Render"],function(Render){

	var Controller= {

		controllerdefined : [],

		viewsCompiled : [],

		defineController : function (nameController, ObjectController){
			this.controllerdefined[nameController] = ObjectController ;
		},

		getController : function (name) {
			return this.controllerdefined[name];
		},

		render : function (view, params) {
			var _this = this ;
			var template = this.viewsCompiled[view];
			if(template){
				var v = Render.generateView(template, params);
			}else{
				Render.compileView(view,function(template){
			  		_this.viewsCompiled[view] = template;
			  		var v = Render.generateView(template, params);
				});
			}
		}

	}

	return Controller;

})