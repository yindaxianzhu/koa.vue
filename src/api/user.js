module.exports = (router) => {
    // 创建blog
    router.get('/user/add', ctx => {
        ctx.body = JSON.stringify(ctx.session.user);
    });

    //更改blog
    router.get("/getuser/modify", ctx => {
        ctx.body = JSON.stringify(ctx.session.user);
    });

    //注册
    router.get("/users/add", ctx => {
        const userName=ctx.request.body.name;
        const pwd=ctx.request.body.pwd
        ctx.session.user={
            name:userName
        }
        ctx.body = JSON.stringify(ctx.session.user);
    });

    //登录
    router.get("/user/:id", ctx => {
        ctx.body = JSON.stringify(ctx.params);
    });
}