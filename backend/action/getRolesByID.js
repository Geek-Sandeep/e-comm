const execute = require('../operations/execute');
const { getRoleByID } = require("../operations/queries");

async function GetRolesByID(id) {
    const { data, errors } = await execute({
        variables: {id},
        query: getRoleByID
    });

    if (errors) {
        console.log("getRolesByID query failed!")
        return {
            success: false,
            message: "query execution failed!",
            data: errors[0]
        }
    }

    if (data.data) {
        const roles = data.data?.user_roles
        return {
            success: true,
            message: "fetched roles successfully!",
            data: roles
        }
    } {
        console.log("getRolesByID query failed!")
        return {
            success: false,
            message: data.errors[0].message,
            data: null
        }
    }
}

module.exports = GetRolesByID