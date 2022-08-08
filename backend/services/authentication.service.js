const ENV = require("../utils/env");
const AddDefaultRole = require('../action/addDefaultRole')
const createToken = require('../action/createToken');
const execute = require('../operations/execute');
const { signin } = require("../operations/queries");
const { signup } = require("../operations/mutations");

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

                    if (user.password === password) {
                        // genrate the token
                        const result = await createToken(user)

                        if (!result.success) {
                            return result
                        }

                        return {
                            success: true,
                            message: "user Sign In successful!",
                            data: {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                token: result.data.token
                            }
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

                    let roleName = "user"
                    if (user.email === ENV.SUPER_ADMIN_EMAIL) {
                        roleName = "super_admin"
                    }

                    const res = await AddDefaultRole(user.id, roleName)

                    if (!res.success) {
                        return res
                    }

                    const result =  await createToken(user)

                    if (!result.success) {
                        return res
                    }

                    return {
                        success: true,
                        message: "user Sign up successful!",
                        data: {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            token: result.data.token
                        }
                    }
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
