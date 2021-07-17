module.exports = {
    outputDir: "dist",
    assetsDir: "static",
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    devServer: {
        open: false,
        host: "192.168.1.110",
        port: 8009,
        https: false,
        hotOnly: false,
    },
};