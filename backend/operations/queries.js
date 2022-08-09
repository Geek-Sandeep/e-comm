const getRoleByUserID = `
query ($id: uuid!) {
        user_roles(where: {user_id: {_eq: $id}}) {
            role_key
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

module.exports = {
    getRoleByUserID, signin
}