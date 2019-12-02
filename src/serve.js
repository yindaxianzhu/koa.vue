const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const koaBody = require('koa-body');
const router = new Router();
const session = require('koa-session');
//const serve=require("koa-static");

app.keys = ['888'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


app.use(session(CONFIG, app));
app.use(koaBody());
//app.use(serve(__dirname+"/public"));

const apiPath = require("path").join(__dirname, "api");
require("fs").readdirSync(apiPath).forEach(function (file) {
    require("./api/" + file)(router);
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);