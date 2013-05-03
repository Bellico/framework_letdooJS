(function(){

	LetDooJS.Core.HandlingDOM = function(){

		var DOMbody = document.body,
			listenner = LetDooJS.System.get("Listenner");

		LetDooJS.Core.HandlingDOM.prototype.appendTemplate = function (src, target, name) {
			name = (name) ? " " + name : "";
			var div = (target) ? target : this.create({tag : "div", className : "LDJ-Template" + name});
			div.innerHTML = src;
			listenner.listen(div);
			DOMbody.appendChild(div);
		};

		LetDooJS.Core.HandlingDOM.prototype.append = function (prop, target) {
			if(!prop.tag) prop.tag = "div";
			var div = this.create(prop);
			listenner.listen(div);
			DOMbody.appendChild(div);
			return div
		};

		LetDooJS.Core.HandlingDOM.prototype.write = function (txt, target) {
			if(!target) target = DOMbody;
			var div = document.createElement("div");
			div.textContent = txt ;
			target.appendChild(div);
		};

		LetDooJS.Core.HandlingDOM.prototype.create = function (params){
			var div = document.createElement(params.tag);
			if (params.className) div.setAttribute("class",params.className);
			if(params.style){
				for (var i in params.style){
					div.style[i] = params.style[i];
				}
			}
			return div;
		};
	};

})();