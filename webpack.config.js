const path = require('path')

module.exports = {
    mode: 'development',
    target: ['web', 'es5'],
    entry: {
        mapboxunit: './js/mapboxunitbeforewebpack.js',
        mapboxcluster: './js/mapboxclusterbeforewebpack.js',
        mapboxfield: './js/mapboxfieldbeforewebpack.js',
    },
    output: {
        path: `${__dirname}/js`,
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true
    }
}