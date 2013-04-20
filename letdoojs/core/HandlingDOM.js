(function(){

	LetDooJS.Core.HandlingDOM = function(){

		var DOMbody = document.body;

		LetDooJS.Core.HandlingDOM.prototype.append = function (src, target) {
			var div = (target) ? target : document.createElement("div");
			div.innerHTML = src;
			DOMbody.appendChild(div);
		}

		LetDooJS.Core.HandlingDOM.prototype.write = function (txt, target) {
			if(!target) target = DOMbody;
			var div = document.createElement("div");
			div.textContent = txt ;
			target.appendChild(div);
		}

		LetDooJS.Core.HandlingDOM.prototype.create = function (params){
			var div = document.createElement(params.tag);
			if (params.class) div.setAttribute("class",params.class);
			return div;
		}
	}


})()