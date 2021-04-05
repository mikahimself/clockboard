const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
    output: {
        clean: true,
        filename: "[name]_[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            chunkFilename: "[id].[contenthash].css"
        }),
    ]
})