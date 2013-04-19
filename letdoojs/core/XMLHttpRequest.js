(function(){

	LetDooJS.Core.XMLHttpRequest = function () {

		var xhr = new XMLHttpRequest();

		console.log(xhr);
		LetDooJS.Core.XMLHttpRequest.prototype.request = function (methode, url){
			xhr.open("GET", url, true);
			xhr.send(null);

		}

		LetDooJS.Core.XMLHttpRequest.prototype.getTemplate = function (name, package, callback){
			var url = LetDooJS.System.getPath() + ((package) ? package : "src" ) + "/views/" + name ;
			this.request("GET", url);
			xhr.onload = function (){
				if (xhr.status == 200)
					callback(xhr.responseXML)
			}
		}

	}

})()