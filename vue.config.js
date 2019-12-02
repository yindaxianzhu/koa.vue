//前端应用和后端服务器没有运行在同一个主机（端口不同），需要跨域
module.exports = {
    devServer: {
        proxy: "http://localhost:3000"
    }
}