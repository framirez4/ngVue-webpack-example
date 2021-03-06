const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/app/app.module.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9000,
        publicPath: "/dist/",

    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
