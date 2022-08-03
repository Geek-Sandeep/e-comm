const jwt = require("jsonwebtoken");
const ENV = require("../utils/env");
const GetRolesByID = require("./getRolesByID");

async function createToken({ id, name }) {
    let roleArr = []

    const res = await GetRolesByID(id)

    if (!res.success) {
        return res
    }

    for (let i = 0; i < res.data.length; i++) {
        const name = res.data[i].role.key
        roleArr.push(name)
    }

    const tokenContents = {
        sub: id.toString(),
        name: name,
        iat: Date.now() / 1000,
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": roleArr,
            "x-hasura-default-role": roleArr[0],
            "x-hasura-role": roleArr[0],
            "x-hasura-user-id": id.toString(),
        },
    }

    const token = jwt.sign(tokenContents, ENV.HASURA_GRAPHQL_JWT_SECRET.key, {
        ...ENV.JWT_CONFIG,
        expiresIn: `5m`,
    });

    return {
        success: true,
        message: "token created successfully!",
        data: {
            token: "Bearer " + token
        }
    }
}

module.exports = createToken