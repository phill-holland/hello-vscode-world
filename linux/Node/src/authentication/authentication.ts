import { Middleware } from 'koa';

const Authentication: Middleware = async (ctx, next) => {
  const authHeader = ctx.get('authorization');

  console.log('authHeader', authHeader);

  if (!authHeader || authHeader !== 'belgianTripleChocolate') {
    console.log('no header found or the found header was invalid');
    ctx.response.body = { success: false, msg: "you shall not pass" };
    ctx.response.status = 400;
  } else {
    next();
  }
}

export default Authentication;