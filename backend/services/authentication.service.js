const ENV = require("../utils/env");
const AddDefaultRole = require('../action/addDefaultRole')
const createToken = require('../action/createToken');
const execute = require('../operations/execute');
const SIGNIN_QUERY = require('../operations/signin.query')
const SIGNUP_QUERY = require('../operations/signup.mutation')

/* eslint-disable indent */
module.exports = {
    name: "authentication",
    actions: {
        signin: {
            rest: "signin",
            async handler(ctx) {
                const { email, password } = ctx.options.parentCtx.params.req.body?.input

                // execute the Hasura operation
                const { data, errors } = await execute({
                    variables: { email },
                    query: SIGNIN_QUERY
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
                const body = ctx.options.parentCtx.params.req.body?.input

                // execute the Hasura operation
                const { data, errors } = await execute({
                    variables: body,
                    query: SIGNUP_QUERY
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

                    let roleName
                    if (user.email === ENV.SUPER_ADMIN_EMAIL) {
                        roleName = "Super_Admin"
                    } else {
                        roleName = "User"
                    }

                    const res = await AddDefaultRole(user.id, roleName)

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

