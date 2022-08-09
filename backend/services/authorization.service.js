const AddRoleToUser = require("../action/addRoleToUser")
const AddPermissionToRole = require("../action/attachPermissionToRole")
const DeletePermission = require("../action/deletePermission")
const DeleteRole = require("../action/deleteRole")
const DetachPermissionToRole = require("../action/detachPermissionToRole")
const DetachRoleToUser = require("../action/detachRoleToUser")
const GetPermissions = require("../action/getPermissions")
const GetRoles = require("../action/getRoles")
const InsertPermission = require("../action/insertPermission")
const InsertRole = require("../action/insertRole")

module.exports = {
    name: "authorization",
    actions: {
        attachRoleToUser: {
            rest: "attachRoleToUser",
            async handler(ctx) {
                const { userID, roleKey } = ctx.params.input

                return await AddRoleToUser({ roleKey, userID })
            }
        },
        detachRoleToUser: {
            rest: "detachRoleToUser",
            async handler(ctx) {
                const { userID, roleKey } = ctx.params.input

                return await DetachRoleToUser({ roleKey, userID })
            }
        },
        attachPermissionToRole: {
            rest: "attachPermissionToRole",
            async handler(ctx) {
                const { permissionKey, roleKey } = ctx.params.input

                return await AddPermissionToRole({ permissionKey, roleKey })
            }
        },
        detachPermissionToRole: {
            rest: "detachPermissionToRole",
            async handler(ctx) {
                const { permissionKey, roleKey } = ctx.params.input

                return await DetachPermissionToRole({ permissionKey, roleKey })
            }
        },
        insertRole: {
            rest: "insertRole",
            async handler(ctx) {
                const { roleName } = ctx.params.input

                return await InsertRole({ roleName })
            }
        },
        deleteRole: {
            rest: "deleteRole",
            async handler(ctx) {
                const { roleName } = ctx.params.input

                return await DeleteRole({ roleName })
            }
        },
        insertPermission: {
            rest: "insertPermission",
            async handler(ctx) {
                const { permissionName } = ctx.params.input

                return await InsertPermission({ permissionName })
            }
        },
        deletePermission: {
            rest: "deletePermission",
            async handler(ctx) {
                const { permissionName } = ctx.params.input

                return await DeletePermission({ permissionName })
            }
        },
        getRoles: {
            rest: "getRoles",
            async handler(ctx) {
                return await GetRoles()
            }
        },
        getPermissions: {
            rest: "getPermissions",
            async handler(ctx) {
                return await GetPermissions()
            }
        }
    }
}