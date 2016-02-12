/**
 * Created by griga on 12/9/15.
 */

import _ from 'lodash'


let scripts = [];

let pending = {};


let ScriptLoader = {
    scriptsLoaded: false,
    loadFile: function(url){
        let resultPromise = $.when();

        if (_.has(pending, url)) {
            resultPromise = pending[url];
        } else if (!_.includes(scripts, url)) {
            pending[url] =$.ajax({
                url: url,
                dataType: "script"
            }).then(function () {
                scripts.push(url);
                delete pending[url];
            });
            resultPromise = pending[url];
        }
        return resultPromise;
    },
    recursive: function(dfd, scripts){
        let script = scripts.shift();
        let buildUrl = SMARTADMIN_GLOBALS.buildUrl;
        ScriptLoader.loadFile(buildUrl + script).then(function(){
            if(scripts.length == 0){
                this.scriptsLoaded = true;
                dfd.resolve();
            } else {
                this.recursive(dfd, scripts)
            }
        }.bind(this))
    },
    loadScript: function (scripts) {
        if(_.isString(scripts)) scripts = [scripts];
        let dfd = new $.Deferred();
        this.recursive(dfd, scripts);
        return dfd.promise();
    }
};


export default ScriptLoader;

