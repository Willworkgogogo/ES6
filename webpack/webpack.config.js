// 输出模块, 输出一个对象
// __dirname 是nodejs的一个全局变量，表示当前脚本所在目录

/**
 * 改写， 使用node的path模块
 */ 
const path = require('path');

module.exports = {
	// entry: __dirname + "/app/main.js",

	// output: {
	// 	path: __dirname + "/dist",
	// 	filename: "bundle.js"
	// },
	enty: __dirname + "/app/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		// 关于模块的配置
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			}
		]
	}
}