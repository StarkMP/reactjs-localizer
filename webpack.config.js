const path = require('path');

module.exports = {
    entry: {
        'reactjs-localizer': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: __dirname,
        publicPath: '/dist',
        libraryTarget: 'umd',
        library: 'reactjs-localizer',
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
        ]
    }
};