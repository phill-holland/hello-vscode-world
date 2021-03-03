import Router from 'koa-router';
import { deserialize, serialize } from 'typescript-json-serializer';
import { Schema } from '../classes/schema';
import { Breeding } from "../classes/breeding";
import Authentication from "../authentication/authentication";

let breeder = new Breeding(10);

const routes = new Router();

routes.get('/get', function(ctx,next) {
    ctx.body = serialize(breeder.get());
  });

  routes.post('/set', function(ctx,next) {
    breeder.set(deserialize<Schema>(this.request.body,Schema));
    ctx.body = '';
  });

  routes.get('/save', function(ctx,next) {
    breeder.save();
    ctx.body = '';
  });

  routes.get('/load', function(ctx,next) {
    breeder.load();
    ctx.body = '';
  });

  routes.post('/example-auth', Authentication, (ctx, next) => {
    ctx.body = { success: true, msg: "Authentication was successful" };
    ctx.response.status = 500;
  })
  
export default routes;