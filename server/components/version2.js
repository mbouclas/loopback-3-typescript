"use strict";
var LoopBackVersion = (function () {
    function LoopBackVersion(lbApp) {
        this.app = lbApp;
    }
    LoopBackVersion.prototype.get = function () {
        console.log('LoopBack v%s in ES6', this.app.loopback.version);
    };
    return LoopBackVersion;
}());
exports.LoopBackVersion = LoopBackVersion;
