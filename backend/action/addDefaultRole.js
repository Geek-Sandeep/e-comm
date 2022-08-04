const execute = require('../operations/execute');
const AddRoleToUser = require('./addRoleToUser');
const { getRoleIDByKey } = require('../operations/queries');

async function AddDefaultRole(userID, roleName) {
    // execute the Hasura operation
    const { data, errors } = await execute({
        variables: {role: roleName},
        query: getRoleIDByKey
    });

    // if Hasura operation errors, then throw error
    if (errors) {
        console.log("addDefaultRole query failed!")
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        const roleID = data.data.roles[0].id

        return await AddRoleToUser({ roleID, userID })
    } else {
        console.log("addDefaultRole query failed!")
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = AddDefaultRole