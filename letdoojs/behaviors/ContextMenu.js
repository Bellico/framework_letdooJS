(function(){

	LetDooJS.Behaviors.ContextMenu = function(){

		LetDooJS.Behaviors.ContextMenu.prototype.test = function (){
			Node.prototype.contextMenu = function (){}
		}
	}
})()