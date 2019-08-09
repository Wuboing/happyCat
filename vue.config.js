module.exports = {
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8081,
        https: false,
        disableHostCheck:true,
        hotOnly: false,
        // proxy: { // 配置跨域
        //     // '/api': {
        //     //     //target: '',
        //     //     ws: true,
        //     //     disableHostCheck:true,
        //     //     changOrigin: true,
        //     // }
        // },
        overlay: {
            warnings: false,
            errors: false
        },
        before: app => { }
    }
}
