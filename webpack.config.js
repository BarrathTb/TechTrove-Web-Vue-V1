/** @format */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	// Entry point of your application
	entry: "./_resources/js/site.js",

	// Output configuration for Webpack
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js", // Output file
	},

	// Loaders and plugins are configured below
	module: {
		rules: [
			{
				test: /\.m?js$/, // Regex pattern to match all .js and .mjs files
				exclude: /node_modules/,
				use: {
					loader: "babel-loader", // Loader for processing .js files
					options: {
						presets: ["@babel/preset-env"], // Preset used for compilation
					},
				},
			},
			{
				test: /\.scss$/, // Regex pattern to match all .scss files
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[hash][ext][query]",
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[hash][ext][query]",
				},
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			template: "./Home.html",
			filename: "Home.html",
		}),
		new CopyPlugin({
			patterns: [{ from: "_resources/images", to: "images" }],
		}),
	],

	// Optional: Configuration for development server
	devServer: {
		static: "./dist",
	},
};
