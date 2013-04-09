define([] , function($){

	var Environnement = function (){

 		var env = null ,
	 		path =  "http://localhost/JavaScript/LetDooJs/" ,
	 		folderWeb = "web";

	 	(function initEnvironnement () {
	 		setPath();
 		})()

 		function setPath (){
 			var regex = new RegExp("(.*)web\/*");
 			regex.test(location.href);
			path = RegExp["$1"];
 		}

 		return {
			getPath : function () {
				return path;
			},

			getWebPath : function(){
				return path + folderWeb;
			}
 		}

 	}

	return Environnement;
})