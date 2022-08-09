const execute = require('../operations/execute');
const { insertRole } = require('../operations/mutations');

async function InsertRole({ roleName }) {
    const { data, errors } = await execute({
        variables: { roleName },
        query: insertRole
    });

    if (errors) {
        console.log("InsertRole query failed!")
        return {
            success: false,
            message: "query execution failed!",
        }
    }

    if (data.data) {
        return {
            success: true,
            message: "Successfully added role!",
        }
    } else {
        console.log("InsertRole query failed!")
        return {
            success: false,
            message: data.errors[0].message,
        }
    }
}

module.exports = InsertRole