const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname + "dist"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        contentBase: "./public"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            modules: __dirname + "/node_modules"
        }
    },
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-object-rest-spread"]
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: "file-loader"
            }
        ]
    }
};
