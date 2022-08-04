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
mutation ($roleID: uuid!, $userID: uuid!) {
    insert_user_roles_one(object: { role_id: $roleID, user_id: $userID }) {
        id
    }
}`;

const insertPermissionToRole = `
mutation ($permissionID: uuid!, $roleID: uuid!) {
  insert_role_permissions_one(object: {permission_id: $permissionID, role_id: $roleID}) {
    id
  }
}`

module.exports = {
  signup, insertUserRole, insertPermissionToRole
}