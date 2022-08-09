const execute = require('../operations/execute');
const { deletePermissionToRole } = require('../operations/mutations');

async function DetachPermissionToRole({ permissionKey, roleKey }) {
    const { data, errors } = await execute({
        variables: { permissionKey, roleKey },
        query: deletePermissionToRole
    });

    if (errors) {
        console.log("detachPermissionToRole query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        if (data.data.delete_roles_permissions.affected_rows === 1) {
            return {
                success: true,
                message: "Successfully detached permission!",
            }
        } else {
            return {
                success: false,
                message: "Permission is not attached with role!",
            }
        }
    } else {
        console.log("detachPermissionToRole query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = DetachPermissionToRole