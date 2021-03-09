import Router from 'koa-router';
import dotenv from 'dotenv';
import { HelloSchema, HelloModel, ConnectionString } from '../mongo/hello';

const routes = new Router();

dotenv.config();

var mongoose = require('mongoose');

routes.get('/', async(ctx) => {

  console.warn(ConnectionString());

  try {
    await HelloModel.create({value: 'Hello World!'});

    const cursor = HelloModel.find().cursor();
    for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
      ctx.body += doc.value + '\n';
    }
  } catch(err) { throw err; }
});

export default routes;