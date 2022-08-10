import { Context } from "moleculer"
import { gqlSdk } from "../generated-graphql/src/gql-sdk";



/* eslint-disable indent */
module.exports = {
    name: "product",
    actions: {
        getproductbypk: {
            rest: "getproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.input

                try {
                    const res = await gqlSdk.getProductByPk({
                        id: id,
                    });

                    return {
                        success: true,
                        message: "product fetched successfully",
                        data: res.ecom_products_by_pk
                    }

                } catch (error) {

                    return {
                        success: true,
                        message: error.response.errors[0].message,
                    }
                }
            }
        },
        insertproductone: {
            rest: "insertproductone",
            async handler(ctx: Context<any>) {
                const input = ctx.params.input

                try {
                    const res = await gqlSdk.insertProductOne({
                        input: input,
                    });

                    return {
                        success: true,
                        message: "product created successfully",
                        data: res.insert_ecom_products_one
                    }

                } catch (error) {
                    return {
                        success: true,
                        message: error.response.errors[0].message,
                    }
                }
            }
        },
        deleteproductbypk: {
            rest: "deleteproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.input


                try {
                    const res = await gqlSdk.deleteProductByPk({
                        id: id,
                    });

                    return {
                        success: true,
                        message: "product deleted successfully",
                        data: res.delete_ecom_products_by_pk
                    }

                } catch (error) {
                    return {
                        success: true,
                        message: error.response.errors[0].message,
                    }
                }
            }
        },
        updateproductbypk: {
            rest: "updateproductbypk",
            async handler(ctx: Context<any>) {
                const { product_id, name, description, img, price  } = ctx.params.input


                try {
                    const res = await gqlSdk.updateProductByPk({
                        id: product_id,
                        input: {name: name, description: description, image: img, price: price}
                    });

                    return {
                        success: true,
                        message: "product updated successfully",
                        data: res.update_ecom_products_by_pk
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