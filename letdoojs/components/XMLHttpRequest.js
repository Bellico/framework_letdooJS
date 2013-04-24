(function(){

	LetDooJS.Components.XMLHttpRequest = function () {

		var xhr = new XMLHttpRequest();

		LetDooJS.Components.XMLHttpRequest.prototype.request = function (methode, url){
			xhr.open("GET", url, true);
			xhr.send(null);
		};

		LetDooJS.Components.XMLHttpRequest.prototype.getTemplate = function (name, folder, callback){
			var url = LetDooJS.System.getPath() + ((folder) ? folder : "src" ) + "/views/" + name + ".html" ;
			this.request("GET", url);
			xhr.onload = function (){
				if (xhr.status == 200)
					callback(xhr.responseText);
				else{
					throw "Template " + url + " not found";
				}
			};
		};

	};

})();