var LetDooJS = {};

(function(){


    LetDooJS.System = function () {

        var DOMhead = document.head,
            path = "http://" ,
            folderWeb = "web";
            environnement = null,
            path = setPath();

            files_System = {
                Kernel : ["App", "app/AppKernel.js"],
                Routing : ["App", "app/Routing.js"],
                Config : ["App", "app/Config.js"],
                Router : ["Core", "core/Router.js"],
                Process : ["Core", "core/Process.js"],
                Controller : ["Core", "core/Controller.js"],
                Render : ["Core", "core/Render.js"],
                HandlingDOM : ["Core", "core/HandlingDOM.js"],
                GlobalBehaviors : ["Behaviors", "behaviors/GlobalBehaviors.js"],
                ContextMenu : ["Helpers", "helpers/ContextMenu.js"],
                Debugger : ["Core", "core/Debugger.js"],
                Functions : ["Utils", "utils/Functions.js"]
            },

            scripts_imported = [],
            instances = [];

        LetDooJS.System.prototype.import = function (files, callback) {
            var scriptToImport = [];

            for (var name in files){
                _F = files[name];
                if(typeof scripts_imported[_F] == "undefined") {
                    scripts_imported[_F] = false ;
                    scriptToImport.push(_F);
                };
            }

            callback = (callback) ? callback : function(){};
            if(scriptToImport.length >= 1) importRecursive(scriptToImport, 0, callback);
            else callback();
        }

        LetDooJS.System.prototype.importCss = function (files) {
            for (var name in files){
                var style = document.createElement("link");
                style.type = "text/css";
                style.rel = "stylesheet";
                style.href = path + "letdoojs/css/" + files[name] + ".css";
                DOMhead.appendChild(style);
            }
        }

        LetDooJS.System.prototype.get = function (name, param, _new) {
            if(!scripts_imported[name]) new Exception("La class " + name + " n'est pas importée");
            var c = files_System[name];
            if(_new) return new LetDooJS[c[0]][name];
            if(instances[name]){
                return instances[name];
            }else{
                return instances[name] = new LetDooJS[c[0]][name](param);
            }

        }

        LetDooJS.System.prototype.getController = function (name) {
            if(!scripts_imported[name]) new Exception("La class " + name + " n'est pas importée");
            var c = files_System["Controller"];
            if(instances[name]){
                return instances[name];
            }else{
                return instances[name] = new LetDooJS[c[0]]["Controller"]();
            }

        }

        LetDooJS.System.prototype.getPath = function (){
            return path;
        }

        LetDooJS.System.prototype.getWebPath = function (){
            return path + folderWeb;
        }

        LetDooJS.System.prototype.setEnvironnement = function (env){
           environnement = env;
        }

        function addScriptToDom (name, func) {
            var script = document.createElement("script");
            script.src = getSrc(name);
            script.addEventListener('load', function () {
                scripts_imported[name] = true ;
                if(environnement) instances["Debugger"].profiler(name);
                func();
            },false);
            DOMhead.appendChild(script);
            if(environnement) instances["Debugger"].profiler(name);

        }

        function importRecursive (scripts, i, callback){
            addScriptToDom (scripts[i], function () {
                i++;
                if(scripts[i]) importRecursive(scripts,i, callback)
                else callback();
            })
        }

        function getSrc(name){
            if(files_System[name]) return path + "letdoojs/" + files_System[name][1];
            if(name.substr(-10) == "Controller") return path + "src/controllers/" + name + ".js";
            return path + "lib/" + name + ".js";

        }

        function setPath (){
            var regex = new RegExp("(.*)" + folderWeb + "\/*");
            regex.test(location.href);
            return RegExp["$1"];
        }

    }

    window.onload = function(){
        LetDooJS.System = new LetDooJS.System();
        LetDooJS.System.import (["Kernel"] , function () {
            LetDooJS.System.get("Kernel");
        })

    }

})()