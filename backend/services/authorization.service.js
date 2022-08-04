const AddRoleToUser = require("../action/addRoleToUser")

module.exports = {
    name: "authorization",
    actions: {
        attachRoleToUser: {
            rest: "attachRoleToUser",
            async handler(ctx) {
                const { userID, roleID } = ctx.options.parentCtx.params.req.body?.input

                return await AddRoleToUser({ roleID, userID })
            }
        }
    }
}