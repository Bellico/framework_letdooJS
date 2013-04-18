(function(){

	LetDooJS.Core.XMLHttpRequest = function () {

		var xhr = new XMLHttpRequest();
		console.log(xhr);

		LetDooJS.Core.XMLHttpRequest.prototype.request = function (){

		}
/*
function ajax(url,func){
	var xhr = getXMLHttpRequest();
	xhr.open("GET",url_server+url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			func(xhr.responseText);
		}
	};
	xhr.send(null);*/


	}
})()