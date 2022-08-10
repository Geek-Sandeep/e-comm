import { Context } from "moleculer"
import { gqlSdk } from "../generated-graphql/src/gql-sdk";



/* eslint-disable indent */
module.exports = {
    name: "products",
    actions: {
        getproducts: {
            rest: "getproducts",
            async handler(ctx: Context<any>) {
                const { limit, offset, order_by } = ctx.params.input

                try {
                    const res = await gqlSdk.getProducts({
                        limit: limit,
                        offset: offset,
                        order: order_by
                    });

                    return {
                        success: true,
                        message: "product fetched successfully",
                        data: res.ecom_products
                    }

                } catch (error) {

                    return {
                        success: true,
                        message: error.response.errors[0].message,
                    }
                }
            }
        }
    }
};