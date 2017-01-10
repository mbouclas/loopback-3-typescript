"use strict";
var path = require('path');
var ConfigLoader = (function () {
    function ConfigLoader(App) {
        this.app = App;
        this.configLoader = require("mcms-node-config-loader").setEnv(App.get('env'));
    }
    ConfigLoader.prototype.loadDefaults = function () {
        var Config = this.configLoader.loadConfig(path.join(this.app.baseDir, './config'));
        Config.env = this.app.get('env');
        return Config;
    };
    return ConfigLoader;
}());
exports.ConfigLoader = ConfigLoader;
