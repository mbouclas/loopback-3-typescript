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

        this.router.get('/test', (req, res) => {
            this.app.models.Products.findOne({})
                .then((item) => {
                    return res.send(item);
                });
        });
        return this.router;
    }
}