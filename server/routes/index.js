"use strict";
var express_1 = require("express");
var IndexRouter = (function () {
    function IndexRouter(app) {
        this.app = app;
        this.router = express_1.Router();
        return this.set();
    }
    IndexRouter.prototype.set = function () {
        // this.router.use(new ProductRouter(this.app));
        return this.router;
    };
    return IndexRouter;
}());
exports.IndexRouter = IndexRouter;
