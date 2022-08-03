module.exports = `
query ($id: uuid!) {
        user_roles(where: {user_id: {_eq: $id}}) {
            role {
                id
                key
            }
        }
}`