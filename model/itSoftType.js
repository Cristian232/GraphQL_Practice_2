const {GraphQLInt, GraphQLObjectType, GraphQLString} = require("graphql");

exports.itSoftType = new GraphQLObjectType({
    name: "itSoftwareType",
    description: "It Software products from the top big tech",
    fields: ()=>({
        id: {type: GraphQLInt},
        company_name: {type: GraphQLString},
        product_name: {type: GraphQLString},
        industry: {type: GraphQLString},
        release_year: {type: GraphQLInt}
    })
})

