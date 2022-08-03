module.exports = `
query ($email: String!) {
    users(where: {email: {_eq: $email}}) {
        id
        email
        password
    }
}`