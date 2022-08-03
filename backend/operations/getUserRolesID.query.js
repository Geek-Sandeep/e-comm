module.exports = `
query ($role: String!) {
    roles(where: {key: {_eq: $role}}) {
        id
    }
}
`;