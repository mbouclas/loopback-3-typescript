'use strict';
const path = require('path');
import {ConfigLoader} from './components/loopback-component-mcms-core/Services/ConfigLoader';
import {IndexRouter} from './routes/index';

const loopback = require('loopback');
const boot = require('loopback-boot');

let app = module.exports = loopback();
app.baseDir = path.join(__dirname,'./');
app.clientDir = path.join(__dirname,'../client');


const configLoader = new ConfigLoader(app);
app.Config = configLoader.loadDefaults();

//load project based routes. The rest reside in components
app.use(new IndexRouter(app));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');

    let baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      let explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
