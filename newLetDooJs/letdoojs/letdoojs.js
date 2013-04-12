var LetDooJS = {};
var _LS;

(function(){


    LetDooJS.System = function () {

        var DOMhead = document.getElementsByTagName("head")[0],
            path = "http://" ,
            folderWeb = "web";

            path = setPath();

            files_System = {
                Kernel : ["App", "app/AppKernel.js"],
                Routing : ["App", "app/Routing.js"],
                Config : ["App", "app/Config.js"],
                Router : ["Core", "core/Router.js"],
                Process : ["Core", "core/Process.js"],
                Controller : ["Core", "core/Controller.js"],
                Environnement : ["Core", "core/Environnement.js"],
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

            if(scriptToImport.length >= 1) importRecursive(scriptToImport, 0, callback);
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

        LetDooJS.System.prototype.getPath = function (){
            return path;
        }

        LetDooJS.System.prototype.getWebPath = function (){
            return path + folderWeb;
        }

        function addScriptToDom (name, func) {
            var script = document.createElement("script");
            script.src = getSrc(name);
            script.addEventListener('load', function () {
                scripts_imported[name] = true ;
                func();
            },false);
            console.log(name +" importé");
            DOMhead.appendChild(script);
        }

        function importRecursive (scripts, i, callback){
            addScriptToDom (scripts[i], function () {
                i++;
                if(scripts[i]) importRecursive(scripts,i, callback)
                else callback();
            })
        }

        function getSrc(name){
            if(files_System[name][1]) return path + "letdoojs/" + files_System[name][1];
            if(name.substr(-10) == "Controller") return path + "src/controllers/" + name + ".js";
        }

        function setPath (){
            var regex = new RegExp("(.*)" + folderWeb + "\/*");
            regex.test(location.href);
            return RegExp["$1"];
        }

    }

    window.onload = function(){
        _LS = new LetDooJS.System();
        _LS.import (["Kernel"] , function () {
            new LetDooJS.App.Kernel();
        })

    }

})()