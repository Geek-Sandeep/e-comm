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

const getRoles = `
query {
  roles {
    key
    created_at
    updated_at
  }
}`

const getPermissions = `
query {
  permissions {
    key
    created_at
    updated_at
  }
}`

const getUsers = `
query {
  users {
    id
    name
    email
    user_roles {
      role_key
    }
  }
}`

module.exports = {
  getRoleByUserID, signin, getRoles, getPermissions, getUsers
}