LetDooJS = {
	Application : {} ,
	Core : {} ,
	Utils : {} ,
};

LetDooJS.Application.new = function(class, param, func){

	if
	LetDooJS.Application.require.load

}

LetDooJS.Core.Require = function () {

	var DOMhead = document.getElementsByTagName("head")[0];
	var scripts [];

	LetDooJS.Core.Require.prototype.load = function (src, func){
		var script = document.createElement("script");
        script.src = src; script.async = true;
        script.addEventListener('load', function () {
        	func();
        },false);
        head.appendChild(script);
	}
}


function () {
	LetDooJS.Application.classloaded = [];
	LetDooJS.Application.require = new LetDooJS.Core.Require(),
}


var ra = new LetDooJS.Core.Require();
ra.load("js/letdoojs/test.js");
