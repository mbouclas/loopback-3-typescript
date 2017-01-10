const fs = require('fs-extra');
const   path = require('path');

export class FilesystemHelpers {
    private app: any;

    constructor(App: any) {
        this.app = App;
    }

    loadDirContents(dir: string, extra?: any){
        let files = fs.walkSync(dir),
            loader = {};

        files.forEach((file) => {
            if (path.extname(file) === '.js' && file.indexOf('loader') === -1 && file.indexOf('Helpers') === -1) {
                loader[file.replace('.js','')] = require(path.resolve(this.app.Config.baseDir,dir) + '/' + file)(this.app, extra);
            }
        });
    }
}