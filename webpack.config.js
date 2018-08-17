/***************************************
** Root path name
***************************************/
const ROOT_PATH_NAME = 'docs';


/***************************************
** JS Setting
***************************************/
const ENTRY = {
    'bundle': './src/index.js'
}
const SOURCE_MAP_STYLE = 'inline-source-map'; // 'inline-source-map', 'source-map', etc.


/***************************************
** devServer Setting
***************************************/
const DEV_SERVER = {
    contentBase: ROOT_PATH_NAME,
    // open: true,
    port: 5000,
    host: '0.0.0.0',
    watchContentBase: true,
    historyApiFallback: true
}


/***************************************
** Webpack Config
***************************************/
let mode = process.argv.indexOf("production") !== -1 ? 'production' : 'development';
if( process.argv.indexOf("--watch") !== -1 ) mode = 'development';
let isDev = (mode === 'development');

module.exports = {

    // メインのJS
    entry: ENTRY,

    // 出力ファイル
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/${ROOT_PATH_NAME}`,
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { // CSSをバンドルするための機能
                        loader: 'css-loader',
                        options: {
                            url: true, // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            sourceMap: isDev,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    { // autoprefixer を利用するために postcss を利用
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isDev
                        }
                    },
                    { // Sassをバンドルするための機能
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js'],
    },
    devtool: (isDev ? SOURCE_MAP_STYLE : ''),
    devServer: DEV_SERVER,
    performance: { hints: false }

}

console.log("-------------------------------------------------------");
console.log("mode: " + mode);
console.log("-------------------------------------------------------");
