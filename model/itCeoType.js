const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql");
const {itCompanyType} = require("./itCompanyType");
const compData = require('../data/IT_Company_MOCK_DATA.json')
const softData = require('../data/IT_Software_MOCK_DATA.json')
const {itSoftType} = require("./itSoftType");


exports.itCeoType = new GraphQLObjectType({
    name: "itCeoType",
    description: "It Ceo from top tech companies in our list",
    fields: () => ({
        id: {type: GraphQLInt},
        company_name: {type: GraphQLString},
        ceo_name: {type: GraphQLString},
        industry: {type: GraphQLString},
        headquarters: {type: GraphQLString},
        ceoExtractFromCompany: {
            description: "Spread from ceo to other types",
            type: new GraphQLList(itCompanyType),
            resolve: (ceo) => {
               return compData.filter(comp => ceo.company_name === comp.company_name)
            }
        },
        ceoExtractFromSoftware: {
            description: "Spread from ceo to other types",
            type: new GraphQLList(itSoftType),
            resolve: (ceo) => {
                return softData.filter(soft => ceo.company_name === soft.company_name)
            }
        }


    })

})