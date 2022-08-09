const execute = require('../operations/execute');
const { getPermissions } = require('../operations/queries');

async function GetPermissions() {
    const { data, errors } = await execute({
        variables: {},
        query: getPermissions
    });

    if (errors) {
        console.log("GetPermissions query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully fetched permissions!",
            data: data.data.permissions
        }
    } else {
        console.log("GetPermissions query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetPermissions