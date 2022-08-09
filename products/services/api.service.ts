"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 4000,
		ip: "0.0.0.0",
		routes: [
			{
				path: "/api",
				whitelist: [
					"**"
				],
			}
		],
	},
};