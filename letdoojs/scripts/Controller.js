define([],function(){

	var Controller= {

		controllerdefined : [],

		defineController : function (nameController, ObjectController){
			this.controllerdefined[nameController] = ObjectController ;
		}

	}

	return Controller;

})