const path = require('path');
const tailwindcss = require("tailwindcss");

module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
	    loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	});
	config.resolve.extensions.push('.js', '.ts', '.tsx', '.css');

	config.resolve.modules = [
	    ...(config.resolve.modules || []),
	    path.resolve('./'),
	  ];

	return config;
};