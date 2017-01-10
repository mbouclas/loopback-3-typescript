var loopback = require('loopback');
var Promise = require('bluebird');
var ds = loopback.createDataSource('mysql', {
  'name': 'mysql',
  'connector': 'mysql',
  'host': 'localhost',
  'database': 'lara',
  'username': 'root',
  'password': 'secret',
    debug : false
});
var tables = [
    discoverSchema('products'),
    discoverSchema('products_categories')
];
// Discover and build models from INVENTORY table
Promise.all(tables)
    .then(function (results) {

    });

function discoverSchema(table) {
    ds.discoverSchema(table).then(function (schema) {
        console.log(JSON.stringify(schema))
    })
}

function buildModel(modelName) {
    return new Promise(function(resolve) {
        ds.discoverAndBuildModels(modelName, {visited: {}, associations: true},
            function (err, model) {
            var tableName = Object.keys(model);
                console.log(model)
                model[tableName].findOne()
                    .then(function (result) {
                        console.log(result);

                        resolve(result);
                    })

            });
    });

}

