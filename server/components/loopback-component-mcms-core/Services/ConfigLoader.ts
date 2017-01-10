const path = require('path');

export class ConfigLoader {
    private app: any;
    public configLoader;

    constructor (App) {
        this.app = App;
        this.configLoader = require("mcms-node-config-loader").setEnv(App.get('env'));
    }

    loadDefaults() :any {

        let Config = this.configLoader.loadConfig(path.join(this.app.baseDir,'./config'));
        Config.env = this.app.get('env');

        return Config;
    }
}