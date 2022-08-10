import { Context } from "moleculer"


const { useGetProductByPkQuery } = require("../src/generated/graphql.ts")

/* eslint-disable indent */
module.exports = {
    name: "product",
    actions: {
        getproductbypk: {
            rest: "getproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.input

               
            }
         }
    }
};