module.exports = function(Model, castTypes) {
    Model.observe('loaded', function event(ctx, next) {
        //cast to array, object, int, float, money, boolean
        var process = new Processor();

        for (var type in castTypes) {
            for (var prop in ctx.data) {
                if (castTypes[type].indexOf(prop) != -1) {
                    ctx.data[prop] = process[type](ctx.data[prop]);
                }
            }
        }

        function Processor() {
            this.object = function(data) {
                if (data && typeof data != 'undefined'){
                    return JSON.parse(data);
                }
            };
            
            this.array = function (data) {
                
                
            };
            
            this.int = function(data) {
                return parseInt(data);
            };
            
            this.float = function(data) {
                return parseFloat(data).toFixed(2);
            };

            this.money = function (data) {
                return parseFloat(data).toFixed(2);
            };

            this.boolean = function (data) {
              return (data !== 0);
            };
        }
        
        next();
    });
};