LetDooJS.Core.Controller = {

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
			Render.generateView(template, params);
		}else{
			Render.compileView(view,function(template){
			  	_this.viewsCompiled[view] = template;
			  	Render.generateView(template, params);
			});
		}
	}

}
