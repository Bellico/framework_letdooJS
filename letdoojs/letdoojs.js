var LetDooJS = {};

(function(){

    LetDooJS.System = function () {

        const SCRIPTS_CORE = ["Router","Routing-App","Process","Controller","Render","HandlingDOM","XMLHttpRequest-Components", "Listenner", "Mustache-Lib"];

        var DOMhead = document.head,
            path = "http://" ,
            folderWeb = "web";
            environnement = null,
            scripts_imported = [],
            instances = [];

        path = setPath();

        LetDooJS.System.prototype.loadCore = function (callback) {
            this.load ( SCRIPTS_CORE , callback );
        };

        LetDooJS.System.prototype.load = function (files, callback) {
            var scriptToImport = [];
            for (var i in files){
                file = files[i];
                var name = setOptionScript(file);
                if(typeof scripts_imported[name]["loaded"] == "undefined") {
                    scripts_imported[name]["loaded"] = false;
                    scriptToImport.push(name);
                };
            }
            callback = (callback) ? callback : function(){};
            if(scriptToImport.length >= 1) importRecursive(scriptToImport, 0, callback);
            else callback();
        };

        LetDooJS.System.prototype.importCss = function (files,web) {
            var href = (web) ? path + "web/css/" : path + "letdoojs/css/" ;
            for (var name in files){
                var style = document.createElement("link");
                style.type = "text/css";
                style.rel = "stylesheet";
                style.href = href + files[name] + ".css";
                DOMhead.insertBefore(style, DOMhead.firstChild);
            }
        };

        LetDooJS.System.prototype.get = function (name, param, _new) {
            checkScript(name);
            var namespace = scripts_imported[name]["namespace"];
            if (typeof LetDooJS[namespace][name] == "function"){
                if(_new) return new LetDooJS[namespace][name]();
                if(instances[name]){
                    return instances[name];
                }else{
                    return instances[name] = new LetDooJS[namespace][name](param);
                }
            }else{
                return LetDooJS[namespace][name];
            }
        };

        LetDooJS.System.prototype.getObject = function (name) {
            checkScript(name);
            var namespace = scripts_imported[name]["namespace"];
            return LetDooJS[namespace][name];
        };

        LetDooJS.System.prototype.getController = function (name) {
            checkScript(name);
            var namespace = scripts_imported["Controller"]["namespace"];
            if(instances[name]){
                return instances[name];
            }else{
                return instances[name] = new LetDooJS[namespace]["Controller"]();
            }
        };

        LetDooJS.System.prototype.getPath = function (){
            return path;
        };

        LetDooJS.System.prototype.getWebPath = function (){
            var wp = path + folderWeb;
            return ( wp.substr(-1) == "/" ) ? wp.slice(0, -1) : wp ;
        };

        LetDooJS.System.prototype.setEnvironnement = function (env){
           environnement = env;
        };

        function addScriptToDom (name, func) {
            var script = document.createElement("script");
            script.src = scripts_imported[name]["src"];
            script.addEventListener('load', function () {
                scripts_imported[name]["loaded"] = true;
                if(instances["Profiler"]) instances["Profiler"].profiler(name);
                func();
            },false);
            DOMhead.appendChild(script);
            if(instances["Profiler"]) instances["Profiler"].profiler(name);
        }

        function importRecursive (scripts, i, callback){
            addScriptToDom (scripts[i], function () {
                i++;
                if(scripts[i]) importRecursive(scripts,i, callback);
                else callback();
            });
        }

        function setOptionScript (fileName){
            var opt = fileName.split("-");
            if(!scripts_imported[opt[0]]) {
                if(!opt[1]) opt[1] = "Core";
                scripts_imported[opt[0]] = [];
                scripts_imported[opt[0]]["namespace"] = opt[1][0].toUpperCase() + opt[1].substring(1);
                scripts_imported[opt[0]]["src"] = getSrc(opt);
                if (environnement=="prod") scripts_imported[opt[0]]["loaded"] = true;
            }
            return opt[0];
        }

        function checkScript (name){
            if(!scripts_imported[name])
                throw ("Script " + name + " is not imported");

            if(!scripts_imported[name]["loaded"])
                throw ("Script " + name + " is not loaded yet");
        }

        function getSrc(opt){
            opt[1] = opt[1].toLowerCase();
            if(opt[1] == "controller")
                return path + "src/controllers/" +  opt[0] + ".js";
            if(opt[1] == "lib")
                return path + "lib/" +  opt[0] + ".js";

            return path + "letdoojs/" + opt[1] + "/" +  opt[0] + ".js";
        }

        function setPath (){
            var regex = new RegExp("(.*)" + folderWeb + "\/*");
            regex.test(location.href);
            return RegExp["$1"];
        }

    };

    window.onload = function(){
        LetDooJS.System = new LetDooJS.System();
        LetDooJS.System.load (["Kernel-App"] , function () {
            LetDooJS.System.get("Kernel");
        });
    };

})();