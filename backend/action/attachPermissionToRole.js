const execute = require('../operations/execute');
const { insertPermissionToRole } = require('../operations/mutations');

async function AddPermissionToRole({ permissionKey, roleKey }) {
    const { data, errors } = await execute({
        variables: { permissionKey, roleKey },
        query: insertPermissionToRole
    });

    if (errors) {
        console.log("AddPermissionToRole query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully added permission!",
        }
    } else {
        console.log("AddPermissionToRole query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = AddPermissionToRole