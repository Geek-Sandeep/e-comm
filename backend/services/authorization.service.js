const AddRoleToUser = require("../action/addRoleToUser")
const AddPermissionToRole = require("../action/attachPermissionToRole")

module.exports = {
    name: "authorization",
    actions: {
        attachRoleToUser: {
            rest: "attachRoleToUser",
            async handler(ctx) {
                const { userID, roleKey } = ctx.options.parentCtx.params.req.body?.input

                return await AddRoleToUser({ roleKey, userID })
            }
        },
        attachPermissionToRole: {
            rest: "attachPermissionToRole",
            async handler(ctx) {
                const { permissionID, roleID } = ctx.options.parentCtx.params.req.body?.input

                return await AddPermissionToRole({ permissionID, roleID })
            }
        },
        detachRoleToUser: {
            rest: "detachRoleToUser",
            async handler(ctx) {
                const { userID, roleID } = ctx.options.parentCtx.params.req.body?.input

                return await AddRoleToUser({ roleID, userID })
            }
        }
    }
}