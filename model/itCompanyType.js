const {GraphQLObjectType, GraphQLInt, GraphQLString} = require("graphql");


exports.itCompanyType = new GraphQLObjectType({
    name: "itCompanyType",
    description: "It Company Type from mock json",
    fields: ()=>({
        id: {type:GraphQLInt},
        company_name: {type:GraphQLString},
        software_name: {type:GraphQLString},
        industry: {type:GraphQLString},
        location: {type:GraphQLString},
        users: {type:GraphQLString},
        release_year: {type:GraphQLInt}
    })
})