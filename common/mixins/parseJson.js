module.exports = function(Model, options) {
    Model.observe('loaded', function event(ctx, next) {
        for (var prop in ctx.data) {
            if (options.properties.indexOf(prop) != -1){
                ctx.data[prop] = parse(prop);
            }
        }


        function parse(property) {
            if (ctx.data && typeof ctx.data[property] != 'undefined'){
                return JSON.parse(ctx.data[property]);
            }
        }
        next();
    });


}