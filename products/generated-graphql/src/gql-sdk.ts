import ENV from "./env";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "./utils/generated/graphql-request";

export const client = new GraphQLClient(ENV.HASURA_GRAPHQL_GRAPHQL_URL, {
	headers: {
		"x-hasura-admin-secret": ENV.HASURA_GRAPHQL_ADMIN_SECRET,
	},
});
export const gqlSdk = getSdk(client);

export const unauthorizedClient = new GraphQLClient(
	ENV.HASURA_GRAPHQL_GRAPHQL_URL,
	{ 
		headers: {
			"x-hasura-role": ENV.HASURA_GRAPHQL_UNAUTHORIZED_ROLE,
		},
	}
);
export const unauthorizedGqlSdk = getSdk(unauthorizedClient);
