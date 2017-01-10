"use strict";
var fs = require('fs-extra');
var path = require('path');
var FilesystemHelpers = (function () {
    function FilesystemHelpers(App) {
        this.app = App;
    }
    FilesystemHelpers.prototype.loadDirContents = function (dir, extra) {
        var _this = this;
        var files = fs.walkSync(dir), loader = {};
        files.forEach(function (file) {
            if (path.extname(file) === '.js' && file.indexOf('loader') === -1 && file.indexOf('Helpers') === -1) {
                loader[file.replace('.js', '')] = require(path.resolve(_this.app.Config.baseDir, dir) + '/' + file)(_this.app, extra);
            }
        });
    };
    return FilesystemHelpers;
}());
exports.FilesystemHelpers = FilesystemHelpers;
