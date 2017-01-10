import {Router} from 'express';


export class IndexRouter {
    private app: any;
    private router: any;

    constructor (app: any) {
        this.app = app;
        this.router = Router();

        return this.set();
    }

    set() {
        // this.router.use(new ProductRouter(this.app));


        return this.router;
    }
}