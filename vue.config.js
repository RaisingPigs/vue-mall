module.exports = {
    /*关闭eslint*/
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
                /*路径重写, 去掉 /api
                * 由于项目中路径带有 /api, 所以不需要重写*/
                // pathRewrite: {'^/api': ''}
            }
        }
    }
}
