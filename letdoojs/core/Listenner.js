(function(){

	LetDooJS.Core.Listenner = function(){

		var router = LetDooJS.System.get("Router");

		LetDooJS.Core.Listenner.prototype.listen = function (target) {
			items = target.querySelectorAll("[data-route]");
			for (var i in items){
				bindAction(items[i]);
			}


		};

		function bindAction (item, e){
			if (item.nodeType != 1) return false;

			e = (e) ? e : "click";
			item.addEventListener (e,function(event){
				event.preventDefault();
				var name = item.getAttribute("data-route");
				router.launch(name);
			},false);

		}

	};

})();