define(["Mustache"] , function (Mustache) {

	require (["text!src/views/test.html" ] , function (f) {
		console.log(f);
		var output = Mustache.compile("{{title}} spends {{calc}}");
	  	output = output({title : 'title' , calc :'calc'});
	  	console.log(output);
	})

})