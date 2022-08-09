const execute = require('../operations/execute');
const { insertUserRole } = require('../operations/mutations');

async function AddRoleToUser({ roleKey, userID }) {
    const { data, errors } = await execute({
        variables: { roleKey, userID },
        query: insertUserRole
    });

    if (errors) {
        console.log("AddRoleToUser query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully added role!",
        }
    } else {
        console.log("AddRoleToUser query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = AddRoleToUser