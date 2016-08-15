var path = require('path');
var webpack = require('webpack');
module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },    
    context: __dirname,
    entry: "./scripts/app.js",
    output: {
        filename: "./dist/bundle.scripts.js"
    }, 
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),        
        new webpack.SourceMapDevToolPlugin({
             filename: '[file].map'
        })
  ]
}
