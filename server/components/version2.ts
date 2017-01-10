export class LoopBackVersion {
    app: any;

    constructor(lbApp: any) {
        this.app = lbApp;
    }

    get (): void {
        console.log('LoopBack v%s in ES6', this.app.loopback.version);
    }
}