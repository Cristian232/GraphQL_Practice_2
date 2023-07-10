const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} = require("graphql");
const {itSoftType} = require("../model/itSoftType")
const softData = require('../data/IT_Software_MOCK_DATA.json')
const hardData = require('../data/IT_Hardware_MOCK_DATA.json')
const ceoData = require('../data/IT_Ceo_MOCK_DATA.json')
const compData = require('../data/IT_Company_MOCK_DATA.json')
const {itCompanyType} = require("../model/itCompanyType");
const {itCeoType} = require("../model/itCeoType");
const {itHardType} = require("../model/itHardType");




const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    description: "Root Query of our GraphQL",
    fields:()=> ({
        software: {
            description: "List all software products we have in our data",
            type: new GraphQLList(itSoftType),
            resolve: () => softData
        },
        company: {
            description: "List all companies that we have in our data",
            type: new GraphQLList(itCompanyType),
            resolve: () => compData
        },
        ceo: {
            description: "List all ceo's in companies in our data",
            type: new GraphQLList(itCeoType),
            resolve: () => ceoData
        },
        hardware: {
            description: "List all hardware products we have in our data",
            type: new GraphQLList(itHardType),
            resolve: () => hardData
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        name: {type: GraphQLString}
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})

