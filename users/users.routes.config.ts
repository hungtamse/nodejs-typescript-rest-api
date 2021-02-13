import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UsersRoutesConfig extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutesConfig');
    }

    configureRoutes() {
        console.log('register');
        this.app.route(`/users`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of users`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(`Post to users`);
            });

        this.app.route(`/users/:userId`)
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Get requested for id ${req.params.userId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Put requested for id ${req.params.userId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`Patch requested for id ${req.params.userId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`Delete requested for id ${req.params.userId}`);
            });

        return this.app;
    }
}