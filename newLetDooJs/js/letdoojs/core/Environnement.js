LetDooJS.Core.Environnement = function (params){

	 	var	path =  "http://" ,
	 		folderWeb = "web";

	 	folderWeb = params.nameApp;
	 	setPath();


 		function setPath (){
 			var regex = new RegExp("(.*)" + folderWeb + "\/*");
 			regex.test(location.href);
			path = RegExp["$1"] + folderWeb;
			console.log(path);
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

})