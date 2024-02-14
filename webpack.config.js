/** @format */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./_resources/js/site.js",

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
	},

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.scss$/,
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
