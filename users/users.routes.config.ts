import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UsersRoutesConfig extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {
        return this.app;
    }
}