const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const modeConfig = (env) => require(`./build-utils/webpack.${env}.js`)(env);

module.exports = (env) => {
    return merge(
    {
        mode: env.mode,
        module:{
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
            
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html"
            })
        ]
    }, modeConfig(env.mode))
}