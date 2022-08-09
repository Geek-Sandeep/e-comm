import { Context } from "moleculer"

const { useGetProductByPkQuery } = require("../src/generated/graphql.tsx")

module.exports = {
    name: "product",
    action: {
        getProductByPK: {
            rest: "getproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.req.body?.input

                const { data, loading, error } = useGetProductByPkQuery(id)

                console.log(data, loading, error)
            }
         }
    }
}