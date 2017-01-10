'use strict';
var path = require('path');
var ConfigLoader_1 = require("./components/loopback-component-mcms-core/Services/ConfigLoader");
var index_1 = require("./routes/index");
var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
app.baseDir = path.join(__dirname, './');
app.clientDir = path.join(__dirname, '../client');
var configLoader = new ConfigLoader_1.ConfigLoader(app);
app.Config = configLoader.loadDefaults();
//load project based routes. The rest reside in components
app.use(new index_1.IndexRouter(app));
app.start = function () {
    // start the web server
    return app.listen(function () {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err)
        throw err;
    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
