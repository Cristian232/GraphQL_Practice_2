const {GraphQLObjectType, GraphQLInt, GraphQLString} = require("graphql");


exports.itHardType = new GraphQLObjectType({
    name: "itHardwareType",
    description: "It Hardware products from the top big tech",
    fields: ()=>({
        id: {type: GraphQLInt},
        company_name: {type: GraphQLString},
        product_name: {type: GraphQLString},
        industry: {type: GraphQLString},
        release_year: {type: GraphQLInt},
        category: {type: GraphQLString}
    })
})