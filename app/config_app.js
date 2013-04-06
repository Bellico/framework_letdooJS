({
    baseUrl: "../app/",
	mainConfigFile:"../app/scripts/main.js",
    name: "scripts/main",
    out: "../app/scripts.min.js",
    paths:{
		markdown: "empty:"
    },
    //include:"../app/lib/require.js",
	optimize:"none",
	preserveLicenseComments:false
	//dirExclusionRegExp : ""
})