const execute = require('../operations/execute');
const { getUsers } = require('../operations/queries');

async function GetUsers() {
    const { data, errors } = await execute({
        variables: {},
        query: getUsers
    });

    if (errors) {
        console.log("GetUsers query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully fetched users!",
            data: data.data.users
        }
    } else {
        console.log("GetUsers query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = GetUsers