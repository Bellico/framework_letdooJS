define(["Render"],function(Render){

	var Controller= {

		controllerdefined : [],

		defineController : function (nameController, ObjectController){
			this.controllerdefined[nameController] = ObjectController ;
		},

		getController : function (name) {
			return this.controllerdefined[name];
		},

		render : function (view, params) {
			require (["text!src/views/" + view ] , function (_V) {
				var view = Render.generateView(_V);
		  		output = view(params);
		  		console.log(output);
		  	})
		}

	}

	return Controller;

})