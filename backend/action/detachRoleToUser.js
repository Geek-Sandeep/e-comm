const execute = require('../operations/execute');
const { deleteUserRole } = require('../operations/mutations');

async function DetachRoleToUser({ roleKey, userID }) {
    const { data, errors } = await execute({
        variables: { roleKey, userID },
        query: deleteUserRole
    });

    if (errors) {
        console.log("DetachRoleToUser query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        if (data.data.delete_user_roles.affected_rows === 1) {
            return {
            success: true,
            message: "Successfully detached role!",
        }
        } else {
            return {
                success: false,
                message: "Role is not attached with user!",
            }
        }
        
    } else {
        console.log("DetachRoleToUser query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DetachRoleToUser