module.exports = `
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
}
`;