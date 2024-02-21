/** @format */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./_resources/js/site.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
	},

	module: {
		rules: [
			// Combined rule for CSS and SCSS
			{
				test: /\.(sa|sc|c)ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
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
			filename: "_resources/css/custom-styles.css",
		}),
		// Adding multiple instances of HtmlWebpackPlugin will handle all html files
		...["index.html", "Home.html"].map(
			(template) =>
				new HtmlWebpackPlugin({
					template: `./${template}`,
					filename: template,
				})
		),
		new CopyPlugin({
			patterns: [{ from: "_resources/images", to: "images" }],
		}),
	],

	// Optional: Configuration for development server
	devServer: {
		static: "./dist",
	},
};
