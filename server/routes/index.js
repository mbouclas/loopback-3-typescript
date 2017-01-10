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
        var _this = this;
        this.router.get('/test', function (req, res) {
            _this.app.models.Products.findOne({})
                .then(function (item) {
                return res.send(item);
            });
        });
        return this.router;
    };
    return IndexRouter;
}());
exports.IndexRouter = IndexRouter;
