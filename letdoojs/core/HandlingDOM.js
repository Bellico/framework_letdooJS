(function(){

	LetDooJS.Core.HandlingDOM = function(){

		var DOMbody = document.body;

		LetDooJS.Core.HandlingDOM.prototype.append = function (src, target) {

		}

		LetDooJS.Core.HandlingDOM.prototype.rightClick = function (){

			document.addEventListener("contextmenu",function(e){
				console.log(e);
				e.preventDefault()

			},false)
			/*document.addEventListener("mousedown",function(e){e.preventDefault();
				e.stopPropagation();
				console.log(window.event);
				console.log(e.which)},false);*/

		}



	}



})()