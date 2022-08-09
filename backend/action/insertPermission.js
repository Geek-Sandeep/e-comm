const execute = require('../operations/execute');
const { insertPermission } = require('../operations/mutations');

async function InsertPermission({ permissionName }) {
    const { data, errors } = await execute({
        variables: { permissionName },
        query: insertPermission
    });

    if (errors) {
        console.log("InsertPermission query failed!")
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
        console.log("InsertPermission query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = InsertPermission