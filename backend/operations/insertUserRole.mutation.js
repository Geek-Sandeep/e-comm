module.exports = `
mutation ($roleID: uuid!, $userID: uuid!) {
    insert_user_roles_one(object: { role_id: $roleID, user_id: $userID }) {
        id
    }
}
`;