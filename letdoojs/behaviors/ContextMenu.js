(function(){

	Node.prototype.contextMenu = function (){

		const CLASS_NAME = "LDS_contextMenu";
		var DOM = LetDooJS.System.get("HandlingDOM");

		var DOMContextMenu = DOM.create({tag : "div" , className : CLASS_NAME});
		DOMContextMenu.style.position = "absolute";
		DOMContextMenu.style.display = "none";
		document.body.appendChild(DOMContextMenu);

		this.addEventListener("contextmenu",function(event){
			event.preventDefault();
			hideAllMenu();
			DOMContextMenu.style.top  = event.clientY+"px";
			DOMContextMenu.style.left  = event.clientX+"px";
			DOMContextMenu.style.display = "block";
		},false);

		DOMContextMenu.addEventListener("mousedown",function (event){
			event.stopPropagation();
		},false);

		document.addEventListener("mousedown", function(event){
			if (event.which == 1)
				DOMContextMenu.style.display = "none";
		},false);

		function hideAllMenu(){
			var divs = document.querySelectorAll(CLASS_NAME);
			for (var i in divs){
				if (divs[i].nodeType == 1) divs[i].style.display = "none";
			}
		}
	};

})();