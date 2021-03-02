import Koa from "koa";
import json from "koa-json";
import routes from './routers/routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Koa = new Koa();

app.use(json());

app.use(routes.routes())
  .use(routes.allowedMethods());

export default app;

// import database mysql/mongo experiment

// queue experiments

// other testing frameworks jest/enzyme

// package management

