const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const userData = require('./data/IT_Hardware_MOCK_DATA.json')
const app = express();
const schema = require('./schema/schema')

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

const data = require("./data/IT_Software_MOCK_DATA.json")


app.listen(5000, () => console.log("Server running"))