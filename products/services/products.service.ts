import { Context } from "moleculer"

const { useGetProductByPkQuery } = require("../src/generated/graphql.ts")

module.exports = {
    name: "product",
    actions: {
        getProductByPK: {
            rest: "getproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.input

                console.log("hola hola")

                const { data, loading, error } = useGetProductByPkQuery(id)

                console.log(data, loading, error)
            }
         }
    }
}