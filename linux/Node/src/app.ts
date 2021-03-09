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