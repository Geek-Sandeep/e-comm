module.exports = {
    schema: [
        {
            'http://localhost:8080/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': "secret",
                },
            },
        },
    ],
    documents: "./src/generated/**/*.gql",
    overwrite: true,
    generates: {
        './src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: true,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};

