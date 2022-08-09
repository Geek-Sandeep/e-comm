const ENV = require("../utils/env");
const createToken = require('../action/createToken');
const execute = require('../operations/execute');
const { signin } = require("../operations/queries");
const { signup } = require("../operations/mutations");
const AddRoleToUser = require("../action/addRoleToUser");

/* eslint-disable indent */
module.exports = {
    name: "authentication",
    actions: {
        signin: {
            rest: "signin",
            async handler(ctx) {
                const { email, password } = ctx.params.input

                // execute the Hasura operation
                const { data, errors } = await execute({
                    variables: { email },
                    query: signin
                });

                if (errors) {
                    console.log("sign-in query failed!")
                    return {
                        success: false,
                        message: "query execution failed!",
                        data: errors[0]
                    }
                }

                if (data.data) {
                    let user = data.data.users[0]

                    if (!user) {
                        return {
                            success: false,
                            message: "User doesn't exist with this email!",
                            data: null
                        }
                    }

                    if (user.password === password) {
                        // genrate the token
                        const result = await createToken(user)

                        if (!result.success) {
                            return result
                        }

                        return {
                            success: true,
                            message: "user Sign In successful!",
                            data: result.data
                        }
                    } else {
                        return {
                            success: false,
                            message: "Password is not matched!",
                            data: null
                        }
                    }
                } else {
                    console.log("sign-in query failed!")
                    return {
                        success: false,
                        message: data.errors[0].message,
                        data: null
                    }
                }
            }
        },
        createuser: {
            rest: "/createuser",
            async handler(ctx) {
                // get params
                const body = ctx.params.input

                // execute the Hasura operation
                const { data, errors } = await execute({
                    variables: body,
                    query: signup
                });

                // if Hasura operation errors, then throw error
                if (errors) {
                    console.log("sign-up query failed!")
                    return {
                        success: false,
                        message: "query execution failed!",
                        data: errors[0]
                    }
                }

                if (data.data) {
                    const user = data.data.insert_users_one
                    const userID = user.id

                    let roleKey = "user"
                    if (user.email === ENV.SUPER_ADMIN_EMAIL) {
                        roleKey = "super_admin"
                    }

                    const res = await AddRoleToUser({ roleKey, userID })

                    if (!res.success) {
                        return res
                    }

                    return await createToken(user)
                } else {
                    return {
                        success: false,
                        message: data.errors[0].message,
                        data: null
                    }
                }
            }
        }
    }
};
