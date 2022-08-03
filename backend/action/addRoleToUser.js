const execute = require('../operations/execute');
const INSERT_DEFAULT_ROLE = require('../operations/insertUserRole.mutation')

async function AddRoleToUser({ roleID, userID }) {
    const { data, errors } = await execute({
        variables: { roleID, userID },
        query: INSERT_DEFAULT_ROLE
    });

    if (errors) {
        console.log("AddRoleToUser query failed!")
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully added role!",
            data: null
        }
    } else {
        console.log("AddRoleToUser query failed!")
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = AddRoleToUser