const execute = require('../operations/execute');
const { getRoles } = require('../operations/queries');

async function GetRoles() {
    const { data, errors } = await execute({
        variables: {},
        query: getRoles
    });

    if (errors) {
        console.log("GetRoles query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully fetched roles!",
            data: data.data.roles
        }
    } else {
        console.log("GetRoles query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetRoles