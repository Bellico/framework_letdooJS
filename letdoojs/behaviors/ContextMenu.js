(function(){

	Node.prototype.contextMenu = function (){

		var DOMContextMenu = document.querySelector(".contextMenu");
		DOMContextMenu.style.position = "absolute";

		this.addEventListener("contextmenu",function(e){
			e.preventDefault();
			//e.stopPropagation();
			console.log(e);
			console.log(DOMContextMenu);
			DOMContextMenu.style.top  = e.clientY+"px";
			DOMContextMenu.style.left  = e.clientX+"px";

		},false)

		/*document.body.addEventListener("mousedown", function(e){
			DOMContextMenu.style.display = "none";
		},false)*/
	}

})()