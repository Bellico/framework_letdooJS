define([],function(){

	var Controller= {

		controllerdefined : [],

		defineController : function (nameController, ObjectController){
			this.controllerdefined[nameController] = ObjectController ;
		},

		getController : function (name) {
			return this.controllerdefined[name];
		}

	}

	return Controller;

})