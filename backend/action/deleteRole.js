const execute = require('../operations/execute');
const { deleteRole } = require('../operations/mutations');

async function DeleteRole({ roleName }) {
    const { data, errors } = await execute({
        variables: { roleName },
        query: deleteRole
    });

    if (errors) {
        console.log("DeleteRole query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        if (data.data.delete_roles.affected_rows === 1) {
            return {
                success: true,
                message: "Successfully delete role!",
            }
        } else {
            return {
                success: false,
                message: "role is not exist!",
            }
        }

    } else {
        console.log("DeleteRole query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DeleteRole