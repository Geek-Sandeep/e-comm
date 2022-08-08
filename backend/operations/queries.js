const getRoleByID = `
query ($id: uuid!) {
        user_roles(where: {user_id: {_eq: $id}}) {
            role {
                id
                key
            }
        }
}`

const signin = `
query ($email: String!) {
    users(where: {email: {_eq: $email}}) {
        id
        name
        email
        password
    }
}`

const getRoleIDByKey = `
query ($role: String!) {
    roles(where: {key: {_eq: $role}}) {
        id
    }
}`;

module.exports = {
    getRoleByID, signin, getRoleIDByKey
}