const signup = `
mutation ($name: String!, $email: String!, $password: String!) {
  insert_users_one(object: {
    name: $name,
    email: $email,
    password: $password
  }) {
    id
    name
    email
  }
}`;

const insertUserRole = `
mutation ($roleKey: String!, $userID: uuid!) {
    insert_user_roles_one(object: { role_key: $roleKey, user_id: $userID }) {
        id
    }
}`;

const insertPermissionToRole = `
mutation ($permissionKey: String!, $roleKey: String!) {
  insert_roles_permissions_one(object: {permission_key: $permissionKey, role_key: $roleKey}) {
    id
  }
}`

module.exports = {
  signup, insertUserRole, insertPermissionToRole
}