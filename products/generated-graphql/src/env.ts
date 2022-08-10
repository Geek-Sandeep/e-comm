import "dotenv/config";

const ENV = {
	// HASURA
	get HASURA_GRAPHQL_GRAPHQL_URL() {
		return process.env.HASURA_GRAPHQL_GRAPHQL_URL || "";
	},
	get HASURA_GRAPHQL_ADMIN_SECRET() {
		return process.env.HASURA_GRAPHQL_ADMIN_SECRET || "";
	},
	get HASURA_GRAPHQL_UNAUTHORIZED_ROLE() {
		return process.env.HASURA_GRAPHQL_UNAUTHORIZED_ROLE || "";
	},
	get HASURA_GRAPHQL_JWT_SECRET() {
		return {
			type: process.env.HASURA_JWT_SECRET_TYPE || "HS256",
			key: process.env.HASURA_JWT_SECRET_KEY || "",
		};
	},
	get JWT_CONFIG() {
		return {
			algorithm: this.HASURA_GRAPHQL_JWT_SECRET.type as "HS256" | "RS512",
		};
	},
};

export default ENV;
