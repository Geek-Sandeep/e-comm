const execute = require('../operations/execute');
const { deletePermission } = require('../operations/mutations');

async function DeletePermission({ permissionName }) {
    const { data, errors } = await execute({
        variables: { permissionName },
        query: deletePermission
    });

    if (errors) {
        console.log("DeletePermission query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        if (data.data.delete_permissions.affected_rows === 1) {
            return {
                success: true,
                message: "Successfully delete permission!",
            }
        } else {
            return {
                success: false,
                message: "Permission is not exist!",
            }
        }
    } else {
        console.log("DeletePermission query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DeletePermission