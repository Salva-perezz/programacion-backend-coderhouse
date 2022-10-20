import Koa from "koa";
import koaBody from "koa-body";
import bookRouter from "./routes/book.router.js";

const app = new Koa();

app.use(koaBody());

app.use(bookRouter.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = "Not found :(";
});

app.listen(3000);
console.log("Server listening http://localhost:3000");
